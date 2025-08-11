"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

// Filter to only show the 4 case studies that are displayed on the homepage
const homepageCaseStudies = caseStudies.filter(cs => 
  ['dabur-fmcg-automation', 'hindustan-zinc-automation', 'credit-saison-nbfc', 'polycab-cable-wire'].includes(cs.slug)
);

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
          {homepageCaseStudies.map((cs, index) => (
            <Link href={`/resources/success-stories/${cs.slug}`} key={index}>
              <motion.div
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
                  <h3 className="text-black font-bold text-sm mb-2 line-clamp-1 leading-tight">
                    {cs.title}
                  </h3>
                  
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
            </Link>
          ))}
          
          {/* 5th Tile - View All Button */}
          <Link href="/resources/success-stories">
            <motion.div
              key="view-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="h-96 rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src="/Currencies-Banner.png"
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-white/0"></div>
              </div>
              
              <div className="relative h-full flex flex-col">
                {/* Content area - empty space for visual background */}
                <div className="flex-1"></div>
                
                {/* Frosted glass bottom section */}
                <div className="mt-auto backdrop-blur-sm bg-white/30 p-3 rounded-b-xl">
                  <h3 className="text-black font-bold text-sm mb-2 line-clamp-1 leading-tight px-1">
                    View All Case Studies
                  </h3>
                  
                  <div className="flex justify-between items-center px-1">
                    <div className="w-24">
                      {/* Empty div for consistent spacing */}
                    </div>
                    
                    <button className="text-black text-xs font-medium flex items-center opacity-90 hover:opacity-100 transition-all group-hover:translate-x-1 bg-white/80 px-2.5 py-1 rounded-full">
                      View all
                      <ArrowRight className="ml-0.5 h-3 w-3 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
