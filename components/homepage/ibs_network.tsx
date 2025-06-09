'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const services = [
  { name: 'Cash & Liquidity', description: 'Cash visibility, forecasting, analysis' },
  { name: 'Payments', description: 'Centralized, automated, secure' },
  { name: 'Supply Chain Finance', description: 'Lifecycle, AP & AR, analytics' },
  { name: 'Commodity Mgmt', description: 'Agri/Metal, exposures, brokers' },
  { name: 'Currency Risk', description: 'Derivatives, hedging, valuation' },
  { name: 'Investment Mgmt', description: 'TD, MF, Bonds, Equity, PMS' },
  { name: 'Trade Finance', description: 'Import/export, LC, BC, banking' },
  { name: 'Debt Mgmt', description: 'Borrowings, loans, inter-company' },
];

const clientLogos = [
  { src: '/clients/client1.png', alt: 'Client 1' },
  { src: '/clients/client2.jpg', alt: 'Client 2' },
  { src: '/clients/client3.jpg', alt: 'Client 3' },
  { src: '/clients/client4.jpg', alt: 'Client 4' },
  { src: '/clients/client5.png', alt: 'Client 5' },
  { src: '/clients/client6.png', alt: 'Client 6' },
  { src: '/clients/client7.png', alt: 'Client 7' },
  { src: '/clients/client8.png', alt: 'Client 8' },
];

const circlePos = (index: number, total: number, radius: number) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
};

interface AnimatedLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}

const AnimatedLine = ({ x1, y1, x2, y2, delay = 0 }: AnimatedLineProps) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="#2563eb"
    strokeWidth="2"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1.2, delay }}
    style={{ filter: 'drop-shadow(0 0 4px #2563eb88)' }}
  />
);

interface ServiceNodeProps {
  service: { name: string; description: string };
  index: number;
  total: number;
  radius: number;
  isActive?: boolean;
  onClick?: () => void;
}

const ServiceNode = ({ service, index, total, radius, isActive = false, onClick }: ServiceNodeProps) => {
  const { x, y } = circlePos(index, total, radius);
  return (
    <motion.div
      className={`absolute flex flex-col items-center justify-center w-36 h-36 bg-white bg-opacity-90 rounded-xl shadow-2xl border z-20 cursor-pointer group transition-all ${
        isActive ? 'border-blue-500 ring-2 ring-blue-200' : 'border-blue-100'
      }`}
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%,-50%)' }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.1 : 1,
        y: [0, -5, 0],
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 120, 
        damping: 14, 
        delay: 0.2 + index * 0.09,
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3 + Math.random(),
          delay: index * 0.2
        }
      }}
      whileHover={{ 
        scale: 1.12, 
        boxShadow: '0 12px 35px rgba(37, 99, 235, 0.25)',
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-50 transition-colors">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      </div>
      <span className="text-base font-bold text-blue-800 mb-1 group-hover:text-blue-600 transition-colors text-center">
        {service.name}
      </span>
      <span className="text-xs text-gray-500 text-center px-2">
        {service.description}
      </span>
    </motion.div>
  );
};

interface ClientLogoProps {
  logo: {
    src: string;
    alt: string;
  };
  index: number;
  total: number;
  radius: number;
}

const ClientLogo = ({ logo, index, total, radius }: ClientLogoProps) => {
  const { x, y } = circlePos(index, total, radius);
  return (
    <motion.div
      className="absolute flex items-center justify-center w-16 h-16 bg-white bg-opacity-95 rounded-full shadow-lg border border-gray-200 z-10 transition-all hover:scale-110 hover:shadow-xl"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%,-50%)' }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.6 + index * 0.07 }}
    >
      <Image src={logo.src} alt={logo.alt} width={44} height={44} className="object-contain rounded-full" />
    </motion.div>
  );
};

const LOGO_SIZE = 120;
const SERVICE_RADIUS = 200;
const CLIENT_RADIUS = 340;
const CENTER_X = 400;
const CENTER_Y = 400;

