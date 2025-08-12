'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Globe, Shield, Activity, RefreshCw, AlertCircle, BarChart2, PieChart, ArrowRight, Check, Layers, TrendingUp, CreditCard, Zap } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const TradeFinancePage = () => {
  const challenges = [
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Fragmented Processes",
      description: "Managing trade finance activities manually or through disparate systems leads to inefficiencies, errors, and delays."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Complex Compliance Requirements",
      description: "Navigating through diverse regulatory environments and maintaining compliance with local and international trade finance regulations is challenging."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Risk Management",
      description: "Identifying, assessing, and mitigating financial and operational risks associated with trade finance is a major concern for corporates."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Data Integration",
      description: "Integrating data from various sources like ERP systems, banks, and other financial institutions to get a consolidated view is often difficult."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Operational Transparency",
      description: "Lack of transparency in trade finance transactions can lead to difficulties in tracking and auditing, impacting decision-making and financial reporting."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Documentation",
      description: "Preparing documentation for banks is a major pain point for corporates. Our software simplifies this process by automatically generating and delivering accurate documents to banks, saving time and reducing errors."
    }
  ];

  const features = [
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Bank Limit Management",
      description: "Monitor and manage bank limits effectively, ensuring optimal utilization and compliance with banking terms."
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Import Cycle Management",
      description: "Seamlessly integrate with your ERP system to capture data from purchase orders and invoices, automate the issuance of LCs (Letters of Credit), BCs (Buyers Credit), and link them with bank limits."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Export Cycle Management",
      description: "Extract data from sales orders and invoices in your ERP, automate pre-shipment and post-shipment loans, and link these activities with bank limits."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Bank Guarantee Management",
      description: "Efficiently manage the entire lifecycle of bank guarantees, from issuance to maturity, ensuring compliance and minimizing risk."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Real-time Data Integration",
      description: "Ensure real-time synchronization of data between the ERP system and the trade finance software by pulling all the purchase, sales related data, and pushing accurate and timely accounting entries back to ERP."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "EDPMS and IDPMS",
      description: "Managing EDPMS and IDPMS compliance can be challenging for corporates. Our software streamlines this process by efficiently preparing and managing all necessary documentation, ensuring full compliance with EDPMS and IDPMS regulations, and seamlessly integrating with bank systems to save time and reduce errors."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Dashboards and Reports",
      description: "Robust dashboards and MIS reports for complete trade finance visibility. Features real-time insights, authorization matrix, and integrated audit trail for security."
    }
  ];

  const valuePropositions = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Efficiency",
      description: "Automate complex trade finance processes, reducing manual effort, and minimizing errors, thus improving overall operational efficiency."
    },
    {
      icon: <Check className="h-6 w-6 text-blue-600" />,
      title: "Improved Compliance",
      description: "Stay compliant with global trade finance regulations through automated compliance checks and real-time updates."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Risk Mitigation",
      description: "Identify and manage risks proactively with robust risk assessment tools and comprehensive visibility into all trade finance activities."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Data-driven Decision Making",
      description: "Leverage real-time data and analytics to make informed decisions, optimize financial strategies, and improve cash flow management."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Operational Transparency",
      description: "Achieve greater transparency and accountability with detailed audit trails and comprehensive reporting features, facilitating easier audits and financial reviews."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Seamless Integration",
      description: "Ensure smooth data flow and synchronization between your ERP system and trade finance operations, providing a unified platform for better control and management."
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
            src="/Inner Pages/Solutions/endtoend_trade_finance_lifecycle_automation_61.jpg"
            alt="Trade Finance Lifecycle Automation"
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
                  <FileText className="h-10 w-10 mr-3 text-blue-300" />
                  <span>Trade Finance</span>
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
                Streamline and automate the complexities of global trade finance operations with our advanced management software.
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
                <Link href="/contact?source=trade-finance">
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
              Global Trade Finance Challenges
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Global trade finance faces challenges such as fragmented processes, complex compliance requirements, and risk management.
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
                className="bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col"
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
              Explore Our Software's Robust Features
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Automated import/export cycles, bank limit and loan management, and seamless ERP integration for enhanced efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col break-words"
              >
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  {React.cloneElement(feature.icon, { className: 'h-5 w-5 text-blue-600' })}
                </div>
                <h3 className="text-lg font-semibold text-[#241F5D] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 break-words">{feature.description}</p>
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
              Value Proposition
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Discover how our solution transforms trade finance operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col"
              >
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  {React.cloneElement(proposition.icon, { className: 'h-5 w-5 text-blue-600' })}
                </div>
                <h3 className="text-lg font-semibold text-[#241F5D] mb-2">{proposition.title}</h3>
                <p className="text-sm text-gray-600 mb-0">{proposition.description}</p>
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
            Ready to Transform Your Trade Finance Operations?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Discover how our comprehensive solution can help you streamline your trade finance processes.
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
            <Link href="/contact?source=trade-finance">
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

export default TradeFinancePage;
