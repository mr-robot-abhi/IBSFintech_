import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
  { name: 'Client 1', logo: '/clients/client1.png' },
  { name: 'Client 2', logo: '/clients/client2.jpg' },
  { name: 'Client 3', logo: '/clients/client3.jpg' },
  { name: 'Client 4', logo: '/clients/client4.jpg' },
  { name: 'Client 5', logo: '/clients/client5.png' },
  { name: 'Client 6', logo: '/clients/client6.png' },
  { name: 'Client 7', logo: '/clients/client7.png' },
  { name: 'Client 8', logo: '/clients/client8.png' },
];

// Alternate services and clients
const allNodes = Array.from({ length: Math.max(services.length, clients.length) * 2 }, (_, i) => {
  const isService = i % 2 === 0;
  const serviceIdx = Math.floor(i / 2);
  const clientIdx = Math.floor(i / 2);
  if (isService && serviceIdx < services.length) {
    return { type: 'service', name: services[serviceIdx] };
  } else if (!isService && clientIdx < clients.length) {
    return { type: 'client', ...clients[clientIdx] };
  }
  return null;
}).filter(Boolean);

function getCirclePos(i: number, total: number, radius: number, center: number) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  };
}

export default function IBSNetworkTwo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(600);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSize(Math.min(rect.width, 700));
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const center = size / 2;
  const logoSize = size * 0.18;
  const nodeRadius = size * 0.36;
  const nodeSize = size * 0.16;

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center">
      <div ref={containerRef} className="relative mx-auto w-full max-w-4xl aspect-square min-h-[400px]">
        {/* Soft background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-4/5 h-4/5 rounded-full bg-blue-100 blur-3xl opacity-50" />
        </div>
        {/* SVG lines and animated particles */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" width={size} height={size}>
          {allNodes.map((node, i) => {
            const { x, y } = getCirclePos(i, allNodes.length, nodeRadius, center);
            return (
              <g key={i}>
                {/* Connector line */}
                <motion.line
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="#dbeafe"
                  strokeWidth={2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
                {/* Animated particle */}
                <motion.circle
                  r={size * 0.012}
                  fill="#60a5fa"
                  initial={{ cx: center, cy: center, opacity: 0 }}
                  animate={{
                    cx: [center, x],
                    cy: [center, y],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.12,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            );
          })}
        </svg>
        {/* Center IBS Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute z-20 flex items-center justify-center shadow-2xl"
          style={{
            width: logoSize,
            height: logoSize,
            top: center - logoSize / 2,
            left: center - logoSize / 2,
          }}
        >
          <div className="absolute inset-0 rounded-full border-8 border-blue-200 shadow-xl" />
          <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
            <Image src="/ibs_network.png" alt="IBS Network" fill className="object-contain p-4" priority />
          </div>
        </motion.div>
        {/* Nodes (services and clients) */}
        {allNodes.map((node, i) => {
          if (!node) return null;
          const { x, y } = getCirclePos(i, allNodes.length, nodeRadius, center);
          return (
            <motion.div
              key={node.type === 'service' ? node.name : node.name + i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileHover={{
                scale: 1.13,
                boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18)',
                filter: 'drop-shadow(0 0 12px #3b82f6aa)',
                zIndex: 30,
              }}
              className={`absolute z-20 flex items-center justify-center bg-white rounded-2xl border border-blue-100 shadow-md transition-all cursor-pointer ${node.type === 'service' ? 'font-semibold text-gray-800 px-6 py-4 text-center' : 'px-4 py-2'}`}
              style={{
                width: nodeSize,
                height: node.type === 'service' ? nodeSize * 0.7 : nodeSize * 0.8,
                top: y - (node.type === 'service' ? nodeSize * 0.35 : nodeSize * 0.4),
                left: x - nodeSize / 2,
              }}
            >
              {node.type === 'service' ? (
                <span>{node.name}</span>
              ) : (
                'logo' in node ? (
                  <Image src={node.logo as string} alt={node.name} width={60} height={40} className="object-contain max-h-10" />
                ) : null
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
