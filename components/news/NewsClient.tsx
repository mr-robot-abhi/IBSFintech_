"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag, ChevronDown } from "lucide-react";
import { NewsArticle } from "@/lib/news";
import { useState } from "react";

interface NewsClientProps {
  newsArticles: NewsArticle[];
}

export default function NewsClient({ newsArticles }: NewsClientProps) {
  const [displayedCount, setDisplayedCount] = useState(6);
  const itemsPerPage = 6;
  const totalArticles = newsArticles.length;
  
  const currentArticles = newsArticles.slice(0, displayedCount);
  const hasMoreArticles = displayedCount < totalArticles;

  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + itemsPerPage, totalArticles));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#241F5D] to-[#3B3486]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest developments, partnerships, and innovations from IBSFINtech
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/resources/news/${article.slug}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.backgroundImage}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#241F5D] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                      {article.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-2" />
                        {article.author}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-[#241F5D] transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-[#241F5D] font-medium group-hover:text-[#3B3486] transition-colors">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreArticles && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={loadMore}
                className="flex items-center px-8 py-3 bg-[#241F5D] text-white rounded-lg font-semibold hover:bg-[#3B3486] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Load More
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#241F5D] to-[#3B3486]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Connected with IBSFINtech
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest updates on treasury technology, industry insights, and company news delivered to your inbox.
            </p>
            <Link href="/request-demo">
              <button className="bg-white text-[#241F5D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Request Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
