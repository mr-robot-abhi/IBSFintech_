'use client';

import React from 'react';
import { BarChart2, Target, Eye, Zap, Clock, TrendingUp, Check, ArrowRight, Scale, Banknote, BarChart, FileText, Shield, PieChart } from 'lucide-react';
import ModernMegaMenu from '@/components/layout/ModernMegaMenu';
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
      <ModernMegaMenu />

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
              Revolutionize Your Corporate Borrowing Management
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Streamline, Automate, and Optimize with Our Comprehensive Financial Software Solution
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-blue-100 mb-8 max-w-4xl mx-auto"
            >
              Managing corporate borrowings can be complex and time-consuming. Our solution simplifies the entire borrowing cycle, from setting up bank limits to managing various types of loans and ensuring compliance with regulatory requirements.
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
              Challenges Corporates Face in Borrowing Management
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
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

export default DebtManagementPage;
