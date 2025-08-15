
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

// All client data for the grid
const allClientLogos = [
  'IBSFINtech-Client-360One.png',
  'IBSFINtech-Client-APAR.png',
  'IBSFINtech-Client-Balco.png',
  'IBSFINtech-Client-Blue-Star.png',
  'IBSFINtech-Client-Botanic.png',
  'IBSFINtech-Client-Cairn.png',
  'IBSFINtech-Client-Credit-Saison-India.png',
  'IBSFINtech-Client-Dabur.png',
  'IBSFINtech-Client-ESL-Steel-Limited.png',
  'IBSFINtech-Client-Fumar.png',
  'IBSFINtech-Client-GX.png',
  'IBSFINtech-Client-HCL.png',
  'IBSFINtech-Client-Hilton.png',
  'IBSFINtech-Client-Hindustan-Zinc.png',
  'IBSFINtech-Client-Holiday-Inn.png',
  'IBSFINtech-Client-Indigrid.png',
  'IBSFINtech-Client-International-Metalurgical-Resources-Ltd.png',
  'IBSFINtech-Client-JSW-International-Tradecorp-Pte-Ltd.png',
  'IBSFINtech-Client-JSW.png',
  'IBSFINtech-Client-Lagata.png',
  'IBSFINtech-Client-Mahindra.png',
  'IBSFINtech-Client-Marriot.png',
  'IBSFINtech-Client-Mittal.png',
  'IBSFINtech-Client-Mphasis.png',
  'IBSFINtech-Client-Northern-Aromatics.png',
  'IBSFINtech-Client-OFI.png',
  'IBSFINtech-Client-Olam-Agri.png',
  'IBSFINtech-Client-PWC.png',
  'IBSFINtech-Client-Patanjali.png',
  'IBSFINtech-Client-Polycab.png',
  'IBSFINtech-Client-Puravankara.png',
  'IBSFINtech-Client-Raymond.png',
  'IBSFINtech-Client-Sai.png',
  'IBSFINtech-Client-Serum-Institute-India.png',
  'IBSFINtech-Client-Sidvin.png',
  'IBSFINtech-Client-Signature-Global.png',
  'IBSFINtech-Client-Sonalika.png',
  'IBSFINtech-Client-TSPL-India.png',
  'IBSFINtech-Client-Thermax.png',
  'IBSFINtech-Client-Vedanta.png',
  'IBSFINtech-Client-Viraj.png',
  'IBSFINtech-Client-Wipro.png',
  'International-Metalurgi.png'
].map(logo => ({
  name: logo
    .replace('IBSFINtech-Client-', '')
    .replace(/-/g, ' ')
    .replace(/\.png$/, '')
    .replace(/\b(?:Pte|Ltd|Inc|LLC|Corp|Co)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim(),
  logo: `/IBSFINtech-Client Logos/${logo}`
}));

export default function OurClientsPage() {
  // Type for client descriptions
  type ClientDescriptions = {
    [key: string]: string;
  };

  // Client descriptions for the grid
  const clientDescriptions: ClientDescriptions = {
    '360One': 'Leading financial services company leveraging our treasury solutions',
    'APAR': 'Industrial conglomerate optimizing financial operations',
    'Balco': 'Aluminum manufacturer enhancing treasury management',
    'Blue Star': 'Premier air conditioning company streamlining financial processes',
    'Botanic': 'Innovative solutions for sustainable financial management',
    'Cairn': 'Energy leader with optimized treasury operations',
    'Credit Saison India': 'Financial services innovator in partnership with IBSFINtech',
    'Dabur': 'FMCG giant with streamlined financial operations',
    'ESL Steel Limited': 'Steel manufacturer with efficient treasury management',
    'Fumar': 'Financial solutions for sustainable business growth',
    'GX': 'Driving financial innovation through technology',
    'HCL': 'Global IT leader with optimized financial processes',
    'Hilton': 'Hospitality giant with streamlined financial operations',
    'Hindustan Zinc': 'Metals and mining leader with efficient treasury solutions',
    'Holiday Inn': 'Global hospitality brand with optimized financial management',
    'Indigrid': 'Powering financial operations for energy infrastructure',
    'International Metalurgical Resources': 'Mining leader with robust financial systems',
    'JSW': 'Diversified business group with advanced treasury solutions',
    'Lagata': 'Innovative financial management solutions',
    'Mahindra': 'Global enterprise with streamlined financial operations',
    'Marriot': 'Hospitality leader with efficient financial management',
    'Mittal': 'Steel and mining giant with optimized treasury',
    'Mphasis': 'IT solutions provider with advanced financial systems',
    'Northern Aromatics': 'Chemical manufacturer with efficient financial operations',
    'OFI': 'Global food ingredients leader with optimized treasury',
    'Olam Agri': 'Agri-business with streamlined financial management',
    'PWC': 'Professional services leader with efficient financial solutions',
    'Patanjali': 'FMCG leader with optimized financial operations',
    'Polycab': 'Electrical goods manufacturer with efficient treasury',
    'Puravankara': 'Real estate developer with streamlined financial management',
    'Raymond': 'Textile and apparel leader with optimized financial operations',
    'Sai': 'Diversified business with efficient financial solutions',
    'Serum Institute India': 'Pharmaceutical leader with robust financial systems',
    'Sidvin': 'Infrastructure company with optimized financial management',
    'Signature Global': 'Real estate developer with efficient financial operations',
    'Sonalika': 'Automotive manufacturer with streamlined treasury',
    'TSPL India': 'Power company with optimized financial solutions',
    'Thermax': 'Energy and environment solutions with efficient financial management',
    'Vedanta': 'Natural resources leader with robust financial systems',
    'Viraj': 'Stainless steel manufacturer with optimized treasury',
    'Wipro': 'Global IT leader with efficient financial operations',
    'International Metalurgi': 'Mining and metals with streamlined financial management'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-96 overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/Banner & Tile Images for Resources & Company page/IBSFINtech-Valued-Clients.jpg"
            alt="Our Valued Clients"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto h-full flex items-center relative z-10">
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Valued Clients</h1>
            <p className="text-xl text-white">
              IBSFINtech's clientele is spread across industries and geographies. Representing the leading corporates in respective industry verticals, our clientele are mid to very large organizations with global Treasury & Trade Finance operations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Full Client Grid */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Esteemed Clients</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are proud to serve a diverse portfolio of clients across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allClientLogos.map((client, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden flex flex-col h-full transition-all duration-200 border border-gray-100 hover:border-blue-50"
              >
                <div className="h-36 bg-gray-50/50 flex items-center justify-center p-4">
                  <img 
                    src={client.logo} 
                    alt={client.name}
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
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {clientDescriptions[client.name] || 'Trusted partner for financial solutions'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

  

        {/* CTA Section */}
        <div className="mt-20 rounded-xl overflow-hidden" style={{ backgroundColor: '#241F5D' }}>
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
