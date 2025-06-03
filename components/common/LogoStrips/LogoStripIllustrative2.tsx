'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

import { Client } from '../ClientLogoStrip';

type LogoStripIllustrative2Props = {
  clients: readonly Client[];
};

export function LogoStripIllustrative2({ clients }: LogoStripIllustrative2Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const variantClients = [...clients, ...clients];
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Smooth right-to-left animation (slightly faster than Illustrative1)
  useEffect(() => {
    const firstRow = firstRowRef.current;
    if (!firstRow) return;

    const duration = 30; // seconds for one full cycle (faster than Illustrative1)
    const endPosition = firstRow.scrollWidth / 2;

    const animate = () => {
      controls.start({
        x: [0, -endPosition],
        transition: {
          x: {
            repeat: Infinity,
            duration: duration,
            ease: 'linear',
          },
        },
      });
    };

    if (!isHovered) {
      animate();
    } else {
      controls.stop();
    }

    return () => controls.stop();
  }, [isHovered, controls]);

  // Manual scroll handlers
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-900">
            Our Valued Partners
          </h3>
          <p className="text-indigo-700 max-w-2xl mx-auto">
            Trusted by leading companies across various industries
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="relative w-full overflow-hidden py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              ref={firstRowRef}
              className="flex items-center gap-8 w-max"
              animate={controls}
            >
              {variantClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 px-8 py-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative group"
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  } as any}
                >
                  <div className="relative w-40 h-16 flex items-center justify-center">
                    <span className="text-lg font-medium text-indigo-900 whitespace-nowrap">
                      {client.name}
                    </span>
                  </div>
                  {client.hasVideo && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-md">
                      <Play className="w-3 h-3 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
