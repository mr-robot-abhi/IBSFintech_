'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ClientLogoStrip from '@/components/common/ClientLogoStrip';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Zap, DollarSign, BarChart2, Globe, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  stats: string;
  company: string;
  logo: string;
  rating: number;
}

export default function IllustrativeTwo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: 'David Kim',
      role: 'Head of Treasury, NexGen Tech',
      image: '/avatars/man2.jpg',
      content: 'The platform\'s predictive analytics helped us optimize our cash positions, resulting in a 28% improvement in working capital efficiency.',
      stats: '28% Improvement in Working Capital',
      company: 'NexGen Tech',
      logo: '/company-logos/tech-company.svg',
      rating: 5
    },
    {
      id: 2,
      name: 'Elena Rodriguez',
      role: 'CFO, Solaris Energy',
      image: '/avatars/woman3.jpg',
      content: 'Implementation was flawless, and the team provided exceptional support throughout our transition. We\'ve reduced manual processes by over 60%.',
      stats: '60% Reduction in Manual Processes',
      company: 'Solaris Energy',
      logo: '/company-logos/energy-company.svg',
      rating: 5
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Treasury Director, Atlas Global',
      image: '/avatars/man3.jpg',
      content: 'The risk management capabilities are second to none. We\'ve significantly reduced our exposure while maintaining competitive returns.',
      stats: '40% Risk Reduction',
      company: 'Atlas Global',
      logo: '/company-logos/global-company.svg',
      rating: 4
    },
    {
      id: 4,
      name: 'Sarah Chen',
      role: 'Finance Director, Urban Retail',
      image: '/avatars/woman1.jpg',
      content: 'The automated reporting has saved us countless hours. Our team can now focus on strategic initiatives rather than manual data compilation.',
      stats: '45 Hours Saved Monthly',
      company: 'Urban Retail',
      logo: '/company-logos/retail-company.svg',
      rating: 5
    },
    {
      id: 5,
      name: 'Michael Okafor',
      role: 'CTO, FinTech Innovations',
      image: '/avatars/man4.jpg',
      content: 'The API integration was seamless with our existing systems. We were up and running in days, not weeks.',
      stats: '80% Faster Integration',
      company: 'FinTech Innovations',
      logo: '/company-logos/fintech-company.svg',
      rating: 4
    }
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax effect for content
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0.3]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get visible testimonials (current, prev, next)
  const visibleTestimonials = useMemo(() => {
    const lastIndex = testimonials.length - 1;
    const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    
    return [
      { ...testimonials[prevIndex], position: 'left' },
      { ...testimonials[activeIndex], position: 'center' },
      { ...testimonials[nextIndex], position: 'right' },
    ];
  }, [testimonials, activeIndex]);

  const goToPrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  // Auto-play video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.play().catch(e => console.error('Auto-play failed:', e));
    }
  }, []);

  return (
    <div className="relative">
      {/* Video Background Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0"
            style={{ opacity: opacity.get() } as React.CSSProperties}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
            >
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
          </motion.div>
        </div>

        {/* Play/Pause Button */}
        <button 
          onClick={togglePlayPause}
          className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        
        {/* Content Overlay */}
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ y }}
              >
                <span className="text-white">Modern Treasury</span>{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Revolutionize your financial operations with our end-to-end treasury management platform powered by cutting-edge technology.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-white border-white/60 hover:bg-white/10 hover:border-white/80 backdrop-blur-sm"
                >
                  Schedule a Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Logo Strip */}
      <ClientLogoStrip variant="illustrative2" />

      {/* Winning Together Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid3d" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4338CA" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3d)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              <span className="relative">
                Winning Together
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Leading organisations trust our comprehensive Treasury Management Platform for end-to-end digitization,
              unlocking new levels of efficiency and financial control.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "40%", description: "Reduced operational costs", icon: DollarSign },
              { title: "70%", description: "Faster processing time", icon: Zap },
              { title: "90%", description: "Higher accuracy in financial reporting", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl mb-6 shadow-lg">
                  <stat.icon size={28} />
                </div>
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Offerings</h2>
            <p className="text-lg text-gray-600">
              Comprehensive suite of treasury management solutions designed to meet the most demanding financial challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trade Finance",
                description: "Simplify letter of credit management, guarantees, and trade documentation",
                icon: Globe,
                color: "from-blue-600 to-blue-400"
              },
              {
                title: "Cash Management",
                description: "Real-time visibility into cash positions across multiple banks and accounts",
                icon: DollarSign,
                color: "from-indigo-600 to-indigo-400"
              },
              {
                title: "Risk Management",
                description: "Identify, measure, and mitigate financial risks effectively",
                icon: Shield,
                color: "from-purple-600 to-purple-400"
              },
              {
                title: "Debt Management",
                description: "Streamline loan processing and repayment tracking",
                icon: BarChart2,
                color: "from-cyan-600 to-cyan-400"
              },
              {
                title: "Treasury Analytics",
                description: "Data-driven insights to optimize treasury operations",
                icon: TrendingUp,
                color: "from-blue-600 to-indigo-600"
              },
              {
                title: "Payment Solutions",
                description: "Secure and efficient payment processing across currencies",
                icon: Zap,
                color: "from-indigo-600 to-purple-600"
              }
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg relative group"
              >
                <div className={cn(
                  "h-2 w-full bg-gradient-to-r",
                  offering.color
                )} />
                <div className="p-8">
                  <div className="relative z-10">
                    <div className={cn(
                      "inline-flex items-center justify-center p-3 rounded-lg text-white mb-6 bg-gradient-to-r",
                      offering.color
                    )}>
                      <offering.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{offering.title}</h3>
                    <p className="text-gray-600 mb-6">{offering.description}</p>
                    <Button variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
                
                {/* 3D decorative elements */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 transition-opacity group-hover:opacity-20">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(15 50 50)" />
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-10 50 50)" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              Trusted by Industry Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Voices of Success</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how forward-thinking companies are transforming their treasury operations
            </p>
          </motion.div>

          <div className="relative">
            <div className="relative overflow-hidden">
              <div className="relative h-[500px] w-full">
                <AnimatePresence mode="wait">
                  {visibleTestimonials.map((testimonial: Testimonial & { position: string }) => {
                    const position = testimonial.position;
                    const isCenter = position === 'center';
                    const isLeft = position === 'left';
                    const isRight = position === 'right';
                  
                    return (
                      <motion.div
                        key={`${testimonial.id}-${position}`}
                        className={`absolute w-full max-w-2xl mx-auto left-0 right-0 transition-all duration-500 ${
                          isCenter ? 'z-10' : 'z-0 pointer-events-none'
                        }`}
                        initial={{
                          x: isLeft ? '-100%' : isRight ? '100%' : '0%',
                          scale: isCenter ? 1 : 0.9,
                          opacity: isCenter ? 1 : 0.8,
                        }}
                        animate={{
                          x: isLeft ? '-100%' : isRight ? '100%' : '0%',
                          scale: isCenter ? 1 : 0.9,
                          opacity: isCenter ? 1 : 0.8,
                        }}
                        exit={{
                          x: isLeft ? '-150%' : isRight ? '150%' : '0%',
                          opacity: 0,
                          scale: 0.8,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mx-4">
                          <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex items-center">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                                  <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                                  <div className="flex mt-1">
                                    {[...Array(5)].map((_, i) => (
                                      <svg
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                                  {testimonial.company}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                            <div className="px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                              <p className="text-sm font-medium text-blue-800 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.881 2.924c0 .414-.336.75-.75.75s-.75-.336-.75-.75 0-.529-.21-1.032a1.5 1.5 0 00-.54-.54 1.5 1.5 0 00-1.06-.44 1.5 1.5 0 01-1.14-.44 1.5 1.5 0 00-1.06-.44 1.5 1.5 0 00-1.14.44 1.5 1.5 0 01-1.06.44 1.5 1.5 0 00-1.06.44 1.5 1.5 0 00-.44 1.06c0 .414-.336.75-.75.75s-.75-.336-.75-.75 0-.75.75-.75h.01c.953 0 1.833-.472 2.36-1.26a3.066 3.066 0 012.88-2.924z" clipRule="evenodd" />
                                </svg>
                                {testimonial.stats}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors hover:scale-110 transform"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors hover:scale-110 transform"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Dots Navigation */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center relative"
          >
            <div className="absolute inset-0 -z-10 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Treasury Operations?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of businesses already optimizing their financial operations with IBS Fintech
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}