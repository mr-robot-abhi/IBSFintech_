'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/Inner Pages/Solutions/Fx_Risk_Management_Solution_50.jpg"
              alt="FX Risk Management Solution"
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
              priority
              style={{
                maxHeight: '100vh',
                width: '100%',
                height: 'auto',
                objectPosition: 'center'
              }}
            />
          </div>
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
                  <span>FX & Currency Risk</span>
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
                Comprehensive FX risk management solution to protect your bottom line from currency volatility
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
                <Link href="/contact?source=fx-currency-risk">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The CFO's Currency Risk Challenge</h2>
            <div className="w-20 h-1 bg-[#241F5D] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              In today's volatile markets, currency fluctuations can significantly impact your bottom line. The key is having real-time visibility and control over your FX exposures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#241F5D]/10 flex items-center justify-center mb-3">
                  {React.cloneElement(challenge.icon, { className: 'h-5 w-5 text-[#241F5D]' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-full px-0">
          <div className="bg-white shadow-sm border-t border-b border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
              {/* Left Column - Main Solution */}
              <div className="lg:col-span-2 p-6 md:p-8">
                <div className="relative h-72 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/Inner Pages/Solutions/Fx_Risk_Management_Solution_50.jpg"
                    alt="FX Risk Management Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Right Column - Solution Cards */}
              <div className="bg-gray-50 p-4 md:p-6 border-t lg:border-t-0 lg:border-l border-gray-100">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Comprehensive FX Risk Management</h3>
                    <p className="text-gray-600 text-sm">
                      Advanced tools to identify, measure, monitor, and manage foreign exchange risk across your organization.
                    </p>
                  </div>
                  
                  <div className="space-y-4 flex-1 overflow-y-auto max-h-[400px] pr-2 -ml-4 pl-2">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white p-4 rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all"
                      >
                        <h4 className="font-medium text-gray-900 mb-1">{solution.title}</h4>
                        <p className="text-sm text-gray-600">{solution.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Propositions Section */}
          <div className="mt-16 bg-[#241F5D] rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <div className="w-20 h-1 bg-white/80 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valuePropositions.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#241F5D] backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {React.cloneElement(challenges[index].icon, { className: 'h-6 w-6 text-white' })}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white rounded-2xl">
            <div className="container mx-auto px-4 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to Transform Your FX Risk Management?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto"
              >
                Discover how our solution can help you mitigate currency risks and protect your bottom line.
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
                <Link href="/contact?source=fx-currency-risk">
                  <Button size="lg" variant="outline" className="bg-white/90 text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 transition-colors">
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default FXCurrencyRiskPage;
