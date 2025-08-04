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
    { id: 1, name: '360One', logo: 'IBSFINtech-Client-360One.png' },
    { id: 2, name: 'APAR', logo: 'IBSFINtech-Client-APAR.png' },
    { id: 3, name: 'Balco', logo: 'IBSFINtech-Client-Balco.png' },
    { id: 4, name: 'Blue Star', logo: 'IBSFINtech-Client-Blue-Star.png' },
    { id: 5, name: 'Botanic', logo: 'IBSFINtech-Client-Botanic.png' },
    { id: 6, name: 'Cairn', logo: 'IBSFINtech-Client-Cairn.png' },
    { id: 7, name: 'Copia', logo: 'IBSFINtech-Client-Copia.png' },
    { id: 8, name: 'Credit Saison India', logo: 'IBSFINtech-Client-Credit-Saison-India.png' },
    { id: 9, name: 'Dabur', logo: 'IBSFINtech-Client-Dabur.png' },
    { id: 10, name: 'ESL Steel Limited', logo: 'IBSFINtech-Client-ESL-Steel-Limited.png' },
    { id: 11, name: 'Fumar', logo: 'IBSFINtech-Client-Fumar.png' },
    { id: 12, name: 'GX', logo: 'IBSFINtech-Client-GX.png' },
    { id: 13, name: 'HCL', logo: 'IBSFINtech-Client-HCL.png' },
    { id: 14, name: 'Hilton', logo: 'IBSFINtech-Client-Hilton.png' },
    { id: 15, name: 'Hindustan Zinc', logo: 'IBSFINtech-Client-Hindustan-Zinc.png' },
    { id: 16, name: 'Holiday Inn', logo: 'IBSFINtech-Client-Holiday-Inn.png' },
    { id: 17, name: 'Indigrid', logo: 'IBSFINtech-Client-Indigrid.png' },
    { id: 18, name: 'International Metallurgical Resources', logo: 'IBSFINtech-Client-International-Metalurgical-Resources-Ltd.png' },
    { id: 19, name: 'JSW International Tradecorp', logo: 'IBSFINtech-Client-JSW-International-Tradecorp-Pte-Ltd.png' },
    { id: 20, name: 'JSW', logo: 'IBSFINtech-Client-JSW.png' },
    { id: 21, name: 'Lagata', logo: 'IBSFINtech-Client-Lagata.png' },
    { id: 22, name: 'Mahindra', logo: 'IBSFINtech-Client-Mahindra.png' },
    { id: 23, name: 'Marriot', logo: 'IBSFINtech-Client-Marriot.png' },
    { id: 24, name: 'Mittal', logo: 'IBSFINtech-Client-Mittal.png' },
    { id: 25, name: 'Mphasis', logo: 'IBSFINtech-Client-Mphasis.png' },
    { id: 26, name: 'Northern Aromatics', logo: 'IBSFINtech-Client-Northern-Aromatics.png' },
    { id: 27, name: 'OFI', logo: 'IBSFINtech-Client-OFI.png' },
    { id: 28, name: 'Olam Agri', logo: 'IBSFINtech-Client-Olam-Agri.png' },
    { id: 29, name: 'PWC', logo: 'IBSFINtech-Client-PWC.png' },
    { id: 30, name: 'Patanjali', logo: 'IBSFINtech-Client-Patanjali.png' },
    { id: 31, name: 'Polycab', logo: 'IBSFINtech-Client-Polycab.png' },
    { id: 32, name: 'Puravankara', logo: 'IBSFINtech-Client-Puravankara.png' },
    { id: 33, name: 'Raymond', logo: 'IBSFINtech-Client-Raymond.png' },
    { id: 34, name: 'Sai', logo: 'IBSFINtech-Client-Sai.png' },
    { id: 35, name: 'Serum Institute India', logo: 'IBSFINtech-Client-Serum-Institute-India.png' },
    { id: 36, name: 'Sidvin', logo: 'IBSFINtech-Client-Sidvin.png' },
    { id: 37, name: 'Signature Global', logo: 'IBSFINtech-Client-Signature-Global.png' },
    { id: 38, name: 'Sonalika', logo: 'IBSFINtech-Client-Sonalika.png' },
    { id: 39, name: 'TSPL India', logo: 'IBSFINtech-Client-TSPL-India.png' },
    { id: 40, name: 'Thermax', logo: 'IBSFINtech-Client-Thermax.png' },
    { id: 41, name: 'Vedanta', logo: 'IBSFINtech-Client-Vedanta.png' },
    { id: 42, name: 'Viraj', logo: 'IBSFINtech-Client-Viraj.png' },
    { id: 43, name: 'Wipro', logo: 'IBSFINtech-Client-Wipro.png' },
    { id: 44, name: 'International Metalurgi', logo: 'International-Metalurgi.png' },
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
    //{ id: 25, name: 'Asset 20', logo: 'Asset_20_4x.png' },
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
        <div className="py-4">
          <div className="relative w-full overflow-hidden">
            {/* First set of logos */}
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {mutableClients.map((client, index) => (
                <div key={`${client.id}-first-${index}`} className="flex-shrink-0 px-3 flex items-center justify-center">
                  <div className="w-36 h-20 bg-white rounded-lg p-1 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src={`/IBSFINtech-Client Logos/${client.logo}`}
                        alt={client.name}
                        fill
                        className="object-contain object-center p-0.5 transition-all duration-300 scale-110"
                        sizes="(max-width: 768px) 10rem, 16rem"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Second set of logos (duplicate for seamless loop) */}
              {mutableClients.map((client, index) => (
                <div key={`${client.id}-second-${index}`} className="flex-shrink-0 px-3 flex items-center justify-center">
                  <div className="w-36 h-20 bg-white rounded-lg p-1 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src={`/IBSFINtech-Client Logos/${client.logo}`}
                        alt={client.name}
                        fill
                        className="object-contain object-center p-0.5 transition-all duration-300 scale-110"
                        sizes="(max-width: 768px) 10rem, 16rem"
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