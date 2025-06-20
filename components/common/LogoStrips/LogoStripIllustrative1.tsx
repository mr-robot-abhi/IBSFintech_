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
      className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50"
    >
      {/* Decorative background elements with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: y1 }}
        >
          <Image
            src="/images/background-pattern.png"
            alt=""
            fill
            className="object-cover mix-blend-multiply"
            priority
          />
        </motion.div>
      </div>

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
                }}
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                } as React.CSSProperties}
              >
                <div className="relative w-40 h-16 flex items-center justify-center">
                  <Image
                    src={`/clients/${client.logo}`}
                    alt={client.name}
                    fill
                    className="object-contain max-h-16 w-full transition-transform duration-300 hover:scale-105"
                    style={{ background: 'white' }}
                  />
                </div>
                {client.hasVideo && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-20 left-1/4 w-48 h-48 rounded-full bg-blue-300/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse' as const,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
