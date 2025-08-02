'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Eye, TrendingUp, DollarSign, FileText, PiggyBank, BarChart3, CreditCard, Network } from 'lucide-react';
import ModernMegaMenu from '@/components/layout/ModernMegaMenu';
import { useEffect, useState } from 'react';

const SolutionsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      icon: Eye,
      name: "Cash Visibility & Forecasting",
      description: "Real-time cash position monitoring and intelligent forecasting across all entities and accounts.",
      href: "/solutions/cash-visibility",
      features: ["Multi-entity consolidation", "AI-powered forecasting", "Real-time dashboards"],
    },
    {
      icon: TrendingUp,
      name: "FX Risk Management",
      description: "Comprehensive foreign exchange risk identification, measurement, and hedging solutions.",
      href: "/solutions/fx-risk",
      features: ["Exposure tracking", "Hedging strategies", "Mark-to-market valuation"],
    },
    {
      icon: PiggyBank,
      name: "Money Market Management",
      description: "Optimize short-term investments and manage money market portfolios effectively.",
      href: "/solutions/money-market",
      features: ["Investment optimization", "Risk assessment", "Performance tracking"],
    },
    {
      icon: FileText,
      name: "Trade Finance",
      description: "Streamline trade finance operations with automated workflows and documentation.",
      href: "/solutions/trade-finance",
      features: ["LC management", "Document automation", "Compliance tracking"],
    },
    {
      icon: DollarSign,
      name: "Debt Management",
      description: "Comprehensive debt portfolio management and optimization solutions.",
      href: "/solutions/debt-management",
      features: ["Debt tracking", "Covenant monitoring", "Interest optimization"],
    },
    {
      icon: BarChart3,
      name: "Commodity Risk",
      description: "Manage commodity price exposure and implement effective hedging strategies.",
      href: "/solutions/commodity-risk",
      features: ["Price exposure tracking", "Hedging optimization", "Market analytics"],
    },
    {
      icon: CreditCard,
      name: "Treasury Payments",
      description: "Centralized payment processing with multi-bank connectivity and approval workflows.",
      href: "/solutions/treasury-payments",
      features: ["Payment automation", "Multi-bank integration", "Approval workflows"],
    },
    {
      icon: Network,
      name: "SCF Platform",
      description: "Advanced supply chain finance platform for working capital optimization.",
      href: "/solutions/scf-platform",
      features: ["Vendor financing", "Dynamic discounting", "Working capital optimization"],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-transparent">
      {/* Background for all sections */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src="/style1_bg.png"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Mega Navigation Menu */}
      <ModernMegaMenu />

      {/* Hero section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Solutions</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprehensive treasury solutions designed to address your specific financial challenges and drive operational excellence
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request a Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Treasury Solutions That Drive Results</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of treasury solutions addresses every aspect of modern financial management, from
              cash visibility to risk management, helping organizations optimize their treasury operations and achieve
              strategic financial objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm group">
                  <CardHeader>
                    <solution.icon className="h-8 w-8 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl text-gray-800">{solution.name}</CardTitle>
                    <CardDescription className="text-gray-600">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full bg-transparent hover:bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    >
                      <Link href={solution.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative z-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Solutions?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We deliver measurable results and tangible business value through our comprehensive treasury solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Platform",
                description: "All solutions work seamlessly together on a unified platform",
                icon: Network,
              },
              {
                title: "Real-time Insights",
                description: "Make informed decisions with real-time data and analytics",
                icon: Eye,
              },
              {
                title: "Scalable Architecture",
                description: "Grow with confidence using our scalable, cloud-native platform",
                icon: TrendingUp,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-blue-100">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to Transform Your Treasury Operations?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-gray-600">
                Discover how our comprehensive treasury solutions can streamline your operations, reduce risk, and drive
                strategic value for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/request-demo">Request a Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;