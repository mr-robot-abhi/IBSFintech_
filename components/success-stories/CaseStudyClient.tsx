"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Building, CheckCircle } from "lucide-react";
import { CaseStudy } from "@/lib/caseStudies";

interface CaseStudyClientProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/resources/success-stories" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Success Stories
            </Link>
            
            <div className="flex items-center text-sm text-white/80 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {caseStudy.date}
              <span className="mx-2">•</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {caseStudy.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl">
              {caseStudy.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    About the Company
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {caseStudy.companyInfo}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    The Challenge
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {caseStudy.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    The Solution
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {caseStudy.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    The Results
                  </h2>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Client Info Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Client Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">Industry: {caseStudy.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">Published: {caseStudy.date}</span>
                    </div>
                  </div>
                </div>

                {/* Client Logo */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Client Logo
                  </h3>
                  <div className="relative h-16 w-full">
                    <Image
                      src={caseStudy.image}
                      alt="Client Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">
                    Ready to Transform Your Treasury?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Discover how IBSFINtech can help your organization achieve similar results.
                  </p>
                  <Link href="/request-demo">
                    <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Request Demo
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
