"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  { src: "/bg_2.jpg", alt: "Modern Treasury Platform" },
  { src: "/bg_4.jpg", alt: "Global Connectivity" },
  { src: "/bg_7.jpg", alt: "AI-Driven Insights" },
];

export default function BannerSlideshow() {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [idx]);

  return (
    <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white/10 dark:bg-gray-900/30 border-2 border-blue-400/30 flex items-center justify-center backdrop-blur-xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[idx].src}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={images[idx].src}
            alt={images[idx].alt}
            width={380}
            height={380}
            className="rounded-2xl object-cover"
            style={{ filter: "blur(0px) brightness(1.08)" }}
            priority
          />
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((img, i) => (
          <button
            key={img.src}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-blue-400 ${i === idx ? "bg-blue-600 shadow-lg" : "bg-white/70"}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
