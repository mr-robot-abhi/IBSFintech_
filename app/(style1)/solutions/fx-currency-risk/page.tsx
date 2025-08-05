'use client';

import React from 'react';
import { BarChart2, Target, Eye, Zap, Clock, Globe, Layers, TrendingUp, CheckCircle, Shield, FileText, PieChart, LineChart, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FXCurrencyRiskPage = () => {
  const challenges = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Volatility and Economic Fluctuations",
      description: "Economic conditions can be highly volatile, making it difficult to predict market fluctuations. Factors such as changes in interest rates, inflation, political instability, and economic performance can cause abrupt changes in exchange rates."
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Visibility of Exposure Data",
      description: "With disparate sources of foreign exchange exposures that an organization is exposed to, the challenge remains to consolidate the exposures from different sources and establish a single source of truth across subsidiaries, geographies, and business units."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Natural Hedge vs Financial Hedge",
      description: "Corporations with global operations struggle with the decision of choosing between Natural hedge and Financial hedge strategies to mitigate currency risks effectively."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Access to Real-time Information",
      description: "The absence of real-time data impedes timely and informed decision-making, potentially affecting the corporation's risk mitigation efficiency and financial position."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Compliance with Organization's Hedge Policy",
      description: "Configuring and monitoring Hedge Policies as per the board-approved policy and notifying respective stakeholders upon breach is challenging, especially considering the need for a robust audit trail."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Seamless Communication",
      description: "Seamless communication and coordination between the Front, Mid, and Back-offices of Treasury is challenging, leading to operational inefficiencies and hindering effective risk management."
    }
  ];

  const solutions = [
    {
      title: "One-solution for All Hedge Derivatives",
      description: "InTReaX is a comprehensive platform for end-to-end management of all currency derivatives, including forwards, futures, options (vanilla, exotic, OTC, exchange-traded) as well as swaps (interest rate, forward rate, cross-currency of both legs)."
    },
    {
      title: "Hedging & Exposure Management",
      description: "Actively execute settlements, cancellations, full rollovers, and partial rollovers of trades within the system. Obtain real-time Mark to Market (MTM) valuations for the current trade position."
    },
    {
      title: "Efficient Risk Management",
      description: "Configure the company's Risk Management Policy and implement it into the system, including the foreign exchange software with an integrated Audit Trail feature. Set threshold limits at different levels based on the risk strategy."
    },
    {
      title: "In-depth Analytics",
      description: "Access a range of analytical reports including Currency Sensitivity Analysis, Historical Scenario Analysis, Currency Stress Analysis, Value at Risk (VaR) Analysis, and Currency Gap Analysis."
    },
    {
      title: "Interface with Market Data Platforms",
      description: "Seamlessly integrated ecosystem with Market Data Providers (such as London Stock Exchange Group - LSEG, formerly Refinitiv), Market Dealing Platforms, and Third-Party solutions. Integrated with ERP for pulling underlying exposures and pushing accounting entries."
    },
    {
      title: "Hedge Accounting",
      description: "Supports comprehensive hedge accounting methods to ensure accurate financial reporting and compliance with international standards, including Fair Value Hedges, Cash Flow Hedges, and Net Investment Hedges."
    }
  ];

  const valuePropositions = [
    {
      title: "Consolidated View of Exposures",
      description: "Consolidated View of Exposures across entities, business units, countries, and currencies."
    },
    {
      title: "Configure Risk Policy",
      description: "Compliance and monitoring of corporate risk and hedging policies at group-level, entity-level, or location-wise with robust Audit Trail capabilities."
    },
    {
      title: "Configure Roles",
      description: "Roles for back-office, Middle-office, and Front-offices easily configurable to provide complete workflow for end-to-end currency risk management."
    },
    {
      title: "Integrated Solution",
      description: "A connected ecosystem with established connectivity with dealing platforms, market data providers, ERP, Banks, and any third-party solutions."
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
              Navigate Foreign Exchange Risk
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              A comprehensive solution covering all hedge derivatives to efficiently manage and mitigate Foreign Exchange Risk.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
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
              Knowing the Risk is the Key Challenge for CFOs
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              For corporations engaged in multinational operations with international trade or investment, exchange rate fluctuations have the potential to affect financial performance. The key challenge is to 'Be aware' of the risk emanating from the organization's foreign currency exposures and have this information available in time to take informed decisions.
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

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">
              IBSFINtech's InTREaX for Foreign Exchange Risk Management
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              A comprehensive platform designed to address all your foreign exchange risk management needs with advanced features and seamless integration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#241F5D] mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Value Propositions */}
          <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-8 text-center">
              Value Proposition
            </h3>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the power of Currency / Foreign Exchange Risk Module and take control of your currency exposure and risk management strategy today.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {valuePropositions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <h4 className="text-xl font-semibold text-[#241F5D] mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your FX Risk Management?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our comprehensive solution can help you navigate foreign exchange risks with confidence.
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

export default FXCurrencyRiskPage;
