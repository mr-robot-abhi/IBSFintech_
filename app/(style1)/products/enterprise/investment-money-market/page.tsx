'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BarChart2, TrendingUp, DollarSign, FileText, Shield, Bell, PieChart } from 'lucide-react';

import Image from 'next/image';

const InvestmentWealthTechPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Hero Section with Full Width Banner */}
      <section className="relative w-screen h-[600px] -mt-20 left-1/2 right-1/2 -mx-[50vw]">
        <div className="absolute inset-0 w-screen">
          <Image
            src="/Inner pages/Products/IBSFINtech_Investment_Management_optimized.png"
            alt="Investment Management Dashboard"
            fill
            className="object-cover w-full"
            priority
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#241F5D]/90 to-[#3A3480]/80">
          <div className="container mx-auto h-full flex items-center px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Investment & WealthTech Management
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-blue-100 mb-8"
              >
                Transform your investment operations with our comprehensive solution for simplified management, enhanced compliance, and data-driven decision-making.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50 font-medium">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-white">
        {/* Introduction Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-[#241F5D] mb-6"
                  >
                    Streamline Your Investment Operations
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-700 mb-6"
                  >
                    Our comprehensive Investment & WealthTech Management Solution is designed to transform how you manage your investment portfolio with efficiency and precision.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                          <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">Comprehensive coverage of all money market instruments including Mutual Funds, Fixed Deposits, and Bonds</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                          <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">Real-time transaction processing with seamless bank and MFUI integration</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                          <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">Automated calculations for accrued interest, XIRR, ROI, and capital gains</span>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="md:w-1/2 mt-8 md:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/Inner pages/Products/IBSFINtech_Investment_Management_optimized.png"
                      alt="Investment Management Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </motion.div>
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
                    <BarChart2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">NAV Management</h4>
                  <p className="text-sm text-gray-600">Automatic upload of NAV (AMFI) and real-time updates.</p>
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
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Market Data Integration</h4>
                  <p className="text-sm text-gray-600">Seamless interface with CRISIL, ICRA, and MFUI.</p>
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
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Comprehensive Reporting</h4>
                  <p className="text-sm text-gray-600">AMC, maturity, portfolio return, and sector-wise analysis.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <PieChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-[#241F5D] mb-1.5">Portfolio Analytics</h4>
                  <p className="text-sm text-gray-600">Pre & post-tax analysis, credit quality, and asset allocation.</p>
                </motion.div>
              </div>
            </div>

            {/* Risk Management Section */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Shield className="h-8 w-8 text-blue-600" />,
                    title: "Configurable Investment Policies",
                    description: "Tailor and automate investment policies with soft and hard alerts for breach."
                  },
                  {
                    icon: <FileText className="h-8 w-8 text-blue-600" />,
                    title: "Audit Trail",
                    description: "Comprehensive tracking of all investment activities and changes."
                  },
                  {
                    icon: <Bell className="h-8 w-8 text-blue-600" />,
                    title: "Real-time Alerts",
                    description: "Instant notifications and mail reminders for important events and thresholds."
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                    title: "Policy Compliance",
                    description: "Ensure adherence to company investment policy & framework."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
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
                Experience the future of investment management
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Take your operations to the next level with our cutting-edge features and comprehensive wealth management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#241F5D] hover:bg-[#1a1650] text-white">
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline" className="border-[#241F5D] text-[#241F5D] hover:bg-blue-50">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentWealthTechPage;
