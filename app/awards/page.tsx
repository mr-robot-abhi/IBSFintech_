'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the Award type
type ContentItem = 
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'quote'; text: string; author: string }
  | { type: 'list'; items: string[] };

type Award = {
  id: number;
  year: number;
  title: string;
  description?: string;
  imageUrl?: string;
  readMoreUrl?: string;
  event?: string;
  url?: string;
  readMoreContent?: ContentItem[];
};

// Awards data organized by year
const awardsByYear: { [key: number]: Award[] } = {
  2023: [
    {
      id: 1,
      year: 2023,
      title: 'The Asset Triple Treasurise Awards 2023',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'The Asset Triple A Treasury, Trade, Sustainable Supply Chain and Risk Management Awards 2021',
      description: 'IBSFINtech featured as technology partner for top clients in various accolades',
      readMoreContent: [
        { type: 'heading', text: 'Polycab – Best Liquidity and Investment Solution' },
        { type: 'text', text: 'India\'s #1 Cable & Wire manufacturer, listed since Apr-19, with $2B+ market cap and $500M+ treasury portfolio' },
        { type: 'text', text: 'Network: 25 manufacturing facilities, exports to 40+ countries, 3,500+ distributors' },
        { type: 'quote', text: '\"It was a challenging task for us to find a tailor-made product under one umbrella to fulfil our organizational needs. Attempted customizing ERP, but it couldn\'t meet our needs. IBSFINtech\'s solution, with everything under one bucket, was the only one that met all requirements.\"', author: 'Sanjeev Chhabra, Chief Treasury Officer' },
        
        { type: 'heading', text: 'Blue Star – Best Hedging and Risk Solution: FX' },
        { type: 'text', text: 'India\'s leading AC/refrigeration company, annual revenue ₹5,400cr (US$720M), network of 32 offices, 5 facilities, 2,800 employees, 3,600 channel partners, 5500+ retail outlets' },
        { type: 'quote', text: '\"Many organizations still struggle with ERP for Treasury management, which often requires a dedicated solution. IBSFINtech helped us automate trade finance with a holistic, standardized product and easy configuration for corporate workflows. The embedded risk policy ensures compliance and transparency.\"', author: 'Kundip Thakker, Head – Treasury' },
        
        { type: 'heading', text: 'JSW International – Best Trade Finance Solution' },
        { type: 'text', text: 'JSW International Tradecorp Pte Ltd (Singapore, founded 2013): trading raw materials like iron ore, coal, coke' },
        { type: 'quote', text: '\"Earlier, separate MIS by various teams; now everything sorted. The product has excellent functional features, caters to almost all trading needs, highly user-friendly, includes double checks for bank charges and provides an audit trail.\"', author: 'Vishal Maheshwari, GM (F&A)' },
        
        { type: 'heading', text: 'Functional Coverage Highlighted:' },
        { type: 'list', items: [
          'Cash management',
          'Liquidity management',
          'Trade and structured finance',
          'Supply chain',
          'Working capital',
          'Hedging of FX, interest rate, commodity exposures',
          'Electronic implementation',
          'Renminbi internationalization'
        ]}
      ]
    },
  ],
  2022: [
    {
      id: 2,
      year: 2022,
      title: 'The Triple Asset A Award 2022',
      imageUrl: '/awards/triple-a-award-2022.jpg',
      readMoreUrl: 'https://ibsfintech.com/awards/'
    },
    {
      id: 3,
      year: 2022,
      title: 'Corporate Treasurer Awards 2022',
      imageUrl: '/awards/corporate-treasurer-2022.jpg'
    },
    {
      id: 4,
      year: 2022,
      title: 'Treasury Management International Awards 2022',
      imageUrl: '/awards/tmi-awards-2022.jpg'
    },
    {
      id: 5,
      year: 2022,
      title: 'Singapore Fintech Festival 2022 – Finalists',
      imageUrl: '/awards/sff-2022.jpg'
    },
    {
      id: 6,
      year: 2022,
      title: 'Adam Smith Awards Asia 2022',
      imageUrl: '/awards/adam-smith-2022.jpg'
    },
  ],
  2021: [
    {
      id: 7,
      year: 2021,
      title: 'Corporate Treasurer Awards 2021',
      imageUrl: '/awards/corporate-treasurer-2021.jpg'
    },
    {
      id: 8,
      year: 2021,
      title: 'Treasury Management International Awards 2021',
      imageUrl: '/awards/tmi-awards-2021.jpg'
    },
    {
      id: 9,
      year: 2021,
      title: 'Adam Smith Awards Asia 2021',
      imageUrl: '/awards/adam-smith-2021.jpg'
    },
    {
      id: 10,
      year: 2021,
      title: 'The Triple Asset A Award 2021',
      imageUrl: '/awards/triple-a-award-2021.jpg'
    },
    {
      id: 11,
      year: 2021,
      title: 'Global Finance FX Award 2021',
      description: 'Featured as the only TMS player in APAC region'
    },
    {
      id: 12,
      year: 2021,
      title: 'Asia meets Tokyo Fintech Program Winner',
      imageUrl: '/awards/tokyo-fintech-2021.jpg'
    },
    {
      id: 13,
      year: 2021,
      title: 'Micro Enterprise of the Year',
      description: 'National Enterprise Leadership Award 2021',
      imageUrl: '/awards/enterprise-leadership-2021.jpg'
    },
  ],
  2020: [
    {
      id: 14,
      year: 2020,
      title: 'Global Finance FX Award 2020',
      imageUrl: '/awards/gf-fx-2020.jpg'
    },
    {
      id: 15,
      year: 2020,
      title: 'Asia meets Tokyo Fintech Program Winner',
      imageUrl: '/awards/tokyo-fintech-2020.jpg'
    },
    {
      id: 16,
      year: 2020,
      title: 'Singapore Fintech Festival 2019',
      imageUrl: '/awards/sff-2019.jpg'
    },
  ],
  2019: [
    {
      id: 17,
      year: 2019,
      title: 'Top 8 TMS Players Globally',
      description: 'Report: 2019 – 2025',
      imageUrl: '/awards/top-8-tms-2019.jpg'
    },
    {
      id: 18,
      year: 2019,
      title: 'Singapore Fintech Festival 2019',
      imageUrl: '/awards/sff-2019.jpg'
    },
    {
      id: 19,
      year: 2019,
      title: 'Adam Smith Asia Awards 2019',
      imageUrl: '/awards/adam-smith-2019.jpg'
    },
    {
      id: 20,
      year: 2019,
      title: 'The Corporate Treasurer Award 2018',
      imageUrl: '/awards/corporate-treasurer-2018.jpg'
    },
  ],
  2018: [
    {
      id: 21,
      year: 2018,
      title: 'Adam Smith Asia Award 2018',
      imageUrl: '/awards/adam-smith-2018.jpg'
    },
    {
      id: 22,
      year: 2018,
      title: 'Next Big Idea Contest 2018',
      imageUrl: '/awards/next-big-idea-2018.jpg'
    },
  ],
  2017: [
    {
      id: 23,
      year: 2017,
      title: 'Adam Smith Asia Awards 2017',
      imageUrl: '/awards/adam-smith-2017.jpg'
    },
    {
      id: 24,
      year: 2017,
      title: 'Vizag Fintech Valley 2017',
      imageUrl: '/awards/vizag-fintech-2017.jpg'
    },
  ],
  2016: [
    {
      id: 25,
      year: 2016,
      title: 'Thomson Reuters Fintech Challenge 2016',
      imageUrl: '/awards/tr-fintech-2016.jpg'
    },
    {
      id: 26,
      year: 2016,
      title: 'National Awards in IT Excellence 2016',
      imageUrl: '/awards/national-it-award-2016.jpg'
    },
  ],
  2015: [
    {
      id: 27,
      year: 2015,
      title: 'Express I.T. Award 2015',
      description: 'Software Product of the Year',
      imageUrl: '/awards/express-it-2015.jpg'
    },
  ],
};

