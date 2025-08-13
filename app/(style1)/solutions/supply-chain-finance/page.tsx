'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, ArrowRight, Check, RefreshCw, Shield, Activity, BarChart2, FileText, CreditCard, Users, Cpu, Link2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SupplyChainFinancePage = () => {
  const challenges = [
    {
      title: "Corporates",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      items: [
        "Managing multiple vendors is complex and time-consuming.",
        "Ensuring vendor reliability is critical to avoid supply chain disruptions.",
        "Manual payment processes are prone to errors and delays.",
        "Integrating with existing ERP systems can be challenging."
      ]
    },
    {
      title: "Suppliers",
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      items: [
        "Complicated onboarding processes hinder business opportunities.",
        "Payment delays impact cash flow and business operations.",
        "Proving credibility to corporates can be difficult.",
        "Accessing supply chain financing smoothly is a challenge."
      ]
    },
    {
      title: "Financial Institutions",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      items: [
        "Evaluating financing risk accurately is crucial.",
        "Integrating data from various sources is time-consuming.",
        "Fraud detection requires advanced technology.",
        "Ensuring customer satisfaction is key to retaining clients."
      ]
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Vendor Onboarding",
      description: "Automated and efficient onboarding process with comprehensive vendor profile creation."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Vendor Credibility Validation",
      description: "AI-driven credibility scoring and continuous monitoring."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Fraud Detection",
      description: "Real-time fraud alerts with advanced AI algorithms."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Payment Processes",
      description: "Automated and error-free payment processing with integration to multiple payment gateways."
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: "ERP & Supply Chain Financing Integration",
      description: "Seamless integration with existing ERP systems and comprehensive supply chain financing solutions."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "AI-Driven Supplier Rating",
      description: "Predictive analytics for supplier performance with AI-based rating and ranking of suppliers."
    }
  ];

  const valuePropositions = [
    { icon: <Check className="h-6 w-6 text-blue-600" />, text: "Efficiency: Reduce time and effort with streamlined processes." },
    { icon: <Shield className="h-6 w-6 text-blue-600" />, text: "Reliability: Ensure accurate and reliable vendor checks." },
    { icon: <Activity className="h-6 w-6 text-blue-600" />, text: "Security: Protect transactions with advanced fraud detection." },
    { icon: <Link2 className="h-6 w-6 text-blue-600" />, text: "Seamless Integration: Integrate easily with your existing systems." },
    { icon: <BarChart2 className="h-6 w-6 text-blue-600" />, text: "AI-Powered Insights: Make better decisions with AI-driven analytics." },
    { icon: <TrendingUp className="h-6 w-6 text-blue-600" />, text: "Improved Cash Flow: Benefit from faster payments and financing options." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Navigation */}


      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner Pages/Solutions/SCF platform for corporates.jpg"
            alt="Supply Chain Finance"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 relative"
              >
                <div className="flex items-center">
                  <Link2 className="h-10 w-10 mr-3 text-blue-300" />
                  <span>Supply Chain Finance</span>
                </div>
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-2 text-blue-300" 
                  viewBox="0 0 400 10" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0,5 Q200,10 400,5" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-blue-100 mb-8 max-w-2xl"
              >
                Transforming financial operations with AI-driven solutions for vendor management and payments
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact?demo=request">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-medium transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-600/40">
                    Request Demo
                  </Button>
                </Link>
                <Link href="/contact?source=supply-chain-finance">
                  <Button size="lg" variant="outline" className="bg-white/90 text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 transition-colors">
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-3">Key Challenges in Supply Chain Finance</h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Common challenges faced across the supply chain finance ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#241F5D] mb-4 text-center">{challenge.title}</h3>
                <ul className="space-y-3">
                  {challenge.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-3">Why Choose Us?</h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Key benefits of our supply chain finance platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#241F5D] mb-4 text-center">{challenge.title}</h3>
                <ul className="space-y-3">
                  {challenge.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-3">Our Supply Chain Finance Solution</h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              End-to-end solutions for efficient supply chain finance management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.floor(index / 3) * 0.1 + (index % 3) * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  {React.cloneElement(feature.icon, { className: 'h-5 w-5 text-blue-600' })}
                </div>
                <h3 className="text-lg font-semibold text-[#241F5D] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white rounded-2xl mx-4 md:mx-6 lg:mx-8 my-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Supply Chain Finance?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Discover how our solution can help you optimize working capital and strengthen supplier relationships.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact?demo=request">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-medium transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-600/40">
                Request Demo
              </Button>
            </Link>
            <Link href="/contact?source=supply-chain-finance">
              <Button size="lg" variant="outline" className="bg-white/90 text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 transition-colors">
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChainFinancePage;
