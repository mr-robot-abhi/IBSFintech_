'use client';

import React from 'react';
import { BarChart2, Target, Eye, Zap, Clock, TrendingUp, Check, ArrowRight, Scale, Banknote, BarChart, FileText, Shield, PieChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const DebtManagementPage = () => {
  const challenges = [
    {
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      title: "Complex Borrowing Structures",
      description: "Corporates deal with various types of loans, each with its own terms and conditions, making management complex."
    },
    {
      icon: <Banknote className="h-6 w-6 text-blue-600" />,
      title: "Bank Limit Management",
      description: "Ensuring they do not exceed bank limits can be a daunting task, requiring constant monitoring."
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "Interest Rate Fluctuations",
      description: "Keeping up with and managing changing interest rates is crucial to minimize costs."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Regulatory Compliance",
      description: "Staying compliant with ever-evolving regulations demands robust reporting and documentation."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Integration with ERP Systems",
      description: "Seamlessly integrating borrowing data with existing ERP systems can be technically challenging."
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Audit and Accountability",
      description: "Ensuring all transactions are transparent and auditable to avoid financial discrepancies."
    }
  ];

  const features = [
    {
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      title: "Comprehensive Loan Management",
      description: "Manage Term Loans, WCDL, ECB, Foreign Currency Term Loans, Inter-Company Borrowings, Bonds, Market Linked Debentures, Non-convertible Debentures, CBLO, and Commercial Paper"
    },
    {
      icon: <Banknote className="h-6 w-6 text-blue-600" />,
      title: "Bank Limit Management",
      description: "Set up and monitor bank limits with alerts for insufficient limits and fungibility between limits"
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Pre-Processing of Loans",
      description: "Streamline loan initiation and processing by creating application, confirmation and generate letters that needs to be submitted to the bank"
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "Liability Management",
      description: "Track interest provisions, principal and interest cash flows, amortization schedules, and rollover of borrowings"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Debt Closure Assistance",
      description: "Facilitate debt repayment, partial repayment, pre-closure of loans, and penal interest tracking"
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "ERP Integration",
      description: "Seamlessly post accounting entries directly to your ERP system"
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Reporting and Analytics",
      description: "Access dashboards, generate MIS reports, and ensure regulatory compliance with robust analytics and reporting tools"
    }
  ];

  const valuePropositions = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Efficiency and Accuracy",
      description: "Automate and streamline borrowing processes, reducing manual effort and errors."
    },
    {
      icon: <Check className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Compliance",
      description: "Meet regulatory requirements with robust reporting and documentation features."
    },
    {
      icon: <Banknote className="h-6 w-6 text-blue-600" />,
      title: "Cost Savings",
      description: "Optimize borrowing costs through effective interest rate management and limit monitoring."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Improved Decision Making",
      description: "Gain insights from dashboards and analytics for better financial decision-making."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Security and Accountability",
      description: "Ensure data integrity and transparency with built-in audit trails and authorization controls."
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "Seamless Integration",
      description: "Enjoy a smooth integration with existing ERP systems, enhancing overall operational efficiency."
    }
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
            src="/Inner Pages/Solutions/Borrowing_Management_treasury_50.jpg"
            alt="Debt Management Solution"
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
                  <BarChart2 className="h-10 w-10 mr-3 text-blue-300" />
                  <span>Debt Management</span>
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
                Streamline, automate, and optimize your borrowing processes with our comprehensive financial software solution.
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
                <Link href="/contact?source=debt-management">
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-3">
              Challenges in Borrowing Management
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Common challenges faced by corporates in managing their borrowing operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col"
              >
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 flex-shrink-0">
                  {React.cloneElement(challenge.icon, { className: 'h-5 w-5 text-blue-600' })}
                </div>
                <h3 className="text-lg font-semibold text-[#241F5D] mb-2">{challenge.title}</h3>
                <p className="text-sm text-gray-600 mb-0">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">
              Comprehensive Debt Management Solution
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Our platform offers a complete suite of tools to manage your corporate borrowing needs efficiently and effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#241F5D] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">
              Our Solution Features
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              From comprehensive loan management to seamless ERP integration, discover how our solution can transform your financial operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {proposition.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#241F5D] mb-2">{proposition.title}</h3>
                <p className="text-gray-600">{proposition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Debt Management?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our comprehensive solution can help you streamline your borrowing processes and optimize costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?demo=request">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-medium transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-600/40">
                Request Demo
              </Button>
            </Link>
            <Link href="/contact?source=debt-management">
              <Button size="lg" variant="outline" className="bg-white/90 text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 transition-colors">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DebtManagementPage;
