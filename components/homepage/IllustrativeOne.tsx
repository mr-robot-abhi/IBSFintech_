'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ClientLogoStrip from '@/components/common/ClientLogoStrip';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Zap, DollarSign, BarChart2, Globe } from 'lucide-react';

export default function IllustrativeOne() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Smooth the scroll values
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothY3 = useSpring(y3, { stiffness: 100, damping: 30 });
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
    <div className="overflow-x-hidden" ref={containerRef}>
      {/* Main Banner with Parallax */}
      <section className="relative pt-28 pb-16 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#F1F1F2] via-[#A1D6E2] to-[#1995AD] transition-opacity duration-300"
            style={{ 
              transform: `scale(${smoothScale.get()})`,
              opacity: smoothOpacity.get()
            } as React.CSSProperties}
          >
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="blue" strokeWidth="0.5" />
                </pattern>
                <pattern id="circles" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="orange" />
                </pattern>
                <pattern id="squares" width="30" height="30" patternUnits="userSpaceOnUse">
                  <rect x="5" y="5" width="20" height="20" rx="2" fill="none" stroke="teal" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#circles)" />
              <rect width="100%" height="100%" fill="url(#squares)" />
            </svg>
          </div>
          </motion.div>
        </div>

        {/* Parallax Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{ y: smoothY1 }}
          >
          <Image
            src="/bg_1.jpg"
            alt="Background 1"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
          </motion.div>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-20"
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
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[80vh]"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="relative z-10"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#147a8f] to-[#1995AD] bg-clip-text text-transparent">
                  Overwhelmed
                </span>{' '}
                by Treasury Operations?
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Streamline your treasury management with our intelligent platform designed for modern enterprises.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#147a8f] to-[#1995AD] hover:from-[#10687a] hover:to-[#147a8f] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-[#1995AD] hover:text-[#1995AD] bg-white/80 backdrop-blur-sm"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
                damping: 20
              }}
            >
              <motion.div 
                className="relative w-full aspect-square"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: 'easeInOut'
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                  style={{ y: smoothY3 }}
                >
                  <Image
                    src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill
                    alt="Treasury Management"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-28 h-28 text-blue-400 opacity-70"
                  animate={{
                    rotate: [0, 10, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                >
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <rect x="15" y="15" width="70" height="70" rx="10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-5 -right-5 w-24 h-24 text-orange-400 opacity-70"
                  animate={{
                    rotate: [0, -10, 5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                >
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,20 C40,0 60,0 80,20 S100,60 80,80 S40,100 20,80 S0,40 20,20 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <ClientLogoStrip variant="illustrative1" />

      {/* Winning Together Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Winning Together</h2>
            <p className="text-lg text-gray-600 mb-8">
              Leading organisations use our comprehensive Treasury Management Platform for end-to-end digitization,
              empowering financial teams to make better decisions and optimize operations.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "40%", description: "Reduced operational costs", icon: DollarSign },
              { title: "70%", description: "Faster processing time", icon: Zap },
              { title: "90%", description: "Higher accuracy in financial reporting", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors"
              >
                <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Offerings</h2>
            <p className="text-lg text-gray-600">
              Comprehensive suite of treasury management solutions designed to meet diverse financial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trade Finance",
                description: "Simplify letter of credit management, guarantees, and trade documentation",
                icon: Globe
              },
              {
                title: "Cash Management",
                description: "Real-time visibility into cash positions across multiple banks and accounts",
                icon: DollarSign
              },
              {
                title: "Risk Management",
                description: "Identify, measure, and mitigate financial risks effectively",
                icon: Shield
              },
              {
                title: "Debt Management",
                description: "Streamline loan processing and repayment tracking",
                icon: BarChart2
              },
              {
                title: "Treasury Analytics",
                description: "Data-driven insights to optimize treasury operations",
                icon: TrendingUp
              },
              {
                title: "Payment Solutions",
                description: "Secure and efficient payment processing across currencies",
                icon: Zap
              }
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border-2 border-transparent hover:border-dashed hover:border-blue-300"
              >
                <div className="text-blue-500 mb-4">
                  <offering.icon size={36} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
                <Button variant="ghost" className="mt-4 text-blue-600">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that transformed their treasury operations with our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CFO, TechNova',
                image: '/avatars/woman1.jpg',
                content: 'IBS Fintech revolutionized how we manage our treasury. The automation features saved us 20+ hours per month in manual work.',
                rating: 5
              },
              {
                name: 'Michael Rodriguez',
                role: 'Treasury Director, GlobalCorp',
                image: '/avatars/man1.jpg',
                content: 'The risk management tools are exceptional. We\'ve reduced our exposure by 35% while improving returns.',
                rating: 5
              },
              {
                name: 'Priya Patel',
                role: 'Finance Lead, GreenEnergy',
                image: '/avatars/woman2.jpg',
                content: 'Implementation was seamless, and the support team is outstanding. A true partner in our financial transformation.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Treasury Operations?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of businesses already optimizing their financial operations with IBS Fintech
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}