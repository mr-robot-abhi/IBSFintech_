'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, ArrowRight, ChevronDown } from 'lucide-react';
import XLogo from '@/components/ui/XLogo';

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Image and Overlaid Text */}
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src="/IBSFINtech-Leadership.jpg"
          alt="IBSFINtech Leadership Team"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />

        {/* Overlaid Text at Bottom of Banner */}
        <div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-8xl">
          <div className="text-white text-[20px] md:text-[24px] lg:text-[28px] leading-[1.3] md:leading-[1.25] font-semibold text-left space-y-6">

            <p>
              From envisioning a smarter future for corporate treasury to driving a global wave in TreasuryTech, CM Grover has charted a path of digital transformation that reaches far beyond borders. As Managing Director & CEO, he has brought together every facet of treasury — Cash, Liquidity, Risk, Trade Finance, Commodity, Investment and Supply Chain Finance — into a unified, intelligent system trusted by industries worldwide.
            </p>
            <p>
              With decades in public sector banking, he developed a deep understanding of treasury's challenges and turned that knowledge into action, inspiring CFOs, boards, and financial leaders globally to embrace digitization. His leadership carries the conviction that technology built in India can serve the world — and in doing so, he has positioned IBSFINtech on the map as a global player in TreasuryTech.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section - No top padding to reduce white space */}
      <section className="relative py-0 px-0">
        {/* Theme Color Banner Background - Truly Full Width */}
        <div className="bg-[#241F5D] py-20 px-6 text-center relative w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90">Board of Directors</h2>
          </div>
        </div>

        {/* White Team Member Cards - Positioned to overlap the theme color banner */}
        <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Director 1 - CM Grover */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/Leadership/CM-Grover-MD-CEO-IBSFINtech.png"
                  alt="CM Grover"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis px-2">CM Grover</h3>
              <p className="text-gray-600 mb-6">MD & CEO</p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/company/leadership/board-of-directors#cm-grover" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership/board-of-directors#cm-grover" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
              <Link href="/company/leadership/board-of-directors#cm-grover" className="inline-flex items-center justify-center px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Director 2 - Shailesh Haribhakti */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/Leadership/IBSFINtech-Chairman-Shailesh-Haribhakthi.png"
                  alt="Shailesh Haribhakti"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis px-2">Shailesh Haribhakti</h3>
              <p className="text-gray-600 mb-6">Chairman</p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/company/leadership/board-of-directors#shailesh-haribhakti" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership/board-of-directors#shailesh-haribhakti" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
              <Link href="/company/leadership/board-of-directors#shailesh-haribhakti" className="inline-flex items-center justify-center px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Director 3 - Sharmila Grover */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/Leadership/IBSFINtech-Director-Sharmila-Grover.png"
                  alt="Sharmila Grover"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis px-2">Sharmila Grover</h3>
              <p className="text-gray-600 mb-6">Director</p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/company/leadership/board-of-directors#sharmila-grover" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership/board-of-directors#sharmila-grover" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
              <Link href="/company/leadership/board-of-directors#sharmila-grover" className="inline-flex items-center justify-center px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Director 4 - Nitin Bakshi */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/IBSFINtech-Director-Nitin-Bakshi.png"
                  alt="Nitin Bakshi"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis px-2">Nitin Bakshi</h3>
              <p className="text-gray-600 mb-6">Director</p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/company/leadership/board-of-directors#nitin-bakshi" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership/board-of-directors#nitin-bakshi" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
              <Link href="/company/leadership/board-of-directors#nitin-bakshi" className="inline-flex items-center justify-center px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="relative py-0 px-0">
        {/* Theme Color Banner Background - Truly Full Width */}
        <div className="bg-[#241F5D] py-16 px-6 text-center relative w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Advisory Board</h2>
          </div>
        </div>

        {/* White Team Member Cards - Positioned to overlap the theme color banner */}
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advisor 1 - Manoj Kohli */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/Leadership/IBSFINtech-Manoj-Kohli.png"
                  alt="Manoj Kohli"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Manoj Kohli</h3>
              <p className="text-gray-600 mb-6">Chairman and Managing Partner</p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#manoj-kohli" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#manoj-kohli" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
            </div>

            {/* Advisor 2 - Aakash Moondhra */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/IBSFINtech-Aakash-Moondhra.png"
                  alt="Aakash Moondhra"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Aakash Moondhra</h3>
              <p className="text-gray-600 mb-6">Global CFO</p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#aakash-moondhra" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#aakash-moondhra" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
            </div>

            {/* Advisor 3 - Venkat */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/IBSFINtech-Venkat.png"
                  alt="Venkat"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Venkat</h3>
              <p className="text-gray-600 mb-6">President & Global Head – Finance</p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#venkat" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#venkat" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
            </div>

            {/* Advisor 4 - B P Singh */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/leadership/IBSFINtech-B-P-Singh.png"
                  alt="B P Singh"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">B P Singh</h3>
              <p className="text-gray-600 mb-6">Former Deputy MD</p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#b-p-singh" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#b-p-singh" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech and Functional Board Section */}
      <section className="relative py-0 px-0">
        {/* Theme Color Banner Background - Truly Full Width */}
        <div className="bg-[#241F5D] py-16 px-6 text-center relative w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Tech and Functional Board</h2>
          </div>
        </div>

        {/* White Team Member Cards - Positioned to overlap the theme color banner */}
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tech Lead - CA (Dr) Aman Chugh */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/Leadership/IBSFINtech-Aman-Chugh.png"
                  alt="CA (Dr) Aman Chugh"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">CA (Dr) Aman Chugh</h3>
              <p className="text-gray-600 mb-6">Author, Consultant, Speaker & Trainer</p>
              <div className="flex justify-center space-x-4">
                <Link href="/company/leadership#aman-chugh" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/company/leadership#aman-chugh" className="text-black hover:text-gray-800 transition-colors">
                  <XLogo className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
