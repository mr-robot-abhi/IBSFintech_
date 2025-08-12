'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Image and Overlaid Text */}
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src="/Leadership.jpg"
          alt="IBSFINtech Leadership Team"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
        
        {/* Overlaid Text at Bottom of Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-white text-base md:text-lg lg:text-xl leading-relaxed space-y-4 text-center">
              <p className="max-w-5xl mx-auto">
                From envisioning a smarter future for corporate treasury to driving a global wave in TreasuryTech, CM Grover has charted a path of digital transformation that reaches far beyond borders. As Managing Director & CEO, he has brought together every facet of treasury — Cash, Liquidity, Risk, Trade Finance, Commodity, Investment and Supply Chain Finance — into a unified, intelligent system trusted by industries worldwide.
              </p>
              <p className="max-w-5xl mx-auto">
                With decades in public sector banking, he developed a deep understanding of treasury's challenges and turned that knowledge into action, inspiring CFOs, boards, and financial leaders globally to embrace digitization. His leadership carries the conviction that technology built in India can serve the world — and in doing so, he has positioned IBSFINtech on the map as a global player in TreasuryTech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Board of Directors Section */}
      <section className="relative py-20 px-6">
        {/* Theme Color Banner Background */}
        <div className="bg-[#241F5D] rounded-b-3xl py-16 px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Board of Directors</h2>
          </div>
        </div>
        
        {/* White Team Member Cards - Positioned to overlap the theme color banner */}
        <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/director1.jpg"
                  alt="Shailesh Haribhakti"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Shailesh Haribhakti</h3>
              <p className="text-gray-600 mb-4">Chairman</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Leading strategic direction with decades of financial expertise and industry leadership.
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/company/leadership#shailesh-haribhakti" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#shailesh-haribhakti" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
              <Link 
                href="/company/leadership/board-of-directors#shailesh-haribhakti" 
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Director 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/director2.jpg"
                  alt="Aakash Moondhra"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Aakash Moondhra</h3>
              <p className="text-gray-600 mb-4">Board Member</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Former Global CFO of PayU, bringing strategic financial insights and global perspective.
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/company/leadership#aakash-moondhra" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#aakash-moondhra" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
              <Link 
                href="/company/leadership/board-of-directors#aakash-moondhra" 
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Director 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/director3.jpg"
                  alt="Manoj Kohli"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Manoj Kohli</h3>
              <p className="text-gray-600 mb-4">Board Member</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Strategic advisor with extensive experience in global business expansion and leadership.
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/company/leadership#manoj-kohli" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#manoj-kohli" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
              <Link 
                href="/company/leadership/board-of-directors#manoj-kohli" 
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="relative py-20 px-6">
        {/* Theme Color Banner Background */}
        <div className="bg-[#241F5D] rounded-b-3xl py-16 px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Advisory Board</h2>
          </div>
        </div>
        
        {/* White Team Member Cards - Positioned to overlap the theme color banner */}
        <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Advisor 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/advisor1.jpg"
                  alt="Advisor 1"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Industry Expert</h3>
              <p className="text-gray-600 mb-4">Strategic Advisor</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Providing strategic guidance on market expansion and industry partnerships.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#advisor1" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#advisor1" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Advisor 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/advisor2.jpg"
                  alt="Advisor 2"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Technology Leader</h3>
              <p className="text-gray-600 mb-4">Innovation Advisor</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Driving technological innovation and digital transformation strategies.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#advisor2" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#advisor2" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Advisor 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/advisor3.jpg"
                  alt="Advisor 3"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Global Expert</h3>
              <p className="text-gray-600 mb-4">International Advisor</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Strategic guidance on global market entry and international partnerships.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#advisor3" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#advisor3" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech and Functional Board Section */}
      <section className="relative py-20 px-6">
        {/* Theme Color Banner Background */}
        <div className="bg-[#241F5D] rounded-b-3xl py-16 px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Tech and Functional Board</h2>
          </div>
        </div>
        
        {/* White Team Member Cards - Positioned to overlap the theme color banner */}
        <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech Lead 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/tech1.jpg"
                  alt="Tech Lead 1"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Tech Innovator</h3>
              <p className="text-gray-600 mb-4">Head of Technology</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Leading cutting-edge technology development and platform architecture.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#tech1" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#tech1" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Tech Lead 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/tech2.jpg"
                  alt="Tech Lead 2"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Product Leader</h3>
              <p className="text-gray-600 mb-4">Head of Product</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Driving product strategy and user experience excellence across platforms.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#tech2" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#tech2" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Tech Lead 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/tech3.jpg"
                  alt="Tech Lead 3"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Functional Expert</h3>
              <p className="text-gray-600 mb-4">Head of Operations</p>
              <p className="text-gray-500 text-sm mb-6 text-left leading-relaxed">
                Optimizing operational efficiency and scaling business processes globally.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#tech3" className="text-green-500 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#tech3" className="text-green-500 hover:text-green-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
