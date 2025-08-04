"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

interface CaseStudy {
  title: string;
  summary: string;
  highlights: string[];
  image: string;
  backgroundImage: string;
  date: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "FMCG Giant's path to data-driven decision",
    summary:
      "Empowering treasury functions with automation for better financial insights and operational efficiency.",
    highlights: [
      "FMCG Industry Leader",
      "Treasury Automation",
      "Data-Driven Decisions",
    ],
    image: "/Case_Studies/IBSFINtech-Client-Dabur.png",
    backgroundImage: "/bg_12.jpg",
    date: "September 10, 2024"
  },
  {
    title: "Cash Management Optimization",
    summary:
      "Optimized cash management processes across multiple business units, significantly improving liquidity and reducing operational costs.",
    highlights: [
      "Cash Management",
      "Liquidity",
      "Cost Reduction",
    ],
    image: "/Case_Studies/Hindustan-Zinc-Limited.png",
    backgroundImage: "/bg_13.jpeg",
    date: "December 5, 2023"
  },
  {
    title: "Streamlined Treasury Operations & Real-Time Insights",
    summary:
      "How a Global Financial Services (NBFC) Leader achieved operational excellence with IBSFintech.",
    highlights: [
      "Financial Services",
      "NBFC Leader",
      "Real-Time Analytics",
    ],
    image: "/Case_Studies/IBSFINtech-Client-Credit-Saison-India.png",
    backgroundImage: "/bg_14.jpeg",
    date: "August 28, 2024"
  },
  {
    title: "End-to-End Digitization Journey",
    summary:
      "India's Cable & Wire Manufacturing Leader achieves seamless automation of Treasury & Trade Finance for $500M+ operations.",
    highlights: [
      "Cable & Wire Manufacturing",
      "$500M+ Operations",
      "Trade Finance",
    ],
    image: "/Case_Studies/IBSFINtech-Client-Polycab.png",
    backgroundImage: "/bg_15.jpeg",
    date: "July 1, 2022"
  },
  {
    title: "Supply Chain Finance Transformation",
    summary:
      "Global automotive leader streamlined supplier payments and optimized working capital with our VNDZY® platform.",
    highlights: [
      "Automotive Industry",
      "Supply Chain Finance",
      "Working Capital",
    ],
    image: "/Case_Studies/Signature-Global.png",
    backgroundImage: "/bg_16.jpg",
    date: "March 15, 2024"
  },
];

export default function CaseStudies() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Discover how industry leaders transformed their financial operations with our solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                className="h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="0.75rem"
              >
                <div className="relative h-full flex flex-col p-4">
                  {/* Full-tile background image */}
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src={cs.backgroundImage}
                      alt="Background"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="relative z-10 text-white">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {cs.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 line-clamp-3">{cs.summary}</p>
                    </div>
                    
                    <div className="mt-auto">
                      {/* Logo at bottom left */}
                      <div className="relative w-24 h-8 mb-2">
                        <Image
                          src={cs.image}
                          alt="Client Logo"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      
                      {/* Bottom bar */}
                      <div className="flex justify-between items-center pt-2 border-t border-white/20">
                        <span className="text-xs text-white/80">{cs.date}</span>
                        <button className="text-white hover:text-blue-200 text-sm font-medium flex items-center group">
                          Read the story
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
