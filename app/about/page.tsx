'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Clock, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero section with banner image */}
      <section className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/About Us IBSFINtech.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About IBS Fintech</h1>
              <p className="text-xl text-gray-200">
                Pioneering treasury solutions for over a decade, helping enterprises optimize financial operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, IBS Fintech began with a mission to transform how enterprises manage treasury 
                operations. We identified a critical gap in the market: existing solutions were either too complex, 
                too rigid, or too expensive for many businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting with a small team of treasury experts and developers, we built our first treasury management 
                solution, which was quickly adopted by several mid-sized companies in India. As word spread about our 
                innovative approach, we expanded our client base to include some of the largest corporations in the country.
              </p>
              <p className="text-lg text-gray-600">
                Today, IBS Fintech is recognized as a leader in treasury technology, serving clients across multiple 
                industries and geographies. Our platform continues to evolve, incorporating the latest advancements 
                in AI, data analytics, and cloud technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                fill
                alt="IBS Fintech Team"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">IBS Fintech by the Numbers</h2>
            <p className="text-lg text-gray-600">
              Our impact and growth over the years
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { figure: "10+", label: "Years of Excellence", icon: Clock },
              { figure: "500+", label: "Enterprise Clients", icon: Users },
              { figure: "20+", label: "Countries Served", icon: Globe },
              { figure: "15+", label: "Industry Awards", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.figure}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in treasury technology."
              },
              {
                title: "Client Success",
                description: "Our clients' success is our success - we're dedicated to delivering measurable value."
              },
              {
                title: "Integrity",
                description: "We operate with the highest standards of honesty, transparency, and ethics."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from product development to customer service."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts guiding our vision and strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                title: "CEO & Founder",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Priya Sharma",
                title: "Chief Technology Officer",
                image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Anil Patel",
                title: "Chief Financial Officer",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Sarah Johnson",
                title: "Chief Operating Officer",
                image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={leader.image}
                    fill
                    alt={leader.name}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                <p className="text-gray-600">{leader.title}</p>
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
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 text-blue-100">
              Partner with IBS Fintech to transform your treasury operations
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}