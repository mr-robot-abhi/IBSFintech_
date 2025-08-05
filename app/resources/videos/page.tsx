'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Play, Clock, Eye, Download } from 'lucide-react';
import ModernMegaMenu from '@/components/layout/ModernMegaMenu';

const VideosPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Mega Navigation Menu */}
      <ModernMegaMenu />

      {/* Hero Section */}
      <section className="relative w-full pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/5">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
              >
                Video Resources
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-blue-100 mb-4"
              >
                Watch product demos, tutorials, and insights to help you understand and maximize the value of our treasury management solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6"
              >
                <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                  Browse Videos <Play className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <div className="hidden md:block md:w-1/2 lg:w-3/5 pl-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-64 flex items-center justify-center"
              >
                <span className="text-blue-100 text-lg">Video Library</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-white">
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
                Featured Videos
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Play className="h-12 w-12 text-blue-600" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      5:32
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Product Overview</h4>
                    <p className="text-gray-600 text-sm mb-4">Get a comprehensive overview of our treasury management platform and its key features.</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center"><Eye className="h-3 w-3 mr-1" /> 1.2k views</span>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 2 days ago</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Watch Now
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Play className="h-12 w-12 text-blue-600" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      8:15
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Getting Started Guide</h4>
                    <p className="text-gray-600 text-sm mb-4">Step-by-step tutorial on how to set up and configure your treasury management system.</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center"><Eye className="h-3 w-3 mr-1" /> 856 views</span>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 1 week ago</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Watch Now
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Play className="h-12 w-12 text-blue-600" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      12:45
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Risk Management Features</h4>
                    <p className="text-gray-600 text-sm mb-4">Learn how to effectively manage currency and commodity risk using our advanced tools.</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center"><Eye className="h-3 w-3 mr-1" /> 1.5k views</span>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 3 days ago</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Watch Now
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Play className="h-12 w-12 text-blue-600" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      6:28
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Integration Tutorial</h4>
                    <p className="text-gray-600 text-sm mb-4">See how easy it is to integrate our platform with your existing ERP and banking systems.</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center"><Eye className="h-3 w-3 mr-1" /> 723 views</span>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 5 days ago</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Watch Now
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Play className="h-12 w-12 text-blue-600" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      9:42
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Reporting & Analytics</h4>
                    <p className="text-gray-600 text-sm mb-4">Discover how to create custom reports and leverage analytics for better decision-making.</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center"><Eye className="h-3 w-3 mr-1" /> 945 views</span>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 1 week ago</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Watch Now
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Play className="h-12 w-12 text-blue-600" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      4:18
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Customer Success Story</h4>
                    <p className="text-gray-600 text-sm mb-4">Hear from our customers about how IBSFINtech transformed their treasury operations.</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center"><Eye className="h-3 w-3 mr-1" /> 1.8k views</span>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 2 weeks ago</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Watch Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Video Categories Section */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#241F5D] mb-4">Video Categories</h3>
                <div className="h-1 w-16 bg-blue-500 mx-auto mb-8"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Product Demos</h4>
                  <p className="text-gray-600 text-sm mb-4">See our solutions in action</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Browse (12 videos)
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Tutorials</h4>
                  <p className="text-gray-600 text-sm mb-4">Step-by-step guides</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Browse (8 videos)
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Webinars</h4>
                  <p className="text-gray-600 text-sm mb-4">Expert insights and discussions</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Browse (15 videos)
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#241F5D] mb-2">Customer Stories</h4>
                  <p className="text-gray-600 text-sm mb-4">Success stories and testimonials</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Browse (6 videos)
                  </Button>
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
                Ready to See More?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our video channel for the latest tutorials, product updates, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
                  Subscribe to Channel
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Request Custom Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideosPage; 