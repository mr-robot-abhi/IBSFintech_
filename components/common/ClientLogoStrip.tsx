import { LogoStripIllustrative1 } from './LogoStrips/LogoStripIllustrative1';
import { LogoStripIllustrative2 } from './LogoStrips/LogoStripIllustrative2';
import { LogoStripIllustrative3 } from './LogoStrips/LogoStripIllustrative3';
import { LogoStripDataDriven } from './LogoStrips/LogoStripDataDriven';

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
    { id: 1, name: 'Botanic Healthcare', logo: 'client1.png' },
    { id: 2, name: 'Client 2', logo: 'client2.jpg' },
    { id: 3, name: 'Frumar Marketing', logo: 'client3.jpg' },
    { id: 4, name: 'GX', logo: 'client4.jpg' },
    { id: 5, name: 'Infra Engineers India', logo: 'client5.png' },
    { id: 6, name: 'SIDVIN', logo: 'client6.png' },
    { id: 7, name: 'Mittal', logo: 'client7.png' },
    { id: 8, name: 'Client 8', logo: 'client8.png' },
  ],
  illustrative3: [
    { id: 1, name: 'Infosys', logo: 'infosys.png' },
    { id: 2, name: 'TCS', logo: 'tcs.png' },
    { id: 3, name: 'Wipro', logo: 'wipro.png' },
    { id: 4, name: 'HCL', logo: 'hcl.png' },
    { id: 5, name: 'Tech Mahindra', logo: 'tech_mahindra.png' },
    { id: 6, name: 'LTI Mindtree', logo: 'lti_mindtree.png' },
    { id: 7, name: 'Mphasis', logo: 'mphasis.png' },
    { id: 8, name: 'Coforge', logo: 'coforge.png' },
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
    case 'datadriven':
    default:
      return <LogoStripDataDriven clients={mutableClients} />;
  }
}