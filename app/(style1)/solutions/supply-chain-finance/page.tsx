'use client';

import React from 'react';
import { Zap, ArrowRight, Check, RefreshCw, Shield, Activity, BarChart2, FileText, CreditCard, Users, Cpu, Link2, TrendingUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const SupplyChainFinancePage = () => {
  const challenges = [
    {
      title: "Corporates",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      items: [
        "Managing multiple vendors is complex and time-consuming.",
        "Ensuring vendor reliability is critical to avoid supply chain disruptions.",
        "Manual payment processes are prone to errors and delays.",
        "Integrating with existing ERP systems can be challenging."
      ]
    },
    {
      title: "Suppliers",
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      items: [
        "Complicated onboarding processes hinder business opportunities.",
        "Payment delays impact cash flow and business operations.",
        "Proving credibility to corporates can be difficult.",
        "Accessing supply chain financing smoothly is a challenge."
      ]
    },
    {
      title: "Financial Institutions",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      items: [
        "Evaluating financing risk accurately is crucial.",
        "Integrating data from various sources is time-consuming.",
        "Fraud detection requires advanced technology.",
        "Ensuring customer satisfaction is key to retaining clients."
      ]
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Vendor Onboarding",
      description: "Automated and efficient onboarding process with comprehensive vendor profile creation."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Vendor Credibility Validation",
      description: "AI-driven credibility scoring and continuous monitoring."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Fraud Detection",
      description: "Real-time fraud alerts with advanced AI algorithms."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Payment Processes",
      description: "Automated and error-free payment processing with integration to multiple payment gateways."
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: "ERP & Supply Chain Financing Integration",
      description: "Seamless integration with existing ERP systems and comprehensive supply chain financing solutions."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "AI-Driven Supplier Rating",
      description: "Predictive analytics for supplier performance with AI-based rating and ranking of suppliers."
    }
  ];

  const valuePropositions = [
    { icon: <Check className="h-6 w-6 text-blue-600" />, text: "Efficiency: Reduce time and effort with streamlined processes." },
    { icon: <Shield className="h-6 w-6 text-blue-600" />, text: "Reliability: Ensure accurate and reliable vendor checks." },
    { icon: <Activity className="h-6 w-6 text-blue-600" />, text: "Security: Protect transactions with advanced fraud detection." },
    { icon: <Link2 className="h-6 w-6 text-blue-600" />, text: "Seamless Integration: Integrate easily with your existing systems." },
    { icon: <BarChart2 className="h-6 w-6 text-blue-600" />, text: "AI-Powered Insights: Make better decisions with AI-driven analytics." },
    { icon: <TrendingUp className="h-6 w-6 text-blue-600" />, text: "Improved Cash Flow: Benefit from faster payments and financing options." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#241F5D] opacity-5"></div>

      {/* Navigation */}


      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Supply Chain Finance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-blue-100 mb-4"
            >
              Transforming Financial Operations with AI-Driven Solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Streamline vendor onboarding, validate credibility, detect fraud, and integrate with your ERP seamlessly
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

      {/* Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">Challenges</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Brief overview of challenges faced by corporates, suppliers, and financial institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#241F5D] mb-4 text-center">{challenge.title}</h3>
                <ul className="space-y-3">
                  {challenge.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">VNDZY® Strengthens the Supply Chain Ecosystem</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              VNDZY® strengthens and connects the entire supply chain ecosystem, empowering corporations, suppliers, customers, and financial institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.floor(index / 3) * 0.1 + (index % 3) * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#241F5D] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241F5D] mb-4">Value Proposition</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-start"
              >
                <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#241F5D] to-[#3A3480] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Supply Chain Finance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how VNDZY® can help you streamline your supply chain operations and improve financial efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#241F5D] hover:bg-blue-50">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChainFinancePage;
