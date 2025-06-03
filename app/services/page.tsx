'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BookOpen, Headphones, Users, Settings } from 'lucide-react';

export default function ServicesPage() {
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

  const services = [
    {
      title: "Treasury Consulting",
      description: "Expert guidance on treasury strategy, process optimization, and technology selection.",
      image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Treasury diagnostics and assessment",
        "Process re-engineering",
        "Technology roadmap development",
        "Treasury policy development",
        "M&A treasury integration"
      ],
      icon: Users
    },
    {
      title: "Implementation Support",
      description: "End-to-end implementation services for seamless technology adoption and change management.",
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Project management",
        "System configuration and customization",
        "Data migration and validation",
        "Integration with existing systems",
        "User acceptance testing"
      ],
      icon: Settings
    },
    {
      title: "Training & Education",
      description: "Comprehensive training programs to maximize the value of your treasury technology investments.",
      image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "User training workshops",
        "Administrator certification",
        "Treasury best practices education",
        "Continuous learning programs",
        "Knowledge base and documentation"
      ],
      icon: BookOpen
    },
    {
      title: "Managed Services",
      description: "Ongoing support and managed services to ensure optimal performance of your treasury operations.",
      image: "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "24/7 technical support",
        "System monitoring and maintenance",
        "Regular updates and enhancements",
        "Performance optimization",
        "Compliance monitoring"
      ],
      icon: Headphones
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive support throughout your treasury transformation journey
            </p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-blue-50">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Professional Services</h2>
            <p className="text-lg text-gray-600">
              Expert services to help you implement, optimize, and maximize the value of your treasury solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                style={{ 
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-700">What We Offer</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                
                <div className={`relative aspect-video rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={service.image}
                    fill
                    alt={service.title}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Approach</h2>
            <p className="text-lg text-gray-600">
              A structured methodology to ensure successful outcomes
            </p>
          </motion.div>

          <div className="flex flex-col max-w-4xl mx-auto">
            {[
              { phase: "Discovery", description: "Understanding your unique treasury challenges and objectives" },
              { phase: "Design", description: "Creating a tailored solution and implementation roadmap" },
              { phase: "Implementation", description: "Executing the plan with minimal disruption to your business" },
              { phase: "Training", description: "Ensuring your team can effectively use the new solutions" },
              { phase: "Support", description: "Providing ongoing assistance to maximize long-term value" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start mb-8 relative"
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg z-10">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.phase}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 4 && (
                  <div className="absolute left-8 top-16 h-16 w-0.5 bg-blue-200"></div>
                )}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our professional services team to discuss your needs and explore how we can help
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}