'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play } from 'lucide-react';

import { Client } from '../ClientLogoStrip';

type LogoStripDataDrivenProps = {
  clients: readonly Client[];
};

export function LogoStripDataDriven({ clients }: LogoStripDataDrivenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const variantClients = [...clients, ...clients];
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Subtle auto-scroll animation
  useEffect(() => {
    const firstRow = firstRowRef.current;
    if (!firstRow) return;

    const duration = 50; // Very slow scroll speed
    const endPosition = firstRow.scrollWidth / 4; // Only scroll a quarter of the way

    const animate = () => {
      controls.start({
        x: [0, -endPosition],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'reverse' as const,
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

  return (
    <div 
      ref={containerRef}
      className="py-12 bg-white/90 backdrop-blur-sm border-t border-b border-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-500 text-sm">
            Join thousands of businesses that trust our solutions
          </p>
        </motion.div>
        
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
                className="flex-shrink-0 px-8 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] relative group border border-gray-100"
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)'
                } as any}
              >
                <div className="relative w-32 h-12 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
                {client.hasVideo && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <Play className="w-2 h-2 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Subtle gradient fades */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
}
