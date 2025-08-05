import React from 'react';
import { Download, Award, BarChart2, Link as LinkIcon, Cpu, Shield, Cloud, Zap, Database, RefreshCw, BarChart, CpuIcon, FileText } from 'lucide-react';

export default function FactSheetPage() {
  const factSheets = [
    {
      title: 'IDC MarketScape 2023 Vendor Assessment',
      date: 'December 2023',
      size: '2.8 MB',
      type: 'PDF',
      icon: Award,
      preview: 'IBSFINtech recognized as a Major Player in global SaaS and Cloud-Enabled Enterprise Treasury and Risk Management Applications.'
    },
    {
      title: 'LSEG & IBSFINtech TMS Survey 2023',
      date: 'November 2023',
      size: '3.2 MB',
      type: 'PDF',
      icon: BarChart2,
      preview: 'Key findings from the global survey of corporate treasurers on evolving trends and challenges in treasury management.'
    },
    {
      title: 'Integration Capabilities Overview',
      date: 'October 2023',
      size: '2.5 MB',
      type: 'PDF',
      icon: Cpu,
      preview: 'Comprehensive guide to IBSFINtech\'s seamless connectivity across treasury ecosystems.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">IBSFINtech Fact Sheets</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Access our latest reports, surveys, and technical documentation for comprehensive insights into our treasury management solutions
          </p>
        </div>

        {/* IDC MarketScape Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">IDC MarketScape Recognition 2023</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-6">
                  IBSFINtech has been recognized by IDC MarketScape as a <span className="font-semibold">Major Player</span> for global SaaS and Cloud-Enabled Enterprise Treasury and Risk Management Applications in their 2023 Vendor Assessment. 
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">Key Insights</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex">
                    <span className="text-blue-500 mr-2">•</span>
                    Comprehensive solutions for cash flow, liquidity, and risk management
                  </li>
                  <li className="flex">
                    <span className="text-blue-500 mr-2">•</span>
                    Focus on business resiliency and continuity
                  </li>
                  <li className="flex">
                    <span className="text-blue-500 mr-2">•</span>
                    Cutting-edge technology with deep industry expertise
                  </li>
                </ul>
                
                <button className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Download className="-ml-1 mr-2 h-5 w-5" />
                  Download Full Report
                </button>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Why This Matters</h4>
                <p className="text-sm text-gray-600 mb-4">
                  In today's volatile economic climate, having robust treasury and risk management solutions is not just an option but a necessity for business continuity and growth.
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-medium">Kevin Permenter</p>
                  <p>Research Director, IDC Financial Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LSEG Survey Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <BarChart2 className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">LSEG & IBSFINtech TMS Survey 2023</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-6">
                  A comprehensive global survey of corporate treasurers exploring evolving trends and challenges in the treasury landscape, conducted in collaboration with the London Stock Exchange Group.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">Key Findings</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Emerging Trends</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Cloud className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Shift to cloud-based solutions</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Rise of real-time data analytics</span>
                      </li>
                      <li className="flex items-start">
                        <RefreshCw className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Automation of treasury processes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Challenges</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Shield className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Data security concerns</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Regulatory compliance</span>
                      </li>
                      <li className="flex items-start">
                        <BarChart className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Liquidity management</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <button className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Download className="-ml-1 mr-2 h-5 w-5" />
                  Download Survey Report
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Survey Highlights</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">87%</span>
                    <span>of treasurers prioritize cloud-based TMS solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">92%</span>
                    <span>consider real-time analytics crucial for decision making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">78%</span>
                    <span>face challenges with system integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Capabilities Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Integration Capabilities</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Seamless Connectivity Across Your Treasury Ecosystem</h3>
                <p className="text-gray-700 mb-6">
                  Automate, integrate, and optimize your treasury operations with our comprehensive connectivity solutions. Ensure effortless data flow between IBSFINtech's TMS and all third-party systems.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Database className="h-5 w-5 text-blue-500 mr-2" />
                      ERP Integrations
                    </h4>
                    <p className="text-sm text-gray-600">
                      SAP, Oracle Fusion, Oracle EBS, Oracle NetSuite, Microsoft Dynamics, Tally, Navision, and custom-built ERPs
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <LinkIcon className="h-5 w-5 text-blue-500 mr-2" />
                      Banking & Payments
                    </h4>
                    <p className="text-sm text-gray-600">
                      API integrations with major Indian & global banks for payments, balances, statements, and trade finance
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-4">Technical Capabilities</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time API connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>End-to-end security with authentication & encryption</span>
                  </li>
                  <li className="flex items-start">
                    <RefreshCw className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High-throughput with guaranteed delivery</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart2 className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Seamless BI tool integration (Tableau, Power BI)</span>
                  </li>
                </ul>
                
                <button className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Download className="-ml-1 mr-2 h-4 w-4" />
                  Download Integration Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Documents Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">All Available Documents</h2>
            <p className="mt-1 text-sm text-gray-500">Download our comprehensive resources in PDF format</p>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {factSheets.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <Download className="-ml-0.5 mr-1.5 h-3.5 w-3.5 text-gray-500" />
                          Download
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{doc.preview}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>{doc.date}</span>
                        <span className="mx-2">•</span>
                        <span>{doc.size}</span>
                        <span className="mx-2">•</span>
                        <span>{doc.type}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          
          <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Looking for something specific?{' '}
              <a href="/contact" className="font-medium text-blue-600 hover:text-blue-500">
                Contact our team
              </a>{' '}
              for more information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
