"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  backgroundImage: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Dabur",
    description: "FMCG Giant's path to data-driven decision: empowering treasury functions with automation.",
    image: "/Case_Studies/IBSFINtech-Client-Dabur.png",
    backgroundImage: "/Case_Studies/Dabur_CaseStudy.jpg"
  },
  {
    title: "Hindustan Zinc",
    description: "How End-to-End Automation Revolutionized Treasury Management for a Global Zinc & Silver Industry Leader.",
    image: "/Case_Studies/IBSFINtech-Client-Hindustan-Zinc.png",
    backgroundImage: "/Case_Studies/Hindustan-Zinc-1.jpg"
  },
  {
    title: "Credit Saison",
    description: "How a Global Financial services (NBFC) Leader Streamlined Treasury Operations and Achieved Real-Time Insights.",
    image: "/Case_Studies/IBSFINtech-Client-Credit-Saison-India.png",
    backgroundImage: "/Case_Studies/credit_saison.jpg"
  },
  {
    title: "Polycab",
    description: "Leader of India's cable & wire manufacturing industry boards the ship towards end-to-end digitization with IBSFINtech to enable seamless automation of their Treasury & Trade Finance Functions to manage USD 500+ million.",
    image: "/Case_Studies/IBSFINtech-Client-Polycab.png",
    backgroundImage: "/Case_Studies/wires-cables.jpg"
  }
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
            Success Stories
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
          Explore why more than 480 leading entites transformed their treasury operations with IBSFINtech’s agile Treasury Management System.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-96 rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={cs.backgroundImage}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-white/0"></div>
              </div>
              
              <div className="relative h-full flex flex-col">
                {/* Content area - empty space for visual background */}
                <div className="flex-1"></div>
                
                {/* Frosted glass bottom section */}
                <div className="mt-auto backdrop-blur-sm bg-white/30 p-4 rounded-b-xl">
                  <h3 className="text-black font-bold text-base mb-1">
                    {cs.title}
                  </h3>
                  {cs.description && (
                    <p className="text-black/90 text-xs mb-2 line-clamp-3 leading-snug">
                      {cs.description}
                    </p>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className={`relative h-8 w-24 ${cs.title.includes('Polycab') ? 'ml-1' : ''}`}>
                      <Image
                        src={cs.image}
                        alt=""
                        fill
                        className={`object-contain ${cs.title.includes('Polycab') ? 'object-right' : 'object-left'}`}
                      />
                    </div>
                    
                    <button className="text-black text-xs font-medium flex items-center opacity-90 hover:opacity-100 transition-all group-hover:translate-x-1 bg-white/80 px-2.5 py-1 rounded-full">
                      Read more
                      <ArrowRight className="ml-0.5 h-3 w-3 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* 5th Tile - View All Button */}
          <motion.div
            key="view-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="h-96 rounded-xl overflow-hidden shadow-lg group relative cursor-pointer bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col">
              {/* Empty space to push content to bottom */}
              <div className="flex-1"></div>
              
              {/* Frosted glass bottom section */}
              <div className="mt-auto backdrop-blur-sm bg-white/30 p-4 rounded-b-xl">
                <h3 className="text-white font-bold text-base mb-1">
                  View All Case Studies
                </h3>
                <p className="text-white/90 text-xs mb-2 line-clamp-2 leading-snug">
                  Explore our complete collection of success stories and client transformations.
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="relative h-8 w-24 opacity-80">
                    <Image
                      src="/Case_Studies/IBSFINtech-Logo-White.png"
                      alt="IBSFINtech Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  
                  <button className="text-white text-xs font-medium flex items-center opacity-90 hover:opacity-100 transition-all group-hover:translate-x-1 bg-white/20 px-2.5 py-1 rounded-full">
                    View all
                    <ArrowRight className="ml-0.5 h-3 w-3 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
