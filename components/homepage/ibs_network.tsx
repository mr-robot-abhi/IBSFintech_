import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  DollarSign, CreditCard, Layers, PieChart, RefreshCcw,
  TrendingUp, Globe, BarChart2
} from "lucide-react";

const services = [
  { name: "Cash & Liquidity", icon: DollarSign, desc: "Visibility, forecasting, bank analysis" },
  { name: "Payments", icon: CreditCard, desc: "Approvals, automation, centralization" },
  { name: "Supply Chain", icon: Layers, desc: "AP/AR automation, working capital" },
  { name: "Commodity", icon: PieChart, desc: "Margin, hedging, exposure tracking" },
  { name: "Currency Risk", icon: RefreshCcw, desc: "Hedging, derivatives, valuation" },
  { name: "Investment", icon: TrendingUp, desc: "Mutual funds, FDs, PMS, bonds" },
  { name: "Trade Finance", icon: Globe, desc: "LCs, BCs, shipment finance" },
  { name: "Debt Mgmt", icon: BarChart2, desc: "Borrowings, loans, intercompany" },
];

const clients = [
  { name: "Client 1", logo: "client1.png" },
  { name: "Client 2", logo: "client2.jpg" },
  { name: "Client 3", logo: "client3.jpg" },
  { name: "Client 4", logo: "client4.jpg" },
  { name: "Client 5", logo: "client5.png" },
  { name: "Client 6", logo: "client6.png" },
  { name: "Client 7", logo: "client7.png" },
  { name: "Client 8", logo: "client8.png" },
];

const circlePosition = (i: number, total: number, radius: number, center: number, offsetAngle = -Math.PI / 2) => {
  const angle = (i / total) * 2 * Math.PI + offsetAngle;
  return {
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  };
};

export default function IBSServiceNetwork() {
  const rotateClients = useAnimation();
  const serviceControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(700); // default size

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSize(Math.min(rect.width, rect.height));
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await serviceControls.start({
        scale: [0.85, 1.05, 1],
        opacity: 1,
        transition: { duration: 0.5 }
      });
      rotateClients.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        },
      });
    };
    sequence();
  }, [rotateClients, serviceControls]);

  // Dynamic layout
  const center = size / 2;
  const ibsLogoSize = size * 0.32; // main logo size
  const ibsLogoRing = size * 0.42; // ring size
  const serviceRadius = size * 0.39; // slightly increased from 0.34
  const clientRadius = size * 0.86 - size * 0.13; // bring logos closer by one logo size
  const serviceBoxSize = size * 0.22; // slightly increased from 0.19
  const clientLogoSize = size * 0.13; // slightly increased from 0.11

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div ref={containerRef} className="relative mx-auto w-full max-w-5xl aspect-square min-h-[400px]">
        {/* Background Blur Circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-4/5 h-4/5 rounded-full bg-blue-50 blur-3xl opacity-60" />
        </div>

        {/* IBS Center Logo with ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute z-30 flex items-center justify-center"
          style={{
            width: ibsLogoRing,
            height: ibsLogoRing,
            top: center - ibsLogoRing / 2,
            left: center - ibsLogoRing / 2,
          }}
        >
          <div className="absolute inset-0 rounded-full border-8 border-blue-100 shadow-2xl" />
          <div className="flex items-center justify-center w-full h-full">
            <div
              className="bg-gray-100 border-4 border-blue-200 shadow-xl rounded-full flex items-center justify-center mx-auto"
              style={{ width: ibsLogoSize, height: ibsLogoSize }}
            >
              <div className="relative" style={{ width: ibsLogoSize * 0.7, height: ibsLogoSize * 0.7 }}>
                <Image
                  src="/ibs_network.png"
                  alt="IBS Network Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connecting Lines & Particle Animation */}
        <svg className="absolute top-0 left-0 w-full h-full" width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ zIndex: 15 }}>
          {services.map((_, i) => {
            const { x, y } = circlePosition(i, services.length, serviceRadius, center);
            // Particle animation: animate a small circle from center to (x, y)
            return (
              <g key={`line-group-${i}`}> 
                <motion.line
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="#dbeafe"
                  strokeWidth={size * 0.004}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
                <motion.circle
                  r={size * 0.012}
                  fill="#c7d2fe"
                  initial={{ cx: center, cy: center, opacity: 0 }}
                  animate={{
                    cx: [center, x],
                    cy: [center, y],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.18,
                    ease: "easeInOut"
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Service Boxes */}
        {services.map((service, i) => {
          const { x, y } = circlePosition(i, services.length, serviceRadius, center);
          return (
            <motion.div
              key={`service-${i}`}
              initial={{ opacity: 0, scale: 0.85, x: 0, y: 0 }}
              animate={serviceControls}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="absolute z-20 flex flex-col items-center justify-center text-center bg-white border border-blue-100 shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              style={{
                width: serviceBoxSize,
                height: serviceBoxSize,
                top: y - serviceBoxSize / 2,
                left: x - serviceBoxSize / 2,
              }}
            >
              <div className="mb-2 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shadow"
                style={{ width: serviceBoxSize * 0.32, height: serviceBoxSize * 0.32 }}>
                <service.icon size={Math.round(serviceBoxSize * 0.2)} strokeWidth={2} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1 leading-tight" style={{ fontSize: serviceBoxSize * 0.11 }}>{service.name}</h4>
              <p className="text-gray-500 leading-tight px-2" style={{ fontSize: serviceBoxSize * 0.09 }}>{service.desc}</p>
            </motion.div>
          );
        })}

        {/* Rotating Client Logos */}
        <motion.div
          animate={rotateClients}
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{ transformOrigin: "center center" }}
        >
          {clients.map((client, i) => {
            const { x, y } = circlePosition(i, clients.length, clientRadius, center);
            return (
              <motion.div
                key={`client-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="absolute flex items-center justify-center bg-white rounded-full border-2 border-blue-100 shadow-md hover:shadow-xl hover:scale-110 transition-all"
                style={{
                  width: clientLogoSize,
                  height: clientLogoSize,
                  top: y - clientLogoSize / 2,
                  left: x - clientLogoSize / 2,
                  zIndex: 10 - i
                }}
              >
                <div className="relative" style={{ width: clientLogoSize * 0.7, height: clientLogoSize * 0.7 }}>
                  <Image
                    src={`/clients/${client.logo}`}
                    alt={client.name}
                    fill
                    className="object-contain p-1 rounded-full"
                    sizes="64px"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
