import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <div className="max-w-3xl">
          <p className="text-xl text-gray-300 mb-8">
            Insights, news, and updates about treasury management, financial technology, and industry trends.
          </p>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <p className="text-gray-300">
              Our blog is coming soon. Check back later for the latest articles, insights, and resources to help you navigate the world of treasury and financial management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
