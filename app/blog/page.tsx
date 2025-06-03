'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, Clock, ArrowRight, Search } from 'lucide-react';

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const featuredPosts = [
    {
      title: "How Company X Improved Efficiency by 40%",
      excerpt: "Learn how one of India's largest manufacturing companies transformed their treasury operations.",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 15, 2025",
      readTime: "8 min read",
      category: "Case Study"
    },
    {
      title: "5 Treasury Trends to Watch in 2025",
      excerpt: "Discover the emerging trends shaping the future of treasury management and how to stay ahead.",
      image: "https://images.pexels.com/photos/6801868/pexels-photo-6801868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 10, 2025",
      readTime: "5 min read",
      category: "Trends"
    },
    {
      title: "Optimizing Working Capital During Economic Uncertainty",
      excerpt: "Strategies for maintaining liquidity and financial flexibility in challenging times.",
      image: "https://images.pexels.com/photos/6801867/pexels-photo-6801867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 5, 2025",
      readTime: "7 min read",
      category: "Strategy"
    }
  ];

  const recentPosts = [
    {
      title: "The Future of AI in Treasury Management",
      excerpt: "Exploring how artificial intelligence is revolutionizing financial operations.",
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 2, 2025",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      title: "Navigating Regulatory Changes in International Banking",
      excerpt: "A comprehensive guide to recent regulatory developments affecting treasury operations.",
      image: "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 28, 2025",
      readTime: "10 min read",
      category: "Compliance"
    },
    {
      title: "ESG Considerations in Treasury Management",
      excerpt: "How environmental, social, and governance factors are influencing treasury strategies.",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 23, 2025",
      readTime: "7 min read",
      category: "Strategy"
    },
    {
      title: "Cybersecurity Best Practices for Treasury Teams",
      excerpt: "Essential security measures to protect your financial operations from emerging threats.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 18, 2025",
      readTime: "9 min read",
      category: "Security"
    },
    {
      title: "The Role of Treasury in Business Continuity Planning",
      excerpt: "How treasury departments can contribute to organizational resilience and recovery.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Strategy"
    },
    {
      title: "Implementing Real-Time Treasury: Challenges and Solutions",
      excerpt: "Practical insights for moving from batch processing to real-time treasury operations.",
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Technology"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Treasury Insights</h1>
            <p className="text-xl text-blue-100 mb-8 text-center">
              Expert analysis, case studies, and thought leadership on treasury management
            </p>
            
            <div className="relative">
              <div className="flex">
                <Input 
                  placeholder="Search articles..." 
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                />
                <Button className="rounded-l-none bg-white text-blue-700 hover:bg-blue-50">
                  <Search size={20} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-800">Featured Stories</h2>
            <Button variant="ghost" className="text-blue-600">
              View All <ArrowRight size={16} className="ml-1" />
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      fill
                      alt={post.title}
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                      <Link href="#">{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays size={14} className="mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Articles</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {recentPosts.map((post, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      fill
                      alt={post.title}
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="text-lg font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                      <Link href="#">{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarDays size={12} className="mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock size={12} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800 text-sm">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="text-blue-600">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest treasury insights, case studies, and industry news
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="rounded-md sm:rounded-r-none"
              />
              <Button className="sm:rounded-l-none bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}