'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function IllustrativeThree() {
  const [clientIndex, setClientIndex] = useState(0);
  const [industryIndex, setIndustryIndex] = useState(0);
  const clientRef = useRef<NodeJS.Timeout | null>(null);
  const industryRef = useRef<NodeJS.Timeout | null>(null);

  const clients = ['BankCorp', 'TechFin', 'GlobalTrade', 'RetailPay', 'AutoFinance', 'ManuBank'];
  const industries = [
    { name: 'Automotive', icon: Car, description: 'Streamlined supply chain finance.', metric: '30% Cost Reduction' },
    { name: 'Manufacturing', icon: Factory, description: 'Optimized cash flows.', metric: '40% Efficiency Gain' },
    { name: 'Financial Services', icon: Building, description: 'Enhanced risk analytics.', metric: '50% Risk Reduction' },
    { name: 'Retail', icon: Users, description: 'Improved payment processing.', metric: '25% Savings' },
  ];

  useEffect(() => {
    clientRef.current = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    industryRef.current = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => {
      if (clientRef.current) clearInterval(clientRef.current);
      if (industryRef.current) clearInterval(industryRef.current);
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

  const handleScrollHover = (type: 'client' | 'industry', isHovering: boolean) => {
    const ref = type === 'client' ? clientRef : industryRef;
    if (isHovering && ref.current) {
      clearInterval(ref.current);
    } else if (!isHovering) {
      ref.current = setInterval(() => {
        if (type === 'client') {
          setClientIndex((prev) => (prev + 1) % clients.length);
        } else {
          setIndustryIndex((prev) => (prev + 1) % industries.length);
        }
      }, type === 'client' ? 3000 : 4000);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 overflow-x-hidden transition-colors duration-200">
      <ThemeToggle />
      
      {/* Main Banner */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-b from-teal-700 to-teal-300 dark:from-teal-900 dark:to-teal-700 transition-colors duration-200">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/bg_6.jpg"
            alt="Financial dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-teal-800 text-white text-sm font-semibold mb-4 dark:bg-teal-900 transition-colors duration-200">
                Next-Gen Treasury Solutions
              </div>
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
                    src="/bg_4.jpg"
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
      <section className="py-16 relative transition-colors duration-200">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/bg_5.jpg"
            alt="Fintech background"
            fill
            className="object-cover"
            style={{ opacity: 0.13 }}
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90 dark:from-gray-900/90 dark:via-transparent dark:to-gray-900/95" />
        </div>
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
          <div className="relative overflow-hidden rounded-xl bg-teal-50 dark:bg-gray-900/80 shadow-inner py-4">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: [0, -1040],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 24,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {[
                { src: '/clients/client1.png', alt: 'Botanic Healthcare' },
                { src: '/clients/client2.jpg', alt: 'Client 2' },
                { src: '/clients/client3.jpg', alt: 'Frumar Marketing' },
                { src: '/clients/client4.jpg', alt: 'GX' },
                { src: '/clients/client5.png', alt: 'Infra Engineers India' },
                { src: '/clients/client6.png', alt: 'SIDVIN' },
                { src: '/clients/client7.png', alt: 'Mittal' },
                { src: '/clients/client8.png', alt: 'Client 8' },
              ].map((logo, idx) => (
                <motion.div
                  key={`logo-1-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 h-28 w-48"
                  whileHover={{ scale: 1.07 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={56}
                    className="object-contain max-h-14 w-auto mx-auto"
                  />
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { src: '/clients/client1.png', alt: 'Botanic Healthcare' },
                { src: '/clients/client2.jpg', alt: 'Client 2' },
                { src: '/clients/client3.jpg', alt: 'Frumar Marketing' },
                { src: '/clients/client4.jpg', alt: 'GX' },
                { src: '/clients/client5.png', alt: 'Infra Engineers India' },
                { src: '/clients/client6.png', alt: 'SIDVIN' },
                { src: '/clients/client7.png', alt: 'Mittal' },
                { src: '/clients/client8.png', alt: 'Client 8' },
              ].map((logo, idx) => (
                <motion.div
                  key={`logo-2-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 h-28 w-48"
                  whileHover={{ scale: 1.07 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={56}
                    className="object-contain max-h-14 w-auto mx-auto"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
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
              Comprehensive modules to streamline every aspect of your treasury operations.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: DollarSign,
                title: 'Treasury Management',
                description: 'Optimize cash flow and liquidity with real-time insights.',
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description: 'Mitigate financial risks with advanced analytics.',
              },
              {
                icon: BarChart2,
                title: 'Trade Finance',
                description: 'Streamline trade operations with integrated tools.',
              },
              {
                icon: Globe,
                title: 'Supply Chain Finance',
                description: 'Enhance supply chain efficiency with flexible financing.',
              },
            ].map((offering, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-teal-200 dark:border-teal-700 hover:shadow-xl transition-all duration-200">
                    <div className="h-12 w-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
                      <offering.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{offering.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{offering.description}</p>
                    <motion.div whileHover={{ x: 5 }} className="mt-4">
                      <button className="w-full px-4 py-2 border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/50 flex items-center justify-center transition-colors duration-200">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </motion.div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-200">
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative transition-colors duration-200">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Global finance"
            fill
            className="object-cover"
          />
        </div>
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
              Tailored solutions for diverse industries, delivering agility and integration.
            </p>
          </motion.div>
          <div
            className="max-w-2xl mx-auto"
            onMouseEnter={() => handleScrollHover('industry', true)}
            onMouseLeave={() => handleScrollHover('industry', false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={industryIndex}
                variants={scrollVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-teal-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center">
                        {(() => {
                          const Icon = industries[industryIndex].icon;
                          return <Icon className="h-6 w-6 text-teal-600" />;
                        })()}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{industries[industryIndex].name}</h3>
                        <p className="text-sm text-gray-600">{industries[industryIndex].description}</p>
                        <p className="text-teal-600 font-medium text-sm mt-1">
                          {industries[industryIndex].metric}
                        </p>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-4">
              {industries.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === industryIndex ? 'bg-teal-600' : 'bg-gray-300'}`}
                  onClick={() => setIndustryIndex(index)}
                  aria-label={`Go to industry ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation in Action */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Innovation in Action</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world success stories showcasing the impact of our platform.
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
                title: 'Global Bank Transformation',
                description: 'Reduced processing time by 50% with automated workflows.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                stat: '50% Time Saved',
              },
              {
                title: 'Retail Optimization',
                description: 'Saved $2M annually through streamlined payments.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                stat: '$2M Savings',
              },
              {
                title: 'Manufacturing Efficiency',
                description: 'Improved cash flow by 40% across subsidiaries.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                stat: '40% Growth',
              },
            ].map((caseStudy, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl border border-teal-200 dark:border-teal-700 overflow-hidden hover:shadow-xl transition-shadow">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{caseStudy.description}</p>
                      <span className="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-sm font-medium rounded-full mb-4">
                        {caseStudy.stat}
                      </span>
                      <motion.div whileHover={{ x: 5 }}>
                        <button className="w-full px-4 py-2 border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/50 flex items-center justify-center">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative transition-colors duration-200">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/bg_5.jpg"
            alt="Fintech background"
            fill
            className="object-cover"
            style={{ opacity: 0.10 }}
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/95 dark:from-gray-900/95 dark:via-transparent dark:to-gray-900/98" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Strategic Partnerships</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Collaborations with industry leaders to enhance our platform's capabilities.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {['FinTech Solutions', 'Global Bank', 'TradeNet', 'PaySys'].map((partner, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-teal-200 dark:border-teal-700 flex items-center gap-4 hover:shadow-xl transition-shadow">
                    <Handshake className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    <span className="text-gray-800 dark:text-white font-medium">{partner}</span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-200">
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

      {/* Ecosystem Enabler */}
      <EcosystemEnabler />

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