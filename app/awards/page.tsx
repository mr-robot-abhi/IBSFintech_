import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Update metadata for the page
export const metadata: Metadata = {
  title: 'Awards & Recognitions | IBSFINtech',
  description: 'Recognized globally for excellence in Treasury, Risk and Trade Finance Management Solutions.',
};

// Define the Award type
type Award = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  readMoreUrl: string;
};

// Sample awards data - you can expand this with more awards
const awards: Award[] = [
  {
    id: 1,
    title: 'The Asset Triple Treasurise Awards 2023',
    description: 'Recognized for excellence in Treasury and Risk Management Solutions.',
    imageUrl: 'https://ibsfintech.com/wp-content/uploads/2020/07/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
    readMoreUrl: 'https://ibsfintech.com/awards/the-asset-triple-a-treasury-trade-sustainable-supply-chain-and-risk-management-awards-2021/'
  },
  {
    id: 2,
    title: 'The Triple Asset A Award 2022',
    description: 'Awarded for outstanding contributions to the treasury and finance industry.',
    imageUrl: 'https://ibsfintech.com/wp-content/uploads/2020/07/TripleA-AwardsPg.png',
    readMoreUrl: 'https://ibsfintech.com/awards/the-asset-triple-a-treasury-trade-sustainable-supply-chain-and-risk-management-awards-2021/'
  },
  // Add more awards as needed
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Awards & Recognitions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Recognized globally for our excellence in Treasury, Risk and Trade Finance Management Solutions.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div key={award.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src={award.imageUrl}
                  alt={award.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-4">{award.description}</p>
                <Link 
                  href={award.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to transform your treasury operations?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join the ranks of global enterprises that trust our solutions.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
