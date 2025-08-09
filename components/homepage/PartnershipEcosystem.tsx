'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const partners = [
  { logo: 'p1.png', large: false },
  { logo: 'p2.png', large: true, extraLarge: true },  // Bloomberg
  { logo: 'p3.png', large: false },
  { logo: 'p4.png', large: true, extraLarge: true },  // KPMG
  { logo: 'p5.png', large: false }
];

type PartnershipEcosystemProps = {
  variant?: 'illustrative1' | 'illustrative2' | 'illustrative3';
};

export default function PartnershipEcosystem({ variant = 'illustrative1' }: PartnershipEcosystemProps) {
  return (
    <section className={cn('py-12', variant === 'illustrative1' ? 'relative z-10' : '')}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className={cn('text-3xl md:text-4xl font-bold mb-6', 
            variant === 'illustrative1' ? 'text-white' : 
            variant === 'illustrative2' ? 'text-gray-800' : 
            'text-gray-800 dark:text-white')}
          >
            Our Partnership Ecosystem
          </h2>
        </motion.div>
        
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 px-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className={`w-full ${partner.extraLarge ? 'max-w-[280px]' : 'max-w-[220px]'} aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-6 hover:bg-white/10 transition-all duration-300`}>
                  <div className={`relative w-full ${partner.extraLarge ? 'h-full' : partner.large ? 'h-5/6' : 'h-4/5'}`}>
                    <Image
                      src={`/${partner.logo}`}
                      alt=""
                      fill
                      className={`object-contain brightness-0 invert ${partner.extraLarge ? 'scale-125' : ''}`}
                      sizes={partner.extraLarge ? 
                        "(max-width: 640px) 60vw, (max-width: 768px) 50vw, 300px" : 
                        partner.large ? 
                        "(max-width: 640px) 50vw, (max-width: 768px) 40vw, 250px" : 
                        "(max-width: 640px) 45vw, (max-width: 768px) 35vw, 200px"
                      }
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