// Additional notable recognitions
const additionalRecognitions = [
  {
    id: 28,
    title: 'Software Provider (APAC region)',
    event: 'Corporate Treasurer Awards 2022',
    url: 'https://ibsfintech.com/'
  },
  {
    id: 29,
    title: 'Best Investment Strategy',
    event: 'Treasury Management International (TMI) Awards 2021',
    description: 'India Grid Trust with IBSFINtech',
    url: 'https://ibsfintech.com/'
  },
  {
    id: 30,
    title: 'Asia meets Tokyo Fintech Program',
    description: 'Winner recognized by Tokyo Metropolitan Government',
    url: 'https://ibsfintech.com/'
  },
];



export default function AwardsPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const years = Object.keys(awardsByYear).map(Number).sort((a, b) => b - a);
  const displayYears = ['all', ...years] as const;

  const openModal = (award: Award) => {
    setSelectedAward(award);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle click outside modal content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Get awards to display based on selected year
  const getDisplayAwards = () => {
    if (selectedYear === 'all') {
      return years.flatMap(year => awardsByYear[year]);
    }
    return awardsByYear[selectedYear] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/bg_1.jpg"
          alt="Awards Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              International Awards and Recognitions
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              IBSFINtech has been recognised globally with Awards & Appreciations for the Comprehensive Treasury, risk, trade finance, cashflow & liquidity and supply chain finance solution.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {displayYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedYear === year
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {year === 'all' ? 'All Years' : year}
            </button>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDisplayAwards().map((award: Award) => (
                    <div 
                      key={award.id} 
                      className="group relative p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                            {award.title}
                          </h3>
                          {award.description && (
                            <p className="mt-1 text-xs text-gray-500">{award.description}</p>
                          )}
                          {(award.readMoreUrl || award.readMoreContent) && (
                            <button
                              onClick={() => award.readMoreContent ? openModal(award) : window.open(award.readMoreUrl, '_blank')}
                              className="mt-2 inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                            >
                              {award.readMoreContent ? 'Read more' : 'Learn more'}
                              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
          ))}
        </div>

        {/* Additional Recognitions */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Additional Notable Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalRecognitions.map((recognition) => (
              <div 
                key={recognition.id} 
                className="bg-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-sm font-medium text-gray-900">{recognition.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{recognition.event}</p>
                {recognition.description && (
                  <p className="text-xs text-gray-500 mt-1">{recognition.description}</p>
                )}
                <Link 
                  href={recognition.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Ready to transform your treasury operations?</h2>
          <p className="text-blue-100 text-sm mb-6 max-w-2xl mx-auto">
            Join the ranks of global enterprises that trust our award-winning solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
          >
            Contact Us
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Modal for Award Details */}
        {isModalOpen && selectedAward?.readMoreContent && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedAward.title}</h2>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {selectedAward.event && (
                  <p className="text-lg text-gray-600 mb-6">{selectedAward.event}</p>
                )}
                
                <div className="space-y-4 text-gray-700">
                  {selectedAward.readMoreContent?.map((item, index) => {
                    switch (item.type) {
                      case 'heading':
                        return <h3 key={index} className="text-xl font-semibold mt-6 mb-2 text-gray-900">{item.text}</h3>;
                      case 'text':
                        return <p key={index} className="leading-relaxed">{item.text}</p>;
                      case 'quote':
                        return (
                          <blockquote key={index} className="border-l-4 border-blue-200 pl-4 py-1 my-2 italic">
                            <p className="text-gray-700">"{item.text}"</p>
                            {item.author && (
                              <footer className="mt-2 text-sm text-gray-600">— {item.author}</footer>
                            )}
                          </blockquote>
                        );
                      case 'list':
                        return (
                          <ul key={index} className="list-disc pl-5 space-y-1">
                            {item.items.map((listItem, i) => (
                              <li key={i}>{listItem}</li>
                            ))}
                          </ul>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
