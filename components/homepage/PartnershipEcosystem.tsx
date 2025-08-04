'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const partners = [
  { name: 'Oracle', logo: 'p1.png', description: 'Strategic technology partnership for enterprise solutions.' },
  { name: 'Refinitiv', logo: 'p2.png', description: 'Market data and analytics integration.' },
  { name: 'KPMG', logo: 'p3.png', description: 'Global consulting and advisory services.' },
  { name: 'Yes Bank', logo: 'p4.png', description: 'Banking and financial services collaboration.' },
  { name: 'Deloitte', logo: 'p5.png', description: 'Professional services and technology consulting.' },
];

type PartnershipEcosystemProps = {
  variant: 'illustrative1' | 'illustrative2' | 'illustrative3';
};

export default function PartnershipEcosystem({ variant }: PartnershipEcosystemProps) {

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
          <h2 className={cn('text-3xl md:text-4xl font-bold mb-6', variant === 'illustrative1' ? 'text-white' : variant === 'illustrative2' ? 'text-gray-800' : 'text-gray-800 dark:text-white')}>
            Our Partnership Ecosystem
          </h2>
          <p className={cn('text-lg', variant === 'illustrative1' ? 'text-white' : variant === 'illustrative2' ? 'text-gray-600' : 'text-gray-600 dark:text-gray-300')}>
            We collaborate with industry leaders to deliver comprehensive and innovative financial solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/40"
            >
              <div className="relative w-32 h-16 mb-4 flex-shrink-0">
                <Image
                  src={`/${partner.logo}`}
                  alt={partner.name}
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-white font-semibold mb-2">{partner.name}</h3>
              <p className="text-white/80 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
