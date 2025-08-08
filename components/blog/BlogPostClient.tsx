"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, BookOpen } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-2 text-[#241F5D] hover:text-[#1a1550] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="mb-6">
              <span className="inline-block bg-[#241F5D] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured Article
              </span>
            </div>
          )}

          {/* Category */}
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-[#241F5D] px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-2 mb-8">
            <button className="inline-flex items-center gap-2 text-[#241F5D] hover:text-[#1a1550] transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share this article</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img
              src={post.backgroundImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#241F5D] rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">Treasury & Financial Technology Expert</p>
              </div>
            </div>
            <p className="text-gray-700">
              {post.author} is a seasoned professional with extensive experience in treasury management, 
              financial technology, and digital transformation. With deep insights into industry trends 
              and best practices, they provide valuable perspectives on the evolving landscape of 
              corporate finance and treasury operations.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#241F5D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Explore More Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover more articles, case studies, and resources to enhance your treasury operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-2 bg-white text-[#241F5D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Blog Posts
            </Link>
            <Link
              href="/resources/success-stories"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#241F5D] transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/resources/news"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#241F5D] transition-colors"
            >
              Latest News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
