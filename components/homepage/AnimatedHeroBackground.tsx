'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/bg_3.jpg', alt: 'Dynamic Financial Solutions' },
  { src: '/bg_4.jpg', alt: 'Global Connectivity' },
  { src: '/bg_7.jpg', alt: 'AI-Driven Insights' },
];

const imageAnimation = {
  initial: { scale: 1.1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { duration: 7, ease: "linear" },
      opacity: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  }
};

export default function AnimatedHeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Image visible for 5s before transitioning

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="fixed inset-0 z-[-2] bg-black">
      <AnimatePresence initial={true}>
        <motion.div
          key={index}
          className="absolute inset-0"
          variants={imageAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
    </div>
  );
}
