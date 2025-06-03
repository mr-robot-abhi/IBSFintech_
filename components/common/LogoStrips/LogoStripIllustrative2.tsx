'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Client } from '../ClientLogoStrip';

type LogoStripIllustrative2Props = {
  clients: readonly Client[];
};

export function LogoStripIllustrative2({ clients }: LogoStripIllustrative2Props) {
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
      scrollPosition = (scrollPosition + 0.4) % (firstRow.offsetWidth / 2);
      const speed = 0.5 + Math.sin(scrollPosition * 0.02) * 0.3;
      scrollContainer.scrollLeft = scrollPosition * speed;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="py-10 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium mb-2 text-indigo-600">
            OUR VALUED PARTNERS
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>
        
        <div 
          ref={scrollRef}
          className="relative w-full overflow-hidden h-24"
        >
          <div 
            ref={firstRowRef}
            className="flex items-center absolute top-0 left-0 h-full will-change-transform gap-4"
          >
            {variantClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="inline-flex items-center justify-center px-6 py-2 mx-2 rounded-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:scale-105 min-w-[140px] h-16 relative overflow-hidden"
              >
                <span className="font-medium text-indigo-700">
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
