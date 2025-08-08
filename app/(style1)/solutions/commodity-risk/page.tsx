'use client';

import React from 'react';
import Image from 'next/image';
import { Activity, BarChart2, Layers, TrendingUp, Shield, AlertCircle, Zap, ArrowRight, Check, PieChart, FileText, RefreshCw, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CommodityRiskPage = () => {
  const challenges = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Price Volatility",
      description: "Managing hedging strategies effectively in response to unpredictable price fluctuations caused by global supply-demand dynamics, geopolitical events, and macroeconomic factors."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Risk Identification and Assessment",
      description: "Accurately identifying and assessing the various risks associated with commodity price movements, including market risk, basis risk, and operational risk."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Hedging Strategy Selection",
      description: "Determining the most appropriate hedging instruments and strategies (e.g., futures, options, swaps) based on the company's risk appetite, market conditions, and regulatory constraints."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Counterparty Risk",
      description: "Evaluating and mitigating the risk of default by counterparties involved in hedging transactions, including commodity brokers, financial institutions, and trading partners."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Regulatory Compliance",
      description: "Ensuring compliance with diverse regulatory requirements and reporting obligations across different jurisdictions where commodity hedging activities are conducted."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Data and Information Management",
      description: "Collecting, analyzing, and interpreting accurate and timely market data to inform hedging decisions, monitor risk, and assess the effectiveness of hedging strategies."
    }
  ];

  const features = [
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "One-solution for All Hedge Derivatives",
      description: "InTReaX is a comprehensive platform for end-to-end management of all commodity derivatives, including forwards, futures, options as well as swaps. This can be done with both Paper and Physical hedge."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Hedging & Exposure Management",
      description: "Actively execute settlements, cancellations, full rollovers, and partial rollovers of trades within the system. Obtain real-time Mark to Market (MTM) valuations for the current trade position."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Efficient Risk Management",
      description: "Implement the company's Risk Management Policy within the system, including the commodity hedge management software with an integrated Audit Trail feature. Establish threshold limits at various levels according to the risk strategy, and configure real-time alerts for policy thresholds and exceptions. Ensure that all actions and decisions are meticulously recorded within the Audit Trail to maintain transparency and accountability."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Interface with Market Data Platforms",
      description: "Seamlessly integrated ecosystem with Market Data Providers, Market Dealing Platforms and Third-Party solutions. Integrated with ERP for pushing accounting entries for margin gain/loss as well as month-end MTM."
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "Dashboards and Reports",
      description: "Gain access to dashboards for management showcasing net open position, reports categorized by dealer, group company, and branch, including Mark to Market (MTM). View a list of hedge contracts, organized by commodity and maturity; view consolidated positions commodity-wise, MTM margin; view Inventory summary warehouse wise and Days position for each commodity-wise."
    }
  ];

  const valuePropositions = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Configure Risk Policy",
      description: "Compliance and monitoring of commodity risk and hedging policies at group-level, entity-level or location-wise."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Configure Roles",
      description: "Roles for back-office, Middle-office and Front-offices easily configurable to provide complete workflow for the end-to-end commodity risk management."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Integrated Solution",
      description: "A connected ecosystem with established connectivity with market data providers, ERP, Banks and any third-party solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Navigation */}


      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner Pages/Solutions/Commodity Risk Management.jpeg"
            alt="Commodity Risk Management"
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
              Managing Commodity Price Risk for Corporates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl"
            >
              Effective strategies to mitigate the impact of volatile commodity prices through proactive risk management and strategic hedging
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50 font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Contact Our Experts
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
              Key Challenges in Commodity Hedging
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Common challenges faced by corporates in managing commodity price risk
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Timely access to accurate data is crucial for making informed decisions aimed at mitigating these risks through effective hedging strategies. By proactively identifying and managing commodity price risks, businesses can safeguard their financial performance and optimize their operational efficiencies in a volatile market environment.
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
              Comprehensive Risk Management Solution
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              End-to-end solutions for effective commodity price risk management
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
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
              Key benefits of our commodity risk management platform
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Experience the power of Commodity Exchange Risk Module and take control of your commodity risk management strategy today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
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
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
          >
            Ready to Transform Your Commodity Risk Management?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Discover how our solution can help you manage commodity price risk and optimize your hedging strategies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50 font-medium">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Contact Our Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommodityRiskPage;
