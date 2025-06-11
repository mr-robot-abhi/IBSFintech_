import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  'Cash & Liquidity Management',
  'Payments',
  'Supply Chain Finance',
  'Commodity Management',
  'Currency Risk Management',
  'Investment Management',
  'Trade Finance Management',
  'Debt Management',
];

const clients = [
  { name: 'Botanic Healthcare', logo: '/clients/client1.png' },
  { name: 'Client 2', logo: '/clients/client2.jpg' },
  { name: 'Frumar Marketing', logo: '/clients/client3.jpg' },
  { name: 'GX', logo: '/clients/client4.jpg' },
  { name: 'Infra Engineers India', logo: '/clients/client5.png' },
  { name: 'SIDVIN', logo: '/clients/client6.png' },
  { name: 'Mittal', logo: '/clients/client7.png' },
  { name: 'Client 8', logo: '/clients/client8.png' },
];

// Add type for positions
type ServicePosition = {
  type: 'service';
  label: string;
  idx: number;
  x: number;
  y: number;
  angle: number;
};
type ClientPosition = {
  type: 'client';
  label: string;
  logo: string;
  idx: number;
  x: number;
  y: number;
  angle: number;
};
type Position = ServicePosition | ClientPosition;

export default function IBSNetworkTwo() {
  // Circular layout parameters
  const total = services.length + clients.length;
  const radius = 300; // increased distance from center for more spacing
  const centerX = 400; // SVG center X
  const centerY = 270; // SVG center Y
  // Arrange services and clients in a circle
  const elements = [
    ...services.map((service, i) => ({
      type: 'service',
      label: service,
      idx: i,
    })),
    ...clients.map((client, i) => ({
      type: 'client',
      label: client.name,
      logo: client.logo,
      idx: i,
    })),
  ];
  // Distribute services on the top half, clients on the bottom half
  const angleStep = 360 / total;
  const positions: Position[] = elements.map((el, i) => {
    // Services: 0-7, Clients: 8-15
    // Spread services from -90deg to 90deg, clients from 90deg to 270deg
    let angle;
    if (el.type === 'service') {
      angle = -90 + (i * (180 / (services.length - 1)));
    } else {
      angle = 90 + ((el.idx) * (180 / (clients.length - 1)));
    }
    const rad = (angle * Math.PI) / 180;
    return {
      ...el,
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
      angle,
    } as Position;
  });

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center">
      <div className="relative w-[800px] h-[540px] max-w-full mx-auto flex items-center justify-center">
        {/* SVG connectors */}
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" width={800} height={540}>
          {positions.map((el, i) => (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={el.x}
              y2={el.y}
              stroke={el.type === 'service' ? '#bae6fd' : '#99f6e4'}
              strokeWidth="2"
              opacity="0.5"
            />
          ))}
        </svg>
        {/* Central logo (no square shadow) */}
        <div
          className="absolute z-10 flex items-center justify-center"
          style={{ left: centerX - 120, top: centerY - 120, width: 240, height: 240 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
            style={{ width: 240, height: 240 }}
          >
            <div className="absolute inset-0 rounded-full border-8 border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100" />
            <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
              <Image src="/ibs_network.png" alt="IBS Network" fill className="object-contain p-8" priority />
            </div>
          </motion.div>
        </div>
        {/* Circularly arranged services and clients */}
        {positions.map((el, i) => (
          <div
            key={i}
            className="absolute z-10"
            style={{
              left: el.x - (el.type === 'service' ? 75 : 80),
              top: el.y - 28,
              width: el.type === 'service' ? 150 : 160,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {el.type === 'service' ? (
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18)' }}
                className="bg-white rounded-xl shadow-md border border-blue-100 px-3 py-2 font-semibold text-gray-800 text-sm md:text-base transition-all cursor-pointer hover:bg-blue-50 text-center w-full"
              >
                {el.label}
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.12, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.18)' }}
                className="bg-white rounded-xl shadow-md border border-blue-100 p-2 flex items-center justify-center h-20 w-36 transition-all cursor-pointer hover:bg-teal-50"
              >
                <Image src={el.logo} alt={el.label} width={120} height={60} className="object-contain max-h-16 w-auto mx-auto" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
