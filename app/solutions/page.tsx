'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Clock, Server, Briefcase } from 'lucide-react';

export default function SolutionsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const solutions = [
    {
      id: "digitization",
      title: "End-to-End Digitization",
      description: "Transform your treasury operations with comprehensive digital solutions.",
      features: [
        "Paperless processes",
        "Digital approvals and signatures",
        "API integrations with banking systems",
        "Automated reporting",
        "Digital document management"
      ],
      benefits: [
        "70% reduction in manual processes",
        "85% faster document processing",
        "99.9% accuracy in financial data"
      ],
      icon: Server,
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "supplychain",
      title: "Supply Chain Finance",
      description: "Optimize working capital across your entire supply chain ecosystem.",
      features: [
        "Dynamic discounting",
        "Supplier onboarding",
        "Early payment programs",
        "Invoice management",
        "Supply chain analytics"
      ],
      benefits: [
        "30% improvement in working capital",
        "20-day reduction in payment cycles",
        "45% increase in supplier satisfaction"
      ],
      icon: Globe,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "risk",
      title: "Risk Mitigation",
      description: "Identify and manage financial risks before they impact your business.",
      features: [
        "Real-time risk monitoring",
        "Scenario analysis",
        "Automated alerts",
        "Compliance tracking",
        "Risk reporting dashboard"
      ],
      benefits: [
        "50% reduction in FX exposure",
        "Early identification of 95% of risks",
        "40% lower compliance costs"
      ],
      icon: ShieldCheck,
      image: "https://images.pexels.com/photos/7821489/pexels-photo-7821489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "liquidity",
      title: "Liquidity Management",
      description: "Optimize cash positioning and forecasting for improved financial control.",
      features: [
        "Cash pooling",
        "Multi-bank visibility",
        "AI-powered forecasting",
        "Automated reconciliation",
        "Liquidity stress testing"
      ],
      benefits: [
        "40% reduction in idle cash",
        "60% improvement in forecast accuracy",
        "15% increase in interest income"
      ],
      icon: TrendingUp,
      image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "payments",
      title: "Payment Optimization",
      description: "Streamline payment processes with automation and intelligent routing.",
      features: [
        "Payment factory",
        "Cross-border payment optimization",
        "Payment fraud detection",
        "SWIFT/SEPA connectivity",
        "Payment analytics"
      ],
      benefits: [
        "35% reduction in payment costs",
        "99% straight-through processing rate",
        "90% fewer payment errors"
      ],
      icon: Clock,
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "advisory",
      title: "Treasury Advisory",
      description: "Expert guidance on treasury strategy and transformation.",
      features: [
        "Treasury diagnostics",
        "Process optimization",
        "System selection",
        "Implementation support",
        "Treasury talent development"
      ],
      benefits: [
        "25% reduction in operating costs",
        "Accelerated transformation timeline",
        "Increased treasury team capabilities"
      ],
      icon: Briefcase,
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Treasury Solutions</h1>
            <p className="text-xl text-blue-100 mb-8">
              Tailored approaches to solve your most pressing treasury and financial challenges.
            </p>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-blue-50">
              Explore Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Solutions</h2>
            <p className="text-lg text-gray-600">
              Comprehensive approaches to address specific treasury and financial challenges faced by modern enterprises
            </p>
          </motion.div>

          <Tabs defaultValue="digitization" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {solutions.map(solution => (
                  <TabsTrigger key={solution.id} value={solution.id} className="px-3 py-1.5 text-sm">
                    <solution.icon className="h-4 w-4 mr-1.5" />
                    <span className="hidden md:inline">{solution.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {solutions.map(solution => (
              <TabsContent key={solution.id} value={solution.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{solution.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-700">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3 text-gray-700">Business Impact</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More About {solution.title}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                      <Image
                        src={solution.image}
                        fill
                        alt={solution.title}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how our solutions have transformed treasury operations for leading organizations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                company: "Automotive Leader",
                solution: "End-to-End Digitization",
                result: "Reduced manual processes by 85% and improved cash visibility across 30 countries",
                image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                company: "Global Manufacturer",
                solution: "Supply Chain Finance",
                result: "Improved DPO by 15 days while strengthening supplier relationships",
                image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                company: "Multinational Corporation",
                solution: "Risk Mitigation",
                result: "Reduced FX exposure by 45% and implemented automated hedging program",
                image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((caseStudy, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={caseStudy.image}
                      fill
                      alt={caseStudy.company}
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{caseStudy.company}</CardTitle>
                    <CardDescription>{caseStudy.solution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{caseStudy.result}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-blue-600">
                      Read Case Study <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Treasury?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our solution experts to discuss your specific challenges and discover how we can help
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
                Download Solution Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}