'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { LogoStripIllustrative1 } from './LogoStrips/LogoStripIllustrative1';
import { LogoStripIllustrative3 } from './LogoStrips/LogoStripIllustrative3';

// Client type definition
export type Client = {
  id: number;
  name: string;
  logo: string;
  hasVideo?: boolean;
};

type ClientVariant = 'illustrative1' | 'illustrative2' | 'illustrative3' | 'datadriven';

// Client logos with different variations for each style
export const clients: Record<ClientVariant, readonly Client[]> = {
  illustrative1: [
    { id: 1, name: 'Mahindra', logo: 'mahindra.png', hasVideo: true },
    { id: 2, name: 'Vedanta', logo: 'vedanta.png' },
    { id: 3, name: 'Godrej', logo: 'godrej.png' },
    { id: 4, name: 'Adani', logo: 'adani.png' },
    { id: 5, name: 'Ambuja Cements', logo: 'ambuja_cements.png' },
    { id: 6, name: 'Tata Steel', logo: 'tata_steel.png' },
    { id: 7, name: 'Larsen & Toubro', logo: 'larsen_toubro.png' },
    { id: 8, name: 'Reliance', logo: 'reliance.png' },
  ],
  illustrative2: [
    { id: 1, name: 'Asset 10@4x', logo: 'Asset 10@4x.png' },
    { id: 2, name: 'Asset 11@4x', logo: 'Asset 11@4x.png' },
    { id: 3, name: 'Asset 12@4x', logo: 'Asset 12@4x.png' },
    { id: 4, name: 'Asset 13@4x', logo: 'Asset 13@4x.png' },
    { id: 5, name: 'Asset 14@4x', logo: 'Asset 14@4x.png' },
    { id: 6, name: 'Asset 15@4x', logo: 'Asset 15@4x.png' },
    { id: 7, name: 'Asset 16@4x', logo: 'Asset 16@4x.png' },
    { id: 8, name: 'Asset 17@4x', logo: 'Asset 17@4x.png' },
    { id: 9, name: 'Asset 18@4x', logo: 'Asset 18@4x.png' },
    { id: 10, name: 'Asset 19@4x', logo: 'Asset 19@4x.png' },
    { id: 11, name: 'Asset 21@4x', logo: 'Asset 21@4x.png' },
    { id: 12, name: 'Asset 22@4x', logo: 'Asset 22@4x.png' },
    { id: 13, name: 'Asset 23@4x', logo: 'Asset 23@4x.png' },
    { id: 14, name: 'Asset 24@4x', logo: 'Asset 24@4x.png' },
    { id: 15, name: 'Asset 25@4x', logo: 'Asset 25@4x.png' },
    { id: 16, name: 'Asset 2@4x', logo: 'Asset 2@4x.png' },
    { id: 17, name: 'Asset 3@4x', logo: 'Asset 3@4x.png' },
    { id: 18, name: 'Asset 4@4x', logo: 'Asset 4@4x.png' },
    { id: 19, name: 'Asset 5@4x', logo: 'Asset 5@4x.png' },
    { id: 20, name: 'Asset 6@4x', logo: 'Asset 6@4x.png' },
    { id: 21, name: 'Asset 7@4x', logo: 'Asset 7@4x.png' },
    { id: 22, name: 'Asset_20_4x', logo: 'Asset_20_4x.png' },
    { id: 23, name: 'Asset_8_4x', logo: 'Asset_8_4x.png' },
    { id: 24, name: 'Asset_9_4x', logo: 'Asset_9_4x.png' },
    { id: 25, name: 'c1', logo: 'c1.png' },
    { id: 26, name: 'c2', logo: 'c2.png' },
    { id: 27, name: 'c3', logo: 'c3.png' },
    { id: 28, name: 'c4', logo: 'c4.png' },
    { id: 29, name: 'c5', logo: 'c5.png' },
    { id: 30, name: 'client1-removebg-preview', logo: 'client1-removebg-preview.png' },
    { id: 31, name: 'client2', logo: 'client2.jpg' },
    { id: 32, name: 'client3', logo: 'client3.png' },
    { id: 33, name: 'client4', logo: 'client4.png' },
    { id: 34, name: 'client5', logo: 'client5.png' },
    { id: 35, name: 'client6', logo: 'client6.png' },
    { id: 36, name: 'client7', logo: 'client7.png' },
    { id: 37, name: 'client8', logo: 'client8.png' },
  ],
  illustrative3: [

    // Asset logos with exact file names
    { id: 14, name: 'Asset 10', logo: 'Asset 10@4x.png' },
    { id: 15, name: 'Asset 11', logo: 'Asset 11@4x.png' },
    { id: 16, name: 'Asset 12', logo: 'Asset 12@4x.png' },
    { id: 17, name: 'Asset 13', logo: 'Asset 13@4x.png' },
    { id: 18, name: 'Asset 14', logo: 'Asset 14@4x.png' },
    { id: 19, name: 'Asset 15', logo: 'Asset 15@4x.png' },
    { id: 20, name: 'Asset 16', logo: 'Asset 16@4x.png' },
    { id: 21, name: 'Asset 17', logo: 'Asset 17@4x.png' },
    { id: 22, name: 'Asset 18', logo: 'Asset 18@4x.png' },
    { id: 23, name: 'Asset 19', logo: 'Asset 19@4x.png' },
    { id: 24, name: 'Asset 2', logo: 'Asset 2@4x.png' },
    { id: 25, name: 'Asset 20', logo: 'Asset_20_4x.png' },
    { id: 26, name: 'Asset 21', logo: 'Asset 21@4x.png' },
    { id: 27, name: 'Asset 22', logo: 'Asset 22@4x.png' },
    { id: 28, name: 'Asset 23', logo: 'Asset 23@4x.png' },
    { id: 29, name: 'Asset 24', logo: 'Asset 24@4x.png' },
    { id: 30, name: 'Asset 25', logo: 'Asset 25@4x.png' },
    { id: 31, name: 'Asset 3', logo: 'Asset 3@4x.png' },
    { id: 32, name: 'Asset 4', logo: 'Asset 4@4x.png' },
    { id: 33, name: 'Asset 5', logo: 'Asset 5@4x.png' },
    { id: 34, name: 'Asset 6', logo: 'Asset 6@4x.png' },
    { id: 35, name: 'Asset 7', logo: 'Asset 7@4x.png' },
    { id: 36, name: 'Asset 8', logo: 'Asset_8_4x.png' },
    { id: 37, name: 'Asset 9', logo: 'Asset_9_4x.png' },
  ],
  datadriven: [
    { id: 1, name: 'Microsoft', logo: 'microsoft.png' },
    { id: 2, name: 'Google', logo: 'google.png' },
    { id: 3, name: 'Amazon', logo: 'amazon.png' },
    { id: 4, name: 'IBM', logo: 'ibm.png' },
    { id: 5, name: 'Oracle', logo: 'oracle.png' },
    { id: 6, name: 'SAP', logo: 'sap.png' },
    { id: 7, name: 'Salesforce', logo: 'salesforce.png' },
    { id: 8, name: 'Adobe', logo: 'adobe.png' },
  ]
} as const;

