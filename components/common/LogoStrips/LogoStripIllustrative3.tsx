'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

import { Client } from '../ClientLogoStrip';

type LogoStripIllustrative3Props = {
  clients: readonly Client[];
};

export function LogoStripIllustrative3({ clients }: LogoStripIllustrative3Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const variantClients = [...clients, ...clients, ...clients]; // More items for smoother scrolling
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const isAtStart = scrollLeft < 10;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
    
    setShowLeftArrow(!isAtStart);
    setShowRightArrow(!isAtEnd);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    // Update arrow visibility after scroll completes
    setTimeout(checkScrollPosition, 300);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            Featured Clients
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the innovative companies we're proud to collaborate with
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 ${
              !showLeftArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="relative w-full overflow-x-auto py-4 no-scrollbar"
            onScroll={checkScrollPosition}
          >
            <div 
              ref={scrollContentRef}
              className="flex items-center gap-8 w-max px-4"
            >
              {variantClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 px-8 py-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative group"
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  } as any}
                >
                  <div className="relative w-40 h-20 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-800 whitespace-nowrap">
                      {client.name}
                    </span>
                  </div>
                  {client.hasVideo && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                      <Play className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Arrow */}
          <motion.button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 ${
              !showRightArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
