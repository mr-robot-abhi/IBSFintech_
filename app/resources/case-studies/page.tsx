import React from 'react';
import { Briefcase, Building2, BarChart2, ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Transforming Treasury Operations for a Global Bank',
      excerpt: 'How we helped a leading global bank streamline their treasury operations and reduce costs by 30%.',
      industry: 'Banking & Financial Services',
      results: [
        '30% reduction in operational costs',
        '50% faster transaction processing',
        'Real-time visibility into cash positions'
      ],
      image: '/images/case-studies/banking.jpg',
      logo: '/images/logos/bank-logo.svg',
      featured: true
    },
    {
      id: 2,
      title: 'Risk Management Solution for Manufacturing Giant',
      excerpt: 'Implementing a comprehensive risk management framework for a Fortune 500 manufacturer.',
      industry: 'Manufacturing',
      results: [
        '40% improvement in risk assessment',
        'Centralized risk monitoring',
        'Automated compliance reporting'
      ],
      image: '/images/case-studies/manufacturing.jpg',
      logo: '/images/logos/manufacturer-logo.svg'
    },
    {
      id: 3,
      title: 'Digital Transformation in Retail Banking',
      excerpt: 'Enhancing customer experience through digital treasury solutions for a retail banking leader.',
      industry: 'Retail Banking',
      results: [
        '45% increase in digital transactions',
        'Improved customer satisfaction',
        'Reduced manual processes'
      ],
      image: '/images/case-studies/retail-banking.jpg',
      logo: '/images/logos/retail-bank-logo.svg'
    },
    {
      id: 4,
      title: 'Supply Chain Finance for Global Trade',
      excerpt: 'Revolutionizing trade finance operations for a multinational corporation.',
      industry: 'International Trade',
      results: [
        '60% faster invoice processing',
        'Improved working capital',
        'Enhanced supplier relationships'
      ],
      image: '/images/case-studies/trade-finance.jpg',
      logo: '/images/logos/trade-logo.svg'
    },
    {
      id: 5,
      title: 'Treasury Automation for Healthcare',
      excerpt: 'Automating treasury operations for a leading healthcare provider network.',
      industry: 'Healthcare',
      results: [
        '70% reduction in manual work',
        'Improved cash visibility',
        'Enhanced compliance'
      ],
      image: '/images/case-studies/healthcare.jpg',
      logo: '/images/logos/healthcare-logo.svg'
    },
    {
      id: 6,
      title: 'FX Risk Management for Tech Startups',
      excerpt: 'Helping high-growth tech companies manage currency risk in global markets.',
      industry: 'Technology',
      results: [
        '35% reduction in FX exposure',
        'Automated hedging strategies',
        'Real-time risk monitoring'
      ],
      image: '/images/case-studies/tech.jpg',
      logo: '/images/logos/tech-logo.svg'
    }
  ];

  const industries = [
    'All Industries',
    'Banking & Financial Services',
    'Manufacturing',
    'Retail Banking',
    'International Trade',
    'Healthcare',
    'Technology'
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we've helped businesses transform their treasury and financial operations
          </p>
        </div>

        {/* Industry Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Filter by Industry</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Case Study</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <div className="h-full bg-gray-200 flex items-center justify-center p-12">
                  <Briefcase className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                  {caseStudies[0].industry}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {caseStudies[0].title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {caseStudies[0].excerpt}
                </p>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-2">
                    {caseStudies[0].results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <a
                    href={`/resources/case-studies/${caseStudies[0].id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read full case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Case Studies */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(1).map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Building2 className="h-12 w-12 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {caseStudy.excerpt}
                  </p>
                  <div className="mt-4">
                    <ul className="space-y-1.5">
                      {caseStudy.results.slice(0, 2).map((result, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <svg className="h-4 w-4 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="line-clamp-1">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href={`/resources/case-studies/${caseStudy.id}`}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      Read case study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-900 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to transform your treasury operations?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                Contact us today to learn how our solutions can help your business.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Contact Sales
              </a>
              <a
                href="/demo"
                className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
