import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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

const VISIBLE_CLIENTS = 6;
const ANIMATION_INTERVAL = 2500;

export default function IBSNetworkTwo() {
  // Carousel state for client logos
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % clients.length);
    }, ANIMATION_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Layout parameters
  const centerX = 400;
  const centerY = 270;
  const innerRadius = 180; // Services
  const outerRadius = 320; // Clients (spread out more)

  // Calculate positions for services (inner circle)
  const servicePositions = services.map((service, i) => {
    const angle = (2 * Math.PI * i) / services.length;
    return {
      label: service,
      x: centerX + innerRadius * Math.cos(angle),
      y: centerY + innerRadius * Math.sin(angle),
      angle,
    };
  });

  // Calculate positions for visible clients (outer circle)
  const visibleClients = Array(VISIBLE_CLIENTS)
    .fill(0)
    .map((_, i) => clients[(carouselIndex + i) % clients.length]);
  const clientPositions = visibleClients.map((client, i) => {
    // Spread out more, and offset y for those near horizontal
    const angle = (2 * Math.PI * i) / VISIBLE_CLIENTS;
    let yOffset = 0;
    if (Math.abs(Math.sin(angle)) < 0.2) yOffset = -18 * Math.sign(Math.cos(angle)); // offset top/bottom
    return {
      ...client,
      x: centerX + outerRadius * Math.cos(angle),
      y: centerY + outerRadius * Math.sin(angle) + yOffset,
      angle,
      key: `${client.name}-${i}`,
    };
  });

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center">
      <div className="relative w-[800px] h-[540px] max-w-full mx-auto flex items-center justify-center">
        {/* SVG connectors */}
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" width={800} height={540}>
          {/* Center to services */}
          {servicePositions.map((el, i) => (
            <line
              key={`center-service-${i}`}
              x1={centerX}
              y1={centerY}
              x2={el.x}
              y2={el.y}
              stroke="#60a5fa"
              strokeWidth="2"
              opacity="0.35"
            />
          ))}
          {/* Services to clients (only to visible) */}
          {servicePositions.slice(0, VISIBLE_CLIENTS).map((service, i) => (
            <line
              key={`service-client-${i}`}
              x1={service.x}
              y1={service.y}
              x2={clientPositions[i].x}
              y2={clientPositions[i].y}
              stroke="#38bdf8"
              strokeWidth="1.5"
              opacity="0.25"
            />
          ))}
        </svg>
        {/* Central logo */}
        <div
          className="absolute z-20 flex items-center justify-center shadow-xl shadow-blue-100/40"
          style={{ left: centerX - 90, top: centerY - 90, width: 180, height: 180 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
            style={{ width: 180, height: 180 }}
          >
            <div className="absolute inset-0 rounded-full border-8 border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100" />
            <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
              <Image src="/ibs_network.png" alt="IBS Network" fill className="object-contain p-8" priority />
            </div>
          </motion.div>
        </div>
        {/* Services (inner circle) */}
        {servicePositions.map((el, i) => (
          <div
            key={i}
            className="absolute z-10"
            style={{
              left: el.x - 70,
              top: el.y - 24,
              width: 140,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.09, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18)' }}
              className="bg-white rounded-xl shadow-md border border-blue-100 px-3 py-2 font-semibold text-blue-800 text-sm md:text-base transition-all cursor-pointer hover:bg-blue-50 text-center w-full"
            >
              {el.label}
            </motion.div>
          </div>
        ))}
        {/* Clients (outer circle, animated carousel) */}
        <AnimatePresence initial={false}>
          {clientPositions.map((el, i) => (
            <motion.div
              key={el.key}
              className="absolute z-10"
              style={{
                left: el.x - 50,
                top: el.y - 28,
                width: 100,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.7, scale: { type: 'spring', stiffness: 120 }, y: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } }}
            >
              <motion.div
                whileHover={{ scale: 1.15, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.18)' }}
                className="bg-white rounded-xl shadow-md border border-blue-100 p-2 flex items-center justify-center h-14 w-24 transition-all cursor-pointer hover:bg-teal-50"
              >
                <Image src={el.logo} alt={el.name} width={80} height={40} className="object-contain max-h-10 w-auto mx-auto" />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