export default function IBSServiceNetwork() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const controls = useAnimation();
  const [sparkles, setSparkles] = useState<Array<{id: number, size: number, x: number, y: number}>>([]);
  
  // Generate floating sparkles and decorative elements
  useEffect(() => {
    if (isInView) {
      // Create sparkles
      const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 8 + 5,
        x: Math.random() * 600 - 300,
        y: Math.random() * 600 - 300,
      }));
      setSparkles(newSparkles);

      // Animate main container
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, isInView]);
  
  // Generate random position within the container
  const getRandomPosition = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <div className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block text-blue-600 font-medium mb-3">Our Network</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Integrated Treasury Ecosystem</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Connect your financial operations through our comprehensive suite of treasury solutions
          </p>
        </motion.div>
      </div>

      <div 
        ref={ref}
        className="relative w-full max-w-4xl h-[800px] mx-auto"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? {
              opacity: 0.7,
              scale: 1,
              rotate: [0, 2, -2, 0],
            } : {}}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Animated gradient circles */}
          <motion.div 
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 opacity-30"
            style={{
              width: '120%',
              height: '120%',
              left: '-10%',
              top: '-10%',
            }}
            animate={isInView ? {
              scale: [1, 1.05, 1],
              rotate: [0, 180],
            } : {}}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <svg 
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Connection lines - Services */}
          {services.map((_, i) => {
            const servicePos = circlePos(i, services.length, SERVICE_RADIUS - 50);
            const isActive = activeService === i;
            return (
              <motion.line
                key={`service-line-${i}`}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={CENTER_X + servicePos.x}
                y2={CENTER_Y + servicePos.y}
                stroke={isActive ? '#3b82f6' : '#93c5fd'}
                strokeWidth={isActive ? 2.5 : 1.5}
                strokeDasharray={isActive ? '0' : '4,4'}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { 
                  opacity: isActive ? 0.8 : 0.4,
                  pathLength: 1,
                  strokeWidth: isActive ? 2.5 : 1.5
                } : {}}
                transition={{
                  duration: 1.2,
                  delay: i * 0.08,
                  pathLength: { duration: 1, ease: "easeOut" },
                  opacity: { duration: 0.5 },
                  strokeWidth: { duration: 0.3 }
                }}
              />
            );
          })}
          
          {/* Connection lines - Clients */}
          {clientLogos.map((_, i) => {
            const clientPos = circlePos(i, clientLogos.length, CLIENT_RADIUS - 20);
            return (
              <motion.line
                key={`client-line-${i}`}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={CENTER_X + clientPos.x}
                y2={CENTER_Y + clientPos.y}
                stroke="#c7d2fe"
                strokeWidth={1}
                strokeDasharray="2,2"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { 
                  opacity: 0.3,
                  pathLength: 1 
                } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.5 + i * 0.05,
                  pathLength: { duration: 1, ease: "easeOut" },
                  opacity: { duration: 0.5 }
                }}
              />
            );
          })}
          
          {/* Center glow effect */}
          <motion.circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={40}
            fill="url(#center-glow)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Gradient definitions */}
          <defs>
            <radialGradient id="center-glow" cx="0" cy="0" r="1" gradientTransform="translate(400 400) scale(60)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Service nodes */}
        <div className="relative w-full h-full">
          {services.map((service, index) => (
            <ServiceNode
              key={service.name}
              service={service}
              index={index}
              total={services.length}
              radius={180}
              isActive={activeService === index}
              onClick={() => setActiveService(index === activeService ? null : index)}
            />
          ))}

          {/* Client logos */}
          {clientLogos.map((logo, index) => (
            <ClientLogo
              key={logo.alt}
              logo={logo}
              index={index}
              total={clientLogos.length}
              radius={300}
            />
          ))}
        </div>

        {/* Floating decorative elements */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-blue-100"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              left: `calc(50% + ${sparkle.x}px)`,
              top: `calc(50% + ${sparkle.y}px)`,
              filter: 'blur(1px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? {
              opacity: [0, 0.2, 0],
              scale: [0, 1.5, 0],
              x: [0, getRandomPosition(-30, 30), 0],
              y: [0, getRandomPosition(-30, 30), 0],
            } : {}}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Center logo */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-blue-100"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1,
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            rotate: {
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        >
          <div className="relative w-20 h-20">
            <Image 
              src="/ibs-logo.png" 
              alt="IBS Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
        
        {/* Story-telling overlay text */}
        <div className="absolute left-1/2 top-[12%] w-full max-w-md -translate-x-1/2 text-center z-40 pointer-events-none px-4">
          <motion.div
            className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-50"
            initial={{ y: -40, opacity: 0, scale: 0.95 }}
            animate={isInView ? { 
              y: 0, 
              opacity: 1, 
              scale: 1,
              transition: { 
                type: 'spring',
                damping: 15,
                stiffness: 100
              }
            } : {}}
            transition={{ 
              delay: 0.4,
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.h2
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3"
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { 
                y: 0, 
                opacity: 1,
                transition: { 
                  delay: 0.5,
                  duration: 0.6
                }
              } : {}}
            >
              End-to-End Treasury Solutions
            </motion.h2>
            <motion.p
              className="text-base text-gray-700 font-medium"
              initial={{ y: -10, opacity: 0 }}
              animate={isInView ? { 
                y: 0, 
                opacity: 0.9,
                transition: { 
                  delay: 0.6,
                  duration: 0.5
                }
              } : {}}
            >
              Connecting Enterprises, Services, and Clients in One Powerful Network
            </motion.p>
          </motion.div>
        </div>
        
        {/* Legend */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 z-30 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { 
            y: 0, 
            opacity: 1,
            transition: { 
              delay: 0.8,
              duration: 0.6
            }
          } : {}}
        >
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm font-medium text-gray-700">Core Services</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-indigo-300 mr-2"></div>
            <span className="text-sm font-medium text-gray-700">Trusted Partners</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-100 mr-2"></div>
            <span className="text-sm font-medium text-gray-700">Global Network</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}