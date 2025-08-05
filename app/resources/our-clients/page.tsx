import React from 'react';
import { Building2, Globe, Briefcase, BarChart, CheckCircle } from 'lucide-react';

const industries = [
  { name: 'Banking', count: '50+', description: 'Leading banks and financial institutions' },
  { name: 'Manufacturing', count: '30+', description: 'Global manufacturing leaders' },
  { name: 'Retail', count: '40+', description: 'Top retail chains and e-commerce platforms' },
  { name: 'Healthcare', count: '25+', description: 'Healthcare providers and pharma companies' },
  { name: 'Technology', count: '35+', description: 'Tech enterprises and startups' },
  { name: 'Energy', count: '20+', description: 'Energy and utility companies' },
];

const clientTestimonials = [
  {
    quote: "IBSFINtech's treasury solution transformed our cash management process, reducing reconciliation time by 70%.",
    author: "CFO, Leading Indian Bank",
    role: "Chief Financial Officer"
  },
  {
    quote: "The implementation was seamless and the support team has been exceptional in addressing our needs.",
    author: "Treasury Head, Global Manufacturing Firm",
    role: "Head of Treasury"
  },
  {
    quote: "Their AI-powered forecasting has given us unprecedented visibility into our cash flows.",
    author: "Finance Director, Retail Conglomerate",
    role: "Finance Director"
  }
];

export default function OurClientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Valued Clients</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by 200+ organizations across 30+ countries, powering their financial transformation
            </p>
          </div>
        </div>
      </div>

      {/* Client Logos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Esteemed Clients</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are proud to serve a diverse portfolio of clients across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600">Client {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
                </div>
                <p className="text-gray-600 pl-10">{industry.description}</p>
                <div className="mt-4 pl-10 text-sm text-blue-600 font-medium">{industry.count} Clients</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Become Our Next Success Story</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Join the growing list of organizations that trust IBSFINtech for their treasury management needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                Request a Demo
              </a>
              <a
                href="/contact/sales"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
