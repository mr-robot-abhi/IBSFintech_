'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

import { Client } from '../ClientLogoStrip';

type LogoStripIllustrative1Props = {
  clients: readonly Client[];
};

export function LogoStripIllustrative1({ clients }: LogoStripIllustrative1Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const variantClients = [...clients, ...clients];
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Smooth left-to-right animation
  useEffect(() => {
    const firstRow = firstRowRef.current;
    if (!firstRow) return;

    const duration = 40; // seconds for one full cycle
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

  // Parallax effect for the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.9, 0.9, 0.7]);

  return (
    <div 
      ref={containerRef}
      className="relative py-8 overflow-hidden w-full"
    >
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-blue-900">Trusted by Industry Leaders</h3>
          <p className="text-blue-700 max-w-2xl mx-auto">Join thousands of businesses that trust our solutions to power their success</p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="relative w-full overflow-hidden py-2"
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
                className="flex-shrink-0 flex items-center justify-center h-16 w-40"
                whileHover={{ y: -5 }}
              >
                <Image
                  src={`/clients/${client.logo}`}
                  alt={client.name}
                  fill
                  className="object-contain max-h-16 w-full transition-transform duration-300 hover:scale-105"
                />
                {client.hasVideo && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
