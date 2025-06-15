import { LogoStripIllustrative1 } from './LogoStrips/LogoStripIllustrative1';
import { LogoStripIllustrative2 } from './LogoStrips/LogoStripIllustrative2';
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
    // Original client logos
    { id: 1, name: 'Botanic Healthcare', logo: 'client1.png' },
    { id: 2, name: 'Client 2', logo: 'client2.jpg' },
    { id: 3, name: 'Frumar Marketing', logo: 'client3.jpg' },
    { id: 4, name: 'GX', logo: 'client4.jpg' },
    { id: 5, name: 'Infra Engineers India', logo: 'client5.png' },
    { id: 6, name: 'SIDVIN', logo: 'client6.png' },
    { id: 7, name: 'Mittal', logo: 'client7.png' },
    { id: 8, name: 'Client 8', logo: 'client8.png' },
    
    // New asset logos
    { id: 9, name: 'Asset 2', logo: 'Asset 2@4x.png' },
    { id: 10, name: 'Asset 3', logo: 'Asset 3@4x.png' },
    { id: 11, name: 'Asset 4', logo: 'Asset 4@4x.png' },
    { id: 12, name: 'Asset 5', logo: 'Asset 5@4x.png' },
    { id: 13, name: 'Asset 6', logo: 'Asset 6@4x.png' },
    { id: 14, name: 'Asset 7', logo: 'Asset 7@4x.png' },
    { id: 15, name: 'Asset 8', logo: 'Asset 8@4x.png' },
    { id: 16, name: 'Asset 9', logo: 'Asset 9@4x.png' },
    { id: 17, name: 'Asset 10', logo: 'Asset 10@4x.png' },
    { id: 18, name: 'Asset 11', logo: 'Asset 11@4x.png' },
    { id: 19, name: 'Asset 12', logo: 'Asset 12@4x.png' },
    { id: 20, name: 'Asset 13', logo: 'Asset 13@4x.png' },
    { id: 21, name: 'Asset 14', logo: 'Asset 14@4x.png' },
    { id: 22, name: 'Asset 15', logo: 'Asset 15@4x.png' },
    { id: 23, name: 'Asset 16', logo: 'Asset 16@4x.png' },
    { id: 24, name: 'Asset 17', logo: 'Asset 17@4x.png' },
    { id: 25, name: 'Asset 18', logo: 'Asset 18@4x.png' },
    { id: 26, name: 'Asset 19', logo: 'Asset 19@4x.png' },
    { id: 27, name: 'Asset 20', logo: 'Asset 20@4x.png' },
    { id: 28, name: 'Asset 21', logo: 'Asset 21@4x.png' },
    { id: 29, name: 'Asset 22', logo: 'Asset 22@4x.png' },
    { id: 30, name: 'Asset 23', logo: 'Asset 23@4x.png' },
    { id: 31, name: 'Asset 24', logo: 'Asset 24@4x.png' },
    { id: 32, name: 'Asset 25', logo: 'Asset 25@4x.png' },
  ],
  illustrative3: [
    // Original client logos
    { id: 1, name: 'Botanic Healthcare', logo: 'client1.png' },
    { id: 2, name: 'Client 2', logo: 'client2.jpg' },
    { id: 3, name: 'Frumar Marketing', logo: 'client3.jpg' },
    { id: 4, name: 'GX', logo: 'client4.jpg' },
    { id: 5, name: 'Infra Engineers India', logo: 'client5.png' },
    { id: 6, name: 'SIDVIN', logo: 'client6.png' },
    { id: 7, name: 'Mittal', logo: 'client7.png' },
    { id: 8, name: 'Client 8', logo: 'client8.png' },
    
    // New asset logos
    { id: 9, name: 'Asset 2', logo: 'Asset 2@4x.png' },
    { id: 10, name: 'Asset 3', logo: 'Asset 3@4x.png' },
    { id: 11, name: 'Asset 4', logo: 'Asset 4@4x.png' },
    { id: 12, name: 'Asset 5', logo: 'Asset 5@4x.png' },
    { id: 13, name: 'Asset 6', logo: 'Asset 6@4x.png' },
    { id: 14, name: 'Asset 7', logo: 'Asset 7@4x.png' },
    { id: 15, name: 'Asset 8', logo: 'Asset 8@4x.png' },
    { id: 16, name: 'Asset 9', logo: 'Asset 9@4x.png' },
    { id: 17, name: 'Asset 10', logo: 'Asset 10@4x.png' },
    { id: 18, name: 'Asset 11', logo: 'Asset 11@4x.png' },
    { id: 19, name: 'Asset 12', logo: 'Asset 12@4x.png' },
    { id: 20, name: 'Asset 13', logo: 'Asset 13@4x.png' },
    { id: 21, name: 'Asset 14', logo: 'Asset 14@4x.png' },
    { id: 22, name: 'Asset 15', logo: 'Asset 15@4x.png' },
    { id: 23, name: 'Asset 16', logo: 'Asset 16@4x.png' },
    { id: 24, name: 'Asset 17', logo: 'Asset 17@4x.png' },
    { id: 25, name: 'Asset 18', logo: 'Asset 18@4x.png' },
    { id: 26, name: 'Asset 19', logo: 'Asset 19@4x.png' },
    { id: 27, name: 'Asset 20', logo: 'Asset 20@4x.png' },
    { id: 28, name: 'Asset 21', logo: 'Asset 21@4x.png' },
    { id: 29, name: 'Asset 22', logo: 'Asset 22@4x.png' },
    { id: 30, name: 'Asset 23', logo: 'Asset 23@4x.png' },
    { id: 31, name: 'Asset 24', logo: 'Asset 24@4x.png' },
    { id: 32, name: 'Asset 25', logo: 'Asset 25@4x.png' },
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

type ClientLogoStripProps = {
  variant: ClientVariant;
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

export default function ClientLogoStrip({ variant }: ClientLogoStripProps) {
  // Get the appropriate clients array based on the variant
  const variantClients = clients[variant];
  
  // Create a mutable copy of the clients array
  const mutableClients = createMutableClients(variantClients);

  // Render the appropriate logo strip component based on the variant
  switch (variant) {
    case 'illustrative1':
      return <LogoStripIllustrative1 clients={mutableClients} />;
    case 'illustrative2':
      return <LogoStripIllustrative2 clients={mutableClients} />;
    case 'illustrative3':
      return <LogoStripIllustrative3 clients={mutableClients} />;
  }
}