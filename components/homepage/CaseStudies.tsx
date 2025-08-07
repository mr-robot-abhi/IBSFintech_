"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  title: string;
  image: string;
  backgroundImage: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "FMCG Giant's Path to Data-Driven Decisions",
    image: "/Case_Studies/IBSFINtech-Client-Dabur.png",
    backgroundImage: "/Case_Studies/Dabur_CaseStudy.jpg"
  },
  {
    title: "Cash Management Optimization",
    image: "/Case_Studies/Hindustan-Zinc-Limited.png",
    backgroundImage: "/Case_Studies/bg_13.jpeg"
  },
  {
    title: "Streamlined Treasury Operations",
    image: "/Case_Studies/IBSFINtech-Client-Credit-Saison-India.png",
    backgroundImage: "/bg_14.jpeg"
  },
  {
    title: "End-to-End Digitization Journey",
    image: "/Case_Studies/IBSFINtech-Client-Polycab.png",
    backgroundImage: "/Case"
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
              className="h-80 rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
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
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              
              <div className="relative h-full flex flex-col p-6">
                {/* Content area - empty space for visual background */}
                <div className="flex-1"></div>
                
                {/* Title, Logo and Read more at the bottom */}
                <div className="mt-auto">
                  <h3 className="text-white font-semibold text-lg line-clamp-2 mb-4">
                    {cs.title}
                  </h3>
                  
                  <div className="flex justify-between items-end">
                    <div className="relative h-8 w-20">
                      <Image
                        src={cs.image}
                        alt=""
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    
                    <button className="text-white text-sm font-medium flex items-center opacity-80 hover:opacity-100 transition-opacity group-hover:translate-x-1">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* 5th Tile - View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="h-80 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 flex items-center justify-center group cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <ArrowRight className="h-6 w-6 text-white rotate-45" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                View All
              </h3>
              <p className="text-blue-100 text-sm">
                Case Studies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
