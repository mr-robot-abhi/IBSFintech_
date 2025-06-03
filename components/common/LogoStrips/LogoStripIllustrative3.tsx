'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

import { Client } from '../ClientLogoStrip';

type LogoStripIllustrative3Props = {
  clients: readonly Client[];
};

export function LogoStripIllustrative3({ clients }: LogoStripIllustrative3Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const variantClients = [...clients, ...clients];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const firstRow = firstRowRef.current;
    if (!scrollContainer || !firstRow) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition = (scrollPosition + 0.3) % (firstRow.offsetWidth / 2);
      scrollContainer.scrollLeft = scrollPosition + (scrollY * 0.2);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [scrollY]);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium mb-2 text-gray-700">
            FEATURED CLIENTS
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto rounded-full" />
        </motion.div>
        
        <div 
          ref={scrollRef}
          className="relative w-full overflow-hidden h-32"
        >
          <div 
            ref={firstRowRef}
            className="flex items-center absolute top-0 left-0 h-full will-change-transform gap-8"
          >
            {variantClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="inline-flex items-center justify-center px-8 py-3 mx-2 rounded-xl transition-all duration-500 bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 min-w-[160px] h-20 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  rotate: Math.random() > 0.5 ? 2 : -2,
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="font-medium text-gray-800">
                    {client.name}
                  </span>
                  {client.hasVideo && (
                    <motion.span 
                      className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Play className="w-3 h-3 text-blue-600" />
                    </motion.span>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
