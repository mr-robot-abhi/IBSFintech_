'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, Bell, FileText, Layers, LineChart, Shield, TrendingUp, Zap, Globe, DollarSign, AlertTriangle } from 'lucide-react';


const CurrencyFXRiskPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Full Width Banner Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner pages/Products/Currency_Risk_Management_IBSFINtech_50.svg"
            alt="Currency Risk Management Dashboard"
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
                    <Globe className="text-white h-10 w-10 md:h-12 md:w-12" />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Revolutionise FX Workflows with Advanced Currency Risk Management
                    </h1>
                  </div>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl"
                >
                  Empower your treasury team with our advanced Currency (FX) Risk Management solution in today's volatile global markets, where managing currency risk is crucial.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
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
                All-in-One Solution
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <ul className="space-y-4 text-gray-700 mb-8">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Manages various currency derivatives: Forwards, Futures, Options (vanilla, exotic, OTC, exchange traded), Swaps (IRS, CCS)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Exposure Management with linking of contracts – contract to contract and bulk linking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Interface with ERP which provide complete underlying of exposure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Hedge accounting: Hedge effectiveness, cash flow and fair value estimation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Seamless integration with market data providers such as Thomson Reuters & Bloomberg</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Provision for settlement, cancellation, rollovers (full/partial)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Full and partial utilisation of contracts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Monitor counterparty limits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>For CCS, IRS related to ECBs and Foreign Currency Loans - handling interest rate hedging, principal hedging strategies, and currency swap arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Interface with ERP to post relevant accounting entries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Document management with all documents stored according to the reference number</span>
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
                      src="/Internal Page 2.png" 
                      alt="Currency FX Risk Management Dashboard" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

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
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Real-time MTM</h4>
                  <p className="text-sm text-gray-600">Live mark-to-market calculations for accurate position valuation.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Risk Dashboard</h4>
                  <p className="text-sm text-gray-600">Visibility on hedged/unhedged positions with real-time monitoring.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Comprehensive Reports</h4>
                  <p className="text-sm text-gray-600">Exposure, net open position, impact analysis, M2M, and more.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <BarChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Advanced Analytics</h4>
                  <p className="text-sm text-gray-600">Scenario analysis, stress testing, VAR, and Gap analytics.</p>
                </motion.div>
              </div>
            </div>

            {/* Risk Management Section */}
            <div className="mb-12">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-[#241F5D] mb-2">Enhanced Risk Management & Compliance</h3>
                <div className="h-1 w-12 bg-blue-500 mx-auto"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Hedge Accounting Policy Compliance</h4>
                  <p className="text-gray-600">Compliance with the Company's hedge accounting policy for regulatory adherence.</p>
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Threshold Limits Management</h4>
                  <p className="text-gray-600">Specification of threshold limits option available for risk control.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Real-time Alerts & Notifications</h4>
                  <p className="text-gray-600">Real-time Alerts, Notifications and Mail Reminders for critical events.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Document Management</h4>
                  <p className="text-gray-600">Tagging and manage documents at transaction level for complete audit trail.</p>
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
                Transform Your FX Risk Management
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Discover how our advanced Currency & FX Risk Management solution can protect your business and optimize international operations.
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

export default CurrencyFXRiskPage;
