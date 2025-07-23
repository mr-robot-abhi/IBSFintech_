'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowRight, Zap, Shield, Globe, Car, Factory, Building, Users, Newspaper, ShoppingBag, Cpu, Truck, Home, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import EcosystemEnabler from './ecosystem_enabler';
import ClientLogoStrip from '../common/ClientLogoStrip';
import ModernMegaMenu from '../layout/ModernMegaMenu';
import PartnershipEcosystem from './PartnershipEcosystem';

import CaseStudies from './CaseStudies';
import FintechParticlesBackground from './FintechParticlesBackground';

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
  const industries = [
    { name: 'Automotive', icon: Car, description: 'Streamlined supply chain finance solutions for the automotive industry.', metric: '30% Cost Reduction' },
    { name: 'Manufacturing', icon: Factory, description: 'End-to-end financial solutions for manufacturing operations.', metric: '40% Efficiency Gain' },
    { name: 'Financial Services', icon: Building, description: 'Advanced analytics and risk management for financial institutions.', metric: '50% Risk Reduction' },
    { name: 'Healthcare', icon: Users, description: 'Financial solutions tailored for healthcare providers and institutions.', metric: '35% Faster Payments' },
    { name: 'Retail', icon: ShoppingBag, description: 'Omnichannel payment and inventory financing solutions.', metric: '45% Sales Growth' },
    { name: 'Technology', icon: Cpu, description: 'Financial solutions for tech companies and startups.', metric: '60% Faster Funding' },
    { name: 'Energy', icon: Zap, description: 'Sustainable energy financing and risk management.', metric: '50% Clean Energy' },
    { name: 'Logistics', icon: Truck, description: 'Supply chain and working capital optimization.', metric: '45% Faster Delivery' },
    { name: 'Real Estate', icon: Home, description: 'Property development and investment financing.', metric: '35% ROI Increase' },
    { name: 'Education', icon: BookOpen, description: 'Financial solutions for educational institutions.', metric: '40% Cost Savings' },
  ];

  const [scrollX, setScrollX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const SCROLL_AMOUNT = 336; // 80 (w-80) + 16 (gap-4)
  const MAX_SCROLL = -((industries.length - 4) * SCROLL_AMOUNT);

  const scrollLeft = () => {
    setScrollX(prev => {
      const newScroll = Math.min(prev + SCROLL_AMOUNT, 0);
      return newScroll;
    });
  };

  const scrollRight = () => {
    setScrollX(prev => {
      const newScroll = Math.max(prev - SCROLL_AMOUNT, MAX_SCROLL);
      return newScroll;
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollStart(scrollX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = x - startX;
    setScrollX(Math.max(MAX_SCROLL, Math.min(0, scrollStart - walk)));
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };


  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <FintechParticlesBackground />
      {/* --- Main Content Sections (keep order, ensure all tags close properly) --- */}

      {/* Mega Navigation Menu */}
      <ModernMegaMenu />


      {/* Main Banner - Modern, Animated, Visually Stunning */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingShapes />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10 px-4">
          <div className="text-center">
            {/* Centered Content: Animated Gradient Heading + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white text-base font-semibold mb-2 shadow-xl backdrop-blur-lg animate-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Welcome to the Future of Treasury
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
              >
                Elevate Your Finance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl md:text-3xl font-semibold text-white/90 mt-2 mb-8 drop-shadow-md max-w-3xl mx-auto"
              >
                AI-powered, globally connected, and beautifully simple. Experience treasury management like never before.
              </motion.p>
              <div className="flex flex-wrap gap-4 justify-center">
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
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Our Offerings</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Explore our comprehensive suite of solutions designed to address your every financial need.
            Our platform integrates seamlessly to provide unparalleled control and insight.
          </p>
        </div>
        {/* Inlined EcosystemEnablerContent - blue/white theme, no section/bg, seamless merge */}
        {(() => {
          // --- Begin EcosystemEnablerContent (inlined, blue/white theme) ---
          const [size, setSize] = useState(600);
          const containerRef = useRef<HTMLDivElement | null>(null);
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
                    className="absolute z-20 flex flex-col items-center justify-center text-center bg-gray-900/50 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    style={{ width: serviceBoxSize, height: serviceBoxSize, top: y - serviceBoxSize / 2, left: x - serviceBoxSize / 2 }}
                  >
                    <div className="mb-2 bg-white/10 text-white rounded-full flex items-center justify-center shadow-lg"
                      style={{ width: serviceBoxSize * 0.32, height: serviceBoxSize * 0.32 }}>
                      <service.icon size={Math.round(serviceBoxSize * 0.2)} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-semibold text-white mb-1 leading-tight" style={{ fontSize: serviceBoxSize * 0.11 }}>{service.name}</h4>
                    <p className="text-white/70 leading-tight px-2" style={{ fontSize: serviceBoxSize * 0.09 }}>{service.desc}</p>
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



      {/* Featured Industries Carousel */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent mb-4">
              Featured Industries
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Tailored solutions for diverse industry needs, driving efficiency and growth across sectors.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 py-4 transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${scrollX}px)`,
                  width: 'max-content',
                }}
              >
                {[
                  { name: 'Automotive', icon: Car, description: 'Streamlined supply chain finance solutions for the automotive industry.', metric: '30% Cost Reduction' },
                  { name: 'Manufacturing', icon: Factory, description: 'End-to-end financial solutions for manufacturing operations.', metric: '40% Efficiency Gain' },
                  { name: 'Financial Services', icon: Building, description: 'Advanced analytics and risk management for financial institutions.', metric: '50% Risk Reduction' },
                  { name: 'Healthcare', icon: Users, description: 'Financial solutions tailored for healthcare providers and institutions.', metric: '35% Faster Payments' },
                  { name: 'Retail', icon: ShoppingBag, description: 'Omnichannel payment and inventory financing solutions.', metric: '45% Sales Growth' },
                  { name: 'Technology', icon: Cpu, description: 'Financial solutions for tech companies and startups.', metric: '60% Faster Funding' },
                  { name: 'Energy', icon: Zap, description: 'Sustainable energy financing and risk management.', metric: '50% Clean Energy' },
                  { name: 'Logistics', icon: Truck, description: 'Supply chain and working capital optimization.', metric: '45% Faster Delivery' },
                  { name: 'Real Estate', icon: Home, description: 'Property development and investment financing.', metric: '35% ROI Increase' },
                  { name: 'Education', icon: BookOpen, description: 'Financial solutions for educational institutions.', metric: '40% Cost Savings' },
                ].map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-shrink-0 w-80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full">
                      <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-6 rounded-2xl shadow-xl border border-blue-900/30 h-full flex flex-col hover:shadow-2xl hover:border-blue-700/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="h-14 w-14 bg-blue-900/40 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-blue-700/30">
                          <industry.icon className="h-7 w-7 text-blue-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                        <p className="text-blue-100/80 text-sm mb-4 flex-grow">{industry.description}</p>
                        <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium rounded-full self-start hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                          {industry.metric} <ArrowRight className="inline-block ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollLeft}
              disabled={scrollX >= 0}
              aria-label="Previous industries"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollRight}
              disabled={scrollX <= -((industries.length - 4) * 336)} // 336px = 80px (w-80) + 16px (gap-4)
              aria-label="Next industries"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      {/* Partnership Ecosystem Section */}
      <PartnershipEcosystem variant="illustrative1" />

      {/* Case Studies */}
      <CaseStudies />

      {/* Latest News */}
      <section className="py-16 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-4">Latest News</h2>
            <p className="text-lg text-blue-100/90 max-w-3xl mx-auto">
              Stay updated with our latest achievements and insights.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'AI Dashboard Launch', 
                date: 'May 2025', 
                description: 'New real-time analytics for treasury insights.',
                icon: <Newspaper className="h-6 w-6 text-blue-300" />
              },
              { 
                title: 'Global Expansion', 
                date: 'April 2025', 
                description: 'Now serving 30+ countries.',
                icon: <Globe className="h-6 w-6 text-blue-300" />
              },
              { 
                title: 'FinTech Award', 
                date: 'March 2025', 
                description: 'Named Top Treasury Platform 2025.',
                icon: <Shield className="h-6 w-6 text-blue-300" />
              },
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full">
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-6 rounded-2xl shadow-xl border border-blue-900/30 h-full flex flex-col hover:shadow-2xl hover:border-blue-700/50 transition-all duration-300">
                    <div className="h-12 w-12 bg-blue-900/40 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-blue-700/30">
                      {news.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{news.title}</h3>
                    <p className="text-blue-100/80 text-sm mb-4">{news.description}</p>
                    <div className="flex-grow"></div>
                    <span className="mt-4 inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium rounded-full self-start hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                      {news.date} <ArrowRight className="inline-block ml-1 h-3 w-3" />
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}