
'use client';

import React from 'react';
import { Building2, Globe, Briefcase, BarChart, CheckCircle, Check } from 'lucide-react';

// Client highlights with key relationships
const featuredClients = [
  {
    name: 'Vedanta',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Vedanta.png',
    description: 'Empowering India\'s leading natural resources company with end-to-end treasury automation.'
  },
  {
    name: 'HCL',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-HCL.png',
    description: 'Streamlining multi-currency cash management and working capital across 50+ countries.'
  },
  {
    name: 'Mahindra',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Mahindra.png',
    description: 'Transforming treasury operations for real-time visibility and financial control.'
  },
  {
    name: 'Wipro',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Wipro.png',
    description: 'Enhancing global cash visibility and risk management across 60+ countries.'
  },
  {
    name: 'Dabur',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Dabur.png',
    description: 'Automated trade finance solutions reducing processing time by 65%.'
  },
  {
    name: 'Puravankara',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Puravankara.png',
    description: 'Real estate leader optimizing financial operations with our treasury solutions.'
  },
  {
    name: 'Serum Institute',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Serum-Institute-India.png',
    description: 'Supporting global healthcare through efficient financial management systems.'
  },
  {
    name: 'PwC',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-PWC.png',
    description: 'Collaborating on financial transformation and digital innovation.'
  },
  {
    name: 'Apar Industries',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-APAR.png',
    description: 'Streamlining working capital and trade finance for industrial excellence.'
  },
  {
    name: 'Blue Star',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Blue-Star.png',
    description: 'Enhancing financial operations for India\'s premier air conditioning company.'
  },
  {
    name: 'Thermax',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Thermax.png',
    description: 'Powering sustainable energy solutions through financial optimization.'
  },
  {
    name: 'Raymond',
    logo: '/IBSFINtech-Client Logos/IBSFINtech-Client-Raymond.png',
    description: 'Transforming treasury for India\'s leading fabric and fashion retailer.'
  }
];

// All client logos for the grid
const allClientLogos = [
  'IBSFINtech-Client-360One.png',
  'IBSFINtech-Client-APAR.png',
  'IBSFINtech-Client-Balco.png',
  'IBSFINtech-Client-Blue-Star.png',
  'IBSFINtech-Client-Botanic.png',
  'IBSFINtech-Client-Cairn.png',
  'IBSFINtech-Client-Credit-Saison-India.png',
  'IBSFINtech-Client-ESL-Steel-Limited.png',
  'IBSFINtech-Client-Hilton.png',
  'IBSFINtech-Client-Hindustan-Zinc.png',
  'IBSFINtech-Client-JSW.png',
  'IBSFINtech-Client-Mphasis.png',
  'IBSFINtech-Client-Patanjali.png',
  'IBSFINtech-Client-Polycab.png',
  'IBSFINtech-Client-Raymond.png',
  'IBSFINtech-Client-Serum-Institute-India.png',
  'IBSFINtech-Client-Thermax.png'
];

export default function OurClientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/bg_14.jpeg)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Valued Clients</h1>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                IBSFINtech's clientele is spread across industries and geographies. Representing the leading corporates in respective industry verticals, our clientele are mid to very large organizations with global Treasury & Trade Finance operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Clients Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with forward-thinking organizations across the globe
          </p>
        </div>

        {/* Featured Client Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {featuredClients.map((client) => (
            <div 
              key={client.name} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden flex flex-col h-full transition-all duration-200 border border-gray-100 hover:border-blue-50"
            >
              <div className="h-36 bg-gray-50/50 flex items-center justify-center p-4">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-20 w-auto max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/placeholder-logo.png';
                  }}
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{client.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{client.description}</p>
                <div className="mt-auto flex items-center text-xs text-blue-600 pt-2 border-t border-gray-100">
                  <Check className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                  <span>Key Partner</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Client Grid */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Esteemed Clients</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are proud to serve a diverse portfolio of clients across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {allClientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all hover:scale-105"
              >
                <img 
                  src={`/IBSFINtech-Client Logos/${logo}`} 
                  alt={logo.replace('IBSFINtech-Client-', '').replace('.png', '')} 
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/placeholder-logo.png';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

  

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Become Our Next Success Story</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Join the growing list of organizations that trust IBSFINtech for their treasury management needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                Request a Demo
              </a>
              <a
                href="/contact/sales"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
