'use client';

import React from 'react';
import Image from 'next/image';
import { BarChart2, Target, Eye, Zap, Clock, Globe, Layers, TrendingUp, CheckCircle } from 'lucide-react';


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
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-[#241F5D] to-[#3A3480] relative">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cash Visibility and Forecasting</h1>
                <p className="text-blue-100 mb-6">
                  A comprehensive solution for cashflow management and liquidity planning seamlessly integrated with Banks, ERP software such as SAP, Oracle as well as other third-party solutions.
                </p>
                <button className="bg-white text-[#241F5D] hover:bg-gray-100 font-medium py-2.5 px-6 rounded-lg transition-colors flex items-center text-sm">
                  Request Demo
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/solutions/cash_visibility.jpeg"
                    alt="Cash Visibility and Forecasting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cash visibility is the key Challenge of the CFOs</h2>
              <div className="w-20 h-1 bg-[#241F5D] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-[#241F5D]/10 flex items-center justify-center mb-4">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IBSFINtech's InTREaX as a solution</h2>
              <div className="w-20 h-1 bg-[#241F5D] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionize your cash flow and liquidity management with our Cash and Liquidity Management Solution, InTReaX.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="relative h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/Interal Page 5.png"
                    alt="Cash Forecasting Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Comprehensive Cash Management</h3>
                <p className="text-gray-600">
                  Gain complete control over your cash position with real-time visibility and powerful forecasting tools.
                </p>
              </div>
              
              <div className="space-y-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                ))}
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
