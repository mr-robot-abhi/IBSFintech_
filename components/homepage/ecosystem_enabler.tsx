import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { DollarSign, CreditCard, Layers, PieChart, RefreshCcw, TrendingUp, Globe, BarChart2, Landmark, Puzzle, Repeat, Database } from "lucide-react";

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
  { name: "Market Data Providers", icon: Database },
  { name: "ERP & 3rd Party", icon: Puzzle },
];

export default function EcosystemEnabler() {
  const serviceControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const minDimension = Math.min(rect.width, rect.height, 600);
        setDimensions({ width: minDimension, height: minDimension });
        setIsReady(true);
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (isReady) {
      serviceControls.start({
        scale: [0.85, 1.05, 1],
        opacity: 1,
        transition: { duration: 0.5, staggerChildren: 0.1 }
      });
    }
  }, [isReady, serviceControls]);

  const center = dimensions.width / 2;
  const radius = dimensions.width * 0.32;
  const serviceBoxSize = dimensions.width * 0.17;
  const ibsLogoRing = dimensions.width * 0.25;
  
  // Calculate positions for all 8 services
  const getServicePosition = (index: number) => {
    const angle = (index / 8) * Math.PI * 2 - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  };

  const servicePositions = Array.from({ length: 8 }, (_, i) => getServicePosition(i));

  return (
    <section className="relative bg-white dark:bg-transparent py-24 overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image src="/bg_12.jpg" alt="Ecosystem background" fill className="object-cover dark:hidden" style={{ opacity: 0.7 }} priority={false} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/98 dark:hidden" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center">
          {/* Left column - Text content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Ecosystem</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              This is some placeholder text describing the ecosystem. You can replace this with your own content.
            </p>
            
            {/* Key Features */}
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-100 dark:border-teal-800">
              <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Comprehensive treasury management solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Real-time analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Advanced risk management tools</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Diagram */}
          <div ref={containerRef} className="relative mx-auto w-full aspect-square min-h-[500px]">
            {isReady && (
              <>
                {/* Background glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full rounded-full bg-teal-50/60 dark:bg-teal-950/20 blur-3xl opacity-40" />
                </div>

                {/* Center Logo */}
                <div className="absolute z-30 flex items-center justify-center" 
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}>
                  <div className="relative flex flex-col items-center justify-center w-full h-full">
                    <div className="relative rounded-full border-8 border-white shadow-2xl bg-white"
                      style={{ width: ibsLogoRing, height: ibsLogoRing }}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="relative" style={{ width: ibsLogoRing * 0.4, height: ibsLogoRing * 0.4 }}>
                          <Image src="/Ibs_logo_1.png" alt="IBS Logo" fill className="object-contain" priority />
                        </div>
                        <div className="mt-2 text-center">
                          <span className="font-semibold text-teal-700 dark:text-teal-300 leading-tight" style={{ fontSize: ibsLogoRing * 0.09 }}>
                            IBS Fintech
                          </span>
                          <br />
                          <span className="font-semibold text-teal-700 dark:text-teal-300 leading-tight" style={{ fontSize: ibsLogoRing * 0.08 }}>
                            Treasury Tech Platform
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SVG for lines and dots */}
                <svg className="absolute top-0 left-0 w-full h-full" width={dimensions.width} height={dimensions.height} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} style={{ zIndex: 10 }}>
                  {/* Service connection lines */}
                  {servicePositions.map((pos, i) => (
                    <g key={`line-group-${i}`}>
                      <motion.line
                        x1={center}
                        y1={center}
                        x2={pos.x}
                        y2={pos.y}
                        stroke="#99f6e4"
                        strokeWidth={dimensions.width * 0.0025}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle
                        r={dimensions.width * 0.005}
                        fill="#2dd4bf"
                        initial={{ cx: center, cy: center, opacity: 0 }}
                        animate={{ 
                          cx: [center, pos.x], 
                          cy: [center, pos.y], 
                          opacity: [0.7, 1, 0.7] 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 5, 
                          delay: i * 0.3, 
                          ease: "easeInOut" 
                        }}
                        style={{ filter: 'drop-shadow(0 0 2px #2dd4bf)' }}
                      />
                    </g>
                  ))}
                </svg>

                {/* Service boxes */}
                {services.map((service, i) => {
                  const pos = servicePositions[i];
                  return (
                    <motion.div
                      key={`service-${i}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={serviceControls}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                      className="absolute z-20 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 border border-teal-100 dark:border-teal-700 shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      style={{
                        width: serviceBoxSize,
                        height: serviceBoxSize,
                        top: pos.y - serviceBoxSize / 2,
                        left: pos.x - serviceBoxSize / 2
                      }}
                    >
                      <div className="mb-2 bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center shadow"
                        style={{ 
                          width: serviceBoxSize * 0.32, 
                          height: serviceBoxSize * 0.32,
                          padding: serviceBoxSize * 0.08
                        }}
                      >
                        <service.icon size={serviceBoxSize * 0.18} />
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1" style={{ fontSize: serviceBoxSize * 0.12 }}>
                        {service.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-tight px-2" style={{ fontSize: serviceBoxSize * 0.09 }}>
                        {service.desc}
                      </p>
                    </motion.div>
                  );
                })}

                {/* Interfaces Section */}
                <div className="absolute z-20 right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end"
                  style={{ 
                    width: dimensions.width * 0.3,
                    right: '-30px'
                  }}>
                  <motion.h3 
                    className="text-lg font-bold text-teal-700 dark:text-teal-300 mb-4 mr-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    Interfaces
                  </motion.h3>
                  
                  <div className="flex flex-col space-y-4 mr-4">
                    {interfaces.map((iface, i) => (
                      <motion.div
                        key={`interface-${i}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + i * 0.2 }}
                        className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-teal-100 dark:border-teal-700 shadow-md rounded-lg px-3 py-2"
                        style={{
                          width: dimensions.width * 0.18,
                          height: dimensions.width * 0.08
                        }}
                      >
                        <iface.icon className="text-teal-500 dark:text-teal-400" size={20} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{iface.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}