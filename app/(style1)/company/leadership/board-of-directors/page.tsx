'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Linkedin, X, Globe, Award, Users, TrendingUp } from 'lucide-react';

export default function BoardOfDirectors() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#241F5D] py-6 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <Link href="/company/leadership" className="inline-flex items-center text-white/80 hover:text-white mb-3 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Leadership
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Board of Directors</h1>
          <p className="text-white/80 text-sm">Strategic leadership driving IBSFINtech's global vision</p>
        </div>
      </div>

      {/* Content Container - No wasted space */}
      <div className="px-4 py-6">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Shailesh Haribhakti - Chairman */}
          <div id="shailesh-haribhakti" className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden scroll-mt-20">
            <div className="grid lg:grid-cols-[200px,1fr] gap-6 p-6">
              {/* Profile Image */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-sm">
                  <Image
                    src="/Leadership/IBSFINtech-Chairman-Shailesh-Haribhakthi.png"
                    alt="Shailesh Haribhakti"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mt-3 space-x-4">
                  <Link href="#" className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="X (formerly Twitter)">
                    <X className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div className="pt-2">
                <div className="mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Shailesh Haribhakti</h2>
                  <p className="text-lg text-green-600 font-semibold">Chairman, IBSFINtech</p>
                </div>
                
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <p>Shailesh V. Haribhakti is an inspiring thought leader and the Chairman of IBSFINtech. He is the Chairman of Haribhakti & Co., India's largest Domestic Accounting & Consulting Firm and holds board positions in over four dozen medium and large corporations since the early-1980s.</p>
                  <p>He is actively involved with several prominent financial institutions in India, including the NSE, CII, IMC and ASSOCHAM. He represented India in the Standards Advisory Council (SAC) of the International Accounting Standards Board (IASB). He worked with PBAS, an affiliate of IFC Washington, to establish Activity-based costing and Strategic Planning Processes in Polish SMEs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CM Grover - MD & CEO */}
          <div id="cm-grover" className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden scroll-mt-20">
            <div className="grid lg:grid-cols-[200px,1fr] gap-6 p-6">
              {/* Profile Image */}
              <div className="order-last lg:order-first text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-sm">
                  <Image
                    src="/Leadership/CM-Grover-MD-CEO-IBSFINtech.png"
                    alt="CM Grover"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mt-3 space-x-4">
                  <Link href="#" className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="X (formerly Twitter)">
                    <X className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div className="pt-2">
                <div className="mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Chandra Mohan Grover</h2>
                  <p className="text-lg text-green-600 font-semibold">MD & CEO, IBSFINtech</p>
                </div>
                
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <p>As MD & CEO of IBSFINtech, an end-to-end Treasury & Risk mitigation company, CM Grover is responsible for driving the growth of the company across the globe. Headquartered in Bengaluru, India, the company is one of the Top 8 TMS players in the global market and CM Grover has played a pivotal role in establishing the leadership position of the company.</p>
                  <p>He is responsible for driving the revenue growth for IBSFINtech by establishing strategic industry engagements, generating the market traction, and nurturing the right positioning for the company in the Indian market. A Seasoned Banker having 20+ years of experience across different functions including Retail, Corporate, Treasury, CM Grover brings to the table a strategic mix of domain expertise along with exceptional leadership qualities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sharmila Grover - Director */}
          <div id="sharmila-grover" className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden scroll-mt-20">
            <div className="grid lg:grid-cols-[200px,1fr] gap-6 p-6">
              {/* Profile Image */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-sm">
                  <Image
                    src="/Leadership/IBSFINtech-Director-Sharmila-Grover.png"
                    alt="Sharmila Grover"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mt-3 space-x-4">
                  <Link href="#" className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="X (formerly Twitter)">
                    <X className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div className="pt-2">
                <div className="mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Sharmila Grover</h2>
                  <p className="text-lg text-green-600 font-semibold">Director, IBSFINtech</p>
                </div>
                
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <p>Ms. Sharmila Grover is an accomplished professional and a thought leader with more than 33 years of experience in Banking domain across various senior and leadership roles in leading Banks of the country.</p>
                  <p>Her last full-time assignment was as the Executive Vice President & Business Head (Payments) in Kotak Mahindra Bank.</p>
                  <p>Following her passion, she started off on her journey to spread awareness on POSH – 'Prevention of Sexual harassment of women at workplace'(Prevention, prohibition and Redressal). She fervently works for the upliftment of women and supports them to become financially independent.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nitin Bakshi - Director */}
          <div id="nitin-bakshi" className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden scroll-mt-20">
            <div className="grid lg:grid-cols-[200px,1fr] gap-6 p-6">
              {/* Profile Image */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-sm">
                  <Image
                    src="/Leadership/IBSFINtech-Director-Nitin-Bakshi.png"
                    alt="Nitin Bakshi"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mt-3 space-x-4">
                  <Link href="#" className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="X (formerly Twitter)">
                    <X className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Profile Details */}
              <div className="pt-2">
                <div className="mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Nitin Bakshi</h2>
                  <p className="text-lg text-green-600 font-semibold">Director</p>
                </div>
                
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <p>Nitin Bakshi is an industry veteran with 25+ years leadership experience & expertise in Manufacturing, Global supply chain, Business Process Reengineering, Mergers & Acquisitions and Digitization. A Certified Six Sigma Master Black Belt Professional, he is an Engineer from NIT (National Institute of Technology), Kurukshetra. He also holds a Diploma in Business Administration and INSEAD Leadership program.</p>
                  <p>He currently holds the position of VP – Global Supply chain Deployment at Schneider Electric, Bangalore with hands-on experience in Supply chain Strategy and Deployment, End to End Industrialization, SIOP, Customer Satisfaction & Quality Management, Manufacturing & Supply chain operations, manufacturing technology, industrial engineering, finance & purchasing, lean system & product costing.</p>
                  <p>He has worked previously with LG Electronics, American Express & Steria at various leadership & operational roles. Also, held Board Member positions in Schneider Electric India Pvt Ltd, Schneider Electric President Systems Ltd & Schneider Electric IT Business India Private Ltd.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Back to Top - Compact */}
      <div className="py-4 text-center border-t border-gray-100">
        <Link href="/company/leadership" className="inline-flex items-center bg-[#241F5D] hover:bg-[#3a346d] text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Leadership Team
        </Link>
      </div>
    </div>
  );
}
