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

export default function EcosystemEnabler() {
  const serviceControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(600);

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
      transition: { duration: 0.5, staggerChildren: 0.1 }
    });
  }, [serviceControls]);

  const center = size / 2;
  const ibsLogoRing = size * 0.25;
  const serviceRadius = size * 0.28;
  const serviceBoxSize = size * 0.14;
  const interfaceRingRadius = size * 0.47; // Increased radius to prevent overlap
  const interfaceBoxRadius = size * 0.47; // Increased radius to prevent overlap
  const interfaceBoxSize = size * 0.15;

  return (
    <section className="relative bg-white dark:bg-transparent py-24 overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image src="/bg_12.jpg" alt="Ecosystem background" fill className="object-cover dark:hidden" style={{ opacity: 0.7 }} priority={false} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/98 dark:hidden" />
      </div>
      <div ref={containerRef} className="relative mx-auto w-full max-w-5xl aspect-square min-h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-4/5 h-4/5 rounded-full bg-teal-50/60 dark:bg-teal-950/20 blur-3xl opacity-40" />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute z-30 flex items-center justify-center"
          style={{ width: ibsLogoRing, height: ibsLogoRing, top: center - ibsLogoRing / 2, left: center - ibsLogoRing / 2 }}
        >
          <div className="absolute inset-0 rounded-full border-8 border-white shadow-2xl bg-white" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="relative" style={{ width: ibsLogoRing * 0.5, height: ibsLogoRing * 0.5 }}>
              <Image src="/Ibs_logo_1.png" alt="IBS Logo" fill className="object-contain" priority />
            </div>
            <div className="mt-2 text-center">
              <span className="font-semibold text-teal-700 dark:text-teal-300 leading-tight" style={{ fontSize: serviceBoxSize * 0.13 }}>IBSFintech Services</span>
            </div>
          </div>
        </motion.div>

        <svg className="absolute top-0 left-0 w-full h-full" width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ zIndex: 10 }}>
          {/* Service Connector Lines & Particles */}
          {services.map((_, i) => {
            const { x, y } = circlePosition(i, services.length, serviceRadius, center);
            return (
              <g key={`line-group-${i}`}>
                <motion.line
                  x1={center} y1={center} x2={x} y2={y} stroke="#99f6e4" strokeWidth={size * 0.0025}
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.circle
                  r={size * 0.005}
                  fill="#2dd4bf"
                  initial={{ cx: center, cy: center, opacity: 0 }}
                  animate={{ cx: [center, x], cy: [center, y], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 5, delay: i * 0.3, ease: "easeInOut" }}
                  style={{ filter: 'drop-shadow(0 0 2px #2dd4bf)' }}
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
                  x1={center} y1={center} x2={x} y2={y} stroke="#38b2ac" strokeWidth={size * 0.002}
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.circle
                  r={size * 0.004}
                  fill="#38b2ac"
                  initial={{ cx: center, cy: center, opacity: 0 }}
                  animate={{ cx: [center, x], cy: [center, y], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 6, delay: 0.8 + i * 0.4, ease: "easeInOut" }}
                  style={{ filter: 'drop-shadow(0 0 2px #38b2ac)' }}
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
            stroke="#38b2ac" strokeWidth="1" fill="none" strokeDasharray="10 10"
            initial={{ rotate: 0 }} animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
          <text className="fill-current text-teal-500 dark:text-teal-400 uppercase tracking-widest font-bold" style={{ fontSize: size * 0.02 }}>
            <textPath href="#interfaceRingPath" startOffset="25%" textAnchor="middle" dy={-size * 0.015}>Interfaces</textPath>
          </text>
        </svg>

        {services.map((service, i) => {
          const { x, y } = circlePosition(i, services.length, serviceRadius, center);
          return (
            <motion.div
              key={`service-${i}`}
              initial={{ opacity: 0, scale: 0.85 }} animate={serviceControls}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 }}
              className="absolute z-20 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 border border-teal-100 dark:border-teal-700 shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              style={{ width: serviceBoxSize, height: serviceBoxSize, top: y - serviceBoxSize / 2, left: x - serviceBoxSize / 2 }}
            >
              <div className="mb-2 bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center shadow"
                style={{ width: serviceBoxSize * 0.32, height: serviceBoxSize * 0.32 }}>
                <service.icon size={Math.round(serviceBoxSize * 0.2)} strokeWidth={2} />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1 leading-tight" style={{ fontSize: serviceBoxSize * 0.11 }}>{service.name}</h4>
              <p className="text-gray-500 dark:text-gray-300 leading-tight px-2" style={{ fontSize: serviceBoxSize * 0.09 }}>{service.desc}</p>
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
              className="absolute z-20 flex flex-col items-center justify-center text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-teal-500/30 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-teal-500/20 hover:border-teal-500/50 hover:scale-105"
              style={{ width: interfaceBoxSize, height: interfaceBoxSize, top: y - interfaceBoxSize / 2, left: x - interfaceBoxSize / 2 }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 bg-teal-100/50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-full flex items-center justify-center shadow-inner"
                  style={{ width: interfaceBoxSize * 0.3, height: interfaceBoxSize * 0.3 }}>
                  <iface.icon size={Math.round(interfaceBoxSize * 0.2)} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white leading-tight px-2" style={{ fontSize: interfaceBoxSize * 0.12 }}>{iface.name}</h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
} 