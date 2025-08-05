import React from 'react';
import { Briefcase, Building2, BarChart2, ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Transforming Treasury for a Top 5 Indian Bank',
      excerpt: 'How we helped a leading Indian public sector bank modernize their treasury operations, achieving 30% cost reduction and 50% faster transaction processing.',
      industry: 'Banking & Financial Services',
      results: [
        '30% reduction in operational costs through process automation',
        '50% faster transaction processing with real-time settlement',
        'Unified view of ₹2.5T+ in assets across 8,000+ branches',
        '99.99% system uptime with robust disaster recovery',
        'Seamless integration with 25+ core banking systems'
      ],
      challenge: 'The bank faced challenges with manual processes, fragmented systems, and lack of real-time visibility across its extensive branch network, leading to operational inefficiencies and compliance risks.',
      solution: 'Implemented our comprehensive Treasury Management System (TMS) with AI-powered cash forecasting, automated reconciliation, and real-time risk analytics.',
      image: '/images/case-studies/banking.jpg',
      logo: '/images/logos/bank-logo.svg',
      featured: true,
      client: 'Confidential (Top 5 Indian Public Sector Bank)',
      duration: '6 months',
      team: '12-member dedicated team'
    },
    {
      id: 2,
      title: 'Risk Management for a Global Auto Manufacturer',
      excerpt: 'Deployed an enterprise-wide risk management solution for a Fortune 500 manufacturer with operations in 40+ countries.',
      industry: 'Manufacturing',
      results: [
        '40% improvement in risk assessment accuracy',
        'Unified risk monitoring across 200+ legal entities',
        'Automated 85% of compliance reporting',
        'Reduced risk exposure by $150M annually',
        'Real-time FX and commodity risk dashboards'
      ],
      challenge: 'The client struggled with fragmented risk data, manual reporting processes, and lacked a consolidated view of global exposures.',
      solution: 'Implemented an integrated risk management platform with automated data aggregation, scenario analysis, and real-time monitoring capabilities.',
      image: '/images/case-studies/manufacturing.jpg',
      logo: '/images/logos/manufacturer-logo.svg',
      client: 'Confidential (Global Automotive Leader)',
      duration: '9 months',
      team: 'Cross-functional team of 15'
    },
    {
      id: 3,
      title: 'Digital Treasury for a Leading Private Bank',
      excerpt: 'Transformed digital treasury operations for a top private bank, enhancing customer experience and operational efficiency.',
      industry: 'Retail Banking',
      results: [
        '45% increase in digital transaction volume',
        '30% improvement in customer satisfaction scores',
        '60% reduction in manual reconciliation',
        '24/7 self-service capabilities for clients',
        'Seamless integration with UPI and IMPS'
      ],
      challenge: 'The bank needed to modernize its legacy systems to meet growing customer expectations for digital banking services while maintaining security and compliance.',
      solution: 'Deployed a next-gen digital treasury platform with mobile-first design, AI-driven insights, and open banking APIs.',
      image: '/images/case-studies/retail-banking.jpg',
      logo: '/images/logos/retail-bank-logo.svg',
      client: 'Confidential (Top Indian Private Bank)',
      duration: '5 months',
      team: '10-member implementation team'
    },
    {
      id: 4,
      title: 'Supply Chain Finance for a Global Conglomerate',
      excerpt: 'Revolutionized trade finance for a diversified conglomerate with complex supply chain financing needs.',
      industry: 'International Trade',
      results: [
        '60% faster invoice processing (from 15 to 6 days)',
        '$200M+ in improved working capital',
        '85% supplier onboarding rate',
        'End-to-end digital documentation',
        'Real-time tracking of $1B+ in annual trade volume'
      ],
      challenge: 'The client faced challenges with paper-based processes, delayed payments, and limited visibility into their supply chain financing.',
      solution: 'Implemented a blockchain-based supply chain finance platform with smart contracts and automated workflows.',
      image: '/images/case-studies/trade-finance.jpg',
      logo: '/images/logos/trade-logo.svg',
      client: 'Confidential (Diversified Indian Conglomerate)',
      duration: '7 months',
      team: '8-member core team'
    },
    {
      id: 5,
      title: 'Treasury Automation for a Healthcare Network',
      excerpt: 'Automated treasury operations for a leading healthcare provider with 50+ hospitals across India.',
      industry: 'Healthcare',
      results: [
        '70% reduction in manual work',
        'Real-time cash visibility across all locations',
        '100% compliance with healthcare financial regulations',
        'Automated vendor payments and payroll processing',
        'Integrated insurance claim processing'
      ],
      challenge: 'The healthcare provider needed to streamline its financial operations while ensuring compliance with strict healthcare regulations.',
      solution: 'Deployed a customized treasury management solution with automated workflows and regulatory compliance features.',
      image: '/images/case-studies/healthcare.jpg',
      logo: '/images/logos/healthcare-logo.svg',
      client: 'Confidential (Leading Healthcare Provider)',
      duration: '4 months',
      team: '6-member implementation team'
    },
    {
      id: 6,
      title: 'FX Risk Management for a Tech Unicorn',
      excerpt: 'Helped a high-growth SaaS company manage currency risk across 30+ countries.',
      industry: 'Technology',
      results: [
        '35% reduction in FX exposure',
        'Automated 90% of hedging operations',
        'Real-time risk monitoring across 15 currencies',
        'Integrated with existing ERP and accounting systems',
        'Monthly savings of $50K+ in currency losses'
      ],
      challenge: 'The company was experiencing significant currency fluctuations impacting their international revenue and needed a robust FX risk management solution.',
      solution: 'Implemented an AI-powered FX risk management system with automated hedging strategies and real-time exposure tracking.',
      image: '/images/case-studies/tech.jpg',
      logo: '/images/logos/tech-logo.svg',
      client: 'Confidential (SaaS Unicorn)',
      duration: '3 months',
      team: '5-member specialist team'
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
