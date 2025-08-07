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
      <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text content on the left */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              >
                Transform Your Investment Strategy with Our Advanced Financial Software
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-blue-100 mb-6"
              >
                Streamline your investment operations with a comprehensive solution designed to manage a wide array of financial instruments, ensuring compliance, efficiency, and enhanced decision-making for corporates, NBFCs, and family offices.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            
            {/* Image on the right */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/Inner Pages/Solutions/endtoend_trade_finance_lifecycle_automation_61.jpeg"
                  alt="Investment Money Market Solution"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">
              Facing Complex Investment Challenges?
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Navigating the diverse world of investments can be daunting. From ensuring compliance across multiple asset classes to managing real-time data feeds and policy breaches, here are the common challenges faced by corporations and financial institutions.
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
              Revolutionize Your Investment Operations with Our Cutting-Edge Features
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Our software is packed with powerful features designed to simplify investment management, enhance compliance, and boost decision-making efficiency. Here's how we address your key challenges.
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
                <h3 className="text-xl font-semibold text-[#241F5D] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Why Choose Our Solution?
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Unlock Unmatched Value for Your Investment Operations
            </p>
            <p className="text-gray-600 mt-4">
              Our solution is designed to not only simplify investment management but also to enhance your operational efficiency, compliance, and strategic decision-making. Here's what sets us apart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-[#241F5D] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
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