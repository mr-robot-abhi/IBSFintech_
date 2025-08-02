'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Globe, Shield, BarChart2, DollarSign, Truck, Zap } from 'lucide-react';

const caseStudies = [
  {
    client: 'Fujairah Gold',
    title: 'Treasury Transformation',
    description: 'Successfully implemented a comprehensive treasury management system, streamlining cash flow and optimizing working capital management.',
    imageUrl: '/Case_Studies/Fujairah-Gold-IBSFINtech.png',
    highlights: ['Treasury', 'Automation', 'Compliance'],
    date: 'May 15, 2024',
    icon: Globe,
    industry: 'Mining & Metals',
  },
  {
    client: 'Credit Saison',
    title: 'Risk Management',
    description: 'Deployed advanced risk analytics and monitoring tools to enhance credit risk assessment and portfolio management.',
    imageUrl: '/Case_Studies/CreditSaison_Case-study.png',
    highlights: ['Risk Analytics', 'Portfolio Management', 'Compliance'],
    date: 'April 22, 2024',
    icon: Shield,
    industry: 'Financial Services',
  },
  {
    client: 'Kotak Mahindra Bank',
    title: 'Digital Banking',
    description: 'Transformed retail and corporate banking operations with our integrated digital banking platform, enhancing customer experience and operational efficiency.',
    imageUrl: '/Case_Studies/polycab-small.png',
    highlights: ['Digital Transformation', 'Customer Experience', 'Efficiency'],
    date: 'March 10, 2024',
    icon: BarChart2,
    industry: 'Banking',
  },
  {
    client: 'Muthoot Finance',
    title: 'Financial Inclusion',
    description: 'Implemented a scalable microfinance solution to expand financial services to underbanked communities across India.',
    imageUrl: '/Case_Studies/Dabur-India-IBSFINtech.png',
    highlights: ['Microfinance', 'Financial Inclusion', 'Scalability'],
    date: 'February 28, 2024',
    icon: DollarSign,
    industry: 'Financial Services',
  },
  {
    client: 'Maruti Suzuki',
    title: 'Supply Chain Finance',
    description: 'Revolutionized supply chain financing with our platform, reducing payment cycles and improving supplier relationships.',
    imageUrl: '/Case_Studies/Signature-Global.png',
    highlights: ['Supply Chain', 'Fintech', 'Efficiency'],
    date: 'January 15, 2024',
    icon: Truck,
    industry: 'Automotive',
  },
  {
    client: 'Hindustan Unilever',
    title: 'Cash Management',
    description: 'Optimized cash management processes across multiple business units, significantly improving liquidity and reducing operational costs.',
    imageUrl: '/Case_Studies/Hindustan-Zinc-Limited.png',
    highlights: ['Cash Management', 'Liquidity', 'Cost Reduction'],
    date: 'December 5, 2023',
    icon: Zap,
    industry: 'FMCG',
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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories That <span className="text-teal-600 dark:text-teal-400">Inspire</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how industry leaders are transforming their financial operations with our innovative solutions
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Tilt 
                  tiltMaxAngleX={5} 
                  tiltMaxAngleY={5} 
                  scale={1.03} 
                  transitionSpeed={400}
                  className="h-full"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group flex flex-col">
                    {/* Logo Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                        <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {study.client.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-48 w-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-6">
                      <div className="relative w-full h-full max-w-[200px] mx-auto">
                        <Image 
                          src={study.imageUrl} 
                          alt={`${study.client} logo`}
                          fill
                          style={{ objectFit: 'contain' }}
                          className="transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow border-t border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{study.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.highlights.map((tag, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{study.date}</span>
                        <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-sm font-medium flex items-center group transition-colors">
                          View Case Study
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesStyleThree;
