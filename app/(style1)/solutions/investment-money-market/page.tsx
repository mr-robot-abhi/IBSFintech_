'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, PieChart, Shield, AlertCircle, RefreshCw, BarChart2, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const InvestmentMoneyMarketPage = () => {
  const challenges = [
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "Complex Investment Portfolio Management",
      description: "Handling a diverse range of assets like Mutual Funds, Equity, Bonds, and more can be overwhelming without a streamlined system."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Compliance and Policy Breaches",
      description: "Ensuring that investment activities align with corporate policies and regulatory standards is often challenging, with high risks of non-compliance. Alert the relevant stakeholders in case of breach."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Data Integration Issues",
      description: "Integrating data from multiple sources such as market data providers (LSEG or AMFI), dealing platforms (MFU), and ERPs for sending accounting entries can be cumbersome and error-prone."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Real-time Monitoring and Alerts",
      description: "Lack of real-time monitoring tools can delay response times to market changes and policy breaches, affecting decision-making."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Audit and Reporting Challenges",
      description: "Maintaining a comprehensive audit trail and generating detailed reports for compliance and performance tracking is often manual and prone to errors."
    }
  ];

  const features = [
    {
      title: "Comprehensive Asset Coverage",
      description: "Manage a wide range of investments, including Mutual Funds, Equity, G-Secs, Fixed Deposits, Bonds, Debentures, Certificates of Deposits, Preferential Shares, MLDs, PMS, AIF, Green Bonds, Treasury Bills, InvITs, and ReITs."
    },
    {
      title: "Configurable Investment Policies",
      description: "Set up and customize investment policies tailored to your corporate needs, with automated alerts for policy breaches to ensure compliance."
    },
    {
      title: "Real-time Data Integration",
      description: "Seamlessly connect with data providers (LSEG and AMFI), dealing platforms (MFU), and ERPs to ensure real-time data accuracy and availability."
    },
    {
      title: "Advanced Compliance Monitoring",
      description: "Utilize our built-in compliance tools to monitor and enforce investment policies, reducing the risk of non-compliance and regulatory penalties."
    },
    {
      title: "Robust Audit Trail",
      description: "Access a detailed, tamper-proof audit trail for all transactions and activities, ensuring transparency and accountability."
    },
    {
      title: "Automated Reporting and Analytics",
      description: "Generate comprehensive reports and perform in-depth analytics effortlessly, enhancing your decision-making process with actionable insights."
    }
  ];

  const valuePropositions = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Operational Efficiency",
      description: "Automate routine tasks and streamline processes, reducing manual effort and minimizing errors."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Real-time Decision-Making Support",
      description: "Leverage real-time data and advanced analytics to make informed investment decisions quickly and effectively."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Robust Compliance and Risk Management",
      description: "Ensure adherence to investment policies and regulatory requirements, with proactive alerts for policy breaches and automated compliance checks."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Comprehensive Audit and Reporting",
      description: "Maintain a detailed audit trail and generate accurate, insightful reports, enhancing transparency and facilitating easier audits."
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "Scalable and Future-Proof Solution",
      description: "Our solution grows with your business, offering scalable features and adaptable tools to meet future investment challenges and regulatory changes."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Seamless Integration Across Platforms",
      description: "Connect effortlessly with a wide range of data providers, dealing platforms, and ERP systems, ensuring smooth data flow and operational continuity."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner Pages/Solutions/endtoend_trade_finance_lifecycle_automation_61.jpeg"
            alt="Investment Money Market Solution"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#241F5D]/60 via-[#241F5D]/50 to-[#3A3480]/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              Transform Your Investment Strategy with Advanced Financial Software
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl"
            >
              Streamline investment operations with comprehensive solutions for managing financial instruments, ensuring compliance and efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50 font-medium">
                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-3">
              Facing Complex Investment Challenges?
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Navigating the diverse world of investments can be daunting. Here are the common challenges faced by corporations and financial institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
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
              Revolutionize Your Investment Operations
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Powerful features designed to simplify investment management, enhance compliance, and boost decision-making efficiency.
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
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col"
              >
                <h3 className="text-lg font-semibold text-[#241F5D] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
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
              Unlock unmatched value for your investment operations with our comprehensive solution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                      {React.cloneElement(item.icon, { className: 'h-5 w-5 text-blue-600' })}
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-[#241F5D] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentMoneyMarketPage;