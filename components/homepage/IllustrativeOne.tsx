'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowRight, Zap, Shield, Globe, Car, Factory, Building, Users, Newspaper } from 'lucide-react';
import EcosystemEnabler from './ecosystem_enabler';
import ClientLogoStrip from '../common/ClientLogoStrip';
import MegaNavbar from '../layout/MegaNavbar';
import BannerSlideshow from './BannerSlideshow';
import PartnershipEcosystem from './PartnershipEcosystem';

import CaseStudies from './CaseStudies';

// Animated floating shapes for visual interest
const FloatingShapes = () => (
  <>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full pointer-events-none`}
        style={{
          width: `${60 + Math.random() * 80}px`,
          height: `${60 + Math.random() * 80}px`,
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 80}%`,
          background: `linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(9,9,121,0.1) 100%)`,
          filter: 'blur(8px)'
        }}
        animate={{
          y: [0, 20 + Math.random() * 30, 0],
          x: [0, -10 + Math.random() * 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: i * 0.5
        }}
      />
    ))}
  </>
);

export default function IllustrativeOne() {
  // Parallax/fade effect for bg_18 in hero section
  const { scrollYProgress } = useScroll();
  const heroBg18Opacity = useTransform(scrollYProgress, [0, 0.18, 0.32], [0, 0.7, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Unified Background: bg_17 for entire homepage */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-white via-blue-50 to-blue-100 bg-cover bg-center">
        <Image src="/bg_17.jpg" alt="Background 17" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-white/20" />
      </div>
      {/* Parallax/Fade overlay of bg_18 in hero section only */}
      <motion.div
        className="fixed inset-0 z-[-1] bg-cover bg-center pointer-events-none"
        style={{ opacity: heroBg18Opacity }}
      >
        <Image src="/bg_18.jpg" alt="Background 18" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/40" />
      </motion.div>

      {/* --- Main Content Sections (keep order, ensure all tags close properly) --- */}

      {/* Mega Navigation Menu */}
      <MegaNavbar />


      {/* Main Banner - Modern, Animated, Visually Stunning */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingShapes />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Animated Gradient Heading + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white text-base font-semibold mb-2 shadow-xl backdrop-blur-lg animate-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Welcome to the Future of Treasury
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold text-white drop-shadow-md"
              >
                Elevate Your Finance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-white/90 mt-2 mb-8 drop-shadow"
              >
                AI-powered, globally connected, and beautifully simple. Experience treasury management like never before.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 hover:shadow-2xl transition-all duration-300 flex items-center text-lg"
                >
                  Get Started <ArrowRight className="ml-3 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(186, 51, 255, 0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border-2 border-white/80 text-white rounded-xl font-bold bg-white/20 shadow-lg hover:bg-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Discover More
                </motion.button>
              </div>
            </motion.div>
            {/* Right: BannerSlideshow */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1 }}
              className="flex items-center justify-center relative"
            >
              <BannerSlideshow />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Winning Together */}
      <section className="py-16 relative">
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Winning Together</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Leading organizations leverage our platform for end-to-end digitization of treasury, risk, trade finance,
              and supply chain operations, achieving agility, insights, and productivity.
            </p>
          </motion.div>
        </div>
        {/* End-to-end logo strip, outside of any container */}
        <div className="w-full">
          <ClientLogoStrip variant="illustrative2" />
        </div>
      </section>

      {/* Ecosystem Enabler Visualization (merged centerpiece, no section/bg) */}
      <div className="w-full flex flex-col items-center justify-center py-12">
        {/* Inlined EcosystemEnablerContent - blue/white theme, no section/bg, seamless merge */}
        {(() => {
          // --- Begin EcosystemEnablerContent (inlined, blue/white theme) ---
          const { useRef, useEffect, useState } = require('react');
          const { motion, useAnimation } = require('framer-motion');
          const [size, setSize] = useState(600);
          const containerRef = useRef(null);
          const serviceControls = useAnimation();
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
          const interfaceRingRadius = size * 0.47;
          const interfaceBoxRadius = size * 0.47;
          const interfaceBoxSize = size * 0.15;
          const services = [
            { name: "Cash & Liquidity", icon: require('lucide-react').DollarSign, desc: "Visibility, forecasting, bank analysis" },
            { name: "Payments", icon: require('lucide-react').CreditCard, desc: "Approvals, automation, centralization" },
            { name: "Supply Chain", icon: require('lucide-react').Layers, desc: "AP/AR automation, working capital" },
            { name: "Commodity", icon: require('lucide-react').PieChart, desc: "Margin, hedging, exposure tracking" },
            { name: "Currency Risk", icon: require('lucide-react').RefreshCcw, desc: "Hedging, derivatives, valuation" },
            { name: "Investment", icon: require('lucide-react').TrendingUp, desc: "Mutual funds, FDs, PMS, bonds" },
            { name: "Trade Finance", icon: require('lucide-react').Globe, desc: "LCs, BCs, shipment finance" },
            { name: "Debt Mgmt", icon: require('lucide-react').BarChart2, desc: "Borrowings, loans, intercompany" },
          ];
          const interfaces = [
            { name: "Banks", icon: require('lucide-react').Landmark },
            { name: "Dealing Platforms", icon: require('lucide-react').Repeat },
            { name: "Marketing Data Providers", icon: require('lucide-react').Database },
            { name: "ERP & 3rd Party", icon: require('lucide-react').Puzzle },
          ];
          const circlePosition = (i: number, total: number, radius: number, center: number, offsetAngle: number = -Math.PI / 2) => {
            const angle = (i / total) * 2 * Math.PI + offsetAngle;
            return {
              x: center + radius * Math.cos(angle),
              y: center + radius * Math.sin(angle),
            };
          };
          return (
            <div ref={containerRef} className="relative mx-auto w-full max-w-5xl aspect-square min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-4/5 h-4/5 rounded-full bg-white/60 blur-3xl opacity-40" />
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute z-30 flex items-center justify-center"
                style={{ width: ibsLogoRing, height: ibsLogoRing, top: center - ibsLogoRing / 2, left: center - ibsLogoRing / 2 }}
              >
                <div className="absolute inset-0 rounded-full border-8 border-blue-100 shadow-2xl bg-white" />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="relative" style={{ width: ibsLogoRing * 0.5, height: ibsLogoRing * 0.5 }}>
                    <Image src="/Ibs_logo_1.png" alt="IBS Logo" fill className="object-contain" priority />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="font-extrabold text-blue-700 leading-tight" style={{ fontSize: serviceBoxSize * 0.17, letterSpacing: 1 }}>IBSFintech Services</span>
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
                        x1={center} y1={center} x2={x} y2={y} stroke="#3b82f6" strokeWidth={size * 0.0025}
                        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle
                        r={size * 0.005}
                        fill="#fff"
                        initial={{ cx: center, cy: center, opacity: 0 }}
                        animate={{ cx: [center, x], cy: [center, y], opacity: [0.8, 1, 0.8] }}
                        transition={{ repeat: Infinity, duration: 5, delay: i * 0.3, ease: "easeInOut" }}
                        style={{ filter: 'drop-shadow(0 0 6px #fff)' }}
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
                        x1={center} y1={center} x2={x} y2={y} stroke="#3b82f6" strokeWidth={size * 0.002}
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
                  stroke="#fff" strokeWidth="1" fill="none" strokeDasharray="10 10"
                  initial={{ rotate: 0 }} animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                />
                <text className="fill-current text-white uppercase tracking-widest font-bold" style={{ fontSize: size * 0.02 }}>
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
                    className="absolute z-20 flex flex-col items-center justify-center text-center bg-white border border-blue-100 shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    style={{ width: serviceBoxSize, height: serviceBoxSize, top: y - serviceBoxSize / 2, left: x - serviceBoxSize / 2 }}
                  >
                    <div className="mb-2 bg-white text-blue-700 rounded-full flex items-center justify-center shadow"
                      style={{ width: serviceBoxSize * 0.32, height: serviceBoxSize * 0.32 }}>
                      <service.icon size={Math.round(serviceBoxSize * 0.2)} strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-blue-900 mb-1 leading-tight" style={{ fontSize: serviceBoxSize * 0.11 }}>{service.name}</h4>
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
                    className="absolute z-20 flex flex-col items-center justify-center text-center bg-white/60 backdrop-blur-lg border border-blue-300 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-blue-400/20 hover:border-blue-400/50 hover:scale-105"
                    style={{ width: interfaceBoxSize, height: interfaceBoxSize, top: y - interfaceBoxSize / 2, left: x - interfaceBoxSize / 2 }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-2 bg-white text-blue-700 rounded-full flex items-center justify-center shadow-inner"
                        style={{ width: interfaceBoxSize * 0.3, height: interfaceBoxSize * 0.3 }}>
                        <iface.icon size={Math.round(interfaceBoxSize * 0.2)} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-semibold text-blue-900 leading-tight px-2" style={{ fontSize: interfaceBoxSize * 0.12 }}>{iface.name}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          );
          // --- End EcosystemEnablerContent ---
        })()}
      </div>

      {/* Partnership Ecosystem Section */}
      <PartnershipEcosystem variant="illustrative1" />

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Why Choose Us</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Unparalleled features and benefits that set our platform apart.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Innovative AI', description: 'AI-driven insights for smarter financial decisions.', stat: '80% Automation' },
              { icon: Shield, title: 'Trusted Reliability', description: '99.9% uptime with robust security.', stat: '99.9% Uptime' },
              { icon: Globe, title: 'Global Reach', description: 'Support for multi-currency operations worldwide.', stat: '50+ Countries' },
            ].map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 h-full flex flex-col">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <diff.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{diff.title}</h3>
                    <p className="text-blue-500 text-sm">{diff.description}</p>
                    <div className="flex-grow"></div>
                    <span className="mt-4 inline-block px-4 py-1 bg-blue-500/80 text-white text-sm font-medium rounded-full self-start">
                      {diff.stat}
                    </span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax/Fade overlay of bg_18 in lower section */}
      <motion.div
        className="fixed inset-0 z-[-1] bg-cover bg-center pointer-events-none"
        style={{ opacity: heroBg18Opacity }}
      >
        <Image src="/bg_18.jpg" alt="Background 18 Lower" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/40" />
      </motion.div>

      {/* Featured Industries */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Featured Industries</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Tailored solutions for diverse industry needs, driving efficiency and growth across sectors.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Automotive', icon: Car, description: 'Streamlined supply chain finance solutions for the automotive industry.', metric: '30% Cost Reduction', color: 'blue' },
              { name: 'Manufacturing', icon: Factory, description: 'End-to-end financial solutions for manufacturing operations.', metric: '40% Efficiency Gain', color: 'emerald' },
              { name: 'Financial Services', icon: Building, description: 'Advanced analytics and risk management for financial institutions.', metric: '50% Risk Reduction', color: 'violet' },
              { name: 'Retail & E-commerce', icon: Users, description: 'Seamless payment processing and financial operations for retail.', metric: '25% Savings', color: 'amber' },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="bg-white/90 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200">
                    <div className="h-2 bg-blue-700" />
                    <div className="p-6">
                      <div className="mb-4 p-3 rounded-lg w-12 h-12 flex items-center justify-center bg-white">
                        <industry.icon className="h-6 w-6 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{industry.name}</h3>
                      <p className="text-blue-700 mb-4">{industry.description}</p>
                      <span className="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-blue-500/80 text-white">
                        {industry.metric} <ArrowRight className="inline-block ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">Partnership Ecosystem</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
              Collaborating with leading partners to deliver unmatched value and innovation in treasury and finance.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {['partner1', 'partner2', 'partner3', 'partner4'].map((partner, index) => (
  <motion.div
    key={partner}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-white/90 rounded-2xl shadow-md hover:shadow-xl transition-all p-4 h-28 w-48 flex items-center justify-center"
  >
    <Image
      src={`/partners/${partner}.png`}
      alt={`Partner ${index + 1}`}
      width={160}
      height={56}
      className="object-contain max-h-14 w-auto"
    />
  </motion.div>
))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Latest News</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Stay updated with our latest achievements and insights.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'AI Dashboard Launch', date: 'May 2025', description: 'New real-time analytics for treasury insights.' },
              { title: 'Global Expansion', date: 'April 2025', description: 'Now serving 30+ countries.' },
              { title: 'FinTech Award', date: 'March 2025', description: 'Named Top Treasury Platform 2025.' },
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 h-full flex flex-col">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <Newspaper className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{news.title}</h3>
                    <p className="text-blue-500 text-sm">{news.description}</p>
                    <div className="flex-grow"></div>
                    <span className="mt-4 inline-block px-4 py-1 bg-blue-500/80 text-white text-sm font-medium rounded-full self-start">
                      {news.date}
                    </span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white dark:text-white">Let's Connect</h2>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Ready to revolutionize your treasury operations? Contact us to explore our solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-700 rounded-lg shadow-md hover:bg-white flex items-center"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-100 text-white rounded-lg hover:bg-white/20"
              >
                Request Demo
              </motion.button>
            </div>
            <div className="mt-12">
              <div className="flex justify-center gap-6 mb-4">
                {['Twitter', 'LinkedIn', 'Email'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                    aria-label={social}
                  >
                    {social}
                  </a>
                ))}
              </div>
              <p className="text-sm">© 2025 Treasury Management Platform. All Rights Reserved.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}