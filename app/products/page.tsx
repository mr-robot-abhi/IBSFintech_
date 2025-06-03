'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, DollarSign, BarChart, Calendar, Wallet, CreditCard, Activity } from 'lucide-react';

export default function ProductsPage() {
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

  const products = [
    {
      title: "Treasury Management Platform",
      description: "Comprehensive platform for all your treasury needs with real-time visibility and control.",
      features: [
        "Centralized cash management",
        "Bank connectivity",
        "Automated reconciliation",
        "Custom reporting",
        "Audit trails"
      ],
      icon: DollarSign,
      color: "bg-blue-500"
    },
    {
      title: "Risk Management Module",
      description: "Proactively identify and mitigate financial risks with powerful analytics.",
      features: [
        "Foreign exchange exposure",
        "Interest rate risk",
        "Counterparty risk",
        "Market risk analytics",
        "Scenario modeling"
      ],
      icon: BarChart,
      color: "bg-indigo-500"
    },
    {
      title: "Cash & Liquidity Tool",
      description: "Optimize working capital with real-time cash visibility across all accounts.",
      features: [
        "Multi-bank reporting",
        "Cash forecasting",
        "Liquidity planning",
        "Working capital optimization",
        "Bank fee analysis"
      ],
      icon: Wallet,
      color: "bg-cyan-500"
    },
    {
      title: "Payments Management",
      description: "Streamline payment processes with security and efficiency across currencies.",
      features: [
        "Payment workflow automation",
        "Cross-border payments",
        "Payment approval routing",
        "Sanction screening",
        "Payment status tracking"
      ],
      icon: CreditCard,
      color: "bg-purple-500"
    },
    {
      title: "Debt Management System",
      description: "Track and optimize all aspects of your corporate debt portfolio.",
      features: [
        "Loan management",
        "Interest calculation",
        "Covenant tracking",
        "Amortization schedules",
        "Debt optimization"
      ],
      icon: Calendar,
      color: "bg-emerald-500"
    },
    {
      title: "Treasury Analytics Suite",
      description: "Gain powerful insights with interactive dashboards and custom reporting.",
      features: [
        "Interactive dashboards",
        "Custom report builder",
        "Data visualization",
        "KPI tracking",
        "AI-powered insights"
      ],
      icon: Activity,
      color: "bg-amber-500"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Treasury Management Products</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive solutions designed to streamline your treasury operations and unlock financial insights.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center text-white mb-4`}>
                      <product.icon size={24} />
                    </div>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription className="mt-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full text-blue-600">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Our Products?</h2>
            <p className="text-lg text-gray-600">
              Our treasury management products are built on years of industry expertise and cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrated Platform", description: "All treasury functions in one unified system" },
              { title: "Real-Time Insights", description: "Up-to-the-minute data for informed decision-making" },
              { title: "Enterprise Grade", description: "Built for the complex needs of large organizations" },
              { title: "Continuous Innovation", description: "Regular updates with the latest treasury technology" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
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
}