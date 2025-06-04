'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ClientLogoStrip from '@/components/common/ClientLogoStrip';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Zap, DollarSign, BarChart2, Globe, Users, Building, Factory, Truck, Newspaper, Handshake } from 'lucide-react';

export default function IllustrativeOne() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Smooth the scroll values
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="overflow-x-hidden bg-gray-50" ref={containerRef}>
      {/* Main Banner */}
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0"
            style={{
              y: smoothY1 as unknown as number, 
              scale: smoothScale as unknown as number
            }}
            animate={{ opacity: 0.2 }}
          >
            <Image
              src="/bg_1.jpg"
              alt="Background 1"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </motion.div>
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{ y: smoothY2 }}
          >
            <Image
              src="/bg_6.jpg"
              alt="Background 2"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </motion.div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empower Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-100">Treasury Operations</span>
              </h1>
              <p className="text-lg lg:text-xl mb-8 max-w-md">
                Transform your treasury, risk, trade finance, and supply chain finance with our integrated platform for unparalleled efficiency and insights.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-100 font-semibold"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-blue-800 hover:border-blue-800"
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Treasury Management"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logo Strip (Unchanged) */}
      <ClientLogoStrip variant="illustrative1" />

      {/* Winning Together */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Winning Together</h2>
            <p className="text-lg text-gray-600">
              Leading organizations leverage our comprehensive Treasury Management Platform for end-to-end digitization of Treasury, Risk, Trade Finance, and Supply Chain Finance operations, achieving sustainable advantages, agility, and productivity.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "40%", description: "Reduction in operational costs", icon: DollarSign },
              { title: "70%", description: "Increase in processing speed", icon: Zap },
              { title: "90%", description: "Improved financial reporting accuracy", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Offerings</h2>
            <p className="text-lg text-gray-600">
              A comprehensive suite of solutions tailored to optimize your financial operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Treasury Management", description: "Centralize and automate treasury processes for maximum efficiency.", icon: DollarSign },
              { title: "Risk Management", description: "Proactively identify and mitigate financial risks.", icon: Shield },
              { title: "Trade Finance", description: "Streamline trade documentation and financing.", icon: Globe },
              { title: "Supply Chain Finance", description: "Optimize working capital and supplier relationships.", icon: Truck },
              { title: "Debt Management", description: "Efficiently manage loans and repayments.", icon: BarChart2 },
              { title: "Analytics & Insights", description: "Leverage data for strategic decision-making.", icon: TrendingUp }
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 mb-4">
                  <offering.icon size={32} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
                <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-800">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              Our platform stands out with unmatched features and benefits tailored for your success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrated Platform", description: "Seamless end-to-end digitization across all financial operations.", icon: Globe },
              { title: "Advanced Analytics", description: "Real-time insights to drive strategic decisions.", icon: BarChart2 },
              { title: "Scalable Solutions", description: "Flexible tools that grow with your business needs.", icon: TrendingUp }
            ].map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <diff.icon size={32} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Industries</h2>
            <p className="text-lg text-gray-600">
              Our Treasury Management System is tailored to meet the diverse needs of businesses across all industries, providing agile and integrated solutions.
            </p>
          </motion.div>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {[
              { name: "Automotive", icon: Truck },
              { name: "Manufacturing", icon: Factory },
              { name: "Financial Services", icon: DollarSign },
              { name: "Healthcare", icon: Users },
              { name: "Retail", icon: Building }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-48 bg-white p-4 rounded-lg shadow-sm text-center"
              >
                <div className="text-blue-600 mb-2">
                  <industry.icon size={28} className="mx-auto" />
                </div>
                <p className="text-gray-800 font-medium">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation in Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Innovation in Action</h2>
            <p className="text-lg text-gray-600">
              Explore how our clients have transformed their operations with our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Bank Success",
                description: "Reduced processing time by 50% with automated treasury workflows.",
                image: "/case-study-1.jpg"
              },
              {
                title: "Manufacturing Efficiency",
                description: "Improved cash flow management across 20+ global subsidiaries.",
                image: "/case-study-2.jpg"
              },
              {
                title: "Retail Optimization",
                description: "Enhanced supply chain finance, saving $2M annually.",
                image: "/case-study-3.jpg"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
              >
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600">{caseStudy.description}</p>
                  <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-800">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Strategic Partnerships</h2>
            <p className="text-lg text-gray-600">
              We collaborate with industry leaders to deliver cutting-edge solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Partner A', 'Partner B', 'Partner C', 'Partner D'].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center"
              >
                <Handshake size={24} className="text-blue-600 mr-2" />
                <p className="text-gray-800 font-medium">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Latest News</h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest developments and achievements from our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Feature Release",
                date: "May 2025",
                description: "Introducing advanced analytics for real-time treasury insights."
              },
              {
                title: "Global Expansion",
                date: "April 2025",
                description: "Now serving clients in 30+ countries with localized solutions."
              },
              {
                title: "Award Recognition",
                date: "March 2025",
                description: "Named top treasury platform by Financial Tech Awards."
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <Newspaper size={24} className="text-blue-600 mr-2" />
                  <p className="text-sm text-gray-500">{news.date}</p>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-gray-600">{news.description}</p>
                <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-800">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect (Footer) */}
      <footer className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg mb-8">
              Ready to transform your financial operations? Get in touch with our team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                Request a Demo
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm">© 2025 Treasury Management Platform. All rights reserved.</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white">Terms of Service</a>
                <a href="#" className="text-blue-200 hover:text-white">Support</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}