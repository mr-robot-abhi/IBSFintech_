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
      name: 'TechGlobal Systems',
      description: 'Leading provider of enterprise integration solutions with expertise in financial systems.',
      logo: '/images/partners/techglobal.svg',
      category: 'Technology',
      region: 'Global',
      expertise: ['API Integration', 'Cloud Services', 'Data Migration']
    },
    {
      id: 2,
      name: 'Finovate Consulting',
      description: 'Specialized in treasury transformation and digital strategy consulting.',
      logo: '/images/partners/finovate.svg',
      category: 'Implementation',
      region: 'North America, EMEA',
      expertise: ['Treasury Transformation', 'Process Optimization', 'Change Management']
    },
    {
      id: 3,
      name: 'OmniChannel Solutions',
      description: 'Full-service technology consultancy with global delivery capabilities.',
      logo: '/images/partners/omnichannel.svg',
      category: 'Strategic',
      region: 'Global',
      expertise: ['Digital Transformation', 'Managed Services', 'Staff Augmentation']
    },
    {
      id: 4,
      name: 'PayTech Partners',
      description: 'Specialist in payment solutions and financial messaging.',
      logo: '/images/partners/paytech.svg',
      category: 'Technology',
      region: 'EMEA, APAC',
      expertise: ['Payment Processing', 'SWIFT Services', 'Compliance']
    },
    {
      id: 5,
      name: 'Global Trade Network',
      description: 'Leading trade finance platform connecting businesses worldwide.',
      logo: '/images/partners/gtn.svg',
      category: 'Strategic',
      region: 'Global',
      expertise: ['Supply Chain Finance', 'Invoice Discounting', 'Working Capital']
    },
    {
      id: 6,
      name: 'CloudFirst Advisors',
      description: 'Cloud migration and optimization specialists for financial institutions.',
      logo: '/images/partners/cloudfirst.svg',
      category: 'Implementation',
      region: 'North America',
      expertise: ['Cloud Migration', 'DevOps', 'Security & Compliance']
    },
    {
      id: 7,
      name: 'FinServe Alliance',
      description: 'Network of regional financial service providers.',
      logo: '/images/partners/finserve.svg',
      category: 'Channel',
      region: 'APAC, Middle East',
      expertise: ['Local Market Expertise', 'Regional Support', 'Implementation']
    },
    {
      id: 8,
      name: 'RiskMetrics Group',
      description: 'Enterprise risk management and regulatory compliance specialists.',
      logo: '/images/partners/riskmetrics.svg',
      category: 'Technology',
      region: 'Global',
      expertise: ['Risk Analytics', 'Regulatory Reporting', 'Compliance']
    }
  ];

  const regions = ['All Regions', 'Global', 'North America', 'EMEA', 'APAC', 'Middle East'];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner Ecosystem</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together with our partners, we deliver comprehensive solutions that drive digital transformation in treasury and financial management.
          </p>
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
                  href={`#${category.id}`} 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  Explore {category.name}
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
                    <div className="h-16 w-48 bg-gray-200 flex items-center justify-center mb-4 rounded">
                      <Building2 className="h-8 w-8 text-gray-400" />
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
                  
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  
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
                      href="/contact/partners"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Partner with us
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
                Become a Partner
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                Join our growing network of technology, implementation, and channel partners to deliver innovative solutions to clients worldwide.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <a
                href="/partners/become-a-partner"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                Partner with Us
              </a>
              <a
                href="/contact/partners"
                className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Contact Partnership Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
