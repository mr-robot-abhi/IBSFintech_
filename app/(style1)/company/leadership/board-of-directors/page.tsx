'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Linkedin, Mail, Globe, Award, Users, TrendingUp } from 'lucide-react';

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Space */}
      <div className="h-32"></div>

      {/* Header */}
      <div className="bg-green-500 rounded-b-3xl py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Link href="/company/leadership" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Leadership
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Board of Directors</h1>
          <p className="text-white/80 text-lg">Strategic leadership driving IBSFINtech's global vision</p>
        </div>
      </div>

      {/* Shailesh Haribhakti - Chairman */}
      <section id="shailesh-haribhakti" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Profile Image */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                  <Image
                    src="/leadership/director1.jpg"
                    alt="Shailesh Haribhakti"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="#" className="text-green-500 hover:text-green-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:shailesh@ibsfintech.com" className="text-green-500 hover:text-green-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Shailesh Haribhakti</h2>
                  <p className="text-2xl text-green-600 font-semibold">Chairman</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Global Leadership</h3>
                      <p className="text-gray-600">Leading strategic direction with decades of financial expertise and industry leadership across international markets.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Industry Recognition</h3>
                      <p className="text-gray-600">Renowned financial expert with multiple industry awards and recognition for strategic leadership and innovation.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Board Governance</h3>
                      <p className="text-gray-600">Expertise in corporate governance, risk management, and strategic planning for technology companies.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Strategic Vision</h3>
                      <p className="text-gray-600">Driving IBSFINtech's expansion into new markets and technological innovation in treasury management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aakash Moondhra - Board Member */}
      <section id="aakash-moondhra" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Profile Image */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                  <Image
                    src="/leadership/director2.jpg"
                    alt="Aakash Moondhra"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="#" className="text-green-500 hover:text-green-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:aakash@ibsfintech.com" className="text-green-500 hover:text-green-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Aakash Moondhra</h2>
                  <p className="text-2xl text-green-600 font-semibold">Board Member</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Global CFO Experience</h3>
                      <p className="text-gray-600">Former Global CFO of PayU, bringing strategic financial insights and global perspective from leading fintech organizations.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Fintech Expertise</h3>
                      <p className="text-gray-600">Deep understanding of fintech business models, digital payments, and global financial technology trends.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Strategic Advisory</h3>
                      <p className="text-gray-600">Providing strategic guidance on financial planning, investor relations, and international expansion strategies.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Growth Strategy</h3>
                      <p className="text-gray-600">Expertise in scaling technology companies, managing investor relationships, and driving sustainable growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manoj Kohli - Board Member */}
      <section id="manoj-kohli" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Profile Image */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                  <Image
                    src="/leadership/director3.jpg"
                    alt="Manoj Kohli"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="#" className="text-green-500 hover:text-green-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:manoj@ibsfintech.com" className="text-green-500 hover:text-green-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Manoj Kohli</h2>
                  <p className="text-2xl text-green-600 font-semibold">Board Member</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">International Business</h3>
                      <p className="text-gray-600">Strategic advisor with extensive experience in global business expansion and international market entry strategies.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Leadership Excellence</h3>
                      <p className="text-gray-600">Proven track record in leading large organizations through transformation and international expansion.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Strategic Partnerships</h3>
                      <p className="text-gray-600">Expertise in building strategic alliances, joint ventures, and partnerships across global markets.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Market Expansion</h3>
                      <p className="text-gray-600">Strategic guidance on entering new markets, understanding local regulations, and building sustainable business models.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="py-12 text-center">
        <Link href="/company/leadership" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Leadership Team
        </Link>
      </div>
    </div>
  );
}
