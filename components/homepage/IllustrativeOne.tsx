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

import IBSNetworkTwo from './ibs_network_two';

// SlideshowBanner component for the hero section
const SlideshowBanner = () => {
  const banners = [
    '/Banner.png',
    '/Home Page Banner 5.png',
    '/Home Page Banner 6.png',
    '/Home Page Banner 7.png'
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
              className="object-cover object-center"
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


  // News array for Latest News section
  const newsItems = [
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
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-transparent">
      {/* Background for all sections except hero */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image
          src="/style1_bg.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>
      {/* --- Main Content Sections (keep order, ensure all tags close properly) --- */}

      {/* Mega Navigation Menu */}
      <ModernMegaMenu />


      {/* Hero Banner with Slideshow */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <SlideshowBanner />
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
              <button className="bg-[#FF073A] hover:bg-[#e60634] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,7,58,0.3)] active:translate-y-0">
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
      <section className="py-20 relative overflow-hidden">
        {/* Blurry background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* LEFT TEXT */}
              <div className="w-full lg:w-2/5 text-white">
                <h2 className="text-5xl font-bold mb-6">Why Choose Us</h2>
                <p className="text-xl text-white/90 mb-6">
                  Discover how our innovative financial solutions can transform your business operations and drive growth.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  With years of industry expertise, we provide cutting‑edge solutions tailored to your unique business needs.
                </p>
                <button className="bg-[#FF073A] hover:bg-[#e60634] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,7,58,0.3)] active:translate-y-0">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* RIGHT GRID */}
              <div className="w-full lg:w-3/5">
                <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
              {/* Comprehensive */}
              <div className="col-span-2 row-span-1 rounded-xl bg-[#241F5D] p-6 flex flex-col justify-between">
                <div className="space-y-3 text-white">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-bold">Comprehensive</h3>
                  </div>
                  <p className="text-base opacity-90 leading-tight">Our end‑to‑end solution covers compliance, operational, and financial risks. With a unified platform, you gain full visibility and control over your entire risk landscape.</p>
                </div>
              </div>

              {/* Nimble */}
              <div className="col-span-2 row-span-1 rounded-xl bg-[#241F5D] p-6 flex flex-col justify-between">
                <div className="space-y-3 text-white">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-bold">Nimble</h3>
                  </div>
                  <p className="text-base opacity-90 leading-tight">Rapid implementation and deployment with our agile approach. Our cloud‑native architecture allows for instant scaling.</p>
                </div>
              </div>

              {/* Domain-Centric */}
              <div className="col-span-2 row-span-1 rounded-xl bg-[#241F5D] p-6 flex flex-col justify-between">
                <div className="space-y-3 text-white">
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-bold">Secure</h3>
                  </div>
                  <p className="text-base opacity-90 leading-tight">Bank‑grade security with end‑to‑end encryption. Your data is protected with the highest industry standards.</p>
                </div>
              </div>

              {/* Configurable */}
              <div className="col-span-2 row-span-1 rounded-xl bg-[#241F5D] p-6 flex flex-col justify-between">
                <div className="space-y-3 text-white">
                  <div className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-bold">Global</h3>
                  </div>
                  <p className="text-base opacity-90 leading-tight">Multi‑currency, multi‑language, and multi‑jurisdiction support. Operate seamlessly across borders with our global platform.</p>
                </div>
              </div>

              {/* Best Practices */}
              <div className="col-span-2 row-span-1 rounded-xl bg-[#241F5D] p-6 flex flex-col justify-between">
                <div className="space-y-3 text-white">
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-bold">Collaborative</h3>
                  </div>
                  <p className="text-base opacity-90 leading-tight">Work together seamlessly with role‑based access controls. Our platform enables real‑time collaboration across teams and departments.</p>
                </div>
              </div>

              {/* Integrated */}
              <div className="col-span-2 row-span-1 rounded-xl bg-[#241F5D] p-6 flex flex-col justify-between">
                <div className="space-y-3 text-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-6 w-6 text-green-700" />
                    <h3 className="text-xl font-bold">Integrated</h3>
                  </div>
                  <p className="text-base opacity-90 leading-tight">Seamlessly connects with ERP systems, market data providers, and banking partners. The platform supports SWIFT, FIX, and ISO 20022 messaging standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
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

      {/* Combined Latest News & Let's Connect */}
      <section className="relative overflow-hidden">
        <div className="w-full flex flex-col relative">

          {/* Latest News Subsection */}
          <div className="flex-1 py-16 bg-transparent relative z-10">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                {newsItems.map((news, index) => (
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
          {/* Let's Connect Subsection */}
          <div className="flex-1 py-0 bg-gradient-to-b from-gray-900 to-gray-800 relative z-10 flex items-center">
            <div className="container mx-auto px-4 max-w-7xl w-full">
              <div className="flex flex-row items-center justify-between gap-8">
                {/* Left Column - Text and Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center md:text-left w-full max-w-2xl"
                >
                  <h2 className="text-4xl font-bold mb-2 text-white">Let's Connect</h2>
                  <p className="text-xl text-white/90 mb-1">
                    Ready to revolutionize your treasury operations?
                  </p>
                  <p className="text-lg text-white/80 mb-1">
                    Contact us to explore our solutions and see how we can transform your financial processes.
                  </p>
                  <p className="text-base text-white/70 mb-3">
                    Our team of experts is ready to assist you with tailored financial technology solutions.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <motion.a
                      href="/demo"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-[#FF073A] hover:bg-[#e60634] text-white font-medium rounded-xl transition-all duration-300 flex items-center transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,7,58,0.3)] active:translate-y-0"
                    >
                      Request Demo
                    </motion.a>
                  </div>
                </motion.div>

                {/* Middle Column - Watermark */}
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-[500px] h-[500px] opacity-20 mx-12">
                  <Image
                    src="/IBSFINtech-Cube-water mark.svg"
                    alt="IBSFINtech Watermark"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right Column - Social Icons */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-row md:flex-col items-center justify-center gap-6"
                >
                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="group p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="group p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="group p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="group p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.856 3.17 0 2.188 1.115 4.116 2.821 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}