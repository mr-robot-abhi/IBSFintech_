'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useWindowSize } from 'react-use';

const timelineData = [
  {
    year: '2006-2016',
    title: 'Foundation & Early Success',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-left">
        <li>First client The Times of India</li>
        <li>Product Beta Launch - Currency Management module</li>
        <li>Launch of Investment (money market) module</li>
        <li>First industry recognition 'Express IT Award - Software Product of the Year 2015"</li>
        <li>Winner of Thomson Reuters Fintech Challenge</li>
      </ul>
    ),
  },
  {
    year: '2017-2020',
    title: 'Growth & Recognition',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-left">
        <li>Seed Funding from Shailesh Haribhakti</li>
        <li>Won Adam Smith Asia Awards 2017 - Technology Partner to Maruti Suzuki (Best Treasury Solution - India)</li>
        <li>First International Client - IMR Metallurgical (Europe)</li>
        <li>Aakash Moondhra (Global CFO - PayU) joins the advisory board</li>
        <li>First International Award in London, UK</li>
        <li>Entry in Singapore. New Client - JSW International Pvt Ltd.</li>
        <li>Featured as Top 8 TMS globally</li>
        <li>Shailesh Haribhakti joins in as Chairman</li>
        <li>Recognised as the Technology provider of BlueStar at the prestigious Global Finance Best FX Provider 2021 Award</li>
      </ul>
    ),
  },
  {
    year: '2021-2023',
    title: 'Global Expansion',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-left">
        <li>Entry to Tokyo</li>
        <li>Launch of IBSFINtech's SaaS Treasury Management System – InTReaX® in partnership with Refinitiv (LSEG)</li>
        <li>Global Partnership: Oracle, Yes Bank & KPMG</li>
        <li>Embarked on global journey – Singapore, Dubai & Japan</li>
        <li>Pramod Agrawal appointed as the new Chief Technology Officer</li>
        <li>Named as a "Major Player" in IDC MarketScape for worldwide SaaS & Cloud-enabled Enterprise Treasury</li>
        <li>New Development Centre in Bengaluru inaugurated by Padma Shri T.V. Mohandas Pai</li>
        <li>Expansion to US market</li>
        <li>Manoj Kohli joins as Advisory Board member</li>
        <li>Won "Best TMS provider" by Corporate Treasurer Award 2023 (3rd consecutive win)</li>
      </ul>
    ),
  },
  {
    year: '2024-2025',
    title: 'Innovation & Leadership',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-left">
        <li>Launched InnoTreasury for SME segment</li>
        <li>Achieved ISO/IEC 27001:2013 certification</li>
        <li>Featured in IDC MarketScapes: Worldwide Cash management systems 2024</li>
        <li>Strategic partnerships with Deloitte, Axis Bank, Aditya Birla Capital, TraydStream, and NetSuite</li>
        <li>Awarded Best TMS provider by Corporate Treasurer Awards 2024</li>
        <li>Raised USD 1.5 Mn in funding</li>
        <li>Won Steve Awards 2024 for Innovation in Thought Leadership</li>
        <li>Collaboration with TMI for flagship treasury event in Mumbai</li>
      </ul>
    ),
  },
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: 'x',
  });
  
  // Spring animation for smooth scrolling
  const smoothScrollX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate total width needed for all timeline items
  const itemWidth = 400; // Width of each timeline card
  const gap = 40; // Gap between items
  const totalWidth = (timelineData.length * (itemWidth + gap)) - gap + 100; // Extra space at the end

  return (
    <section className="relative py-16 overflow-hidden bg-[#241F5D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#241F5D] opacity-90">
          <Image
            src="/bg_13.jpeg"
            alt="Background"
            fill
            className="object-cover object-center mix-blend-overlay"
            priority
            quality={100}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            A timeline of our growth, milestones, and the impact we've made in the financial technology landscape.
          </p>
        </motion.div>

        {/* Scrollable Timeline Container */}
        <div className="relative">
          {/* Scrollbar Track */}
          <div className="h-1 bg-white/20 rounded-full mb-8 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
              style={{ 
                scaleX: smoothScrollX,
                transformOrigin: 'left center' 
              }}
            />
          </div>
          
          {/* Timeline Items Container */}
          <div 
            ref={containerRef}
            className="relative h-[600px] overflow-x-auto overflow-y-visible pb-12 -mx-4 px-4"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <div 
              className="flex items-start gap-10 h-full"
              style={{ width: `${totalWidth}px` }}
            >
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[400px] h-full relative"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <TimelineItem 
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isEven={index % 2 === 0}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Hint */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 text-center text-blue-200 text-sm mt-4"
          >
            <span className="inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Scroll to explore
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: React.ReactNode;
  isEven: boolean;
}

const TimelineItem = ({ year, title, description, isEven }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="h-full flex flex-col justify-center">
      {/* Year - Always on top */}
      <div className="mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white/80"
        >
          {year}
        </motion.div>
      </div>
      
      {/* Vertical Line */}
      <div className="relative h-full flex items-center">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 transform -translate-x-1/2"
        >
          <motion.div 
            className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1.5 -translate-y-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </div>
      
      {/* Content Box */}
      <motion.div
        ref={itemRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4"
      >
        <motion.div
          whileHover={{ 
            y: -5,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg transition-all duration-300 h-full min-h-[300px] flex flex-col"
        >
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <div className="text-blue-100 flex-1">{description}</div>
          
          {/* Gradient accent at bottom */}
          <motion.div 
            className="h-1 mt-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TimelineSection;
