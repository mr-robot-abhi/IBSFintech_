'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ClientLogoStrip from '@/components/common/ClientLogoStrip';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Zap, DollarSign, BarChart2, Globe } from 'lucide-react';

export default function IllustrativeThree() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Main Banner */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-[#6AB187] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#20948B] text-white text-sm font-medium mb-4">
                Modern Treasury Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
                Smarter <span className="text-[#20948B]">Treasury</span> Management
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Optimize your financial operations with our AI-powered treasury management platform. 
                Reduce costs, improve efficiency, and gain real-time insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#20948B] hover:bg-[#1a7a72] text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#20948B] text-[#20948B] hover:bg-[#6AB187]/20">
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-[#A1D6E2] hover:border-[#1995AD] transition-colors">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-[#E6F3F6] flex items-center justify-center mb-2">
                        <DollarSign className="h-5 w-5 text-[#1995AD]" />
                      </div>
                      <h3 className="font-semibold">Cost Savings</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-[#20948B]">40%</p>
                      <p className="text-sm text-gray-500">Reduction in operational costs</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-[#A1D6E2] hover:border-[#1995AD] transition-colors">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-[#E6F3F6] flex items-center justify-center mb-2">
                        <TrendingUp className="h-5 w-5 text-[#1995AD]" />
                      </div>
                      <h3 className="font-semibold">Efficiency</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-[#1995AD]">70%</p>
                      <p className="text-sm text-gray-500">Faster processes</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1995AD] rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#A1D6E2] rounded-full opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <ClientLogoStrip variant="illustrative3" />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Comprehensive Treasury Solutions</h2>
            <p className="text-lg text-gray-600">
              Our platform offers everything you need to manage your treasury operations efficiently and effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="h-8 w-8 text-[#1995AD]" />,
                title: "Cash Management",
                description: "Real-time cash positioning and forecasting for better liquidity management."
              },
              {
                icon: <Shield className="h-8 w-8 text-[#1995AD]" />,
                title: "Risk Management",
                description: "Identify, assess, and mitigate financial risks with advanced analytics."
              },
              {
                icon: <Zap className="h-8 w-8 text-[#1995AD]" />,
                title: "Automation",
                description: "Streamline repetitive tasks and reduce manual errors with intelligent automation."
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-[#1995AD]" />,
                title: "Analytics",
                description: "Gain valuable insights with powerful data visualization and reporting tools."
              },
              {
                icon: <Globe className="h-8 w-8 text-[#1995AD]" />,
                title: "Global Support",
                description: "24/7 support for your global treasury operations across multiple currencies."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-[#1995AD]" />,
                title: "Growth",
                description: "Scalable solutions that grow with your business needs."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-16 w-16 rounded-full bg-[#E6F3F6] flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url(" + "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2320948B' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='5' cy='5' r='3'/%3E%3Ccircle cx='20' cy='5' r='3'/%3E%3Ccircle cx='35' cy='5' r='3'/%3E%3Ccircle cx='50' cy='5' r='3'/%3E%3Ccircle cx='65' cy='5' r='3'/%3E%3Ccircle cx='5' cy='20' r='3'/%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='35' cy='20' r='3'/%3E%3Ccircle cx='50' cy='20' r='3'/%3E%3Ccircle cx='65' cy='20' r='3'/%3E%3Ccircle cx='5' cy='35' r='3'/%3E%3Ccircle cx='20' cy='35' r='3'/%3E%3Ccircle cx='35' cy='35' r='3'/%3E%3Ccircle cx='50' cy='35' r='3'/%3E%3Ccircle cx='65' cy='35' r='3'/%3E%3Ccircle cx='5' cy='50' r='3'/%3E%3Ccircle cx='20' cy='50' r='3'/%3E%3Ccircle cx='35' cy='50' r='3'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='65' cy='50' r='3'/%3E%3Ccircle cx='5' cy='65' r='3'/%3E%3Ccircle cx='20' cy='65' r='3'/%3E%3Ccircle cx='35' cy='65' r='3'/%3E%3Ccircle cx='50' cy='65' r='3'/%3E%3Ccircle cx='65' cy='65' r='3'/%3E%3C/g%3E%3C/svg%3E" + ")"
            }}
          />
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Voices of Trust</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses that trust us with their treasury operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                name: 'Sophia Martinez',
                role: 'CFO, GreenFuture Inc.',
                image: '/avatars/woman4.jpg',
                content: 'The automation features saved us countless hours. Our team can now focus on strategic initiatives rather than manual processes.',
                delay: 0.1
              },
              {
                name: 'Raj Patel',
                role: 'Treasury Manager, TechNova',
                image: '/avatars/man4.jpg',
                content: 'The risk management tools are exceptional. We\'ve reduced our exposure by 40% while improving our returns.',
                delay: 0.2
              },
              {
                name: 'Olivia Chen',
                role: 'Finance Director, GlobalRetail',
                image: '/avatars/woman5.jpg',
                content: 'The implementation was seamless, and the support team has been outstanding. A true partner in our financial transformation.',
                delay: 0.3
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                } as any}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all relative z-10 ${
                  index === 1 ? 'md:transform md:scale-105 md:z-20' : ''
                }`}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#20948B] flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-[#20948B] border-opacity-20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[#20948B] font-medium mb-4">{testimonial.role}</p>
                  <div className="relative">
                    <svg className="h-8 w-8 text-[#20948B] opacity-20 absolute -top-8 -left-2" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.224 6.24 8.224 3.168 0 5.28-2.336 5.28-5.28 0-2.88-2.016-4.992-4.8-4.992-0.832 0-1.6 0.192-2.304 0.544 0.256-3.2 2.24-6.72 5.152-9.12l-0.192 0.032zM22.112 4c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.224 6.24 8.224 3.168 0 5.28-2.336 5.28-5.28 0-2.88-2.016-4.992-4.8-4.992-0.832 0-1.6 0.192-2.304 0.544 0.256-3.2 2.24-6.72 5.12-9.12l-0.192 0.032z" />
                    </svg>
                    <p className="text-gray-700 italic relative z-10">"{testimonial.content}"</p>
                    <svg className="h-8 w-8 text-[#20948B] opacity-20 absolute -bottom-4 -right-2 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.224 6.24 8.224 3.168 0 5.28-2.336 5.28-5.28 0-2.88-2.016-4.992-4.8-4.992-0.832 0-1.6 0.192-2.304 0.544 0.256-3.2 2.24-6.72 5.152-9.12l-0.192 0.032zM22.112 4c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.224 6.24 8.224 3.168 0 5.28-2.336 5.28-5.28 0-2.88-2.016-4.992-4.8-4.992-0.832 0-1.6 0.192-2.304 0.544 0.256-3.2 2.24-6.72 5.12-9.12l-0.192 0.032z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-800 font-medium">Rated 4.9/5 by 500+ companies</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
