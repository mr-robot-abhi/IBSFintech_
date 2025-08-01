'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Client } from '../ClientLogoStrip';

type LogoStripIllustrative3Props = {
  clients: readonly Client[];
};

export function LogoStripIllustrative3({ clients }: LogoStripIllustrative3Props) {
  // Combine all logos including the new assets
  const allLogos = clients.map(client => ({
    src: `/clients/${client.logo}`,
    alt: client.name,
  }));

  // Calculate the total width of all logos with spacing
  const logoWidth = 192; // w-48 = 12rem = 192px
  const logoSpacing = 48; // space-x-12 = 3rem = 48px
  const totalWidth = allLogos.length * (logoWidth + logoSpacing);
  
  // Calculate animation distance (half of total width for smooth loop)
  const animationDistance = -totalWidth / 2;

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="relative w-full overflow-visible">
        <motion.div
          className="flex"
          style={{
            width: 'max-content',
            willChange: 'transform',
          }}
          animate={{
            x: [0, animationDistance],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {/* First set of logos */}
          {allLogos.map((logo, idx) => (
            <motion.div
              key={`logo-1-${idx}`}
              className="flex-shrink-0 flex items-center justify-center h-28 w-48 px-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 192px) 100vw, 192px"
                />
              </div>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {allLogos.map((logo, idx) => (
            <motion.div
              key={`logo-2-${idx}`}
              className="flex-shrink-0 flex items-center justify-center h-28 w-48 px-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 192px) 100vw, 192px"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
