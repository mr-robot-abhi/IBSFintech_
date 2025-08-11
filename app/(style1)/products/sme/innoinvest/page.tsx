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
      <section className="relative w-full min-h-[400px] flex items-center bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/Inner pages/Products/Treasury_Management_System_for_SME_50.jpeg"
            alt="InnoInvest Treasury Management System"
            fill
            className="object-cover object-center"
            quality={100}
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              opacity: 0.4,
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
              InnoInvest by IBSFINtech
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base md:text-lg text-blue-100 mb-2 font-medium"
            >
              Sophisticated Investment Management for SMEs
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-base text-blue-100 mb-6 max-w-2xl"
            >
              A ready-to-use, market-ready investment management solution that empowers your SME to manage mutual fund holdings efficiently.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
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
              
              {/* Combined Section with Single Image */}
              <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
                {/* Left Column - Portfolio Tracking */}
                <div className="md:col-span-2 space-y-6 pr-0 md:pr-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                        <BarChart className="h-5 w-5 text-[#3B82F6]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Comprehensive Portfolio Tracking</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Robust portfolio tracking capabilities to monitor mutual fund investments seamlessly. Keep an eye on asset allocation, performance, and historical returns with ease.
                    </p>
                    <ul className="space-y-2.5">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Monitor all mutual fund investments in one place</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Track asset allocation across different funds</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Analyze performance and historical returns</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                        <Zap className="h-5 w-5 text-[#3B82F6]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Efficient Execution & Management</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Execute transactions directly within the platform. Streamline processes, save time, and reduce manual effort with our intuitive interface.
                    </p>
                    <ul className="space-y-2.5">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Direct transaction execution within the platform</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Automated processes to save time and reduce errors</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Streamlined workflow for maximum efficiency</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Single Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-full sticky top-6"
                >
                  <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                      src="/Inner pages/Products/Hedging_Strategy_automation_50.jpg"
                      alt="Investment Management Solution"
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                    />
                  </div>
                </motion.div>
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
                  <a href="/request-demo" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors text-center">
                    Contact Sales
                  </a>
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
