'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    client: 'Global Transport Inc.',
    title: 'Streamlining Global Payments',
    description: 'Implemented a centralized payment hub, reducing processing times by 60% and cutting cross-border transaction fees by 45%.',
    imageUrl: '/case-studies/case1.jpg',
    stats: [
      { value: '60%', label: 'Faster Processing' },
      { value: '45%', label: 'Fee Reduction' },
      { value: '99.9%', label: 'Payment Accuracy' },
    ],
  },
  {
    client: 'Innovatech Solutions',
    title: 'Automating Treasury for Hyper-Growth',
    description: 'Deployed an AI-powered treasury management system to automate 90% of manual tasks, enabling the finance team to focus on strategic growth.',
    imageUrl: '/case-studies/case2.jpg',
    stats: [
      { value: '90%', label: 'Automation' },
      { value: '4x', label: 'Team Productivity' },
      { value: '100%', label: 'Real-time Visibility' },
    ],
  },
  {
    client: 'Quantum Retail',
    title: 'Optimizing Retail Cash Flow',
    description: 'Utilized predictive analytics for cash forecasting, improving accuracy by 35% and unlocking $15M in working capital.',
    imageUrl: '/case-studies/case3.jpg',
    stats: [
      { value: '35%', label: 'Forecast Accuracy' },
      { value: '$15M', label: 'Unlocked Capital' },
      { value: '20%', label: 'Reduced Borrowing' },
    ],
  },
  {
    client: 'Energy Corp',
    title: 'Mitigating Commodity Price Risk',
    description: 'Developed a sophisticated hedging strategy using our platform, protecting margins and reducing exposure to market volatility by 50%.',
    imageUrl: '/case-studies/case4.jpg',
    stats: [
      { value: '50%', label: 'Risk Reduction' },
      { value: '15%', label: 'Margin Protection' },
      { value: '24/7', label: 'Exposure Monitoring' },
    ],
  },
  {
    client: 'HealthPro Diagnostics',
    title: 'Securing Sensitive Financial Data',
    description: 'Enhanced security protocols with our multi-layered defense system, achieving zero breaches and full compliance with international standards.',
    imageUrl: '/case-studies/case5.jpg',
    stats: [
      { value: 'Zero', label: 'Security Breaches' },
      { value: '100%', label: 'Compliance' },
      { value: '2x', label: 'Faster Audits' },
    ],
  },
  {
    client: 'Apex Manufacturing',
    title: 'Digitizing Trade Finance for Efficiency',
    description: 'Automated the entire trade finance lifecycle, from LCs to settlements, cutting documentation processing time by 75%.',
    imageUrl: '/case-studies/case6.jpg',
    stats: [
      { value: '75%', label: 'Faster Documentation' },
      { value: '30%', label: 'Reduced Errors' },
      { value: '5-Day', label: 'Shorter Cycle' },
    ],
  },
];

const CaseStudiesStyleThree = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    },
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how leading organizations have transformed their financial operations and achieved remarkable results with our platform.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03} transitionSpeed={400}>
                <div className="h-full bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={study.imageUrl} 
                      alt={study.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-xl drop-shadow-md">{study.client}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{study.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{study.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-center my-4">
                      {study.stats.map(stat => (
                        <div key={stat.label}>
                          <p className="font-bold text-2xl text-teal-600 dark:text-teal-400">{stat.value}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <button className="mt-auto w-full text-center py-2 px-4 bg-teal-500/10 dark:bg-teal-400/10 text-teal-700 dark:text-teal-300 rounded-lg font-semibold hover:bg-teal-500/20 dark:hover:bg-teal-400/20 transition-all duration-300 flex items-center justify-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesStyleThree;
