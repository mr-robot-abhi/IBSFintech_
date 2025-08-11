'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, Bell, FileText, Layers, LineChart, Shield, TrendingUp, Zap } from 'lucide-react';


const CommodityRiskPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/Inner pages/Products/Commodity_Risk_Management_IBSFINtech_50.jpg"
            alt="Commodity Risk Management"
            fill
            className="object-cover object-center"
            quality={100}
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              opacity: 0.2,
              width: '100%',
              height: '100%'
            }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#241F5D]/40 to-[#3A3480]/40"
            aria-hidden="true"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-8 md:py-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight"
            >
              Managing Commodity Price Risk for Corporates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base md:text-lg text-blue-100 mb-6 max-w-2xl"
            >
              Effective strategies for corporates to mitigate the impact of volatile commodity prices through proactive risk management and strategic hedging
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
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
                Comprehensive Commodity Risk Solution
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <ul className="space-y-4 text-gray-700 mb-8">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>End-to-end lifecycle management of commodities with complete visibility and control.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Comprehensive exposure management for physical commodities and derivatives.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Complete derivative cycle management including Swaps, Futures, and Options.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Seamless integration with broker terminals and market data providers for real-time insights.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Automated calculation of brokerage rates and charges.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Hedge effectiveness determination through physical and paper trade linkage.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Daily derivative pricing on outstanding contracts for accurate valuation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Comprehensive counterparty limit monitoring and management.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Automated upload of daily margin and rate files from exchanges.</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-100 rounded-xl p-6 h-full"
                >
                  <div className="relative h-full w-full rounded-lg overflow-hidden">
                    <img 
                      src="/Interal Page 5.png" 
                      alt="Commodity Risk Management Dashboard" 
                      className="w-full h-full object-cover"
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Real-time Position Reports</h4>
                  <p className="text-gray-600">Comprehensive reporting by product, broker, and contract for complete visibility.</p>
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Exposure Consolidation</h4>
                  <p className="text-gray-600">Track and analyze sale vs purchase and physical vs paper exposures, both gross and net.</p>
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Advanced Analysis</h4>
                  <p className="text-gray-600">Perform historical scenario analysis, stress testing, and Value at Risk (VaR) calculations.</p>
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Risk Policy Monitoring</h4>
                  <p className="text-gray-600">Monitor and enforce risk policies at both group and entity levels for comprehensive governance.</p>
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Comprehensive Audit Trails</h4>
                  <p className="text-gray-600">Maintain detailed audit logs of all transactions and system activities for compliance.</p>
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
                  <p className="text-gray-600">Real-time alerts, notifications, and email reminders for critical risk events and thresholds.</p>
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
                Elevate Your Commodity Risk Management
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Discover how our advanced Commodity Risk Management solution can transform your operations and provide unparalleled visibility.
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

export default CommodityRiskPage;
