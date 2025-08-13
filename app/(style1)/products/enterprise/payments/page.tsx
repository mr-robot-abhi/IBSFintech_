'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CreditCard, Shield, Bell, BarChart2, FileText, Users, Send, CheckCircle, Lock, RefreshCw } from 'lucide-react';


const PaymentsPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Full Width Banner Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner pages/Products/trade_finance_management.jpg"
            alt="Enterprise Payments Management"
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
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">Enterprise Payments Management</h1>
                </div>
                <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl">
                  Streamline your payment operations with our comprehensive, secure, and efficient payment management solution
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-white">
        {/* All-in-One Solution Section */}
        <section className="py-6 md:py-8 -mt-4">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-6 text-left">
                All-in-One Payment Solution
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Centralized platform to manage different payment types including vendor payments, payroll, and tax payments.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>End-to-end Payment Workflow management with configurable approval hierarchies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Flexibility in Cash centralization and funds transfer between accounts across multiple banks.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Seamless integration with ERP systems to retrieve vendor data and fetch outstanding invoices for payment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Comprehensive Bank Relationship management with multi-bank connectivity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Advanced Signatory Management with digital signature capabilities.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Customizable authorization matrix with role-based access controls.</span>
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#241F5D] mb-4">Payment Types</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Domestic & International</li>
                          <li>• ACH & Wire Transfers</li>
                          <li>• Bulk Payments</li>
                          <li>• Scheduled Payments</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Vendor Payments</li>
                          <li>• Payroll Processing</li>
                          <li>• Tax Payments</li>
                          <li>• Recurring Payments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                      src="/Inner pages/Products/Treasury Payments Platform.jpeg"
                      alt="Treasury Payments Platform"
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
                    <BarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Comprehensive MIS Reports</h4>
                  <p className="text-gray-600">Detailed payment status reports with drill-down capabilities for in-depth analysis.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Outstanding Payments</h4>
                  <p className="text-gray-600">Real-time tracking and aging analysis of outstanding payments and payables.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Vendor Analytics</h4>
                  <p className="text-gray-600">Vendor performance metrics and payment pattern analysis for better decision making.</p>
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
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Comprehensive Audit Trails</h4>
                  <p className="text-gray-600">Complete recording and tracking of all payment activities with detailed audit logs.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Real-time Alerts</h4>
                  <p className="text-gray-600">Automated notifications and email reminders for payment due dates and approvals.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Fraud Prevention</h4>
                  <p className="text-gray-600">Advanced security measures including dual authorization and payment validation.</p>
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
                  { icon: <Send className="h-6 w-6" />, title: "Multi-channel Payments", description: "Support for various payment methods and channels" },
                  { icon: <RefreshCw className="h-6 w-6" />, title: "Automated Workflows", description: "Streamlined approval processes with automated routing" },
                  { icon: <CheckCircle className="h-6 w-6" />, title: "Payment Reconciliation", description: "Automated matching of payments with invoices" },
                  { icon: <FileText className="h-6 w-6" />, title: "Document Management", description: "Secure storage and retrieval of payment documents" },
                  { icon: <Users className="h-6 w-6" />, title: "Vendor Portal", description: "Self-service portal for vendors to view and track payments" },
                  { icon: <BarChart2 className="h-6 w-6" />, title: "Cash Flow Forecasting", description: "Predictive analytics for better cash management" }
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
                Transform Your Payment Operations Today
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the power of automated, secure, and efficient payment processing with our comprehensive solution.
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

export default PaymentsPage;
