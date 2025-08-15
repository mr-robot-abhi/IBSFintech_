'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Award as AwardIcon, Users, Building } from 'lucide-react';
import { getAwardBySlug, getAllAwards } from '../data';

// Generate static params for all award slugs
export async function generateStaticParams() {
  const awards = getAllAwards();
  return awards.map((award) => ({
    slug: award.slug,
  }));
}

export default function AwardDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the award by slug
  const award = getAwardBySlug(slug);
  
  if (!award) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Award Not Found</h1>
          <p className="text-gray-600 mb-6">The award you're looking for doesn't exist.</p>
          <Link 
            href="/awards"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Awards
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/awards"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Awards
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <AwardIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{award.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {award.year}
                </span>
                {award.event && (
                  <span className="flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {award.event}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {award.description && (
            <p className="text-lg text-gray-700 max-w-4xl">{award.description}</p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {award.imageUrl && (
            <div className="relative h-64 w-full">
              <Image
                src={award.imageUrl}
                alt={award.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <div className="space-y-6 text-gray-700">
              {award.readMoreContent?.map((item, index) => {
                switch (item.type) {
                  case 'heading':
                    return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{item.text}</h2>;
                  case 'text':
                    return <p key={index} className="leading-relaxed text-base">{item.text}</p>;
                  case 'quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-blue-200 pl-6 py-4 my-6 bg-blue-50 rounded-r-lg">
                        <p className="text-gray-800 text-lg italic">"{item.text}"</p>
                        {item.author && (
                          <footer className="mt-3 text-sm text-gray-600 font-medium">— {item.author}</footer>
                        )}
                      </blockquote>
                    );
                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="text-base">{listItem}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to transform your treasury operations?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Join the ranks of global enterprises that trust our award-winning solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            >
              Contact Us
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/awards"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white border border-white hover:bg-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            >
              View All Awards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
