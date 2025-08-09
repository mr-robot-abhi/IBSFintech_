import { NextRequest, NextResponse } from 'next/server';
import { getCompanyKnowledge, generateEnhancedContext, COMPANY_INFO } from '@/lib/chatbot-service';
import { checkRateLimit } from '@/lib/rate-limiter';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatRequest {
  message: string;
  conversation: ChatMessage[];
  currentPage?: string;
}

// Cache for company knowledge to avoid repeated API calls
let companyKnowledgeCache: any = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

// Function to get cached or fresh company knowledge
async function getCachedCompanyKnowledge() {
  const now = Date.now();
  
  if (!companyKnowledgeCache || (now - cacheTimestamp) > CACHE_DURATION) {
    companyKnowledgeCache = await getCompanyKnowledge();
    cacheTimestamp = now;
  }
  
  return companyKnowledgeCache;
}

// Function to check if query is company-related
function isCompanyRelatedQuery(message: string): boolean {
  const companyKeywords = [
    'ibs', 'ibsfintech', 'treasury', 'cash management', 'liquidity', 'currency', 'fx', 'forex',
    'risk management', 'commodity', 'trade finance', 'supply chain', 'investment', 'money market',
    'debt', 'borrowings', 'payments', 'innotreasury', 'innoinvest', 'demo', 'contact',
    'products', 'services', 'solutions', 'enterprise', 'sme', 'company', 'about'
  ];
  
  return companyKeywords.some(keyword => 
    message.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Function to generate context-aware prompts based on current page
function getPageContextPrompt(currentPage?: string): string {
  if (!currentPage) return '';
  
  const pagePrompts: Record<string, string> = {
    '/products/enterprise/cashflow-liquidity': 'The user is viewing our Cash Flow & Liquidity Management solution. Offer to provide more details or suggest contacting us for a demo.',
    '/products/enterprise/currency-fx-risk': 'The user is viewing our Currency & FX Risk Management solution. Ask if they need help with forex hedging strategies.',
    '/products/sme/innotreasury': 'The user is viewing InnoTreasury for SMEs. Highlight how it can help small businesses manage treasury operations.',
    '/contact': 'The user is on the contact page. Offer to help them fill out the form or answer pre-sales questions.',
    '/request-demo': 'The user is on the demo request page. Encourage them to request a demo and answer any questions about our solutions.',
    '/resources/blog': 'The user is browsing our blog. Offer to discuss any treasury management topics or recent insights.',
    '/company/about-us': 'The user is learning about our company. Share key information about IBSFINtech and our mission.',
  };
  
  return pagePrompts[currentPage] || '';
}

// Enhanced prompt generation with dynamic company context
async function generateEnhancedPrompt(message: string, conversation: ChatMessage[], currentPage?: string): Promise<string> {
  const isCompanyQuery = isCompanyRelatedQuery(message);
  const pageContext = getPageContextPrompt(currentPage);
  
  let systemPrompt = `You are a helpful AI assistant for ${COMPANY_INFO.name}, a ${COMPANY_INFO.description}. `;
  
  if (isCompanyQuery) {
    // Get dynamic company knowledge
    const companyKnowledge = await getCachedCompanyKnowledge();
    const enhancedContext = generateEnhancedContext(message, companyKnowledge, currentPage);
    
    systemPrompt += `Here's relevant information about the company and our solutions:\n${enhancedContext}\n\n`;
    
    if (pageContext) {
      systemPrompt += `Page context: ${pageContext}\n\n`;
    }
    
    systemPrompt += `Please provide helpful, accurate information about IBSFINtech's products and services. If you don't know something specific, suggest they contact us or request a demo. Keep responses concise but informative. If relevant content is available, reference specific products, services, or case studies.\n\n`;
  } else {
    systemPrompt += `You can help with general questions, but if the conversation turns to treasury management, finance, or business solutions, feel free to mention how IBSFINtech might be able to help.\n\n`;
  }
  
  // Add conversation context
  if (conversation.length > 0) {
    systemPrompt += `Previous conversation:\n`;
    conversation.slice(-4).forEach(msg => {
      systemPrompt += `${msg.sender}: ${msg.text}\n`;
    });
    systemPrompt += `\n`;
  }
  
  systemPrompt += `Human: ${message}\nAssistant:`;
  
  return systemPrompt;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'anonymous';
    
    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIP);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          response: rateLimitCheck.message || 'Rate limit exceeded',
          error: 'RATE_LIMITED'
        },
        { status: 429 }
      );
    }

    const { message, conversation, currentPage }: ChatRequest = await request.json();
    
    if (!message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Message too long. Please keep messages under 500 characters.' },
        { status: 400 }
      );
    }

    const HF_TOKEN = process.env.HUGGINGFACE_API_TOKEN;
    
    if (!HF_TOKEN) {
      console.error('Hugging Face API token not configured');
      return NextResponse.json(
        { error: 'Chatbot service temporarily unavailable' },
        { status: 503 }
      );
    }

    // Generate enhanced prompt with dynamic company context
    const enhancedPrompt = await generateEnhancedPrompt(message, conversation || [], currentPage);
    
    // Try primary model first (DialoGPT)
    let response: Response;
    let result: any;
    
    try {
      response = await fetch(
        'https://api-inference.huggingface.co/models/microsoft/DialoGPT-large',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HF_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: enhancedPrompt,
            parameters: {
              max_new_tokens: 150,
              temperature: 0.7,
              do_sample: true,
              pad_token_id: 50256,
            },
            options: {
              wait_for_model: true,
              use_cache: false,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`DialoGPT failed: ${response.status}`);
      }

      result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

    } catch (primaryError) {
      console.log('Primary model failed, trying fallback:', primaryError);
      
      // Fallback to BlenderBot
      try {
        response = await fetch(
          'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${HF_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              inputs: {
                past_user_inputs: conversation
                  ?.filter(msg => msg.sender === 'user')
                  ?.slice(-3)
                  ?.map(msg => msg.text) || [],
                generated_responses: conversation
                  ?.filter(msg => msg.sender === 'bot')
                  ?.slice(-3)
                  ?.map(msg => msg.text) || [],
                text: enhancedPrompt,
              },
              options: {
                wait_for_model: true,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Fallback model failed: ${response.status}`);
        }

        result = await response.json();
        
      } catch (fallbackError) {
        console.error('Both models failed:', {
          primary: primaryError,
          fallback: fallbackError,
          timestamp: new Date().toISOString()
        });
        
        return NextResponse.json({
          response: "I'm having trouble connecting to our AI service right now. Please try again in a moment, or feel free to contact us directly at info@ibsfintech.com for immediate assistance with your treasury management needs."
        });
      }
    }

    // Extract and clean response
    let botResponse: string;
    
    if (Array.isArray(result) && result[0]?.generated_text) {
      // DialoGPT response format
      botResponse = result[0].generated_text.replace(enhancedPrompt, '').trim();
    } else if (result.generated_text) {
      // BlenderBot response format
      botResponse = result.generated_text;
    } else {
      throw new Error('Unexpected response format');
    }

    // Clean up the response
    botResponse = botResponse
      .replace(/^(Assistant:|Human:|Bot:)/i, '')
      .trim();

    // Ensure response is not empty
    if (!botResponse) {
      botResponse = "I'm here to help! Could you please rephrase your question?";
    }

    // Add smart prompts based on context
    if (isCompanyRelatedQuery(message) && !botResponse.includes('demo') && !botResponse.includes('contact')) {
      if (Math.random() > 0.7) { // 30% chance to add CTA
        botResponse += "\n\nWould you like to request a demo or learn more about our solutions?";
      }
    }

    // Log successful interaction (without sensitive data)
    console.log('Chatbot interaction:', {
      timestamp: new Date().toISOString(),
      messageLength: message.length,
      responseLength: botResponse.length,
      isCompanyRelated: isCompanyRelatedQuery(message),
      currentPage,
      clientIP: clientIP === 'anonymous' ? 'anonymous' : 'logged'
    });

    return NextResponse.json({
      response: botResponse,
      context: {
        isCompanyRelated: isCompanyRelatedQuery(message),
        currentPage,
        suggestedActions: getSuggestedActions(message, currentPage),
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    // Enhanced error logging
    const errorDetails = {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      clientIP: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent'),
    };
    
    console.error('Chatbot API error:', errorDetails);
    
    // Different error responses based on environment
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return NextResponse.json(
      { 
        response: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact our support team at info@ibsfintech.com for immediate assistance.",
        error: isDevelopment ? errorDetails : 'INTERNAL_SERVER_ERROR',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// Helper function to suggest actions based on context
function getSuggestedActions(message: string, currentPage?: string): string[] {
  const actions: string[] = [];
  
  if (isCompanyRelatedQuery(message)) {
    actions.push('Request Demo');
    actions.push('Contact Us');
    
    if (currentPage && !currentPage.includes('products')) {
      actions.push('View Products');
    }
    
    if (currentPage && !currentPage.includes('resources')) {
      actions.push('Read Blog');
    }
  }
  
  return actions;
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    models: ['microsoft/DialoGPT-large', 'facebook/blenderbot-400M-distill']
  });
}