interface ClientLogoStripProps {
  variant: ClientVariant;
  title?: string;
  description?: string;
};

// Helper function to create a mutable copy of the clients array
function createMutableClients(clients: readonly Client[]): Client[] {
  return clients.map(client => ({
    id: client.id,
    name: client.name,
    logo: client.logo,
    ...(client.hasVideo !== undefined && { hasVideo: client.hasVideo })
  }));
}

export default function ClientLogoStrip({ variant, title, description }: ClientLogoStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const bgOpacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  const bgOpacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Get the appropriate clients array based on the variant
  const variantClients = clients[variant];
  
  // Create a mutable copy of the clients array
  const mutableClients = createMutableClients(variantClients);

  // Double the clients for infinite scroll effect in illustrative2
  const doubledClients = [...mutableClients, ...mutableClients];

  // Render the appropriate logo strip component based on the variant
  let logoStripComponent;
  switch (variant) {
    case 'illustrative1':
      logoStripComponent = <LogoStripIllustrative1 clients={mutableClients} />;
      break;
    case 'illustrative2':
      logoStripComponent = (
        <div className="py-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-50%'],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                  },
                },
              }}
            >
              {doubledClients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                  <div className="w-48 h-24 bg-gray-200 rounded-2xl p-4 flex items-center justify-center transition-all duration-300 hover:bg-gray-300 hover:shadow-md">
                    <div className="relative w-full h-full">
                      <Image
                        src={`/clients/${client.logo}`}
                        alt={client.name}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      );
      break;
    case 'illustrative3':
      logoStripComponent = <LogoStripIllustrative3 clients={mutableClients} />;
      break;
    default:
      return null;
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${variant === 'illustrative3' ? 'py-8' : 'py-16'}`}>
      {(title || description) && (
        <div className="container mx-auto px-4 mb-12 text-center">
          {title && <h2 className={`font-bold text-white ${variant === 'illustrative3' ? 'text-2xl md:text-3xl mb-2' : 'text-3xl md:text-4xl mb-4'}`}>{title}</h2>}
          {description && <p className={`text-white/90 max-w-3xl mx-auto ${variant === 'illustrative3' ? 'text-base' : 'text-lg'}`}>{description}</p>}
        </div>
      )}
      {logoStripComponent}
    </div>
  );
}