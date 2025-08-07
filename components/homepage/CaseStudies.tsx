"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

interface CaseStudy {
  title: string;
  image: string;
  backgroundImage: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "FMCG Giant's Path to Data-Driven Decisions",
    image: "/Case_Studies/IBSFINtech-Client-Dabur.png",
    backgroundImage: "/bg_12.jpg"
  },
  {
    title: "Cash Management Optimization",
    image: "/Case_Studies/Hindustan-Zinc-Limited.png",
    backgroundImage: "/bg_13.jpeg"
  },
  {
    title: "Streamlined Treasury Operations",
    image: "/Case_Studies/IBSFINtech-Client-Credit-Saison-India.png",
    backgroundImage: "/bg_14.jpeg"
  },
  {
    title: "End-to-End Digitization Journey",
    image: "/Case_Studies/IBSFINtech-Client-Polycab.png",
    backgroundImage: "/bg_15.jpeg"
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
            Case Studies
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Discover how industry leaders transformed their financial operations with our solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {caseStudies.slice(0, 4).map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-48 rounded-xl overflow-hidden shadow-lg group relative"
            >
              <div className="absolute inset-0">
                <Image
                  src={cs.backgroundImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              
              <div className="relative h-full flex flex-col p-4">
                <h3 className="text-white font-semibold text-sm line-clamp-2 mb-2">
                  {cs.title}
                </h3>
                
                <div className="mt-auto flex justify-between items-end">
                  <div className="relative h-5 w-16">
                    <Image
                      src={cs.image}
                      alt=""
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  
                  <button className="text-white text-xs font-medium flex items-center opacity-80 hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* 5th Tile - View All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group cursor-pointer"
          >
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/30 transition-colors">
                <ArrowRight className="h-4 w-4 text-white rotate-45" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                View All
              </h3>
              <p className="text-blue-100 text-xs">
                Case Studies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
