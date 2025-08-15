'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const PRIMARY_COLOR = '#241F5D';

interface CaseStudy {
  id: number;
  client: string;
  title: string;
  excerpt: string;
  industry: string;
  challenges: string[];
  benefits: string[];
  logo: string;
  featured?: boolean;
}

export default function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: 'Vedanta Group',
      title: 'Automated Treasury Operations for Global Natural Resources Leader',
      excerpt: 'A $17.69B global natural resources conglomerate automated treasury operations using IBSFINtech, ensuring transparency, efficiency, and real-time data for decision-making.',
      industry: 'Natural Resources',
      challenges: [
        'Manual, spreadsheet-based processes',
        'Lack of real-time visibility across entities',
        'Time-consuming data consolidation',
        'High operational risk and errors'
      ],
      benefits: [
        'Automated accounting in multiple SAP ERPs',
        'Real-time cash & FX visibility',
        'Enhanced decision-making with dashboards',
        'Increased transparency & cost savings',
        'Integrated with 8+ SAP boxes and 20+ banks'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Vedanta.png',
      featured: true
    },
    {
      id: 2,
      client: 'Lagata',
      title: 'Streamlined Global Cash Visibility for Investment Firm',
      excerpt: 'A multinational investment firm with operations across three continents streamlined global cash visibility and improved fund utilization through IBSFINtech.',
      industry: 'Investment Management',
      challenges: [
        'Difficulty obtaining real-time cash positions',
        'Managing 350+ bank accounts across continents',
        'Complex transaction consolidation & categorization'
      ],
      benefits: [
        'Real-time visibility for 350 accounts',
        'Improved cash flow management & decision-making',
        'Interactive dashboards for unified view',
        'Automated categorization & operational efficiency'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Lagata.png'
    },
    {
      id: 3,
      client: 'Dabur India Limited',
      title: 'Digitized Treasury for India\'s Top FMCG Company',
      excerpt: 'India\'s top FMCG giant digitized treasury operations, improving investment decisions and compliance using IBSFINtech.',
      industry: 'FMCG',
      challenges: [
        'Manual processes for accounting & investment monitoring',
        'Time-intensive MIS preparation and risk tracking',
        'Policy compliance monitoring'
      ],
      benefits: [
        '360° data visibility and better returns',
        'Auto accounting integrated with Oracle ERP',
        'Faster reporting & reduced manual tasks',
        'Standardized workflows and compliance monitoring',
        'Won Best Liquidity & Investments Solution (Asset Triple A Awards 2024)'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Dabur.png'
    },
    {
      id: 4,
      client: 'Olam Agri',
      title: 'Automated Treasury for Agri-Commodities Leader',
      excerpt: 'Agri-commodities leader automated front-office treasury operations, integrated real-time FX data, and boosted profitability.',
      industry: 'Agri-Commodities',
      challenges: [
        'Extensive hedging activities requiring live data',
        'Manual integration between platforms'
      ],
      benefits: [
        'Real-time MTM calculation',
        '40% manual effort reduction',
        'Faster MIS & monthly closing (by 3–5 days)',
        '$1M portfolio gain post-implementation',
        'Multiple global awards for treasury automation'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Olam-Agri.png'
    },
    {
      id: 5,
      client: 'Signature Global',
      title: 'Optimized Cash Flow for Real Estate Leader',
      excerpt: 'One of India\'s largest real estate firms optimized cash flow management and improved operational efficiency with IBSFINtech\'s SaaS solution.',
      industry: 'Real Estate',
      challenges: [
        'Limited cash visibility',
        'Managing 350+ bank accounts',
        'Tracking post-dated cheques'
      ],
      benefits: [
        'Real-time visibility & dashboards',
        'Enhanced decision-making',
        'Risk reduction & operational efficiency',
        'Integration with 8 major banks'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Signature-Global.png'
    },
    {
      id: 6,
      client: '360 ONE Wealth',
      title: 'Automated Treasury for Wealth Management Leader',
      excerpt: 'A leading wealth management firm automated treasury processes for accurate cash flow planning and compliance monitoring.',
      industry: 'Wealth Management',
      challenges: [
        'Manual MIS and transaction recording',
        'Lack of timely data for decision-making'
      ],
      benefits: [
        'Unified platform for multi-source data',
        'Automated accounting & reporting',
        'Integrated risk policy compliance',
        'Fully digitized treasury operations'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-360One.png'
    },
    {
      id: 7,
      client: 'Credit Saison',
      title: 'Streamlined Financial Operations for Japanese NBFC',
      excerpt: 'Japanese NBFC streamlined its Indian operations by automating financial processes, cutting reporting time and improving compliance.',
      industry: 'Financial Services',
      challenges: [
        'Manual accounting & provisioning entries',
        'Risk exposure from lack of control',
        'Time-consuming month-end processes'
      ],
      benefits: [
        '50% reduction in reporting timeline',
        'Enhanced operational control & compliance',
        'Faster decision-making with real-time insights',
        'Improved scalability without extra manpower'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Credit-Saison-India.png'
    },
    {
      id: 8,
      client: 'Maruti Suzuki',
      title: 'Automated Treasury for India\'s Top Automaker',
      excerpt: 'India\'s top automaker automated treasury, liquidity, and risk management, contributing directly to the bottom line.',
      industry: 'Automotive',
      challenges: [
        'Manual treasury operations on spreadsheets',
        'Need for digital transformation across finance functions'
      ],
      benefits: [
        'Complete automation of treasury',
        'Improved risk management & ESG inclusion',
        'Cost savings, better investment returns',
        'Real-time dashboards & reporting'
      ],
      logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Maruti-Suzuki.png',
      featured: true
    }
  ];

  const industries = [
    'All Industries',
    'Natural Resources',
    'Investment Management',
    'FMCG',
    'Agri-Commodities',
    'Real Estate',
    'Wealth Management',
    'Financial Services',
    'Automotive'
  ];

  const [selectedIndustry, setSelectedIndustry] = React.useState('All Industries');
  
  const filteredCaseStudies = selectedIndustry === 'All Industries' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);
    
  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Banner & Tile Images for Resources & Company page/IBSFINtech-Valued-Clients.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
              <p className="text-xl text-white max-w-3xl">
                Real-world success stories from organizations that have transformed their treasury operations with IBSFINtech
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world success stories from organizations that have transformed their treasury operations with IBSFINtech
          </p>
        </div>

        {/* Industry Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Filter by Industry</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-[#241F5D] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={study.logo} 
                        alt={`${study.client} logo`} 
                        className="h-12 w-auto object-contain max-w-[180px]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-logo.svg';
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                    <p className="text-gray-600 mb-4">{study.excerpt}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Challenges Addressed:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {study.challenges.slice(0, 3).map((challenge: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <a
                        href={`#case-study-${study.id}`}
                        className="inline-flex items-center text-sm font-medium text-[#241F5D] hover:text-[#1a1552] transition-colors"
                      >
                        Read full case study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Case Studies */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {selectedIndustry === 'All Industries' ? 'All Client Success Stories' : `${selectedIndustry} Clients`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <img
                      src={study.logo}
                      alt={`${study.client} logo`}
                      className="h-10 w-auto object-contain max-w-[160px] mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-logo.svg';
                      }}
                    />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{study.client}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.excerpt}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-3">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Key Benefits</h4>
                      <ul className="space-y-1">
                        {study.benefits.slice(0, 3).map((benefit: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 line-clamp-2">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`#case-study-${study.id}`}
                      className="inline-flex items-center text-sm font-medium text-[#241F5D] hover:text-[#1a1552] transition-colors mt-4 group"
                    >
                      Read full case study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center mb-16 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your treasury operations?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Schedule a personalized demo to see how IBSFINtech can help your organization achieve similar results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-sm"
              style={{ backgroundColor: '#FF2E2E' }}
            >
              Request a Demo
            </a>
            <a
              href="/contact/sales"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md"
              style={{ color: PRIMARY_COLOR, borderColor: PRIMARY_COLOR, backgroundColor: 'white' }}
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
