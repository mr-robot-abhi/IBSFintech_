'use client';

import React from 'react';
import { FileText, Globe, Shield, Activity, RefreshCw, AlertCircle, BarChart2, PieChart, ArrowRight, Check, Layers, TrendingUp, CreditCard, Zap } from 'lucide-react';

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
      description: "It also features robust dashboards and MIS reports to cover the entire trade finance operations, offering real-time insights and comprehensive visibility. To enhance control and security, our software includes an authorization matrix and an integrated Audit Trail, ensuring transparent and accountable processes."
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
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Comprehensive Trade Finance Management Solution
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Streamline and automate the complexities of global trade finance operations
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-blue-100 mb-8 max-w-4xl mx-auto"
            >
              Our advanced trade finance management software is designed to streamline and automate the complexities of trade finance for global corporates. Our solution integrates seamlessly with your ERP system to manage bank limits, import and export cycles, and bank guarantees.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">
              Global Trade Finance Challenges
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Global trade finance faces challenges such as fragmented processes, complex compliance requirements, risk management, data integration, and lack of operational transparency.
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
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#241F5D] mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
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
              Explore Our Software's Robust Features
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Automated import/export cycles, bank limit and loan management, and seamless ERP integration for enhanced efficiency and transparency
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
              Value Proposition
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Trade Finance Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our comprehensive solution can help you streamline your trade finance processes and optimize your global operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeFinancePage;
