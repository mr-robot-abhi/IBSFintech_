'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Check, PieChart, TrendingUp, Zap } from 'lucide-react';


const InnoInvestPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}


      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              >
                InnoInvest by IBSFINtech
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-blue-100 mb-4"
              >
                Sophisticated Investment Management for SMEs
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base text-blue-100 mb-6"
              >
                A ready-to-use, market-ready investment management solution that empowers your SME to manage mutual fund holdings efficiently.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/Inner pages/Products/Treasury_Management_System_for_SME_50.jpeg"
                  alt="InnoInvest Treasury Management System"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-white">
        {/* Features Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-8 text-center">
                Comprehensive Investment Management Solution
              </h2>
              
              {/* Comprehensive Portfolio Tracking */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-full"
                >
                  <div className="relative w-full h-96 md:h-full rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/Inner pages/Products/Hedging_Strategy_automation_50.jpg"
                      alt="Comprehensive Investment Management Solution"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <BarChart className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#241F5D]">Comprehensive Portfolio Tracking</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Robust portfolio tracking capabilities to monitor mutual fund investments seamlessly. Keep an eye on asset allocation, performance, and historical returns with ease.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Monitor all mutual fund investments in one place</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Track asset allocation across different funds</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Analyze performance and historical returns</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Efficient Execution & Management */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12 md:flex-row-reverse">
                <div className="md:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-full"
                  >
                    <div className="relative w-full h-96 md:h-full rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src="/Inner pages/Products/Hedging_Strategy_automation_50.jpg"
                        alt="Efficient Execution & Management"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:order-1">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#241F5D]">Efficient Execution & Management</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Execute transactions directly within the platform. Streamline the processes, save time and reduce manual effort.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Direct transaction execution within the platform</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated processes to save time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduced manual effort and errors</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Real-time Position */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#241F5D] mb-3">Real-time Position Tracking</h3>
                  <div className="h-1 w-12 bg-blue-500 mx-auto mb-6"></div>
                  <p className="text-gray-700 max-w-3xl mx-auto">
                    Get the latest positions on your mutual fund holdings based on current market prices.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                      <BarChart className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h4 className="font-semibold text-[#241F5D] mb-2">Live Market Data</h4>
                    <p className="text-gray-600">Real-time updates on mutual fund NAVs and market values.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                      <TrendingUp className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h4 className="font-semibold text-[#241F5D] mb-2">Performance Analytics</h4>
                    <p className="text-gray-600">Track performance metrics and generate comprehensive reports.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                      <PieChart className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h4 className="font-semibold text-[#241F5D] mb-2">Portfolio Insights</h4>
                    <p className="text-gray-600">Gain valuable insights into your investment portfolio.</p>
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
                  Transform Your Investment Management Today
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  A secure and reliable technology-backed platform that enables management and execution of transactions directly within the platform, saving time and reducing manual effort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                    Request a Demo
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Contact Our Experts
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InnoInvestPage;
