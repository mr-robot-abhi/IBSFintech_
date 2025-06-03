import { LogoStripIllustrative1 } from './LogoStrips/LogoStripIllustrative1';
import { LogoStripIllustrative2 } from './LogoStrips/LogoStripIllustrative2';
import { LogoStripIllustrative3 } from './LogoStrips/LogoStripIllustrative3';
import { LogoStripDataDriven } from './LogoStrips/LogoStripDataDriven';

// Client type definition
export type Client = {
  id: number;
  name: string;
  hasVideo?: boolean;
};

type ClientVariant = 'illustrative1' | 'illustrative2' | 'illustrative3' | 'datadriven';

// Client logos with different variations for each style
export const clients: Record<ClientVariant, readonly Client[]> = {
  illustrative1: [
    { id: 1, name: 'Mahindra', hasVideo: true },
    { id: 2, name: 'Vedanta' },
    { id: 3, name: 'Godrej' },
    { id: 4, name: 'Adani' },
    { id: 5, name: 'Ambuja Cements' },
    { id: 6, name: 'Tata Steel' },
    { id: 7, name: 'Larsen & Toubro' },
    { id: 8, name: 'Reliance' },
  ],
  illustrative2: [
    { id: 1, name: 'HDFC Bank' },
    { id: 2, name: 'ICICI Bank' },
    { id: 3, name: 'Axis Bank' },
    { id: 4, name: 'SBI' },
    { id: 5, name: 'Kotak Bank' },
    { id: 6, name: 'IndusInd' },
    { id: 7, name: 'Yes Bank' },
    { id: 8, name: 'Federal Bank' },
  ],
  illustrative3: [
    { id: 1, name: 'Infosys' },
    { id: 2, name: 'TCS' },
    { id: 3, name: 'Wipro' },
    { id: 4, name: 'HCL' },
    { id: 5, name: 'Tech Mahindra' },
    { id: 6, name: 'LTI Mindtree' },
    { id: 7, name: 'Mphasis' },
    { id: 8, name: 'Coforge' },
  ],
  datadriven: [
    { id: 1, name: 'Microsoft' },
    { id: 2, name: 'Google' },
    { id: 3, name: 'Amazon' },
    { id: 4, name: 'IBM' },
    { id: 5, name: 'Oracle' },
    { id: 6, name: 'SAP' },
    { id: 7, name: 'Salesforce' },
    { id: 8, name: 'Adobe' },
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