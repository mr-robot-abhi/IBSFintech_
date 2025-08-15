'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { awardsByYear, getAllAwards } from './data';

export default function AwardsPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  
  const allAwards = getAllAwards();
  const years = Object.keys(awardsByYear).map(Number).sort((a, b) => b - a);
  
  const filteredAwards = selectedYear === 'all' 
    ? allAwards 
    : awardsByYear[selectedYear] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url(/Banner%20&%20Tile%20Images%20for%20Resources%20&%20Company%20page/IBSFINtech-Awards-Recognitions.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full px-8 sm:px-12 lg:px-16">
            <div className="max-w-2xl text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Awards & Recognition
              </h1>
              <p className="text-xl text-white max-w-2xl">
                IBSFINtech has been recognised globally with Awards & Appreciations for the Comprehensive Treasury, risk, trade finance, cashflow & liquidity and supply chain finance solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedYear === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Years ({allAwards.length})
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year} ({awardsByYear[year].length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAwards.map((award) => (
            <div key={award.id} className="group relative p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200 bg-white">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#241F5D] flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-700 line-clamp-2">
                    {award.title}
                  </h3>
                  {award.description && (
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">{award.description}</p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-bold text-blue-600">{award.year}</span>
                    {award.event && (
                      <span className="text-xs text-gray-500 max-w-[80px] truncate">
                        {award.event}
                      </span>
                    )}
                  </div>
                  {(award.readMoreUrl || award.readMoreContent) && (
                    <Link
                      href={award.readMoreContent ? `/awards/${award.slug}` : award.readMoreUrl || '#'}
                      target={award.readMoreContent ? '_self' : '_blank'}
                      className="mt-2 inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                    >
                      {award.readMoreContent ? 'Read more' : 'Learn more'}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredAwards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No awards found for the selected year.</p>
          </div>
        )}
      </div>
    </div>
  );
}
