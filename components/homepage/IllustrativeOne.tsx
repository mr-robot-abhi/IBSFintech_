'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import IBSServiceNetwork from './ibs_network';
import { Button } from '@/components/ui/button';
import { BarChart2, Shield, Globe, TrendingUp, Users, Layers, ArrowRight } from 'lucide-react';

export default function IllustrativeOne() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const smoothY1 = useSpring(y1, { stiffness: 80, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 80, damping: 30 });

  return (
    <div className="bg-gray-50" ref={containerRef}>
      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div className="absolute inset-0" style={{ y: smoothY1 }}>
            <Image src="/bg_1.jpg" alt="Background" fill className="object-cover mix-blend-overlay" priority />
          </motion.div>
          <motion.div className="absolute inset-0 opacity-20" style={{ y: smoothY2 }}>
            <Image src="/bg_6.jpg" alt="Overlay" fill className="object-cover mix-blend-overlay" priority />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Unlock the Future of Treasury Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            One platform to streamline operations, ensure compliance, and drive growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-3 text-lg font-semibold shadow-md">
              Book a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-800 rounded-full px-8 py-3 text-lg font-semibold">
              Explore Platform
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Ecosystem Enabler */}
      <section className="bg-gradient-to-b from-white to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-6 text-center pt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-gray-900 mb-4"
          >
            Ecosystem Enabler
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            A collaborative ecosystem connecting treasury services with client networks to drive innovation.
          </motion.p>
        </div>
        <IBSServiceNetwork />
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 mb-12">Three simple steps to transform your treasury operations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Connect",
                desc: "Integrate with ERP, banks & market data sources.",
                icon: Globe
              },
              {
                title: "Automate",
                desc: "Streamline workflows, ensure compliance and visibility.",
                icon: Shield
              },
              {
                title: "Optimize",
                desc: "Leverage analytics for decisions and strategic moves.",
                icon: BarChart2
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-2xl transition"
              >
                <div className="w-14 h-14 mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Trusted By Leading Enterprises</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center border"
              >
                <Image src={`/clients/client${i + 1}.${i === 1 || i === 2 ? 'jpg' : 'png'}`} alt={`Client ${i + 1}`} width={50} height={50} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY ADVANTAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose IBSFINtech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {[
              { icon: TrendingUp, title: "Enterprise-Grade", desc: "Battle-tested for scalability and robustness." },
              { icon: Layers, title: "Modular & Configurable", desc: "Tailored to meet diverse business needs." },
              { icon: Users, title: "Client-First Approach", desc: "Trusted partner in your growth journey." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl border"
              >
                <div className="w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Transform Your Treasury?</h2>
          <p className="text-lg mb-8">Get in touch and discover how we can empower your finance team.</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md">Request a Demo</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-full font-semibold">Contact Sales</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
