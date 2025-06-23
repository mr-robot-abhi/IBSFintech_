'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PartnershipEcosystem from './PartnershipEcosystem';
import Tilt from 'react-parallax-tilt';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import {
  ArrowRight,
  DollarSign,
  Zap,
  Shield,
  BarChart2,
  Globe,
  Car,
  Factory,
  Building,
  Handshake,
  Newspaper,
  Users,
} from 'lucide-react';
import EcosystemEnabler from './ecosystem_enabler';
import ClientLogoStrip from '../common/ClientLogoStrip';
import CaseStudiesStyleThree from './CaseStudiesStyleThree';

export default function IllustrativeThree() {
  const [clientIndex, setClientIndex] = useState(0);
  const clientRef = useRef<NodeJS.Timeout | null>(null);

  const clients = ['BankCorp', 'TechFin', 'GlobalTrade', 'RetailPay', 'AutoFinance', 'ManuBank'];
  const industries = [
    { 
      name: 'Automotive', 
      icon: Car, 
      description: 'Streamlined supply chain finance solutions for the automotive industry.', 
      metric: '30% Cost Reduction',
      color: 'from-blue-500 to-blue-600',
      darkColor: 'from-blue-600 to-blue-700'
    },
    { 
      name: 'Manufacturing', 
      icon: Factory, 
      description: 'End-to-end financial solutions for manufacturing operations.', 
      metric: '40% Efficiency Gain',
      color: 'from-emerald-500 to-emerald-600',
      darkColor: 'from-emerald-600 to-emerald-700'
    },
    { 
      name: 'Financial Services', 
      icon: Building, 
      description: 'Advanced analytics and risk management for financial institutions.', 
      metric: '50% Risk Reduction',
      color: 'from-violet-500 to-violet-600',
      darkColor: 'from-violet-600 to-violet-700'
    },
    { 
      name: 'Retail & E-commerce', 
      icon: Users, 
      description: 'Seamless payment processing and financial operations for retail.', 
      metric: '25% Savings',
      color: 'from-amber-500 to-amber-600',
      darkColor: 'from-amber-600 to-amber-700'
    },
  ];

  useEffect(() => {
    clientRef.current = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => {
      if (clientRef.current) clearInterval(clientRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const scrollVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.5 } },
  };

  const handleClientHover = (isHovering: boolean) => {
    if (isHovering && clientRef.current) {
      clearInterval(clientRef.current);
    } else if (!isHovering) {
      clientRef.current = setInterval(() => {
        setClientIndex((prev) => (prev + 1) % clients.length);
      }, 3000);
    }
  };

  return (
    <div className="relative overflow-x-hidden transition-colors duration-200">
      <ThemeToggle />
      
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg_11.jpg"
          alt="Background"
          fill
          className="object-cover dark:hidden"
          priority
        />
        <Image
          src="/bg_dark_2.jpg"
          alt="Background"
          fill
          className="object-cover hidden dark:block"
          priority
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80" />
      </div>
      
      {/* Main Banner */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-b from-teal-700 to-teal-300 dark:bg-transparent transition-colors duration-200">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-teal-800 text-white text-sm font-semibold mb-4 dark:bg-teal-900 transition-colors duration-200"
              >
                Next-Gen Treasury Solutions
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Empower Your <span className="text-teal-200">Financial Future</span>
              </h1>
              <p className="text-lg text-teal-100 mb-8">
                Transform treasury operations with AI-driven insights, seamless automation, and global scalability.
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="px-4 py-2 bg-teal-200 text-teal-900 rounded-md hover:bg-teal-300 flex items-center transition-colors duration-200 dark:bg-teal-400 dark:text-teal-900 dark:hover:bg-teal-300">
                    Start Now <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="px-4 py-2 border border-teal-200 text-teal-200 rounded-md hover:bg-teal-200/20 transition-colors duration-200 dark:border-teal-400 dark:text-teal-100 dark:hover:bg-teal-400/10">
                    Explore Features
                  </button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl border border-teal-200 shadow-lg">
                  <Image
                    src="/bg_7.jpg"
                    alt="Treasury dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg saturate-150 contrast-110"
                  />
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Winning Together */}
      <section className="py-16 relative transition-colors duration-200 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Winning Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leading organizations leverage our platform for end-to-end digitization of treasury, risk, trade finance,
              and supply chain operations, achieving agility, insights, and productivity.
            </p>
          </motion.div>

          {/* Client Logo Carousel */}
          <ClientLogoStrip variant="illustrative3" />
        </div>
      </section>
      {/* Our Offerings */}
      <section className="py-16 bg-white dark:bg-transparent transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Offerings</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide a holistic suite of financial tools to empower your organization.
              Our solutions are crafted for scalability, security, and superior performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Enabler */}
      <section className="bg-white dark:bg-transparent">
        <EcosystemEnabler />
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-transparent transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unparalleled features and benefits that set our platform apart.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: 'Innovative AI',
                description: 'AI-driven insights for smarter financial decisions.',
                stat: '80% Automation',
              },
              {
                icon: Shield,
                title: 'Trusted Reliability',
                description: '99.9% uptime with robust security.',
                stat: '99.9% Uptime',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Support for multi-currency operations worldwide.',
                stat: '50+ Countries',
              },
            ].map((diff, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-teal-200 dark:border-teal-700 hover:shadow-xl transition-shadow">
                    <div className="h-12 w-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
                      <diff.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{diff.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{diff.description}</p>
                    <span className="mt-4 inline-block px-4 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-sm font-medium rounded-full">
                      {diff.stat}
                    </span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Featured Industries */}
      <section className="py-16 relative transition-colors duration-200 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Featured Industries</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for diverse industry needs, driving efficiency and growth across sectors.
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.02}
                    transitionSpeed={300}
                    className="h-full transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="h-full bg-white dark:bg-gray-800/20 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div 
                        className={`h-2 bg-gradient-to-r ${industry.color} dark:${industry.darkColor} transition-all duration-300`}
                      />
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="mb-4 p-3 rounded-lg w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 group-hover:scale-110 transition-transform duration-300">
                          <industry.icon className={`h-6 w-6 text-${industry.color.split('-')[1]}-600 dark:text-${industry.darkColor.split('-')[1]}-400`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                          {industry.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                          {industry.description}
                        </p>
                        <div className="mt-auto">
                          <span className="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-200 group-hover:translate-x-1 transition-transform duration-300">
                            {industry.metric}
                            <ArrowRight className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Partnership Ecosystem Section */}
      <PartnershipEcosystem variant="illustrative3" />        
      {/* Case Studies Section */}
      <CaseStudiesStyleThree />

      {/* Latest News */}
      <section className="py-16 bg-gray-50 dark:bg-transparent transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Latest News</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest achievements and insights.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'AI Dashboard Launch',
                date: 'May 2025',
                description: 'New real-time analytics for treasury insights.',
                stat: '40% Faster',
              },
              {
                title: 'Global Expansion',
                date: 'April 2025',
                description: 'Now serving 30+ countries.',
                stat: '30+ Countries',
              },
              {
                title: 'FinTech Award',
                date: 'March 2025',
                description: 'Named Top Treasury Platform 2025.',
                stat: 'Award Winner',
              },
            ].map((news, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-teal-200 dark:border-teal-700 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <Newspaper className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-300">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{news.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{news.description}</p>
                    <span className="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-sm font-medium rounded-full mb-4">
                      {news.stat}
                    </span>
                    <motion.div whileHover={{ x: 5 }}>
                      <button className="w-full px-4 py-2 border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/50 flex items-center justify-center">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </motion.div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Let's Connect */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-500 dark:from-teal-900 dark:to-teal-700 text-white transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Ready to revolutionize your treasury operations? Contact us to explore our solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="px-4 py-2 bg-white text-teal-700 rounded-md hover:bg-gray-100 flex items-center transition-colors duration-200 dark:bg-gray-900 dark:text-teal-200 dark:hover:bg-gray-800">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-white/20 dark:hover:bg-gray-900/20">
                  Request Demo
                </button>
              </motion.div>
            </div>
            <div className="mt-12">
              <div className="flex justify-center gap-6 mb-4">
                {['Twitter', 'LinkedIn', 'Email'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-teal-200 hover:text-white transition-colors"
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