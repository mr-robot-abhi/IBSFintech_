'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Globe, Users, Zap, Award, ChevronRight, MapPin, Mail, Linkedin, Shield } from 'lucide-react';

import Timeline from '@/components/homepage/TCSInspiredTimeline';

export default function AboutUs() {

  return (
    <div className="min-h-screen">

      
      {/* Hero Section with Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/About Us main banner image.svg"
            alt="About Us Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Agile, Innovative and future-ready</h1>
                <p className="text-xl text-gray-200 mb-4">
                  IBSFINtech, a globally renowned TreasuryTech organization, provides end-to-end digitization for cash flow & liquidity, treasury, risk, trade finance and supply chain finance functions of the corporations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Popup Circles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Circle 1 - Top Right */}
          <div className="absolute top-20 right-20 group">
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-600"></div>
            <div className="absolute right-6 top-0 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto min-w-48 transform translate-x-2 group-hover:translate-x-0">
              <div className="text-sm font-semibold text-gray-800 mb-1">Global Presence</div>
              <div className="text-xs text-gray-600">Operating in 15+ countries with 200+ enterprise clients worldwide</div>
              <div className="absolute left-0 top-3 w-2 h-2 bg-white transform -translate-x-1 rotate-45"></div>
            </div>
          </div>
          
          {/* Circle 2 - Middle Left */}
          <div className="absolute top-32 left-16 group">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transition-all duration-300 group-hover:scale-125 group-hover:bg-green-600"></div>
            <div className="absolute left-6 top-0 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto min-w-48 transform -translate-x-2 group-hover:translate-x-0">
              <div className="text-sm font-semibold text-gray-800 mb-1">Innovation Hub</div>
              <div className="text-xs text-gray-600">Leading TreasuryTech innovation with AI-powered solutions and real-time analytics</div>
              <div className="absolute right-0 top-3 w-2 h-2 bg-white transform translate-x-1 rotate-45"></div>
            </div>
          </div>
          
          {/* Circle 3 - Bottom Center */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 group">
            <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-600"></div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:translate-y-0 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto min-w-48">
              <div className="text-sm font-semibold text-gray-800 mb-1">Industry Recognition</div>
              <div className="text-xs text-gray-600">Winner of multiple awards including Corporate Treasurer Awards 2021 and IDC MarketScape recognition</div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Worldwide presence</h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Indian Innovation, Global Impact</h3>
              <p className="text-gray-700 mb-6">
                As India's leading TreasuryTech organization, IBSFINtech's solution is a comprehensive, integrated, and innovative platform that caters to corporations of all sizes and sectors globally. Trusted by multinational conglomerates across various verticals and geographies, we are committed to delivering value and driving growth and success for our clients.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center">
                Global Presence <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="relative rounded-xl h-96 overflow-hidden">
              <Image
                src="/worldmap.jpg"
                alt="World Map"
                fill
                className="object-cover"
              />
              
              {/* Interactive Map Points */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Europe Point */}
                <div className="absolute top-20 left-1/4 group">
                  <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:translate-y-0 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto min-w-40">
                    <div className="text-sm font-semibold text-gray-800 mb-1">Europe</div>
                    <div className="text-xs text-gray-600">Expanding presence with strategic partnerships and local expertise</div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
                
                {/* Asia Pacific Point */}
                <div className="absolute top-32 right-1/3 group">
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transition-all duration-300 group-hover:scale-150 group-hover:bg-green-600"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:translate-y-0 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto min-w-40">
                    <div className="text-sm font-semibold text-gray-800 mb-1">Asia Pacific</div>
                    <div className="text-xs text-gray-600">Strong foothold in Singapore, Japan, and emerging markets</div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
                
                {/* North America Point */}
                <div className="absolute top-16 left-1/2 group">
                  <div className="w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transition-all duration-300 group-hover:scale-150 group-hover:bg-purple-600"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:translate-y-0 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto min-w-40">
                    <div className="text-sm font-semibold text-gray-800 mb-1">North America</div>
                    <div className="text-xs text-gray-600">Entered US market with state-of-the-art development center</div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Towards new-age technology</h2>
            <p className="text-gray-700">
              In a world where digitization is no longer optional but essential, IBSFINtech provides the must-have solution for every corporate. Tackle the critical challenges in cash and liquidity management, currency (FX) risk, investment (money market), trade finance, commodity management, borrowing, and SaaS supply chain finance with IBSFINtech's cutting-edge technology solution.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Comprehensive, Multi-Dimensional Tech Solution</h3>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Next-Gen Treasury Management System</h4>
            <p className="text-gray-700 mb-6">
              Equip your treasury team with a state-of-the-art solution that integrates multi-asset, multi-currency, multi-location, and multi-company capabilities. Streamline and automate your treasury, risk, trade finance, and supply chain processes with our all-in-one platform, offering real-time, intuitive access to crucial data. Leverage these insights to make strategic decisions that enhance operational efficiency and drive substantial financial growth.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-wrap -mx-4">
                {[
                  { icon: <Zap className="w-8 h-8 text-blue-600" />, text: 'Real-time Analytics' },
                  { icon: <Shield className="w-8 h-8 text-blue-600" />, text: 'Secure Platform' },
                  { icon: <Users className="w-8 h-8 text-blue-600" />, text: 'Multi-user Access' },
                  { icon: <Award className="w-8 h-8 text-blue-600" />, text: 'Award-winning' },
                ].map((item, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-2 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <p className="font-medium text-gray-800">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Global Fintech Wave */}
      <section className="py-16 px-6 text-white" style={{ backgroundColor: '#241F5D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Driving The Global Fintech Wave</h2>
              <p className="mb-6 text-blue-100">
                India is emerging as a global fintech hub, experiencing phenomenal growth to rank among the largest fintech markets worldwide. It has greatly disrupted the way people and businesses engage with financial services.
              </p>
              <p className="mb-8 text-blue-100">
                This growth is fueled by nurturing initiatives from the Indian government, aligned with the vision of a developed nation and a trillion-dollar economy by 2047. Embracing the Viksit Bharat vision, IBSFINtech is playing a pivotal role in shaping the future of the B2B fintech space globally.
              </p>
              <p className="text-blue-100">
                By leveraging cutting-edge technology and deep industry expertise, we are not only contributing to India's fintech revolution but also setting new standards in treasury, risk, trade finance and cash & liquidity worldwide. We are proud to be at the forefront, empowering businesses and fostering financial transformation across the globe.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/Currencies-Banner.png"
                alt="Fintech Innovation Visualization Dashboard"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your treasury operations?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover how IBSFINtech can help your business achieve financial excellence with our cutting-edge treasury management solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
            >
              Contact Us <ChevronRight className="ml-2" />
            </a>
            <a 
              href="/request-demo" 
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border border-blue-200 transition-colors inline-flex items-center"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
