'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, Bell, FileText, Layers, LineChart, Shield, TrendingUp, Truck, Package, Users, CreditCard, Zap } from 'lucide-react';


const SupplyChainFinancePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Full Width Banner Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner pages/Products/LC_BG_Management_System_50.svg"
            alt="Supply Chain Finance"
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
                    <Truck className="text-white h-10 w-10 md:h-12 md:w-12" />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Supply Chain Finance – VNDZY®
                    </h1>
                  </div>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-xl md:text-2xl text-white/90 font-medium mt-4"
                >
                  Transform Your Supply Chain with VNDZY®
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-lg text-white/90 mb-6 md:mb-8 max-w-3xl mt-2"
                >
                  Unlock working capital and optimize your supply chain with our innovative financing solutions.
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
        {/* All-in-One Solution Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-8 text-center">
                Comprehensive Supply Chain Finance Solution
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <ul className="space-y-4 text-gray-700 mb-8">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>End-to-end supply chain financing platform for buyers and suppliers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Dynamic discounting and reverse factoring solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Multi-bank, multi-buyer, and multi-supplier support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Automated invoice processing and approval workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Real-time visibility into supply chain transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Seamless integration with ERP and accounting systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Automated reconciliation and payment processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Configurable approval hierarchies and workflows</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-full"
                >
                  <div className="relative w-full h-96 md:h-full rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/Inner pages/Products/SCF_corporates_TMS_50.jpeg"
                      alt="Supply Chain Finance Solution"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Analytics Section */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-4">Analytics for Top Management</h3>
                <div className="h-1 w-16 bg-blue-500 mx-auto mb-8"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Real-time Analytics</h4>
                  <p className="text-gray-600">Gain insights into your supply chain financing operations with comprehensive dashboards and reports.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Performance Metrics</h4>
                  <p className="text-gray-600">Track key performance indicators and metrics for your supply chain finance program.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Trend Analysis</h4>
                  <p className="text-gray-600">Identify trends and patterns in your supply chain financing activities over time.</p>
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
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Risk Mitigation</h4>
                  <p className="text-gray-600">Identify and mitigate risks in your supply chain financing operations with advanced analytics.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Compliance Management</h4>
                  <p className="text-gray-600">Ensure compliance with regulatory requirements and internal policies.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Proactive Alerts</h4>
                  <p className="text-gray-600">Receive real-time alerts for critical events and potential issues in your supply chain finance operations.</p>
                </motion.div>
              </div>
            </div>

            {/* CTA Section */}
            <motion.div 
              className="text-center py-20 bg-gradient-to-r from-[#241F5D] to-[#3A3480] rounded-2xl px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Transform Your Supply Chain with VNDZY®
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Unlock working capital, optimize your supply chain, and drive business growth with our innovative financing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/request-demo" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors text-center">
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

export default SupplyChainFinancePage;
