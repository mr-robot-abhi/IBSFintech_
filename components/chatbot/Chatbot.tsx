'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User as UserIcon, ExternalLink, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatResponse {
  response: string;
  context?: {
    isCompanyRelated: boolean;
    currentPage?: string;
    suggestedActions: string[];
  };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestedActions, setShowSuggestedActions] = useState(false);
  const [suggestedActions, setSuggestedActions] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m your IBSFINtech AI assistant. I can help you with information about our treasury management solutions, products, and services. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.chat-container') && !target.closest('.chat-toggle')) {
        setIsOpen(false);
      }
    };

    // Add timeout to prevent immediate close when opening
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Auto-close when not hovering
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && !isHovering) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Close after 3 seconds of not hovering
    }
    return () => clearTimeout(timer);
  }, [isHovering, isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input.trim();
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: userInput,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestedActions(false);

    try {
      // Call our Netlify Function
      const response = await fetch('/.netlify/functions/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput,
          conversation: messages,
          currentPage: pathname,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ChatResponse = await response.json();

      // Add bot response
      const botMessage: Message = {
        id: Date.now() + 1,
        text: result.response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      
      // Handle suggested actions
      if (result.context?.suggestedActions && result.context.suggestedActions.length > 0) {
        setSuggestedActions(result.context.suggestedActions);
        setShowSuggestedActions(true);
      }

    } catch (error) {
      console.error('Chatbot error:', error);
      
      // Add error message with helpful fallback
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'I apologize, but I\'m having trouble connecting right now. You can still reach us at info@ibsfintech.com or call us for immediate assistance.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsHovering(false);
    }
  };

  const handleSuggestedAction = (action: string) => {
    setShowSuggestedActions(false);
    
    switch (action) {
      case 'Request Demo':
        window.open('/request-demo', '_blank');
        break;
      case 'Contact Us':
        window.open('/contact', '_blank');
        break;
      case 'View Products':
        window.open('/all_products', '_blank');
        break;
      case 'Read Blog':
        window.open('/resources/blog', '_blank');
        break;
      default:
        // For custom actions, send as message
        setInput(action);
        break;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div 
          className="chat-container bg-white rounded-xl shadow-2xl overflow-hidden w-80 sm:w-96 flex flex-col h-[500px] sm:h-[600px] transition-all duration-300 transform origin-bottom-right animate-in slide-in-from-bottom-4 fade-in"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1.5 rounded-full">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">IBS Assistant</h3>
                <p className="text-xs opacity-80">How can I help you today?</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
              >
                {isMinimized ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 14 10 14 10 20"></polyline>
                    <polyline points="20 10 14 10 14 4"></polyline>
                    <line x1="14" y1="10" x2="21" y2="3"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 14 10 14 10 20"></polyline>
                    <polyline points="20 10 14 10 14 4"></polyline>
                    <line x1="14" y1="10" x2="21" y2="3"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div 
            className={`flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 transition-all duration-300 ${
              isMinimized ? 'opacity-0 h-0 p-0 overflow-hidden' : 'opacity-100'
            }`}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-xs text-gray-500 ml-2">IBSFINtech AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Suggested Actions */}
            {showSuggestedActions && suggestedActions.length > 0 && (
              <div className="flex justify-start">
                <div className="bg-blue-50 border border-blue-200 rounded-lg rounded-bl-none p-3 max-w-[90%]">
                  <p className="text-xs text-blue-700 mb-2 font-medium">Quick Actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedAction(action)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-700 transition-colors flex items-center gap-1"
                      >
                        {action}
                        {(action === 'Request Demo' || action === 'Contact Us' || action === 'View Products' || action === 'Read Blog') && (
                          <ExternalLink className="w-3 h-3" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form 
            onSubmit={handleSendMessage} 
            className={`border-t border-gray-200 p-4 bg-white transition-all duration-300 ${
              isMinimized ? 'opacity-0 h-0 p-0 overflow-hidden' : 'opacity-100'
            }`}
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={toggleChat}
            className="chat-toggle bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-110 flex items-center justify-center group animate-pulse hover:animate-none"
            aria-label="Open IBSFINtech AI Assistant"
            onMouseEnter={() => setIsHovering(true)}
          >
            <MessageSquare className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          </button>
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
          
          {/* Hover tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat with IBSFINtech AI
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      )}
    </div>
  );
}
