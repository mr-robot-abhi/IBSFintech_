import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  DollarSign, CreditCard, Layers, PieChart, RefreshCcw,
  TrendingUp, Globe, BarChart2
} from 'lucide-react';

const services = [
  { name: "Cash & Liquidity", icon: DollarSign },
  { name: "Payments", icon: CreditCard },
  { name: "Supply Chain", icon: Layers },
  { name: "Commodity", icon: PieChart },
  { name: "Currency Risk", icon: RefreshCcw },
  { name: "Investment", icon: TrendingUp },
  { name: "Trade Finance", icon: Globe },
  { name: "Debt Mgmt", icon: BarChart2 },
];

const clients = [
  "client1.png", "client2.jpg", "client3.jpg", "client4.jpg",
  "client5.png", "client6.png", "client7.png", "client8.png"
];

export default function IBSNetworkTwo() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col items-center justify-center space-y-16">
          {/* Top Layer: Clients (static with hover zoom) */}
          <div className="flex flex-wrap justify-center gap-10">
            {clients.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="w-16 h-16 rounded-full bg-white border shadow-md flex items-center justify-center transition-transform duration-300"
              >
                <Image
                  src={`/clients/${logo}`}
                  alt={`Client ${i + 1}`}
                  width={32}
                  height={32}
                  className="object-contain rounded-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Middle Layer: Services */}
          <div className="relative w-full flex flex-wrap justify-center gap-10 z-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-40 h-40 bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition"
              >
                <div className="w-10 h-10 mb-2 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                  <service.icon size={20} />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">{service.name}</h4>
              </motion.div>
            ))}
          </div>

          {/* Connector Lines */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120px] w-full h-[400px] pointer-events-none z-0" viewBox="0 0 1200 400">
            {services.map((_, i) => {
              const x1 = 600;
              const y1 = 200;
              const x2 = 120 + (i % 4) * 250;
              const y2 = i < 4 ? 80 : 320;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#bfdbfe"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Center IBS Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] w-32 h-32 bg-white border-4 border-blue-200 rounded-full shadow-xl z-20 flex items-center justify-center">
            <Image src="/ibs_logo_sample.png" alt="IBS Logo" width={64} height={64} />
          </div>
        </div>
      </div>
    </section>
  );
}
