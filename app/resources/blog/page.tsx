'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog';



const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
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
              IBSFINtech Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Insights, analysis, and thought leadership on treasury management, financial technology, and industry trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/resources/blog/${post.slug}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-[#241F5D] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex justify-center items-center space-x-4"
            >
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-[#241F5D] hover:text-[#3B3486] hover:bg-[#241F5D]/10"
                }`}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-[#241F5D] text-white"
                        : "text-gray-600 hover:text-[#241F5D] hover:bg-[#241F5D]/10"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-[#241F5D] hover:text-[#3B3486] hover:bg-[#241F5D]/10"
                }`}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
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
              Stay Updated with IBSFINtech
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest insights on treasury management, financial technology, and industry trends delivered to your inbox.
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
};

export default BlogPage;
