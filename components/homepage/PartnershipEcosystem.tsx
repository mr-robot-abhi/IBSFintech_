'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const partners = [
  { name: 'Partner One', logo: 'p1.png', description: 'Driving innovation in fintech solutions with cutting-edge technology and collaborative synergy.' },
  { name: 'Partner Two', logo: 'p2.png', description: 'A strategic alliance to enhance market reach and deliver unparalleled value to clients.' },
  { name: 'Partner Three', logo: 'p3.png', description: 'Pioneering new frontiers in digital finance and secure transactions.' },
  { name: 'Partner Four', logo: 'p4.png', description: 'Transforming the landscape of asset management with data-driven insights.' },
  { name: 'Partner Five', logo: 'p5.png', description: 'Empowering businesses with seamless integration and robust financial tools.' },
  { name: 'Partner Six', logo: 'p6.png', description: 'A key partner in our ecosystem, providing expertise in risk management.' },
  { name: 'Partner Seven', logo: 'p7.jpg', description: 'Fostering growth and innovation through a shared vision for the future of finance.' },
  { name: 'Partner Eight', logo: 'p8.png', description: 'Delivering excellence in payment processing and financial services.' },
  { name: 'Partner Nine', logo: 'p9.png', description: 'Our trusted ally in expanding global financial networks and opportunities.' },
];

type PartnershipEcosystemProps = {
  variant: 'illustrative1' | 'illustrative2' | 'illustrative3';
};

export default function PartnershipEcosystem({ variant }: PartnershipEcosystemProps) {
  const cardStyles = {
    illustrative1: 'bg-white text-gray-800 shadow-lg',
    illustrative2: 'bg-white/10 backdrop-blur-md text-white',
    illustrative3: 'bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700',
  };

  const logoStyles = {
    illustrative1: '',
    illustrative2: 'filter brightness(0) invert(1)',
    illustrative3: 'dark:filter dark:brightness(0) dark:invert(1)',
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={cn('text-3xl md:text-4xl font-bold mb-6', variant === 'illustrative2' ? 'text-white' : 'text-gray-800 dark:text-white')}>
            Our Partnership Ecosystem
          </h2>
          <p className={cn('text-lg', variant === 'illustrative2' ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300')}>
            We collaborate with industry leaders to deliver comprehensive and innovative financial solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              className={cn('rounded-xl overflow-hidden p-8 flex flex-col items-center text-center', cardStyles[variant])}
            >
              <div className="relative w-40 h-20 mb-4">
                <Image
                  src={`/${partner.logo}`}
                  alt={partner.name}
                  fill
                  className={cn('object-contain', logoStyles[variant])}
                />
              </div>
              <p className="text-sm opacity-80">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
