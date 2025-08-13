'use client';

'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  BarChart, 
  Bell, 
  Check, 
  CheckCircle, 
  CreditCard, 
  FileCheck, 
  FileText, 
  Scale, 
  Shield, 
  TrendingUp 
} from 'lucide-react';

const DebtBorrowingsPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Full Width Banner Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Inner pages/Products/multi_instrument_debt_management_50.jpg"
            alt="Debt & Borrowings Management Solution"
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
                  <TrendingUp className="text-white mr-3 flex-shrink-0" size={40} />
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">Debt & Borrowings Management Solution</h1>
                </div>
                <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl">
                  Streamline your debt portfolio with comprehensive borrowing management and analytics
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
                    All-in-One Debt Management Solution
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">End-to-end loan lifecycle management</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">Interest & amortization schedules</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">Cost of borrowing analysis</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">Loan rollover management</span>
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
                        <span className="ml-2 text-sm text-gray-700 leading-tight">Document management</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">Multi-currency support</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">Compliance tracking</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                            <svg className="h-2.5 w-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">Bank communication</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#241F5D] mb-3">Borrowing Instruments</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Market Borrowings</h4>
                        <ul className="space-y-1 text-xs text-gray-600">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            <span>Commercial papers</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            <span>Bonds & NCDs</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            <span>Preference shares</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Bank Facilities</h4>
                        <ul className="space-y-1 text-xs text-gray-600">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            <span>Term loans</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            <span>ECBs & FCTL</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            <span>Working capital</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Section */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-12">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#241F5D] mb-2">Analytics for Top Management</h3>
                <div className="h-1 w-12 bg-blue-500 mx-auto mb-6"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <BarChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1">Portfolio Dashboards</h4>
                  <p className="text-sm text-gray-600">Complete visibility into your debt portfolio with interactive analytics</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1">Maturity Profile</h4>
                  <p className="text-sm text-gray-600">Visualize debt maturities and plan your financial strategy</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1">Rate Analysis</h4>
                  <p className="text-sm text-gray-600">Detailed reports on fixed and floating rate instruments</p>
                </motion.div>
              </div>
            </div>

            {/* Risk Management Section */}
            <div className="mb-16">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#241F5D] mb-2">Enhanced Risk Management & Compliance</h3>
                <div className="h-1 w-12 bg-blue-500 mx-auto mb-6"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#241F5D]">Risk Management</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Interest rate risk management",
                      "Liquidity risk monitoring",
                      "Counterparty risk assessment",
                      "Scenario analysis & stress testing"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center">
                            <Check className="h-2.5 w-2.5 text-blue-600" />
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                      <FileCheck className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#241F5D]">Compliance & Reporting</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Regulatory compliance automation",
                      "Complete audit trail",
                      "Custom report templates",
                      "Automated report distribution"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center">
                            <Check className="h-2.5 w-2.5 text-blue-600" />
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700 leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* CTA Section */}
            <motion.div 
              className="text-center py-16 md:py-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-4">
                  Optimize Your Debt Portfolio Today
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Take control of your borrowings with our comprehensive debt management solution.
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DebtBorrowingsPage;
