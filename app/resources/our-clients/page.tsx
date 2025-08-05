import React from 'react';

export default function OurClientsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Clients</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-6">
            We are proud to serve a diverse range of clients across various industries. 
            Our solutions are trusted by leading organizations worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32">
                <span className="text-gray-400 font-medium">Client Logo {item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Success Stories</h2>
            <p className="text-gray-600">
              We'll be sharing detailed case studies of how our solutions have helped our clients achieve their business goals.
              Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
