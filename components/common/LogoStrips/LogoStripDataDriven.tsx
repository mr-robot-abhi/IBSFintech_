'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Client } from '../ClientLogoStrip';

type LogoStripDataDrivenProps = {
  clients: readonly Client[];
};

export function LogoStripDataDriven({ clients }: LogoStripDataDrivenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const variantClients = [...clients, ...clients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const firstRow = firstRowRef.current;
    if (!scrollContainer || !firstRow) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition = (scrollPosition + 0.6) % (firstRow.offsetWidth / 2);
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="py-8 bg-white/80 backdrop-blur-sm border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base font-medium mb-2 text-gray-600">
            TRUSTED BY INDUSTRY LEADERS
          </h3>
        </motion.div>
        
        <div 
          ref={scrollRef}
          className="relative w-full overflow-hidden h-20"
        >
          <div 
            ref={firstRowRef}
            className="flex items-center absolute top-0 left-0 h-full will-change-transform gap-6"
          >
            {variantClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="inline-flex items-center justify-center px-4 py-2 mx-1 rounded-md transition-all duration-300 bg-white/90 backdrop-blur-sm hover:shadow-sm min-w-[100px] h-14 relative overflow-hidden border border-gray-100"
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                } as any}
              >
                <span className="font-medium text-gray-800 text-sm">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
