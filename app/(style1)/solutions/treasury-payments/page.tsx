'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CreditCard, DollarSign, FileText, Shield, Zap, Clock, BarChart, PieChart, ArrowRight, Check, Activity, Layers, RefreshCw, AlertCircle, BarChart2, TrendingUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const TreasuryPaymentsPage = () => {
  const challenges = [
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Complex Bank Administration",
      description: "Managing multiple bank accounts, signatories, and approval processes can be time-consuming and error-prone."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Vendor and Payment Management",
      description: "Ensuring timely and accurate payments to vendors, handling bulk payments, and integrating with ERP systems pose significant challenges."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Cash Pooling and Fund Transfers",
      description: "Efficiently managing cash pools, maintaining optimal balances, and executing real-time fund transfers are critical for liquidity management."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Bank Integration",
      description: "Seamless integration with multiple banks for account statements, balance updates, and payment processing is often complex and requires robust systems."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Real-Time Monitoring and Alerts",
      description: "Keeping track of real-time account balances, payment statuses, and handling failed transactions can be challenging without an automated system."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Regulatory Compliance and Reporting",
      description: "Adhering to regulatory requirements and generating accurate reports demand a reliable and comprehensive solution."
    }
  ];

  const features = [
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Bank Administration and Signatory Management",
      description: "Open, modify, and close bank accounts, maintain signatories, and manage multi-level approval processes."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Comprehensive Payment Processing",
      description: "Manage vendor details, bulk payment approvals, voucher creation, cheque payment flow, and payment scheduling with ERP integration."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Advanced Cash Pooling",
      description: "Handle transaction processing, real-time balance updates, API-based fund transfers, letter generation, and balance calculations."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Seamless Bank Integration",
      description: "Integrate with banks to pull account statements, update balances, and process payments through APIs."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Real-Time Alerts and Monitoring",
      description: "Receive real-time payment alerts, status updates, and reference numbers; manage rejected and failed payments."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Robust Reporting and Analytics",
      description: "Generate dashboards, MIS reports, and analytics for regulatory compliance and informed decision-making."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Built-In Security and Compliance",
      description: "Ensure data integrity with an inbuilt audit trail, DMS, and authorization matrix."
    }
  ];

  const valuePropositions = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Efficiency and Accuracy",
      description: "Automate and streamline bank administration, payment processing, and cash pooling to reduce manual effort and errors."
    },
    {
      icon: <Check className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Compliance",
      description: "Meet regulatory requirements with comprehensive reporting and documentation features."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "Cost Savings",
      description: "Optimize cash management and fund transfers to minimize costs and improve liquidity."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Improved Decision Making",
      description: "Leverage real-time data and analytics for better financial decision-making and strategic planning."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Security and Accountability",
      description: "Maintain transparency and data integrity with robust security features and audit trails."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Seamless Integration",
      description: "Enjoy smooth integration with multiple banks and ERP systems, enhancing overall operational efficiency."
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
            src="/Inner Pages/Solutions/Payments.jpg"
            alt="Treasury Payments"
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
                  <CreditCard className="h-10 w-10 mr-3 text-blue-300" />
                  <span>Treasury Payments</span>
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
                Automate, integrate, and optimize your payment processes with our comprehensive solution
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
                <Link href="/contact?source=treasury-payments">
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
              Key Challenges in Corporate Treasury Payments
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Common challenges faced by corporates in managing treasury payments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-3">
              Comprehensive Treasury Payments Solution
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              End-to-end solutions for efficient payment processing and management
            </p>
            <p className="text-lg text-gray-600">
              Our comprehensive payment solution is designed to address all your corporate payment needs efficiently and effectively.
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
                    {React.cloneElement(feature.icon, { className: 'h-5 w-5 text-blue-600' })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#241F5D] mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-3">
              Why Choose Our Solution?
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Key benefits of our treasury payments platform
            </p>
            <p className="text-lg text-gray-600">
              Experience the power of our Treasury Payments solution and transform your payment processes today.
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
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  {React.cloneElement(proposition.icon, { className: 'h-5 w-5 text-blue-600' })}
                </div>
                <h3 className="text-lg font-semibold text-[#241F5D] mb-2">{proposition.title}</h3>
                <p className="text-sm text-gray-600">{proposition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Treasury Payments?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Discover how our solution can help you streamline payment processes and improve financial operations.
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
            <Link href="/contact?source=treasury-payments">
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

export default TreasuryPaymentsPage;
