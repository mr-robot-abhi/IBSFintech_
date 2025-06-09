'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import IBSServiceNetwork from './ibs_network';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe, 
  Truck, 
  BarChart2, 
  Factory, 
  Users, 
  Building, 
  Handshake, 
  Newspaper, 
  ArrowRight 
} from 'lucide-react';

// Animation variants
const itemVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function IllustrativeOne() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Parallax effects for background
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-x-hidden bg-gray-50" ref={containerRef}>
      {/* Hero Section with animated background */}
      <section className="relative pt-28 pb-12 px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            style={{ y: smoothY1 as unknown as number, scale: smoothScale as unknown as number }}
            animate={{ opacity: 0.22 }}
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
              src="/bg_1.jpg"
              alt="Background 2"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </motion.div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Treasury Operations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto md:mx-0">
              End-to-end digital treasury solutions for the modern enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="default"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-full px-8 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-blue-700 hover:border-blue-700 font-semibold rounded-full px-8 py-6 text-lg"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Treasury Management"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl border-4 border-white/30"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updated IBS Service Network (includes enhanced visuals, client logos, and sparkles) */}
      <IBSServiceNetwork />

      {/* Winning Together */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Winning Together</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Leading organizations leverage our comprehensive Treasury Management Platform for end-to-end digitization of Treasury, Risk, Trade Finance, and Supply Chain Finance operations, achieving sustainable advantages, agility, and productivity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "40%", 
                description: "Reduction in operational costs", 
                icon: DollarSign,
                color: "text-green-500"
              },
              { 
                title: "70%", 
                description: "Faster processing speed", 
                icon: Zap,
                color: "text-blue-500"
              },
              { 
                title: "90%", 
                description: "Improved reporting accuracy", 
                icon: TrendingUp,
                color: "text-purple-500"
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={28} className={stat.color} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">{stat.title}</h3>
                <p className="text-gray-600 text-center text-lg">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block text-blue-600 font-medium mb-3">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              A complete suite of solutions designed to optimize every aspect of your financial operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Treasury Management", 
                description: "Centralize and automate treasury processes for maximum efficiency and control.", 
                icon: DollarSign,
                color: "text-blue-500"
              },
              { 
                title: "Risk Management", 
                description: "Proactively identify, assess, and mitigate financial risks with real-time monitoring.", 
                icon: Shield,
                color: "text-emerald-500"
              },
              { 
                title: "Trade Finance", 
                description: "Streamline trade documentation, financing, and global trade operations.", 
                icon: Globe,
                color: "text-amber-500"
              },
              { 
                title: "Supply Chain Finance", 
                description: "Optimize working capital and strengthen supplier relationships.", 
                icon: Truck,
                color: "text-purple-500"
              },
              { 
                title: "Analytics & Reporting", 
                description: "Gain powerful insights with advanced analytics and customizable dashboards.", 
                icon: BarChart2,
                color: "text-rose-500"
              },
              { 
                title: "Investment Management", 
                description: "Maximize returns on corporate investments with intelligent portfolio management.", 
                icon: TrendingUp,
                color: "text-cyan-500"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: Math.floor(index / 3) * 0.2 + (index % 3) * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-14 h-14 ${service.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon size={24} className={service.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{service.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <button className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-8 py-6 text-lg"
            >
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-600 font-light">
              Our platform stands out with unmatched features and benefits tailored for your success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrated Platform", description: "Seamless end-to-end digitization across all financial operations.", icon: Globe },
              { title: "Advanced Analytics", description: "Real-time insights to drive strategic decisions.", icon: BarChart2 },
              { title: "Scalable Solutions", description: "Flexible tools that grow with your business needs.", icon: TrendingUp },
            ].map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-4">
                  <diff.icon size={32} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{diff.title}</h3>
                <p className="text-gray-600 font-light">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Featured Industries</h2>
            <p className="text-lg text-gray-600 font-light">
              Our Treasury Management System is tailored to meet the diverse needs of businesses across all industries, providing agile and integrated solutions.
            </p>
          </motion.div>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {[
              { name: "Automotive", icon: Truck },
              { name: "Manufacturing", icon: Factory },
              { name: "Financial Services", icon: DollarSign },
              { name: "Healthcare", icon: Users },
              { name: "Retail", icon: Building },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-48 bg-gray-50 p-4 rounded-xl shadow-md text-center"
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Innovation in Action</h2>
            <p className="text-lg text-gray-600 font-light">
              Explore how our clients have transformed their operations with our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Bank Success",
                description: "Reduced processing time by 50% with automated treasury workflows.",
                image: "/case-study-1.jpg",
              },
              {
                title: "Manufacturing Efficiency",
                description: "Improved cash flow management across 20+ global subsidiaries.",
                image: "/case-study-2.jpg",
              },
              {
                title: "Retail Optimization",
                description: "Enhanced supply chain finance, saving $2M annually.",
                image: "/case-study-3.jpg",
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
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
                  <p className="text-gray-600 font-light">{caseStudy.description}</p>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Strategic Partnerships</h2>
            <p className="text-lg text-gray-600 font-light">
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
                className="bg-gray-50 p-4 rounded-xl shadow-md flex items-center justify-center"
              >
                <Handshake size={24} className="text-blue-600 mr-2" />
                <p className="text-gray-800 font-medium">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Latest News</h2>
            <p className="text-lg text-gray-600 font-light">
              Stay updated with the latest developments and achievements from our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Feature Release",
                date: "May 2025",
                description: "Introducing advanced analytics for real-time treasury insights.",
              },
              {
                title: "Global Expansion",
                date: "April 2025",
                description: "Now serving clients in 30+ countries with localized solutions.",
              },
              {
                title: "Award Recognition",
                date: "March 2025",
                description: "Named top treasury platform by Financial Tech Awards.",
              },
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Newspaper size={24} className="text-blue-600 mr-2" />
                  <p className="text-sm text-gray-500">{news.date}</p>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-gray-600 font-light">{news.description}</p>
                <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-800">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect (Footer) */}
      <footer className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold mb-6">Let's Connect</h2>
            <p className="text-lg mb-8 font-light">
              Ready to transform your financial operations? Get in touch with our team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-6">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 rounded-full px-6">
                Request a Demo
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm">© 2025 IBSFINtech. All rights reserved.</p>
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