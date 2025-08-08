"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Building, Tag, Share2 } from "lucide-react";
import { NewsArticle } from "@/lib/news";

interface NewsArticleClientProps {
  article: NewsArticle;
}

export default function NewsArticleClient({ article }: NewsArticleClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#241F5D] to-[#3B3486]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/resources/news" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
            
            <div className="flex items-center text-sm text-white/80 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {article.date}
              <span className="mx-2">•</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {article.category}
              </span>
              {article.featured && (
                <>
                  <span className="mx-2">•</span>
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs">
                    Featured
                  </span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl">
              {article.excerpt}
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
                  <div 
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
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
                {/* Article Info Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Article Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-[#241F5D] mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">Author: {article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-[#241F5D] mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">Published: {article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-[#241F5D] mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">Category: {article.category}</span>
                    </div>
                  </div>
                </div>

                {/* Tags Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Share This Article
                  </h3>
                  <div className="flex space-x-3">
                    <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1A8CD8] transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 bg-[#0077B5] text-white rounded-full hover:bg-[#006097] transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-r from-[#241F5D] to-[#3B3486] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-white/90 mb-6">
                    Get the latest news and insights from IBSFINtech delivered to your inbox.
                  </p>
                  <Link href="/request-demo">
                    <button className="w-full bg-white text-[#241F5D] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
