import React from 'react';
import { Building2, Handshake, Users, Award, Briefcase, Globe, ArrowRight } from 'lucide-react';

type Partner = {
  id: number;
  name: string;
  description: string;
  logo: string;
  category: 'Technology' | 'Implementation' | 'Strategic' | 'Channel';
  region: string;
  expertise: string[];
};

type PartnerCategory = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
};

export default function PartnersPage() {
  const partnerCategories: PartnerCategory[] = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Integration with leading technology platforms and services',
      icon: <Building2 className="h-6 w-6 text-blue-600" />
    },
    {
      id: 'implementation',
      name: 'Implementation Partners',
      description: 'Certified experts in deploying our solutions',
      icon: <Briefcase className="h-6 w-6 text-green-600" />
    },
    {
      id: 'strategic',
      name: 'Strategic Partners',
      description: 'Long-term alliances driving mutual growth',
      icon: <Handshake className="h-6 w-6 text-purple-600" />
    },
    {
      id: 'channel',
      name: 'Channel Partners',
      description: 'Resellers and distributors of our solutions',
      icon: <Users className="h-6 w-6 text-orange-600" />
    }
  ];

  const partners: Partner[] = [
    {
      id: 1,
      name: 'Bloomberg',
      description: 'Bloomberg is a global financial technology and media company providing real-time market data, analytics, and news to financial professionals, businesses, and governments worldwide through its flagship Bloomberg Terminal and other services.',
      logo: '/p2.png',
      category: 'Technology',
      region: 'Global',
      expertise: ['Market Data', 'Financial Analytics', 'Real-time Information'],

    },
    {
      id: 2,
      name: 'London Stock Exchange Group',
      description: 'London Stock Exchange Group (Earlier Refinitiv or Thomson Reuters) is a global provider of financial market data and infrastructure – delivering news, information and analytics, enabling transactions, and connecting the global community.',
      logo: '/p3.png',
      category: 'Technology',
      region: 'Global',
      expertise: ['Market Data', 'Financial Infrastructure', 'Global Connectivity'],

    },
    {
      id: 3,
      name: 'Oracle',
      description: 'Oracle offers a comprehensive and fully integrated stack of cloud applications, platform services, and engineered systems. IBSFINtech is a gold partner in the Oracle Partner Network.',
      logo: '/p4.png',
      category: 'Technology',
      region: 'Global',
      expertise: ['Cloud Applications', 'Platform Services', 'Enterprise Systems'],

    },
    {
      id: 4,
      name: 'Deloitte',
      description: 'Deloitte is a leading global provider of audit, consulting, financial advisory, risk advisory, tax, and related services, operating in more than 150 countries with over 415,000 professionals committed to making a real difference.',
      logo: '/p5.png',
      category: 'Strategic',
      region: 'Global',
      expertise: ['Audit & Consulting', 'Financial Advisory', 'Risk Management'],

    },
    {
      id: 5,
      name: 'KPMG',
      description: 'One of the Big Four consulting firms renowned globally. KPMG is a global network of independent member firms offering audit, tax and advisory services.',
      logo: '/p6.png',
      category: 'Strategic',
      region: 'Global',
      expertise: ['Audit Services', 'Tax Advisory', 'Consulting'],

    },
    {
      id: 6,
      name: 'Clover Infotech',
      description: 'Clover Infotech is a leading global IT services and consulting company. It provides solutions and services across application and technology modernization, cloud enablement, data management, automation, digital experience management, and technology advisory services.',
      logo: '/p7.jpg',
      category: 'Implementation',
      region: 'Global',
      expertise: ['IT Services', 'Cloud Enablement', 'Digital Transformation'],

    },
    {
      id: 7,
      name: 'INFOLOB Global',
      description: 'INFOLOB Global, Inc is a leading IT consulting firm specializing in digital transformation and managed services.',
      logo: '/p8.png',
      category: 'Implementation',
      region: 'Global',
      expertise: ['Digital Transformation', 'Managed Services', 'IT Consulting'],

    },
    {
      id: 8,
      name: 'Filix Consulting',
      description: 'Filix Consulting is a leader on Oracle & SAP ERP applications with its offices in India & the Middle-East. They provide business & technology consulting for the entire spectrum of any organisation through its various collaborations & product-developments.',
      logo: '/p9.png',
      category: 'Implementation',
      region: 'India, Middle East',
      expertise: ['Oracle ERP', 'SAP ERP', 'Business Consulting'],

    },
    {
      id: 9,
      name: 'Greenback Forex Services',
      description: 'Greenback Forex Services Pvt. Ltd. is one of the country\'s most renowned consultants in the area of currency and interest rate risk management and international finance.',
      logo: '/p1.png',
      category: 'Channel',
      region: 'India',
      expertise: ['Forex Services', 'Risk Management', 'International Finance'],

    }
  ];

  const regions = ['All Regions', 'Global', 'India', 'Middle East'];

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0">
            <img 
              src="/bg_18.jpg" 
              alt="Partnership Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
          </div>
          <div className="relative z-10 py-12 px-8">
            <h1 className="text-4xl font-bold text-white mb-4">Industry Associations</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              IBSFINtech has established a diverse partner ecosystem across the Industry to drive more value for the entire value chain.
            </p>
          </div>
        </div>

        {/* Industry Associations Description */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">A Unified Ecosystem of Associations in the Industry</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              IBSFINtech has nurtured a diverse ecosystem of associations in the industry, building a stronger value chain to drive more value creation for the Corporates benefitting from our Comprehensive Risk Management Solution. Being a part of this value chain ensures enhanced value for each stakeholder.
            </p>
          </div>
        </div>

        {/* Partner Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Partner With Us</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnerCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a 
                  href="/request-demo" 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  Request a Demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Directory */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Our Partners</h2>
            <div className="mt-4 md:mt-0">
              <label htmlFor="region-filter" className="sr-only">Filter by region</label>
              <select
                id="region-filter"
                className="block w-full md:w-64 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                defaultValue="All Regions"
              >
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="h-16 w-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {partner.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Globe className="h-4 w-4 mr-1.5" />
                    <span>{partner.region}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{partner.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.expertise.map((expertise, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/request-demo"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Request a Demo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Let's join hands to build a stronger value proposition together.
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                Join our ecosystem and become part of a network that drives innovation and delivers comprehensive solutions to clients worldwide.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <a
                href="/request-demo"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                Request a Demo
              </a>
              <a
                href="/request-demo"
                className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
