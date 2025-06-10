import { useEffect } from "react";
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

const circlePosition = (i: number, total: number, radius: number, offsetAngle = -Math.PI / 2) => {
  const angle = (i / total) * 2 * Math.PI + offsetAngle;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
};

export default function IBSServiceNetwork() {
  const rotateClients = useAnimation();
  const serviceControls = useAnimation();

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

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="relative mx-auto w-full max-w-4xl aspect-square">
        {/* Background Blur Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-full bg-blue-50 blur-3xl opacity-50" />
        </div>

        {/* IBS Center Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 z-30 w-24 h-24 -translate-x-1/2 -translate-y-1/2 
                     bg-gradient-to-br from-blue-50 to-white border-4 border-blue-100 
                     shadow-xl rounded-full flex items-center justify-center"
        >
          <div className="w-12 h-12 relative">
            <Image
              src="/ibs_logo_sample.png"
              alt="IBS Logo"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </motion.div>

        {/* Connecting Lines */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 800 800">
          {services.map((_, i) => {
            const { x, y } = circlePosition(i, services.length, 180);
            return (
              <motion.line
                key={`line-${i}`}
                x1={400}
                y1={400}
                x2={400 + x}
                y2={400 + y}
                stroke="#dbeafe"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              />
            );
          })}
        </svg>

        {/* Service Boxes */}
        {services.map((service, i) => {
          const { x, y } = circlePosition(i, services.length, 180);
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
              className="absolute z-20 w-32 h-32 p-2 bg-white border border-gray-100 shadow-md rounded-xl 
                         flex flex-col items-center justify-center text-center hover:shadow-xl hover:scale-105 
                         transition-all duration-300 backdrop-blur-sm"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-8 h-8 mb-1 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <service.icon size={16} strokeWidth={1.75} />
              </div>
              <h4 className="text-[11px] font-semibold text-gray-800 mb-1">{service.name}</h4>
              <p className="text-[9px] text-gray-500 leading-tight px-1">{service.desc}</p>
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
            const { x, y } = circlePosition(i, clients.length, 270);
            return (
              <motion.div
                key={`client-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="absolute w-16 h-16 bg-white rounded-full border border-gray-100 shadow-sm 
                           flex items-center justify-center hover:shadow-md hover:scale-110 transition-all"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10 - i
                }}
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src={`/clients/${client.logo}`}
                    alt={client.name}
                    fill
                    className="object-contain p-0.5 rounded-full"
                    sizes="32px"
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
