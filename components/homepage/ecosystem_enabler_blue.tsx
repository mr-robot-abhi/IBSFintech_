import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  DollarSign, CreditCard, Layers, PieChart, RefreshCcw,
  TrendingUp, Globe, BarChart2, Landmark, Puzzle, Repeat, Database
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

const interfaces = [
    { name: "Banks", icon: Landmark },
    { name: "Dealing Platforms", icon: Repeat },
    { name: "Marketing Data Providers", icon: Database },
    { name: "ERP & 3rd Party", icon: Puzzle },
];

const circlePosition = (i: number, total: number, radius: number, center: number, offsetAngle = -Math.PI / 2) => {
  const angle = (i / total) * 2 * Math.PI + offsetAngle;
  return {
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  };
};

export default function EcosystemEnablerBlue() {
  const serviceControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(900); // Larger default size for style 2

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
    serviceControls.start({
      scale: [0.85, 1.05, 1],
      opacity: 1,
      transition: { duration: 0.5 }
    });
  }, [serviceControls]);

  const center = size / 2;
  const ibsLogoSize = size * 0.22;
  const ibsLogoRing = size * 0.30;
  const serviceRadius = size * 0.28;
  const serviceBoxSize = size * 0.14;
  const interfaceRingRadius = size * 0.47;
  const interfaceBoxRadius = size * 0.47;
  const interfaceBoxSize = size * 0.15;

  return (
    <section className="relative py-12 overflow-hidden">


      <div ref={containerRef} className="relative mx-auto" style={{ width: 1200, height: 1200, minWidth: 1200, minHeight: 1200 }}>
        {/* Background Blur Circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-4/5 h-4/5 rounded-full bg-blue-100/60 blur-3xl opacity-40" />
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
          <div className="absolute inset-0 rounded-full border-8 border-blue-200 shadow-2xl" />
          <div className="flex items-center justify-center w-full h-full">
            <div
              className="bg-white border-4 border-blue-100 shadow-xl rounded-full flex items-center justify-center mx-auto"
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
            return (
              <g key={`line-group-${i}`}>
                <motion.line
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="#60a5fa" // blue-400
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
                  r={size * 0.005}
                  fill="#fff"
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

          {/* Interface Connector Lines & Particles */}
          {interfaces.map((_, i) => {
            const angle = (i / interfaces.length) * 2 * Math.PI - Math.PI / 4 + (i % 2 === 0 ? Math.PI / 8 : -Math.PI / 8);
            const x = center + interfaceBoxRadius * Math.cos(angle);
            const y = center + interfaceBoxRadius * Math.sin(angle);
            return (
              <g key={`interface-line-group-${i}`}>
                <motion.line
                  x1={center} y1={center} x2={x} y2={y} stroke="#60a5fa" strokeWidth={size * 0.002}
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.circle
                  r={size * 0.004}
                  fill="#fff"
                  initial={{ cx: center, cy: center, opacity: 0 }}
                  animate={{ cx: [center, x], cy: [center, y], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 6, delay: 0.8 + i * 0.4, ease: "easeInOut" }}
                  style={{ filter: 'drop-shadow(0 0 4px #fff)' }}
                />
              </g>
            );
          })}

          {/* Interface Ring */}
          <defs>
            <path id="interfaceRingPath" d={`M ${center}, ${center - interfaceRingRadius} A ${interfaceRingRadius},${interfaceRingRadius} 0 1,1 ${center-0.01},${center - interfaceRingRadius}`} fill="none" />
          </defs>
          <motion.circle
            cx={center} cy={center} r={interfaceRingRadius}
            stroke="#60a5fa" strokeWidth="1" fill="none" strokeDasharray="10 10"
            initial={{ rotate: 0 }} animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
          <text className="fill-current text-blue-400 uppercase tracking-widest font-bold" style={{ fontSize: size * 0.02 }}>
            <textPath href="#interfaceRingPath" startOffset="25%" textAnchor="middle" dy={-size * 0.015}>Interfaces</textPath>
          </text>
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
              className="absolute z-20 flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-lg border border-blue-100 shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
              <h4 className="font-semibold text-blue-800 mb-1 leading-tight" style={{ fontSize: serviceBoxSize * 0.11 }}>{service.name}</h4>
              <p className="text-blue-500 leading-tight px-2" style={{ fontSize: serviceBoxSize * 0.09 }}>{service.desc}</p>
            </motion.div>
          );
        })}

        {interfaces.map((iface, i) => {
          const angle = (i / interfaces.length) * 2 * Math.PI - Math.PI / 4 + (i % 2 === 0 ? Math.PI / 8 : -Math.PI / 8);
          const x = center + interfaceBoxRadius * Math.cos(angle);
          const y = center + interfaceBoxRadius * Math.sin(angle);
          return (
            <motion.div
              key={`interface-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 + i * 0.15, type: 'spring' } }}
              className="absolute z-20 flex flex-col items-center justify-center text-center bg-white/60 backdrop-blur-lg border border-blue-500/30 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/50 hover:scale-105"
              style={{ width: interfaceBoxSize, height: interfaceBoxSize, top: y - interfaceBoxSize / 2, left: x - interfaceBoxSize / 2 }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 bg-blue-100/50 text-blue-600 rounded-full flex items-center justify-center shadow-inner"
                  style={{ width: interfaceBoxSize * 0.3, height: interfaceBoxSize * 0.3 }}>
                  <iface.icon size={Math.round(interfaceBoxSize * 0.2)} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-blue-800 leading-tight px-2" style={{ fontSize: interfaceBoxSize * 0.12 }}>{iface.name}</h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
} 