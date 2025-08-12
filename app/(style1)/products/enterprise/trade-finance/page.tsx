'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, FileText, Bell, BarChart, CreditCard, Package, RefreshCw, Shield, TrendingUp, Users, Layers } from 'lucide-react';


const TradeFinancePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Full Width Banner Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner pages/Products/trade_finance_management.svg"
            alt="Trade Finance Management"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/20">
          <div className="h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <Package className="text-white h-10 w-10 md:h-12 md:w-12" />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Trade Finance Management
                    </h1>
                  </div>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mt-4"
                >
                  Streamline your global trade operations with our end-to-end trade finance solution
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/request-demo" 
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      Request Demo
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <a 
                      href="/contact" 
                      className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      Contact Sales
                    </a>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-white">
        <section className="py-8 md:py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-full">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-4"
                  >
                    Comprehensive Trade Finance Solution
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">End-to-end import/export lifecycle management</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">ERP integration (SAP, Oracle, more)</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">Export LCs & Packing Credit</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">Bank Guarantees support</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">Buyer's & Supplier's Credit</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">Advanced Limit Management</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">STP (Straight-Through-Processing)</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">Automated accounting entries</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">Bank communication automation</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">Secure document management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

            {/* Analytics Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-[#241F5D] mb-2">Analytics for Top Management</h3>
                <div className="h-1 w-12 bg-blue-500 mx-auto"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <BarChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">MIS Reports</h4>
                  <p className="text-sm text-gray-600">Detailed reports on limits sanctioned, utilized, and available across all facilities.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Financial Analytics</h4>
                  <p className="text-sm text-gray-600">Maturity reports, cost analysis, and interest variance tracking.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Global Trade Insights</h4>
                  <p className="text-sm text-gray-600">Track transactions across different countries and currencies.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Document Tracking</h4>
                  <p className="text-sm text-gray-600">Real-time status of all trade documents and compliance.</p>
                </motion.div>
              </div>
            </div>

            {/* Risk Management Section */}
            <div className="mb-20">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-4">Enhanced Risk Management & Compliance</h3>
                <div className="h-1 w-16 bg-blue-500 mx-auto"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Automated Alerts</h4>
                  <p className="text-gray-600">Real-time and due date alerts, notifications, and email reminders to ensure no critical deadlines are missed.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Regulatory Compliance</h4>
                  <p className="text-gray-600">Automated key processes to ensure full compliance with all regulatory requirements and standards.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">EDPMS & IDPMS Compliance</h4>
                  <p className="text-gray-600">Streamlined management of documentation for full compliance with EDPMS and IDPMS regulations.</p>
                </motion.div>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-[#241F5D] rounded-2xl p-8 md:p-12 mb-20 text-white">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Key Features</h3>
                <div className="h-1 w-16 bg-blue-400 mx-auto"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Globe className="h-6 w-6" />, title: "Global Trade Support", description: "End-to-end management of international trade transactions" },
                  { icon: <RefreshCw className="h-6 w-6" />, title: "STP Processing", description: "Straight-Through-Processing for faster trade execution" },
                  { icon: <CreditCard className="h-6 w-6" />, title: "LC & BG Management", description: "Comprehensive handling of Letters of Credit and Bank Guarantees" },
                  { icon: <FileText className="h-6 w-6" />, title: "Document Automation", description: "Automatic generation of all required trade documents" },
                  { icon: <Users className="h-6 w-6" />, title: "Multi-bank Connectivity", description: "Direct integration with multiple banking partners" },
                  { icon: <Layers className="h-6 w-6" />, title: "Document Management", description: "Centralized storage and retrieval of all trade documents" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-blue-100">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-6">
                Transform Your Trade Finance Operations
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover how our advanced Trade Finance solution can streamline your import/export processes and enhance compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/request-demo" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="/contact" className="bg-transparent border-2 border-[#241F5D] text-[#241F5D] hover:bg-[#241F5D]/5 font-medium py-3 px-8 rounded-lg transition-colors text-center">
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TradeFinancePage;
