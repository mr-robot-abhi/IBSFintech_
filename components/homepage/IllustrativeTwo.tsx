'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ClientLogoStrip from '@/components/common/ClientLogoStrip';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Globe, Play, Pause, ChevronLeft, ChevronRight, Users, Building, Factory, Truck, Newspaper, Handshake, ShoppingBag, Award, BarChart2, BarChart3, DollarSign, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import IBSNetworkTwo from './ibs_network_two';
import PartnershipEcosystem from './PartnershipEcosystem';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  stats: string;
  company: string;
  logo: string;
  rating: number;
}

export default function IllustrativeTwoV2() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: 'David Kim',
      role: 'Head of Treasury, NexGen Tech',
      image: '/avatars/man2.jpg',
      content: 'The platform\'s predictive analytics helped us optimize our cash positions, resulting in a 28% improvement in working capital efficiency.',
      stats: '28% Improvement in Working Capital',
      company: 'NexGen Tech',
      logo: '/company-logos/tech-company.svg',
      rating: 5
    },
    {
      id: 2,
      name: 'Elena Rodriguez',
      role: 'CFO, Solaris Energy',
      image: '/avatars/woman3.jpg',
      content: 'Implementation was flawless, and the team provided exceptional support throughout our transition. We\'ve reduced manual processes by over 60%.',
      stats: '60% Reduction in Manual Processes',
      company: 'Solaris Energy',
      logo: '/company-logos/energy-company.svg',
      rating: 5
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Treasury Director, Atlas Global',
      image: '/avatars/man3.jpg',
      content: 'The risk management capabilities are second to none. We\'ve significantly reduced our exposure while maintaining competitive returns.',
      stats: '40% Risk Reduction',
      company: 'Atlas Global',
      logo: '/company-logos/global-company.svg',
      rating: 4
    },
    {
      id: 4,
      name: 'Sarah Chen',
      role: 'Finance Director, Urban Retail',
      image: '/avatars/woman1.jpg',
      content: 'The automated reporting has saved us countless hours. Our team can now focus on strategic initiatives rather than manual data compilation.',
      stats: '45 Hours Saved Monthly',
      company: 'Urban Retail',
      logo: '/company-logos/retail-company.svg',
      rating: 5
    },
    {
      id: 5,
      name: 'Michael Okafor',
      role: 'CTO, FinTech Innovations',
      image: '/avatars/man4.jpg',
      content: 'The API integration was seamless with our existing systems. We were up and running in days, not weeks.',
      stats: '80% Faster Integration',
      company: 'FinTech Innovations',
      logo: '/company-logos/fintech-company.svg',
      rating: 4
    }
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Background opacity transitions for smooth scrolling effect
  const bgOpacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0.5, 0, 0, 0.5, 1]);
  const bgOpacity2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0.5, 1, 0.5, 0, 0]);
  const bgOpacity3 = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, 0, 0.5, 1, 0.5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = useMemo(() => {
    const lastIndex = testimonials.length - 1;
    const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;

    return [
      { ...testimonials[prevIndex], position: 'left' },
      { ...testimonials[activeIndex], position: 'center' },
      { ...testimonials[nextIndex], position: 'right' },
    ];
  }, [testimonials, activeIndex]);

  const goToPrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.play().catch(e => console.error('Auto-play failed:', e));
    }
  }, []);

  const industries2 = [
    { name: 'Automotive', icon: Truck, desc: 'Streamlined supply chain and payments for OEMs and suppliers.', metric: '30% Cost Reduction' },
    { name: 'Manufacturing', icon: Factory, desc: 'Optimized cash flows and risk management for global plants.', metric: '40% Efficiency Gain' },
    { name: 'Financial Services', icon: DollarSign, desc: 'Advanced analytics and compliance for banks and NBFCs.', metric: '50% Risk Mitigation' },
    { name: 'Healthcare', icon: Users, desc: 'Automated treasury for hospitals and pharma companies.', metric: '35% Cash Flow Improvement' },
    { name: 'Retail', icon: Building, desc: 'Centralized payments and liquidity for multi-store chains.', metric: '25% Transaction Savings' },
    { name: 'Energy', icon: Globe, desc: 'Hedging and commodity management for energy firms.', metric: '20% Volatility Reduction' },
    { name: 'Education', icon: Newspaper, desc: 'Automated fee management for schools and universities.', metric: '18% Admin Savings' },
    { name: 'Hospitality', icon: Handshake, desc: 'Centralized payments for hotels and resorts.', metric: '27% Cost Efficiency' },
    { name: 'Telecom', icon: BarChart2, desc: 'Real-time analytics for telecom operators.', metric: '45% Uptime Boost' },
    { name: 'Technology', icon: Zap, desc: 'Digital-first treasury for tech innovators.', metric: '60% Faster Reconciliation' },
    { name: 'Insurance', icon: Shield, desc: 'Risk analytics and claims automation for insurers.', metric: '38% Claims Efficiency' },
    { name: 'Logistics', icon: Truck, desc: 'Optimized cash flow and payments for logistics providers.', metric: '22% Faster Delivery' },
  ];

  return (
    <div className="relative" ref={containerRef}>
      {/* Alternating Backgrounds */}
      <div className="fixed inset-0 -z-10">
        <motion.div style={{ opacity: bgOpacity1 }} className="transition-opacity duration-1000">
          <Image
            src="/bg_14.jpeg"
            alt="Background 1"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div style={{ opacity: bgOpacity2 }} className="transition-opacity duration-1000">
          <Image
            src="/bg_13.jpeg"
            alt="Background 2"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div style={{ opacity: bgOpacity3 }} className="transition-opacity duration-1000">
          <Image
            src="/bg_15.jpeg"
            alt="Background 3"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 4 + 2; // 2-6px
          const duration = Math.random() * 8 + 4; // 4-12s
          const delay = Math.random() * 5; // 0-5s
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: '0 0 15px 2px rgba(56, 189, 248, 0.7)'
              }}
              initial={{
                x: `${startX}vw`,
                y: `${startY}vh`,
                opacity: 0.2
              }}
              animate={{
                x: `${startX + (Math.random() * 20 - 10)}vw`,
                y: `${startY + (Math.random() * 20 - 10)}vh`,
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: delay,
              }}
            />
          );
        })}
      </div>

      {/* Main Banner with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <motion.div className="absolute inset-0">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
            >
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
          </motion.div>
        </div>
        <button
          onClick={togglePlayPause}
          className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
              style={{ textShadow: '0 2px 12px rgba(0,207,255,0.12)' }}
            >
              <span className="text-white">Transform Your</span> <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500" style={{ textShadow: '0 2px 12px rgba(0,207,255,0.12)' }}>Financial Future</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our end-to-end Treasury Management Platform empowers organizations with cutting-edge solutions for treasury, risk, trade finance, and supply chain finance.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 group neon-bg"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 group neon-bg"
              >
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <div className="relative z-10">
        <ClientLogoStrip variant="illustrative2" />
      </div>

      {/* {/* Our Offerings 
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Offerings</h2>
            <p className="text-lg text-gray-200">
              A comprehensive suite of solutions designed to streamline your financial operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Treasury Management", description: "Centralize and automate treasury processes for maximum efficiency.", icon: DollarSign, color: "from-blue-600 to-blue-400" },
              { title: "Risk Management", description: "Proactively identify and mitigate financial risks.", icon: Shield, color: "from-indigo-600 to-indigo-400" },
              { title: "Trade Finance", description: "Streamline trade documentation and financing.", icon: Globe, color: "from-purple-600 to-purple-400" },
              { title: "Supply Chain Finance", description: "Optimize working capital and supplier relationships.", icon: Truck, color: "from-cyan-600 to-cyan-400" },
              { title: "Debt Management", description: "Efficiently manage loans and repayments.", icon: BarChart2, color: "from-blue-600 to-indigo-600" },
              { title: "Analytics & Insights", description: "Leverage data for strategic decision-making.", icon: TrendingUp, color: "from-indigo-600 to-purple-600" }
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg relative group"
              >
                <div className={cn("h-2 w-full bg-gradient-to-r", offering.color)} />
                <div className="p-8">
                  <div className="relative z-10">
                    <div className={cn("inline-flex items-center justify-center p-3 rounded-lg text-white mb-6 bg-gradient-to-r", offering.color)}>
                      <offering.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{offering.title}</h3>
                    <p className="text-gray-600 mb-6">{offering.description}</p>
                    <Button variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 transition-opacity group-hover:opacity-20">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(15 50 50)" />
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-10 50 50)" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Offerings section */}
      <section className="relative py-20">
        <IBSNetworkTwo />
      </section>

      {/* Featured Industries */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured Industries</h2>
            <p className="text-lg text-gray-200">
              Our Treasury Management System is tailored to meet the diverse needs of businesses across all industries.
            </p>
          </motion.div>
          <div className="relative">
            <Carousel opts={{ loop: true, align: 'center' }} className="w-full max-w-6xl mx-auto">
              <CarouselContent className="justify-between">
                {industries2.map((industry: any, idx: number) => (
                  <CarouselItem key={industry.name + idx} className="basis-full sm:basis-1/2 md:basis-1/5 max-w-[20%] flex-shrink-0 px-2">
                    <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg border border-blue-100 p-8 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                      <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <industry.icon size={32} />
                      </div>
                      <h4 className="font-bold text-blue-800 text-xl mb-1 group-hover:text-blue-600 transition-colors duration-200 drop-shadow">{industry.name}</h4>
                      <p className="text-blue-700/90 text-base mb-3 font-medium group-hover:text-blue-900 transition-colors duration-200">{industry.desc}</p>
                      <span className="inline-block px-4 py-2 text-base font-bold rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-md group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:scale-110 transition-all duration-300 mt-auto">
                        {industry.metric}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem Section */}
      <PartnershipEcosystem variant="illustrative2" />

      {/* Case Studies */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="relative">
                Success Stories
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-200">
              Discover how leading enterprises are transforming their financial operations with our solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Retail Chain",
                description: "Reduced payment processing time by 65% and improved cash flow visibility.",
                stats: "65% Faster Processing",
                icon: ShoppingBag,
                color: "from-blue-600 to-indigo-600"
              },
              {
                title: "Manufacturing Giant",
                description: "Achieved 40% cost savings in supply chain financing with automated workflows.",
                stats: "40% Cost Reduction",
                icon: Factory,
                color: "from-cyan-600 to-blue-600"
              },
              {
                title: "Financial Services Leader",
                description: "Enhanced risk management and compliance with real-time analytics.",
                stats: "90% Risk Mitigation",
                icon: ShieldCheck,
                color: "from-indigo-600 to-purple-600"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.color} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <caseStudy.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${caseStudy.color} mr-2`}></div>
                    <span className="text-sm font-medium text-blue-600">{caseStudy.stats}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 font-medium"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
              View All Case Studies
            </button>
          </motion.div>
        </div>
      </section>

      {/* Winning Together */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="relative">
                Winning Together
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-200">
              Leading organizations trust our comprehensive Treasury Management Platform for end-to-end digitization, unlocking agility, insights, and productivity.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "40%", description: "Reduced operational costs", icon: DollarSign, color: "from-blue-600 to-indigo-600" },
              { title: "70%", description: "Faster processing time", icon: Zap, color: "from-cyan-600 to-blue-600" },
              { title: "90%", description: "Higher accuracy in financial reporting", icon: TrendingUp, color: "from-indigo-600 to-purple-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={cn("inline-flex items-center justify-center p-4 rounded-xl mb-6 text-white bg-gradient-to-r", stat.color)}>
                  <stat.icon size={28} />
                </div>
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="relative">
                Why Choose Us
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-200">
              Our platform delivers unmatched value through innovative features and tailored solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrated Platform", description: "Seamless end-to-end digitization across all financial operations.", icon: Globe, color: "from-blue-600 to-indigo-600" },
              { title: "Advanced Analytics", description: "Real-time insights to drive strategic decisions.", icon: BarChart2, color: "from-cyan-600 to-blue-600" },
              { title: "Scalable Solutions", description: "Flexible tools that grow with your business needs.", icon: TrendingUp, color: "from-indigo-600 to-purple-600" }
            ].map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={cn("inline-flex items-center justify-center p-4 rounded-xl mb-6 text-white bg-gradient-to-r", diff.color)}>
                  <diff.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation in Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="relative">
                Innovation in Action
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-200">
              Discover how our clients have transformed their operations with our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Bank Success",
                description: "Reduced processing time by 50% with automated treasury workflows.",
                image: "/case-study-1.jpg"
              },
              {
                title: "Manufacturing Efficiency",
                description: "Improved cash flow management across 20+ global subsidiaries.",
                image: "/case-study-2.jpg"
              },
              {
                title: "Retail Optimization",
                description: "Enhanced supply chain finance, saving $2M annually.",
                image: "/case-study-3.jpg"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                  <Button variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="relative">
                Latest News
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-200">
              Stay updated with the latest developments and achievements from our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Feature Release",
                date: "June 2025",
                description: "Introducing advanced analytics for real-time treasury insights.",
                icon: <BarChart3 size={24} className="text-blue-600 mr-2" />
              },
              {
                title: "Global Expansion",
                date: "May 2025",
                description: "Now serving clients in 30+ countries with localized solutions.",
                icon: <Globe size={24} className="text-blue-600 mr-2" />
              },
              {
                title: "Award Recognition",
                date: "April 2025",
                description: "Named top treasury platform by Financial Tech Awards.",
                icon: <Award size={24} className="text-blue-600 mr-2" />
              },
              {
                title: "Security Milestone",
                date: "March 2025",
                description: "Achieved highest level of security certification in the industry.",
                icon: <Shield size={24} className="text-blue-600 mr-2" />
              },
              {
                title: "Customer Growth",
                date: "February 2025",
                description: "Surpassed 1,000 enterprise customers worldwide.",
                icon: <Users size={24} className="text-blue-600 mr-2" />
              },
              {
                title: "Product Update",
                date: "January 2025",
                description: "Enhanced UI/UX and performance improvements across all platforms.",
                icon: <Zap size={24} className="text-blue-600 mr-2" />
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                className="bg-white rounded-xl shadow-md"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {news.icon}
                    <p className="text-sm text-gray-500">{news.date}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{news.title}</h3>
                  <p className="text-gray-600 mb-6">{news.description}</p>
                  <Button variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              Trusted by Industry Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500" style={{ textShadow: '0 2px 12px rgba(0,207,255,0.12)' }}>Voices of Success</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Discover how forward-thinking companies are transforming their treasury operations
            </p>
          </motion.div>
          <div className="relative">
            <div className="relative overflow-hidden">
              <div className="relative h-[500px] w-full">
                <AnimatePresence mode="wait">
                  {visibleTestimonials.map((testimonial: Testimonial & { position: string }) => {
                    const position = testimonial.position;
                    const isCenter = position === 'center';
                    const isLeft = position === 'left';
                    const isRight = position === 'right';
                    return (
                      <motion.div
                        key={`${testimonial.id}-${position}`}
                        className={`absolute w-full max-w-2xl mx-auto left-0 right-0 transition-all duration-500 ${isCenter ? 'z-10' : 'z-0 pointer-events-none'
                          }`}
                        initial={{
                          x: isLeft ? '-100%' : isRight ? '100%' : '0%',
                          scale: isCenter ? 1 : 0.9,
                          opacity: isCenter ? 1 : 0.8,
                        }}
                        animate={{
                          x: isLeft ? '-100%' : isRight ? '100%' : '0%',
                          scale: isCenter ? 1 : 0.9,
                          opacity: isCenter ? 1 : 0.8,
                        }}
                        exit={{
                          x: isLeft ? '-150%' : isRight ? '150%' : '0%',
                          opacity: 0,
                          scale: 0.8,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mx-4">
                          <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex items-center">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                                  <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                                  <div className="flex mt-1">
                                    {[...Array(5)].map((_, i) => (
                                      <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                                          }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                                  {testimonial.company}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                            <div className="px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                              <p className="text-sm font-medium text-blue-800 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.881 2.924c0 .414-.336.75-.75.75s-.75-.336-.75-.75 0-.529-.21-1.032a1.5 1.5 0 00-.54-.54 1.5 1.5 0 00-1.06-.44 1.5 1.5 0 01-1.14-.44 1.5 1.5 0 00-1.06-.44 1.5 1.5 0 00-1.14.44 1.5 1.5 0 01-1.06.44 1.5 1.5 0 00-1.06.44 1.5 1.5 0 00-.44 1.06c0 .414-.336.75-.75.75s-.75-.336-.75-.75 0-.75.75-.75h.01c.953 0 1.833-.472 2.36-1.26a3.066 3.066 0 012.88-2.924z" clipRule="evenodd" />
                                </svg>
                                {testimonial.stats}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors hover:scale-110 transform"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors hover:scale-110 transform"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect (Footer) */}
      <footer className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-lg mb-8 text-blue-100">
              Ready to transform your financial operations? Get in touch with our team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Request a Demo
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-300">© 2025 Treasury Management Platform. All rights reserved.</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white">Terms of Service</a>
                <a href="#" className="text-blue-200 hover:text-white">Support</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}