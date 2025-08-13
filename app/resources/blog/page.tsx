'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, ChevronDown } from 'lucide-react';
import { blogPosts } from '@/lib/blog';
import BlogSidebar from '@/components/blog/BlogSidebar';

const BlogPage = () => {
  const [displayedCount, setDisplayedCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 6;

  // Filter blog posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return blogPosts;
    }
    
    const query = searchQuery.toLowerCase();
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query)) ||
      post.category.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPosts = filteredPosts.length;
  const currentPosts = filteredPosts.slice(0, displayedCount);
  const hasMorePosts = displayedCount < totalPosts;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setDisplayedCount(6); // Reset to first 6 posts when searching
  };

  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + itemsPerPage, totalPosts));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/Internal Page 2.png"
            alt="Blog Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              IBSFINtech Blog
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Insights, analysis, and thought leadership on treasury management, financial technology, and industry trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Search Results Info */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    Search results for "<span className="font-semibold text-[#241F5D]">{searchQuery}</span>": 
                    <span className="ml-2 font-medium">{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found</span>
                  </p>
                  {filteredPosts.length === 0 && (
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      No articles found matching your search. Try different keywords or browse all articles.
                    </p>
                  )}
                </motion.div>
              )}

              {/* Blog Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      No Articles Found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Try adjusting your search terms or browse all our articles below.
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="bg-[#241F5D] text-white px-6 py-3 rounded-lg hover:bg-[#3B3486] transition-colors duration-300 font-medium"
                    >
                      Clear Search
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Load More Button */}
              {hasMorePosts && (
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

            {/* Right Sidebar */}
            <div className="lg:w-80">
              <BlogSidebar onSearch={handleSearch} searchQuery={searchQuery} />
            </div>
          </div>
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
