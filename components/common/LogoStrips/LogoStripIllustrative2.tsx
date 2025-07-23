'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

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

  // Smooth right-to-left animation with optimized speed for more logos
  useEffect(() => {
    const firstRow = firstRowRef.current;
    if (!firstRow) return;

    // Calculate duration based on number of logos for consistent speed
    const baseDuration = 60; // Base duration for a full cycle
    const duration = Math.max(30, Math.min(120, baseDuration * (clients.length / 16))); // Adjust speed based on number of logos
    
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
  }, [isHovered, controls, clients.length]);

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
    <div className="w-full overflow-hidden py-8">
      <div className="w-full px-0">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-indigo-900">
            Our Valued Partners
          </h3>
          <p className="text-indigo-700 max-w-2xl mx-auto px-4">
            Trusted by leading companies across various industries
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div 
            ref={scrollRef}
            className="relative w-full overflow-hidden py-2 px-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              ref={firstRowRef}
              className="flex items-center w-max"
              animate={controls}
            >
              {variantClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-32 mx-4"
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src={`/clients/${client.logo}`}
                    alt={client.name}
                    width={120}
                    height={56}
                    className="object-contain max-h-12 w-auto mx-auto"
                    style={{ maxWidth: '100%' }}
                    priority={index < 8}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
