'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { Client } from '../ClientLogoStrip';

type LogoStripIllustrative1Props = {
  clients: readonly Client[];
};

export function LogoStripIllustrative1({ clients }: LogoStripIllustrative1Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const variantClients = [...clients, ...clients];
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect for the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.8, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Auto-scroll effect for the client logos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const firstRow = firstRowRef.current;
    if (!scrollContainer || !firstRow) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition = (scrollPosition + 0.5) % (firstRow.offsetWidth / 2);
      scrollContainer.scrollLeft = Math.sin(scrollPosition * 0.1) * 20 + scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Track scroll position for additional effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate rotation based on scroll
  const rotate = scrollY * 0.02;
  const rotate2 = -scrollY * 0.01;

  return (
    <div 
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50"
    >
      {/* Decorative background elements with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ 
            y: y1, 
            scale
          }}
        >
          <Image
            src="/images/background-pattern.png"
            alt="Background pattern"
            fill
            className="object-cover mix-blend-multiply"
            priority
          />
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-cyan-200 opacity-30 blur-3xl"
        style={{ y: y1, rotate }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-xl font-medium mb-3 text-blue-700"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <motion.div 
          ref={scrollRef}
          className="relative w-full overflow-hidden h-32 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div 
            ref={firstRowRef}
            className="flex items-center absolute top-0 left-0 h-full will-change-transform gap-8 px-4"
          >
            {variantClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-500 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-1.5 h-20 min-w-[180px] relative overflow-hidden group hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 text-lg">
                  {client.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {client.hasVideo && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
