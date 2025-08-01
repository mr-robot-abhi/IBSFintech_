'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
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
  Truck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import EcosystemEnabler from './ecosystem_enabler';
import ClientLogoStrip from '../common/ClientLogoStrip';
import CaseStudiesStyleThree from './CaseStudiesStyleThree';
import MegaMenu3 from './MegaMenu3';
import PartnershipEcosystem_Style_3 from './PartnershipEcosystem_Style_3';
import { ThemeToggle } from '@/components/ui/theme-toggle';

// BannerSlideshow component for the hero section
const BannerSlideshow = () => {
  const banners = [
    '/Currencies-Banner.png',
    '/Home Page Banner 2.png',
    '/Home Page Banner 3.png',
    '/Home Page Banner 4.png'
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isHovered) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [isHovered]);

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              fill
              priority
              className="object-cover object-right"
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function IllustrativeThree() {
  const [clientIndex, setClientIndex] = useState(0);
  const clientRef = useRef<NodeJS.Timeout | null>(null);

  const clients = ['BankCorp', 'TechFin', 'GlobalTrade', 'RetailPay', 'AutoFinance', 'ManuBank'];
  // Expand industries array to at least 12 unique industries, each with color/darkColor
  const industries = [
    { name: 'Automotive', icon: Car, description: 'Streamlined supply chain finance solutions for the automotive industry.', metric: '30% Cost Reduction', color: 'from-blue-500 to-blue-600', darkColor: 'from-blue-600 to-blue-700' },
    { name: 'Manufacturing', icon: Factory, description: 'End-to-end financial solutions for manufacturing operations.', metric: '40% Efficiency Gain', color: 'from-emerald-500 to-emerald-600', darkColor: 'from-emerald-600 to-emerald-700' },
    { name: 'Financial Services', icon: Building, description: 'Advanced analytics and risk management for financial institutions.', metric: '50% Risk Reduction', color: 'from-violet-500 to-violet-600', darkColor: 'from-violet-600 to-violet-700' },
    { name: 'Retail & E-commerce', icon: Users, description: 'Seamless payment processing and financial operations for retail.', metric: '25% Savings', color: 'from-amber-500 to-amber-600', darkColor: 'from-amber-600 to-amber-700' },
    { name: 'Healthcare', icon: Users, description: 'Automated treasury for hospitals and pharma companies.', metric: '35% Cash Flow Improvement', color: 'from-rose-500 to-rose-600', darkColor: 'from-rose-600 to-rose-700' },
    { name: 'Energy', icon: Globe, description: 'Hedging and commodity management for energy firms.', metric: '20% Volatility Reduction', color: 'from-yellow-400 to-yellow-500', darkColor: 'from-yellow-500 to-yellow-600' },
    { name: 'Technology', icon: Zap, description: 'Digital-first treasury for tech innovators.', metric: '60% Faster Reconciliation', color: 'from-indigo-500 to-indigo-600', darkColor: 'from-indigo-600 to-indigo-700' },
    { name: 'Logistics', icon: Truck, description: 'Optimized cash flow and payments for logistics providers.', metric: '22% Faster Delivery', color: 'from-cyan-500 to-cyan-600', darkColor: 'from-cyan-600 to-cyan-700' },
    { name: 'Education', icon: Newspaper, description: 'Automated fee management for schools and universities.', metric: '18% Admin Savings', color: 'from-teal-500 to-teal-600', darkColor: 'from-teal-600 to-teal-700' },
    { name: 'Hospitality', icon: Handshake, description: 'Centralized payments for hotels and resorts.', metric: '27% Cost Efficiency', color: 'from-orange-400 to-orange-500', darkColor: 'from-orange-500 to-orange-600' },
    { name: 'Agriculture', icon: DollarSign, description: 'Supply chain finance for agri-businesses.', metric: '33% Yield Improvement', color: 'from-green-500 to-green-600', darkColor: 'from-green-600 to-green-700' },
    { name: 'Telecom', icon: BarChart2, description: 'Real-time analytics for telecom operators.', metric: '45% Uptime Boost', color: 'from-purple-500 to-purple-600', darkColor: 'from-purple-600 to-purple-700' },
    { name: 'Construction', icon: Building, description: 'Project-based treasury for construction firms.', metric: '29% Project Savings', color: 'from-gray-400 to-gray-500', darkColor: 'from-gray-500 to-gray-600' },
    { name: 'Media', icon: Users, description: 'Automated royalty payments for media companies.', metric: '19% Faster Payouts', color: 'from-pink-500 to-pink-600', darkColor: 'from-pink-600 to-pink-700' },
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
      <MegaMenu3 />
      <ThemeToggle />

      {/* Dark mode background image container */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 dark:bg-[url('/bg_dark_2.jpg')] dark:bg-cover dark:bg-center dark:bg-no-repeat dark:opacity-10" />
      </div>

      {/* Main Banner with Slideshow */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 bg-white dark:bg-transparent h-[600px] md:h-[700px]">
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          <BannerSlideshow />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/10 dark:bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex items-center justify-start min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-left"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-teal-600 text-white text-sm font-semibold mb-6">
                Next-Gen Treasury Solutions
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Empower Your <span className="text-teal-400">Financial Future</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-6">
                Transform treasury operations with AI-driven insights, seamless automation, and global scalability.
              </p>
              <p className="text-lg md:text-xl text-white mb-6">
                Unlock new opportunities with our innovative platform designed to streamline your financial workflows.
              </p>
              <p className="text-lg md:text-xl text-white mb-10">
                Experience unparalleled efficiency and control in managing your treasury operations worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 rounded-lg font-medium flex items-center transition-colors text-lg shadow-lg"
                >
                  Start Now <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 rounded-lg font-medium transition-colors text-lg"
                >
                  Explore Features
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacer between hero and Winning Together */}
      <div className="h-16 md:h-24 w-full"></div>

      {/* Winning Together with reduced spacing */}
      <section className="relative transition-colors duration-200 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center pb-4"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">Winning Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-0">
              Leading organizations leverage our platform for end-to-end digitization of treasury, risk, trade finance,
              and supply chain operations, achieving agility, insights, and productivity. Empowering businesses to drive innovation, enhance decision-making, and stay ahead in an ever-evolving financial landscape.
            </p>
          </motion.div>
        </div>
        {/* Client Logo Strip with reduced vertical space */}
        <div className="w-full bg-transparent dark:bg-white py-1">
          <ClientLogoStrip variant="illustrative3" />
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-teal-200 dark:border-teal-700 hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="h-12 w-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
                      <diff.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{diff.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{diff.description}</p>
                    <div className="flex-grow"></div>
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
          <div className="relative w-full overflow-hidden group">
            <div
              className="flex gap-8 w-max animate-carousel group-hover:[animation-play-state:paused]"
              style={{ animationDuration: '40s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
            >
              {industries.concat(industries).map((industry, idx) => (
                <div
                  key={industry.name + idx}
                  className={`min-w-[280px] max-w-[280px] rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 flex-shrink-0 transform hover:scale-105 duration-300 cursor-pointer group bg-white dark:bg-gray-800/20`}
                  style={{ transition: 'box-shadow 0.3s, transform 0.3s' }}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 group-hover:scale-110 transition-transform duration-300`}>
                        <industry.icon className="h-6 w-6 text-teal-600 dark:text-teal-400 drop-shadow-lg" />
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 drop-shadow">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 truncate">
                      {industry.description}
                    </p>
                    <motion.div whileHover={{ x: 5 }} className="mt-auto">
                      <button className="w-full px-3 py-1.5 border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/50 flex items-center justify-center text-sm transition-colors duration-200">
                        Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
            <style jsx>{`
              @keyframes carousel {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
              .animate-carousel {
                animation-name: carousel;
              }
            `}</style>
          </div>
        </div>
      </section>
      {/* Partnership Ecosystem Section */}
      <PartnershipEcosystem_Style_3 variant="illustrative3" />
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
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
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
              {
                title: 'New Product Release',
                date: 'June 2025',
                description: 'Launching our latest treasury management tool.',
                stat: 'Innovative',
              },
              {
                title: 'Customer Success',
                date: 'July 2025',
                description: 'Achieved record customer satisfaction scores.',
                stat: 'Top Rated',
              },
            ].map((news, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-teal-200 dark:border-teal-700 hover:shadow-xl transition-shadow flex flex-col h-full">
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
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-transparent border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/50 font-semibold transition-colors">
              View All News
            </button>
          </div>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
