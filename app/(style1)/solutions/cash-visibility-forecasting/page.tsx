'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart2, Target, Eye, Zap, Clock, Globe, Layers, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';


const CashVisibilityForecastingPage = () => {
  const challenges = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Cash Flow Shortages",
      description: "Cash flow shortages keep the CFOs and Treasurers on their toes when dynamic situations put pressure on the cash and liquidity."
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Limited Cash Flow Visibility",
      description: "Absence of real-time data impacts timely and informed decision-making potentially affecting the visibility of company's liquidity position."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Diverse Businesses",
      description: "As companies expand into multiple businesses, each brings their own complexities. Having complete visibility of cash position across businesses, currencies and geographies becomes challenging and business decisions gets delayed."
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Multiple Banks",
      description: "Operating with multiple banks due to the business requirements, without a consolidated view, adds pressure on the CFO to aggregate all transactions to one single, accessible location."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Categorization of Cashflows",
      description: "Visibility of cash is not just about total cash position of the company, but a lot of analysis goes into the cash inflows and outflows. Categorization of cashflows is a cumbersome task and yet critical to take informed decisions on cash optimization."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Cumbersome Cash Flow Forecasting",
      description: "Cash flow forecasting based on inputs from various divisions and business units is a very tedious activity and highly prone to errors."
    }
  ];

  const solutions = [
    {
      title: "Cash Position and Cash Visibility",
      description: "Obtain real-time cash balances across different geographic locations and business units at the group level by accessing cash positions through manual and automatic uploading of bank statements, API, and SWIFT connectivity. Monitor your cash position daily to effectively manage cash flows and capitalize on short-term and long-term investment opportunities."
    },
    {
      title: "Fund Requirement Analysis",
      description: "This involves automatically calculating the necessary funds by considering cash inflows and outflows. This process ensures businesses accurately predict their financial needs, enabling effective management of cash flow dynamics while also facilitating informed decision-making regarding investments and expenditures."
    },
    {
      title: "Cash Pooling and Concentration",
      description: "Monitor the available funds in all bank accounts and maintain minimum balances, while also optimizing their deployment to manage cash flow situations across the group of companies. Implement cash concentration as a strategy to oversee liquidity across different locations and business units from the central office."
    },
    {
      title: "Cash Forecasting and Plotting Actuals",
      description: "Enhance cash forecasting for varying intervals to accurately determine actuals and calculate variances. Continuously project the expected cash inflows and outflows across all departments to make well-informed business decisions."
    },
    {
      title: "Seamless Integration with ERP",
      description: "Seamless integration with company's ERP like SAP, Oracle or any other third-party application. Get the banking transactions with integration or manual uploads."
    },
    {
      title: "Bank Agnostic Platform",
      description: "Connectivity with multiple Banks across geographies enables cash visibility and leads to optimal utilization of cash"
    }
  ];

  const valuePropositions = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Fund Utilization",
      description: "Improves cash flow visibility, supporting effective liquidity management and enhancing fund utilization."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Improved Operational Efficiency",
      description: "Optimize operational efficiency by automating manual processes, allowing CFO/Treasury Head & treasury team to focus on strategic initiatives."
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Informed Decision-Making",
      description: "Stay ahead of the curve with real-time data access enabling timely and informed decision-making, for effective liquidity management."
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "360° Visibility & Control",
      description: "Leverage detailed reporting capabilities for 360° visibility and control over cash flow management activities, empowering proactive strategies and ensuring financial stability."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Modern Mega Menu */}
      <main className="relative z-10">
        {/* Hero Section with Banner */}
        <section className="relative h-[400px] w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Inner pages/Solutions/cash_visibility.jpg"
              alt="Cash Visibility and Forecasting"
              fill
              className="object-cover"
              priority
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div className="absolute inset-0 bg-black/20">
            <div className="h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-4">
                    <BarChart2 className="text-white mr-3 flex-shrink-0" size={40} />
                    <motion.h1 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    >
                      Cash Visibility and Forecasting
                    </motion.h1>
                  </div>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl"
                  >
                    Comprehensive cashflow management and liquidity planning integrated with Banks, ERP systems, and third-party solutions.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link 
                      href="/request-demo" 
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      Request Demo
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link 
                      href="/contact" 
                      className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      Contact Sales
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Challenges and Solutions Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cash Visibility: The CFO's Critical Challenge</h2>
              <div className="w-20 h-1 bg-[#241F5D] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your cash flow and liquidity management with InTReaX - the enterprise solution for real-time financial control.
              </p>
            </div>

            {/* 3-Column Grid for Challenges */}
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

            {/* Solutions Section - Enhanced Layout */}
            <div className="relative py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-inner overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
              <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Cash Management</h3>
                  <p className="text-lg text-gray-600">
                    Gain complete control over your cash position with real-time visibility and powerful forecasting tools. Our solution provides end-to-end cash management capabilities to optimize your financial operations.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {solutions.map((solution, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    >
                      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                        <BarChart2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{solution.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="bg-[#241F5D] rounded-2xl p-8 md:p-12 mb-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Value Proposition</h2>
              <div className="w-20 h-1 bg-white/80 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valuePropositions.map((item, index) => (
                <div key={index} className="bg-[#241F5D] backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {React.cloneElement(item.icon, { className: 'h-6 w-6 text-white' })}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#241F5D] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Cash Management?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Unlock the full potential of your cash flow and liquidity management with our advanced module.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#241F5D] hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
                Request Demo
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 font-medium py-3 px-8 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CashVisibilityForecastingPage;
