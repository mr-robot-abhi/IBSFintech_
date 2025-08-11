'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowRight, Zap, Shield, Globe, Car, Factory, Building, Users, Newspaper, ShoppingBag, Cpu, Truck, Home, BookOpen, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Linkedin, BarChart2, Settings, Award, Link } from 'lucide-react';
import Footer from '../layout/Footer';
import HeroImageSlideshow from './HeroImageSlideshow';
import ClientLogoStrip from '../common/ClientLogoStrip';

import PartnershipEcosystem from './PartnershipEcosystem';
import OurOfferingsSection from './our_offerings';
import CaseStudies from './CaseStudies';
import { newsArticles } from '@/lib/news';

// Define types for the feature items
interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  content: string;
  position: string;
}

// FeatureOrb component
type FeatureOrbProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  position: string;
};

// Type definitions
interface Industry {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// Function to safely get gradient colors
const getGradientColors = (colorString: string) => {
  try {
    const parts = colorString.split(' ');
    if (parts.length >= 3 && parts[0].startsWith('from-') && parts[2].startsWith('to-')) {
      return {
        from: parts[0].replace('from-', ''),
        to: parts[2].replace('to-', '')
      };
    }
  } catch (e) {
    console.warn('Error parsing gradient colors:', e);
  }
  // Default fallback colors
  return {
    from: 'blue-500',
    to: 'blue-600'
  };
};

// Function to get a random industry (excluding the current one)
const getRandomIndustry = (currentIndustryName: string, industries: Industry[]): Industry => {
  const otherIndustries = industries.filter(ind => ind.name !== currentIndustryName);
  return otherIndustries[Math.floor(Math.random() * otherIndustries.length)];
};

// FlipCard Component Props
interface FlipCardProps {
  industry: Industry;
  delay: number;
  allIndustries: Industry[];
}

// FlipCard Component for Industry Cards
const FlipCard: React.FC<FlipCardProps> = ({
  industry,
  delay,
  allIndustries
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState(industry);
  const [nextIndustry, setNextIndustry] = useState<Industry>(() =>
    getRandomIndustry(industry.name, allIndustries)
  );
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Function to handle flip animation
  const flipCard = async () => {
    if (!isMounted) return; // Don't run if component isn't mounted

    try {
      await controls.start({
        rotateY: 90,
        transition: { duration: 0.4, ease: "easeInOut" }
      });

      // Change to next industry
      if (isMounted) { // Check again before state updates
        setCurrentIndustry(nextIndustry);
        setNextIndustry(getRandomIndustry(nextIndustry.name, allIndustries));
      }

      // Complete the flip
      await controls.start({
        rotateY: 0,
        transition: { duration: 0.4, ease: "easeInOut", delay: 0.1 }
      });
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Animation interrupted:', error);
      }
    }
  };

  // Auto-flip effect
  useEffect(() => {
    if (!isMounted) return; // Don't set up timers if not mounted

    const timer = setTimeout(() => {
      if (isMounted) flipCard();
    }, 3000 + delay * 500);

    const interval = setInterval(() => {
      if (isMounted) flipCard();
    }, 8000); // Flip every 8 seconds

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [nextIndustry, delay, isMounted]); // Add isMounted to dependencies

  // Generate random tilt for asymmetric arrangement
  const randomTilt = useMemo(() => {
    const tilts = [-8, -5, -3, 2, 4, 6, -4, 3];
    return tilts[Math.floor(Math.random() * tilts.length)];
  }, []);

  return (
    <motion.div
      className="relative w-24 h-24 cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: delay * 0.3,
          duration: 0.6
        }
      }}
      viewport={{ once: true, margin: '-50px' }}
      onClick={flipCard}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        transform: `rotate(${randomTilt}deg)`, // Random tilt for asymmetric arrangement
      }}
    >
      {/* Front of Card */}
      <motion.div
        className="absolute w-full h-full rounded-xl overflow-hidden backface-hidden shadow-lg border border-white/20"
        style={{
          background: currentIndustry.color.includes('bg-[') ?
            currentIndustry.color.split(' ')[0].replace('bg-[', '').replace(']', '') :
            (currentIndustry.color === 'from-blue-500 to-blue-600' ? '#ffc1cf' :
              currentIndustry.color === 'from-emerald-500 to-emerald-600' ? '#e8ffb7' :
                currentIndustry.color === 'from-orange-500 to-orange-600' ? '#e2a0ff' :
                  currentIndustry.color === 'from-amber-500 to-amber-600' ? '#c4f5fc' :
                    currentIndustry.color === 'from-purple-500 to-purple-600' ? '#b7ffd8' :
                      currentIndustry.color === 'from-pink-500 to-pink-600' ? '#b7c9ff' :
                        currentIndustry.color === 'from-cyan-500 to-cyan-600' ? '#ffc1cf' :
                          '#e8ffb7')
        }}
        animate={controls}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-1">
          <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center mb-1.5">
            <currentIndustry.icon className="h-5 w-5 text-black" />
          </div>
          <span className="text-[11px] font-medium text-black text-center leading-tight">{currentIndustry.name}</span>
        </div>
      </motion.div>

      {/* Back of Card */}
      <motion.div
        className="absolute w-full h-full rounded-xl overflow-hidden backface-hidden shadow-lg border border-white/20"
        style={{
          background: nextIndustry.color.includes('bg-[') ?
            nextIndustry.color.split(' ')[0].replace('bg-[', '').replace(']', '') :
            (nextIndustry.color === 'from-blue-500 to-blue-600' ? '#ffc1cf' :
              nextIndustry.color === 'from-emerald-500 to-emerald-600' ? '#e8ffb7' :
                nextIndustry.color === 'from-orange-500 to-orange-600' ? '#e2a0ff' :
                  nextIndustry.color === 'from-amber-500 to-amber-600' ? '#c4f5fc' :
                    nextIndustry.color === 'from-purple-500 to-purple-600' ? '#b7ffd8' :
                      nextIndustry.color === 'from-pink-500 to-pink-600' ? '#b7c9ff' :
                        nextIndustry.color === 'from-cyan-500 to-cyan-600' ? '#ffc1cf' :
                          '#e8ffb7')
        }}
        animate={{
          rotateY: 90,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-1">
          <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center mb-1">
            <nextIndustry.icon className="h-4 w-4 text-black" />
          </div>
          <span className="text-[10px] font-medium text-black text-center leading-tight">{nextIndustry.name}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeatureOrb = ({ icon, title, content, position }: FeatureOrbProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute ${position} z-20 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orb */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/80 to-blue-600/80 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30">
        <div className="text-center">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors">
            {icon}
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div className={`absolute top-1/2 -translate-y-1/2 left-full ml-4 w-64 bg-gradient-to-br from-navy-800 to-navy-900 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 shadow-xl transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-2 invisible"}`}>
        <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 rotate-45 bg-navy-800 border-l border-b border-blue-500/30"></div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{content}</p>
      </div>
    </div>
  );
};

// SlideshowBanner component for the hero section
const SlideshowBanner = () => {
  const banners = [
    '/Banner.png',
    '/Home Page Banner 6.png'
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




// Industry Card Component with Flip Animation
interface IndustryCardProps {
  industry: IndustryData;
  position: { x: string; y: string; rotate: number };
  index: number;
  total: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, position, index, total }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();
  const delay = index * 1000; // 1 second delay between each card

  useEffect(() => {
    const startAnimation = async () => {
      await new Promise(resolve => setTimeout(resolve, 500 + delay));

      // Infinite loop for continuous animation
      const animate = async () => {
        await controls.start({
          rotateY: 180,
          transition: { duration: 0.6, ease: 'easeInOut' }
        });

        await new Promise(resolve => setTimeout(resolve, 2000)); // Show back for 2 seconds

        await controls.start({
          rotateY: 0,
          transition: { duration: 0.6, ease: 'easeInOut' }
        });

        await new Promise(resolve => setTimeout(resolve, (total - 1) * 1000)); // Wait for other cards to flip

        // Start next cycle
        animate();
      };

      animate();
    };

    startAnimation();
  }, [controls, delay, total]);

  return (
    <motion.div
      className="absolute w-48 h-48 cursor-pointer"
      style={{
        left: position.x,
        top: position.y,
        rotate: `${position.rotate}deg`,
      }}
      animate={controls}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <div className="w-full h-full relative">
        {/* Front of Card */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-blue-900/80 to-blue-800/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center border border-blue-700/30 shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
            scale: isFlipped ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
            <industry.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-white font-medium text-center text-sm">{industry.name}</h3>
        </motion.div>

        {/* Back of Card */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-blue-800/90 to-blue-700/90 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center border border-blue-600/30 shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            rotateY: 180,
          }}
          animate={{
            rotateY: isFlipped ? 0 : 180,
            scale: isFlipped ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p className="text-white/90 text-xs text-center">{industry.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Industry data type
type IndustryData = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description?: string; // Made optional since not all industry objects might have it
};

export default function IllustrativeOne() {
  // Industry data for flip cards with vibrant colors
  const industries: IndustryData[] = [
    { name: 'Manufacturing', icon: Factory, color: 'from-blue-500 to-blue-600' },
    { name: 'Pharmaceutical', icon: Shield, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Automotive', icon: Car, color: 'from-orange-500 to-orange-600' },
    { name: 'Mining', icon: MapPin, color: 'from-amber-500 to-amber-600' },
    { name: 'Family Offices', icon: Users, color: 'from-purple-500 to-purple-600' },
    { name: 'Textile Retail', icon: ShoppingBag, color: 'from-pink-500 to-pink-600' },
    { name: 'SME', icon: Users, color: 'from-cyan-500 to-cyan-600' },
    { name: 'NBFC', icon: Building, color: 'from-indigo-500 to-indigo-600' }
  ];

  // Function to get a random industry for the back of the card
  const getRandomIndustry = (currentIndustry: string) => {
    const otherIndustries = industries.filter(ind => ind.name !== currentIndustry);
    return otherIndustries[Math.floor(Math.random() * otherIndustries.length)];
  };


  // Get the 3 most recent news articles
  const latestNews = newsArticles.slice(0, 3);

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

      {/* Hero Banner with Slideshow */}
      <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">
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
              <p className="text-yellow-400 font-medium mb-4">Digitising Treasury Across Borders</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Future-ready <br /> Treasury Management System <br /> built for Corporations worldwide
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                A Comprehensive & Integrated TMS for CFOs and Treasurers to manage Cash Flow, Liquidity, Risk, Investments, Debt Trade Finance, and Supply Chain Finance with precision.
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
      <section className="pt-8 pb-0 relative">
        <div className="w-full max-w-screen-xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">From Conglomerates to SMEs — One Treasury Solution</h2>
            <div className="w-full max-w-5xl mx-auto px-4">
              <div className="text-white text-base md:text-lg text-center">
                <p className="leading-tight">
                  <span className="block">Trusted by global corporations to streamline complex treasury operations across sectors and geographies —</span>
                  <span className="block">ensuring unified control, regulatory compliance, and operational efficiency at every scale.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* End-to-end logo strip, outside of any container */}
        <div className="w-full -mt-2">
          <ClientLogoStrip variant="illustrative2" />
        </div>
      </section>
      <OurOfferingsSection />

      {/* Statistics Section */}
      <section className="pt-16 pb-8 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Real Impact. Real Outcomes.
          </motion.h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Productivity Gains */}
            <motion.div
              className="text-center p-4 bg-navy-800/30 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1E3A8A"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24" // 80% of 251.2 (circumference)
                    transform="rotate(-90 50 50)"
                    strokeLinecap="round"
                  />
                  <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-xl font-bold fill-white">
                    80%
                  </text>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">Productivity</h3>
              <h3 className="text-base font-semibold text-white">Gains</h3>
            </motion.div>

            {/* Accuracy Improved */}
            <motion.div
              className="text-center p-4 bg-navy-800/30 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1E3A8A"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="12.56" // 95% of 251.2
                    transform="rotate(-90 50 50)"
                    strokeLinecap="round"
                  />
                  <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-xl font-bold fill-white">
                    95%
                  </text>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">Accuracy</h3>
              <h3 className="text-base font-semibold text-white">Improved</h3>
            </motion.div>

            {/* Optimised Fund Utilisation */}
            <motion.div
              className="text-center p-4 bg-navy-800/30 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1E3A8A"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="75.36" // 70% of 251.2
                    transform="rotate(-90 50 50)"
                    strokeLinecap="round"
                  />
                  <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-xl font-bold fill-white">
                    70%
                  </text>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">Optimised Fund</h3>
              <h3 className="text-base font-semibold text-white">Utilisation</h3>
            </motion.div>

            {/* Manual Effort Reduced */}
            <motion.div
              className="text-center p-4 bg-navy-800/30 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1E3A8A"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#EC4899"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="125.6" // 50% of 251.2
                    transform="rotate(-90 50 50)"
                    strokeLinecap="round"
                  />
                  <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-xl font-bold fill-white">
                    50%
                  </text>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">Manual Effort</h3>
              <h3 className="text-base font-semibold text-white">Reduced</h3>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-2 relative overflow-hidden w-full bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/10 shadow-xl p-4 md:p-6">
            <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">
              {/* Left Column: Text Panel */}
              <div className="w-full lg:w-2/5">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-white mb-6">
                  Why Choose Us
                </h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  IBSFINtech solution covers the entire treasury management lifecycle, from front office to back-office operations.
                </p>
                <p className="text-base text-white/80 mb-6 leading-relaxed">
                  With deep expertise in Trade Finance, Supply Chain Finance, Payments, FX, Money Market, Commodity Risk, and Cashflow & Liquidity management, we provide a comprehensive approach to streamline your operations.
                </p>
                <button className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-full transition transform hover:-translate-y-0.5 hover:shadow-lg">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Right Column: New Creative SVG */}
              <div className="w-full lg:w-3/5 relative h-[500px] md:h-[550px] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/Why choose us-creative.svg"
                    alt="Why Choose Us Creative Visual"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full max-w-[600px] max-h-[600px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Industries Grid */}
      <section className="py-16 relative overflow-hidden w-full bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/10 shadow-xl p-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Text Content - Left Side */}
              <div className="lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-white mb-4">
                    One TreasuryTech Platform <br />
                    Any Industry Anywhere
                  </h2>
                  <p className="text-base text-white/90">
                    Built with flexibility at its core, IBSFINtech TMS is built to serve businesses of every size and sector - it doesn't rely on one-size-fits-all.
                    <br/> It’s a scalable, configurable solution that fits any treasury landscape — no matter the industry or geography.                  </p>
                </motion.div>
              </div>

              {/* Enhanced Flip Cards - Right Side */}
              <div className="lg:w-3/5 relative">
                {/* Grid Container for 2 rows of 4 tiles each */}
                <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
                  {industries.slice(0, 8).map((industry, idx) => {
                    // New color palette - exact colors specified
                    const colors = [
                      { bg: '#1be7ff', text: '#111226' }, // Cyan
                      { bg: '#89fc00', text: '#111226' }, // Lime Green
                      { bg: '#e4ff1a', text: '#111226' }, // Bright Yellow
                      { bg: '#e8aa14', text: '#111226' }, // Orange
                      { bg: '#00ffe7', text: '#111226' }, // Turquoise
                      { bg: '#e2a0ff', text: '#111226' }, // Light Purple
                    ];

                    const color = colors[idx % colors.length];
                    const offsetX = (Math.random() - 0.5) * 10; // Smaller random X offset
                    const offsetY = (Math.random() - 0.5) * 10; // Smaller random Y offset

                    return (
                      <div
                        key={idx}
                        className="relative w-24 h-24 cursor-pointer perspective-1000"
                        style={{
                          transform: `rotate(-20deg) translate(${offsetX}px, ${offsetY}px)`,
                        }}
                      >
                        <FlipCard
                          industry={{
                            ...industry,
                            color: `bg-[${color.bg}] text-[${color.text}]`
                          }}
                          delay={idx * 0.1}
                          allIndustries={industries}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partnership Ecosystem Section */}
      <PartnershipEcosystem variant="illustrative1" />

      {/* Case Studies */}
      <CaseStudies />

      {/* Secure Banking Section */}
      <section className="py-12 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Innovate. Automate. Accelerate
              </h2>
              <p className="text-base text-gray-300 mb-6 max-w-6xl mx-auto leading-relaxed">
                <span className="block text-lg">Go beyond traditional treasury. Driven by deep domain expertise, IBSFINtech Treasury Management System simplifies treasury complexity and delivers seamless digitisation across Cashflow & Liquidity, Currency Risk, Commodity Risk, Investment,</span>
                <span className="block text-lg">Debt Management, Trade Finance and Supply chain Finance — enabling a seamless shift from manual to smart treasury operations</span>
              </p>
              <motion.a
                href="/security"
                className="inline-flex items-center px-5 py-2 border-2 border-blue-500 text-blue-400 text-sm font-medium rounded-full hover:bg-blue-500/10 transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="relative overflow-hidden">
        <div className="w-full flex flex-col relative">
          {/* Latest News Section */}
          <section className="py-10 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6"
              >
                <h2 className="text-3xl font-bold text-white mb-2">The Latest</h2>
                <p className="text-gray-300 text-sm">
                  Stay updated with the latest news and updates from our team.
                </p>
              </motion.div>

              {/* 3-Card Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
                {/* Large Feature Card */}
                <motion.div
                  className="lg:col-span-2 rounded-lg overflow-hidden relative group h-80 lg:h-56"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 p-4 flex flex-col justify-end">
                    <div className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full inline-flex items-center w-fit mb-2">
                      <Newspaper className="h-3 w-3 mr-1.5" />
                      <span>{latestNews[0].category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {latestNews[0].title}
                    </h3>
                    <div className="text-gray-300 text-sm">
                      <span>By {latestNews[0].author}</span>
                      <span className="mx-2">•</span>
                      <span>{latestNews[0].date}</span>
                    </div>
                  </div>
                  <Image
                    src={latestNews[0].backgroundImage}
                    alt={latestNews[0].title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                {/* Right Column - Top Card */}
                <motion.div
                  className="rounded-lg overflow-hidden relative group h-56"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 p-3 flex flex-col justify-end">
                    <div className="bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded-full inline-flex items-center w-fit mb-1">
                      <span>{latestNews[1].category}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors line-clamp-3">
                      {latestNews[1].title}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {latestNews[1].date}
                    </p>
                  </div>
                  <Image
                    src={latestNews[1].backgroundImage}
                    alt={latestNews[1].title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                {/* Bottom Row - Full Width Card */}
                <motion.div
                  className="lg:col-span-3 rounded-lg overflow-hidden relative group h-56 mt-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 p-4 flex flex-col justify-end">
                    <div className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full inline-flex items-center w-fit mb-2">
                      <span>{latestNews[2].category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {latestNews[2].title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-1">
                      {latestNews[2].excerpt}
                    </p>
                    <div className="text-blue-300 text-sm mt-1">
                      {latestNews[2].date}
                    </div>
                  </div>
                  <Image
                    src={latestNews[2].backgroundImage}
                    alt={latestNews[2].title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </div>

              <div className="text-center mt-6">
                <motion.a
                  href="/resources/news"
                  className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-400 text-sm font-medium rounded-full hover:bg-blue-500/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All News
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </motion.a>
              </div>
            </div>
          </section>

          {/* Let's Connect Subsection */}
          <div className="flex-1 py-8 bg-gradient-to-b from-gray-900 to-gray-800 relative z-10 flex items-center">
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
                  <h2 className="text-3xl font-bold mb-2 text-white">Let's Connect</h2>
                  <p className="text-base text-white/90 mb-2">
                    Ready to revolutionize your treasury operations?
                  </p>
                  <p className="text-base text-white/90 mb-2">
                    Contact us to explore our solutions and see how we can transform your financial processes.
                  </p>
                  <p className="text-base text-white/90 mb-4">
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
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-[400px] h-[400px] opacity-20 mx-8">
                  <Image
                    src="/IBSFINtech-Cube-water mark.svg"
                    alt="IBSFINtech Watermark"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right Column - Social Icons */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-row md:flex-col items-center justify-center gap-4"
                >
                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="group p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="group p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-red-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="group p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="group p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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