'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Building2, Users } from 'lucide-react';
import ModernMegaMenu from '@/components/layout/ModernMegaMenu';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const enterpriseProducts = [
    {
      name: "Cashflow & Liquidity",
      description: "Comprehensive cash management and liquidity optimization solutions",
      href: "/products/enterprise/cashflow-liquidity",
      features: ["Real-time cash visibility", "Forecasting", "Liquidity optimization"],
    },
    {
      name: "Currency (FX) Risk",
      description: "Advanced foreign exchange risk management and hedging solutions",
      href: "/products/enterprise/fx-risk",
      features: ["FX exposure tracking", "Hedging strategies", "Risk analytics"],
    },
    {
      name: "Investment (Money Market)",
      description: "Money market investment management and optimization",
      href: "/products/enterprise/investment",
      features: ["Investment tracking", "Portfolio optimization", "Risk assessment"],
    },
    {
      name: "Trade Finance",
      description: "Complete trade finance management and automation",
      href: "/products/enterprise/trade-finance",
      features: ["LC management", "Trade documentation", "Workflow automation"],
    },
    {
      name: "Debt (Borrowings)",
      description: "Debt management and borrowing optimization solutions",
      href: "/products/enterprise/debt",
      features: ["Debt tracking", "Covenant monitoring", "Interest optimization"],
    },
    {
      name: "Commodity Risk",
      description: "Commodity price risk management and hedging",
      href: "/products/enterprise/commodity-risk",
      features: ["Price exposure tracking", "Hedging strategies", "Market analytics"],
    },
    {
      name: "Payments",
      description: "Treasury payment processing and management",
      href: "/products/enterprise/payments",
      features: ["Payment automation", "Multi-bank connectivity", "Approval workflows"],
    },
    {
      name: "Supply Chain Finance (VNDZY®)",
      description: "Advanced supply chain finance platform",
      href: "/products/enterprise/supply-chain-finance",
      features: ["Vendor financing", "Dynamic discounting", "Working capital optimization"],
    },
  ];

  const smeProducts = [
    {
      name: "InnoTreasury",
      description: "Comprehensive treasury management solution for SMEs",
      href: "/products/sme/inno-treasury",
      features: ["Cash management", "FX risk management", "Payment processing"],
    },
    {
      name: "InnoInvest",
      description: "Investment management platform for small and medium enterprises",
      href: "/products/sme/inno-invest",
      features: ["Investment tracking", "Portfolio management", "Risk monitoring"],
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Products</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprehensive treasury management solutions designed for enterprises and SMEs
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request a Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enterprise TMS Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center mb-8">
              <Building2 className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Enterprise TMS</h2>
                <p className="text-muted-foreground">Advanced treasury management for large enterprises</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-800">{product.name}</CardTitle>
                      <CardDescription className="text-gray-600">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full bg-transparent hover:bg-blue-50 border-blue-100">
                        <Link href={product.href}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SME TMS Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">SME TMS</h2>
                <p className="text-muted-foreground">Tailored solutions for small and medium enterprises</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {smeProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-800">{product.name}</CardTitle>
                      <CardDescription className="text-gray-600">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link href={product.href}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Our Products?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a personalized demonstration to see how our products can transform your treasury operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Request Product Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;