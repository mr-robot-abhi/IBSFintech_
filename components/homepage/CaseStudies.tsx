"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe, Shield, Zap, Users, BarChart2, Building } from "lucide-react";
import Tilt from "react-parallax-tilt";

const caseStudies = [
  {
    title: "FMCG Giant's path to data-driven decision",
    company: "Dabur India Limited",
    summary:
      "Empowering treasury functions with automation for better financial insights and operational efficiency.",
    highlights: [
      "FMCG Industry Leader",
      "Treasury Automation",
      "Data-Driven Decisions",
    ],
    icon: Zap,
    image: "/Case_Studies/IBSFINtech-Client-Dabur.png",
    date: "September 10, 2024"
  },
  {
    title: "Cash Management Optimization",
    company: "Hindustan Zinc Limited",
    summary:
      "Optimized cash management processes across multiple business units, significantly improving liquidity and reducing operational costs.",
    highlights: [
      "Cash Management",
      "Liquidity",
      "Cost Reduction",
    ],
    icon: BarChart2,
    image: "/Case_Studies/Hindustan-Zinc-Limited.png",
    date: "December 5, 2023"
  },
  {
    title: "Streamlined Treasury Operations & Real-Time Insights",
    company: "Credit Saison (India)",
    summary:
      "How a Global Financial Services (NBFC) Leader achieved operational excellence with IBSFintech.",
    highlights: [
      "Financial Services",
      "NBFC Leader",
      "Real-Time Analytics",
    ],
    icon: Shield,
    image: "/Case_Studies/IBSFINtech-Client-Credit-Saison-India.png",
    date: "August 28, 2024"
  },
  {
    title: "End-to-End Digitization Journey",
    company: "Polycab",
    summary:
      "India's Cable & Wire Manufacturing Leader achieves seamless automation of Treasury & Trade Finance for $500M+ operations.",
    highlights: [
      "Cable & Wire Manufacturing",
      "$500M+ Operations",
      "Trade Finance",
    ],
    icon: Users,
    image: "/Case_Studies/IBSFINtech-Client-Polycab.png",
    date: "July 1, 2022"
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Discover how industry leaders transformed their financial operations with our solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                className="h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="1rem"
              >
                <div className="bg-white h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-36 bg-white p-2">
                    <div className="absolute inset-2 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                        />
                      </div>
                    </div>
                    {/* Logo Badge */}
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 flex items-center gap-2 z-10">
                      <cs.icon className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-800">{cs.company.split(' ')[0]}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {cs.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 flex-grow line-clamp-2">{cs.summary}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cs.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className="inline-block px-2 py-0.5 text-[10px] font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100 whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{cs.date}</span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group">
                        Read Case Study
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
