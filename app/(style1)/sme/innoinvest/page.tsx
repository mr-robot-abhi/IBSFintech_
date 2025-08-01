'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Check, PieChart, TrendingUp, Zap } from 'lucide-react';
import ModernMegaMenu from '@/components/layout/ModernMegaMenu';

const InnoInvestPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}
      <ModernMegaMenu />

      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              InnoInvest by IBSFINtech
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Sophisticated Investment Management for SMEs
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-blue-100 mb-8 max-w-4xl mx-auto"
            >
              A ready-to-use, market-ready investment management solution that empowers your SME to manage mutual fund holdings efficiently.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-white">
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-12 text-center">
                Comprehensive Investment Management Solution
              </h2>
              
              {/* Comprehensive Portfolio Tracking */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-100 rounded-xl p-6 h-full"
                >
                  <div className="relative h-full w-full rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                      <PieChart className="h-32 w-32 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <BarChart className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#241F5D]">Comprehensive Portfolio Tracking</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Robust portfolio tracking capabilities to monitor mutual fund investments seamlessly. Keep an eye on asset allocation, performance, and historical returns with ease.
                  </p>
                  <ul className="space-y-3">
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
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md:flex-row-reverse">
                <div className="md:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gray-100 rounded-xl p-6 h-full"
                  >
                    <div className="relative h-full w-full rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                        <Zap className="h-32 w-32 text-blue-400" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:order-1">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#241F5D]">Efficient Execution & Management</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Execute transactions directly within the platform. Streamline the processes, save time and reduce manual effort.
                  </p>
                  <ul className="space-y-3">
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
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-4">Real-time Position Tracking</h3>
                  <div className="h-1 w-16 bg-blue-500 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Get the latest positions on your mutual fund holdings based on current market prices.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <BarChart className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Live Market Data</h4>
                    <p className="text-gray-600">Real-time updates on mutual fund NAVs and market values.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Performance Analytics</h4>
                    <p className="text-gray-600">Track performance metrics and generate comprehensive reports.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <PieChart className="h-6 w-6 text-[#241F5D]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Portfolio Insights</h4>
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
