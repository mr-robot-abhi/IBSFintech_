import React from 'react';
import { FileText, Download, Calendar, FileText as FileTextIcon } from 'lucide-react';

export default function WhitepapersPage() {
  const whitepapers = [
    {
      id: 1,
      title: 'AI-Powered Treasury: The Next Frontier in Financial Management',
      description: 'An in-depth analysis of how artificial intelligence is reshaping treasury operations, from predictive cash flow analytics to intelligent fraud detection and automated decision-making.',
      date: 'July 15, 2025',
      category: 'Treasury',
      fileSize: '3.2 MB',
      pages: 28,
      featured: true,
      author: 'Dr. Ananya Sharma',
      authorTitle: 'Chief Innovation Officer',
      preview: 'This whitepaper explores 12 key AI applications in treasury management, with case studies from leading financial institutions that have achieved 30-40% improvement in operational efficiency.'
    },
    {
      id: 2,
      title: 'Integrated Risk Management in the Age of Uncertainty',
      description: 'A comprehensive framework for managing financial risks in an increasingly volatile global market, covering FX, interest rate, commodity, and operational risks.',
      date: 'June 28, 2025',
      category: 'Risk Management',
      fileSize: '3.8 MB',
      pages: 32,
      author: 'Rajiv Malhotra',
      authorTitle: 'Head of Risk Solutions',
      preview: 'Learn how leading corporations are using advanced analytics and scenario planning to mitigate risks and capitalize on market opportunities.'
    },
    {
      id: 3,
      title: 'Blockchain Revolution in Trade Finance',
      description: 'How distributed ledger technology is transforming trade finance operations, reducing processing times by 80% and eliminating paper-based inefficiencies.',
      date: 'May 12, 2025',
      category: 'Blockchain',
      fileSize: '2.9 MB',
      pages: 24,
      author: 'Priya Kapoor',
      authorTitle: 'Blockchain Strategist',
      preview: 'Case studies from 15 global trade finance deployments demonstrating ROI and implementation best practices.'
    },
    {
      id: 4,
      title: 'ESG Integration in Corporate Treasury',
      description: 'A practical guide to incorporating Environmental, Social, and Governance factors into treasury operations and investment decisions.',
      date: 'April 5, 2025',
      category: 'ESG',
      fileSize: '2.7 MB',
      pages: 22,
      author: 'Dr. Sanjay Verma',
      authorTitle: 'ESG & Sustainability Lead',
      preview: 'Learn how leading companies are aligning their treasury strategies with sustainability goals while maintaining financial performance.'
    },
    {
      id: 5,
      title: 'The Future of Digital Payments',
      description: 'Exploring the next generation of payment technologies, including real-time payments, CBDCs, and cross-border payment innovations.',
      date: 'March 22, 2025',
      category: 'Payments',
      fileSize: '3.1 MB',
      pages: 26,
      author: 'Meera Krishnan',
      authorTitle: 'Head of Payments Innovation',
      preview: 'Analysis of 50+ payment innovations and their impact on corporate treasury operations globally.'
    },
    {
      id: 6,
      title: 'Treasury 4.0: The Digital Transformation Playbook',
      description: 'A step-by-step guide to digital transformation in treasury, covering technology selection, change management, and ROI measurement.',
      date: 'February 14, 2025',
      category: 'Digital Transformation',
      fileSize: '3.5 MB',
      pages: 34,
      author: 'Vikram Patel',
      authorTitle: 'Digital Transformation Expert',
      preview: 'Comprehensive framework used by Fortune 500 companies to modernize their treasury operations.'
    }
  ];

  const categories = ['All', 'Treasury', 'Risk Management', 'Blockchain', 'ESG', 'Payments', 'Digital Transformation'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Banner & Tile Images for Resources & Company page/IBSFINtech-Greatest-Strength.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Whitepapers</h1>
              <p className="text-xl text-white max-w-3xl">
                In-depth research and insights on treasury management and financial technology
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Whitepapers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth research and insights on treasury management and financial technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === 'All' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Whitepaper */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Whitepaper</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-blue-50 h-full rounded-lg flex items-center justify-center p-8">
                    <FileTextIcon className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {whitepapers[0].category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{whitepapers[0].date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{whitepapers[0].title}</h3>
                  <p className="text-gray-600 mb-4">{whitepapers[0].description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{whitepapers[0].pages} pages</span>
                    <span className="mx-2">•</span>
                    <span>{whitepapers[0].fileSize}</span>
                  </div>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <Download className="h-4 w-4 mr-2" />
                    Download Whitepaper
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Whitepapers */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Whitepapers</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whitepapers.slice(1).map((paper) => (
              <div key={paper.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {paper.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{paper.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{paper.pages} pages • {paper.fileSize}</span>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-700 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Want more insights?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                Subscribe to our newsletter to receive the latest whitepapers and industry insights directly to your inbox.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
