"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterCaptionProps {
  text?: string;
  className?: string;
}

const DEFAULT_CAPTION = "Elevate Your Finance";

// Now supports any text as a typewriter caption
export default function TypewriterCaption({ text = DEFAULT_CAPTION, className = "" }: TypewriterCaptionProps) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.div
      className={`font-extrabold text-white drop-shadow-xl mb-4 animate-fade-in ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{ fontSize: '2.8rem', lineHeight: 1.1 }}
    >
      {displayed}
      <span className="inline-block w-2 h-8 bg-white/80 align-middle animate-pulse ml-1" style={{ verticalAlign: 'middle' }} />
    </motion.div>
  );
}
