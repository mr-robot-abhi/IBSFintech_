'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowRight, Zap, Shield, Globe, Car, Factory, Building, Users, Newspaper, ShoppingBag, Cpu, Truck, Home, BookOpen, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Linkedin, BarChart2 } from 'lucide-react';
import Footer from '../layout/Footer';
import HeroImageSlideshow from './HeroImageSlideshow';
import EcosystemEnabler from './ecosystem_enabler';
import ClientLogoStrip from '../common/ClientLogoStrip';
import ModernMegaMenu from '../layout/ModernMegaMenu';
import PartnershipEcosystem from './PartnershipEcosystem';
import OurOfferingsSection from './our_offerings';
import CaseStudies from './CaseStudies';
import FintechParticlesBackground from './FintechParticlesBackground';
import IBSNetworkTwo from './ibs_network_two';

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
          background: `linear-gradient(135deg, rgba(12, 28, 31, 0.2) 0%, rgba(9,9,121,0.1) 100%)`,
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

  const duplicatedIndustries = [...industries, ...industries];


  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <FintechParticlesBackground />
      {/* --- Main Content Sections (keep order, ensure all tags close properly) --- */}

      {/* Mega Navigation Menu */}
      <ModernMegaMenu /> 


      {/* Hero Banner with Background Image */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Banner.png"
            alt="Treasury Management Solutions"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-blue-400 font-medium mb-4">Transform Your Financial Future</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                End-to-End Treasury Management Solutions
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Our end-to-end Treasury Management Platform empowers organizations with cutting-edge solutions for treasury, risk, trade finance, and supply chain finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating shapes for visual interest */}
        <FloatingShapes />
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
      <OurOfferingsSection />
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
              {
                icon: Zap,
                title: 'Comprehensive',
                description: 'A complete Risk Management solution covering Compliance, Operational, and Financial risks.',
              },
              {
                icon: Shield,
                title: 'Integrated',
                description: 'Seamlessly connects with your existing IT ecosystem—ERP, market data providers, and banks.',
              },
              {
                icon: Globe,
                title: 'Nimble',
                description: 'End-to-end in-house development ensures fast, agile implementation.',
              },
              {
                icon: Users,
                title: 'Domain-Centric',
                description: 'Founded by ex-bankers with deep expertise in finance, risk, and technology.',
              },
              {
                icon: BarChart2,
                title: 'Configurable',
                description: 'Highly customizable to align with your workflows and business needs.',
              },
              {
                icon: Building,
                title: 'Best Practices',
                description: 'Built on industry standards with world-class treasury, risk, and trade finance capabilities.',
              },
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
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <diff.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{diff.title}</h3>
                    <p className="text-gray-600 text-sm">{diff.description}</p>
                    <div className="flex-grow"></div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Industries Carousel */}
      <section className="py-16 relative overflow-hidden w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-4"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent mb-4">
              Featured Industries
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Tailored solutions for diverse industry needs, driving efficiency and growth across sectors.
            </p>
          </motion.div>
          
          <div className="relative overflow-hidden group px-4">
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: ['0%', '-100%'],
                transition: {
                  ease: 'linear',
                  duration: 40,
                  repeat: Infinity,
                }
              }}
            >
              {duplicatedIndustries.map((industry, idx) => (
                <div key={idx} className="flex-shrink-0 w-80">
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full">
                    <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-6 rounded-2xl shadow-xl border border-blue-900/30 h-full flex flex-col hover:shadow-2xl hover:border-blue-700/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="h-14 w-14 bg-blue-900/40 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-blue-700/30">
                        <industry.icon className="h-7 w-7 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                      <p className="text-blue-100/80 text-sm mb-4 flex-grow">{industry.description}</p>
                      <button className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium rounded-full self-start hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                        Learn More <ArrowRight className="inline-block ml-1 h-3 w-3" />
                      </button>
                    </div>
                  </Tilt>
                </div>
              ))}
            </motion.div>
          </div>
      </section>
      {/* Partnership Ecosystem Section */}
      <PartnershipEcosystem variant="illustrative1" />

      {/* Case Studies */}
      <CaseStudies />

      {/* Latest News */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <FintechParticlesBackground />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { 
                title: 'AI Dashboard Launch', 
                date: 'July 2025', 
                description: 'New real-time analytics for treasury insights with advanced AI predictions.',
                icon: <Newspaper className="h-6 w-6 text-blue-300" />
              },
              { 
                title: 'Global Expansion', 
                date: 'June 2025', 
                description: 'Now serving 40+ countries with localized support.',
                icon: <Globe className="h-6 w-6 text-blue-300" />
              },
              { 
                title: 'FinTech Award', 
                date: 'May 2025', 
                description: 'Named Top Treasury Platform 2025 by Financial Times.',
                icon: <Shield className="h-6 w-6 text-blue-300" />
              },
              { 
                title: 'Product Update', 
                date: 'April 2025', 
                description: 'Enhanced security features and performance improvements.',
                icon: <Zap className="h-6 w-6 text-blue-300" />
              },
              { 
                title: 'Partnership', 
                date: 'March 2025', 
                description: 'Strategic alliance with leading banking institutions.',
                icon: <Users className="h-6 w-6 text-blue-300" />
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
                  <div className="bg-blue-900/50 p-6 rounded-2xl shadow-xl border border-blue-800/30 h-full flex flex-col hover:shadow-2xl hover:border-blue-700/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="h-12 w-12 bg-blue-800/40 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-blue-700/30">
                      {news.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{news.title}</h3>
                    <p className="text-blue-200/80 text-sm mb-4">{news.description}</p>
                    <div className="flex-grow"></div>
                    <span className="mt-4 inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium rounded-full self-start hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                      {news.date} <ArrowRight className="inline-block ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.a
              href="/news"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-blue-500/30 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <FintechParticlesBackground />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white text-sm font-semibold mb-4 shadow-lg">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Ready to revolutionize your treasury operations? Contact us to explore our solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-xl hover:shadow-blue-600/30 transition-all duration-300 flex items-center"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-blue-500 text-white font-medium rounded-xl hover:bg-blue-500/10 transition-all duration-300 flex items-center"
              >
                Request Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* Removed Footer rendering here to avoid duplication and fix initial flash issue */}
      {/* <div className="relative z-20">
        <Footer />
      </div> */}
    </div>
  );
}