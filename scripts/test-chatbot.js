#!/usr/bin/env node

// Simple script to test the chatbot API
// Usage: node scripts/test-chatbot.js

const API_URL = 'http://localhost:3000/api/chatbot';

const testMessages = [
  {
    message: "Hello! What is IBSFINtech?",
    currentPage: "/",
    description: "General company inquiry"
  },
  {
    message: "Tell me about InnoTreasury",
    currentPage: "/products/sme/innotreasury",
    description: "Product-specific query with page context"
  },
  {
    message: "What are your currency risk management solutions?",
    currentPage: "/products/enterprise/currency-fx-risk",
    description: "Enterprise product query"
  },
  {
    message: "I need help with cash flow management",
    currentPage: "/solutions/cash-visibility-forecasting",
    description: "Solution-focused query"
  },
  {
    message: "How can I request a demo?",
    currentPage: "/request-demo",
    description: "Demo request"
  }
];

async function testChatbot() {
  console.log('🤖 Testing IBSFINtech Chatbot API\n');
  
  for (let i = 0; i < testMessages.length; i++) {
    const test = testMessages[i];
    console.log(`Test ${i + 1}: ${test.description}`);
    console.log(`Message: "${test.message}"`);
    console.log(`Page: ${test.currentPage}`);
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: test.message,
          conversation: [],
          currentPage: test.currentPage
        })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        console.log(`✅ Response: "${result.response}"`);
        if (result.context?.suggestedActions?.length > 0) {
          console.log(`💡 Suggested Actions: ${result.context.suggestedActions.join(', ')}`);
        }
      } else {
        console.log(`❌ Error: ${result.error || result.response}`);
      }
      
    } catch (error) {
      console.log(`❌ Network Error: ${error.message}`);
    }
    
    console.log('─'.repeat(80));
    
    // Add delay between requests to avoid rate limiting
    if (i < testMessages.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log('\n🎉 Chatbot testing complete!');
}

// Run the test
testChatbot().catch(console.error);
