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
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-lg">Image Coming Soon</span>
                  </div>
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
                  <p className="text-2xl text-green-600 font-semibold">Chairman, IBSFINtech</p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>Shailesh V. Haribhakti is an inspiring thought leader and the Chairman of IBSFINtech. He is the Chairman of Haribhakti & Co., India's largest Domestic Accounting & Consulting Firm and holds board positions in over four dozen medium and large corporations since the early-1980s.</p>
                  <p>He is actively involved with several prominent financial institutions in India, including the NSE, CII, IMC and ASSOCHAM. He represented India in the Standards Advisory Council (SAC) of the International Accounting Standards Board (IASB). He worked with PBAS, an affiliate of IFC Washington, to establish Activity-based costing and Strategic Planning Processes in Polish SMEs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CM Grover - MD & CEO */}
      <section id="cm-grover" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Profile Image */}
              <div className="order-last lg:order-first text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-lg">Image Coming Soon</span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="#" className="text-green-500 hover:text-green-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:cm@ibsfintech.com" className="text-green-500 hover:text-green-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Chandra Mohan Grover</h2>
                  <p className="text-2xl text-green-600 font-semibold">MD & CEO, IBSFINtech</p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>As MD & CEO of IBSFINtech, an end-to-end Treasury & Risk mitigation company, CM Grover is responsible for driving the growth of the company across the globe. Headquartered in Bengaluru, India, the company is one of the Top 8 TMS players in the global market and CM Grover has played a pivotal role in establishing the leadership position of the company.</p>
                  <p>He is responsible for driving the revenue growth for IBSFINtech by establishing strategic industry engagements, generating the market traction, and nurturing the right positioning for the company in the Indian market. A Seasoned Banker having 20+ years of experience across different functions including Retail, Corporate, Treasury, CM Grover brings to the table a strategic mix of domain expertise along with exceptional leadership qualities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharmila Grover - Director */}
      <section id="sharmila-grover" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Profile Image */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-lg">Image Coming Soon</span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="#" className="text-green-500 hover:text-green-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:sharmila@ibsfintech.com" className="text-green-500 hover:text-green-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Sharmila Grover</h2>
                  <p className="text-2xl text-green-600 font-semibold">Director, IBSFINtech</p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>Ms. Sharmila Grover is an accomplished professional and a thought leader with more than 33 years of experience in Banking domain across various senior and leadership roles in leading Banks of the country.</p>
                  <p>Her last full-time assignment was as the Executive Vice President & Business Head (Payments) in Kotak Mahindra Bank.</p>
                  <p>Following her passion, she started off on her journey to spread awareness on POSH – 'Prevention of Sexual harassment of women at workplace'(Prevention, prohibition and Redressal). She fervently works for the upliftment of women and supports them to become financially independent.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nitin Bakshi - Director */}
      <section id="nitin-bakshi" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Profile Image */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-lg">Image Coming Soon</span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="#" className="text-green-500 hover:text-green-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:nitin@ibsfintech.com" className="text-green-500 hover:text-green-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Nitin Bakshi</h2>
                  <p className="text-2xl text-green-600 font-semibold">Director</p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>Nitin Bakshi is an industry veteran with 25+ years leadership experience & expertise in Manufacturing, Global supply chain, Business Process Reengineering, Mergers & Acquisitions and Digitization. A Certified Six Sigma Master Black Belt Professional, he is an Engineer from NIT (National Institute of Technology), Kurukshetra. He also holds a Diploma in Business Administration and INSEAD Leadership program.</p>
                  <p>He currently holds the position of VP – Global Supply chain Deployment at Schneider Electric, Bangalore with hands-on experience in Supply chain Strategy and Deployment, End to End Industrialization, SIOP, Customer Satisfaction & Quality Management, Manufacturing & Supply chain operations, manufacturing technology, industrial engineering, finance & purchasing, lean system & product costing.</p>
                  <p>He has worked previously with LG Electronics, American Express & Steria at various leadership & operational roles. Also, held Board Member positions in Schneider Electric India Pvt Ltd, Schneider Electric President Systems Ltd & Schneider Electric IT Business India Private Ltd.</p>
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
