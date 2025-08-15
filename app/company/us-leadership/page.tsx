import React from 'react';
import { User, MapPin, Mail, Linkedin, Briefcase, Globe } from 'lucide-react';

type Leader = {
  id: number;
  name: string;
  title: string;
  location: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  expertise: string[];
};

export default function USLeadershipPage() {
  const usLeadership: Leader[] = [
    {
      id: 1,
      name: 'Michael Johnson',
      title: 'President, Americas',
      location: 'New York, USA',
      bio: 'Seasoned executive with over 20 years of experience in financial technology and enterprise software. Michael leads our Americas operations, driving growth and client success across North and South America.',
      image: '/images/leadership/us-president.jpg',
      linkedin: '#',
      email: 'michael.johnson@ibsfingroup.com',
      expertise: [
        'Financial Technology',
        'Enterprise Sales',
        'Market Expansion',
        'Strategic Partnerships'
      ]
    },
    {
      id: 2,
      name: 'Jennifer Lee',
      title: 'Vice President, Product Strategy',
      location: 'San Francisco, USA',
      bio: 'Product leader with extensive experience in fintech innovation. Jennifer oversees product strategy and development for the Americas market, ensuring our solutions meet the evolving needs of our clients.',
      image: '/images/leadership/vp-product.jpg',
      linkedin: '#',
      email: 'jennifer.lee@ibsfingroup.com',
      expertise: [
        'Product Management',
        'Fintech Innovation',
        'User Experience',
        'Market Research'
      ]
    },
    {
      id: 3,
      name: 'David Rodriguez',
      title: 'Vice President, Client Success',
      location: 'Chicago, USA',
      bio: 'Client-focused executive with a passion for building long-term relationships. David leads our client success team, ensuring exceptional service and value delivery to our American clients.',
      image: '/images/leadership/vp-client-success.jpg',
      linkedin: '#',
      email: 'david.rodriguez@ibsfingroup.com',
      expertise: [
        'Client Relations',
        'Customer Success',
        'Account Management',
        'Service Delivery'
      ]
    },
    {
      id: 4,
      name: 'Sarah Chen',
      title: 'Director, Solutions Architecture',
      location: 'Boston, USA',
      bio: 'Technology leader specializing in enterprise architecture. Sarah leads our solutions architecture team, helping clients design and implement optimal treasury management solutions.',
      image: '/images/leadership/director-architecture.jpg',
      linkedin: '#',
      email: 'sarah.chen@ibsfingroup.com',
      expertise: [
        'Enterprise Architecture',
        'Solution Design',
        'Cloud Technologies',
        'Integration'
      ]
    },
    {
      id: 5,
      name: 'Robert Taylor',
      title: 'Director, Business Development',
      location: 'Houston, USA',
      bio: 'Business development leader with extensive experience in financial services. Robert drives new business opportunities and strategic partnerships across the Americas region.',
      image: '/images/leadership/director-bd.jpg',
      linkedin: '#',
      email: 'robert.taylor@ibsfingroup.com',
      expertise: [
        'Business Development',
        'Strategic Partnerships',
        'Market Strategy',
        'Sales Leadership'
      ]
    },
    {
      id: 6,
      name: 'Emily Wilson',
      title: 'Head of Marketing, Americas',
      location: 'Los Angeles, USA',
      bio: 'Marketing strategist with a focus on fintech and B2B technology. Emily leads our marketing efforts in the Americas, building brand awareness and driving demand for our solutions.',
      image: '/images/leadership/head-marketing.jpg',
      linkedin: '#',
      email: 'emily.wilson@ibsfingroup.com',
      expertise: [
        'Marketing Strategy',
        'Brand Management',
        'Digital Marketing',
        'Demand Generation'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Banner & Tile Images for Resources & Company page/IBSFINtech-US-Leadership-team.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">US Leadership Team</h1>
              <div className="flex items-center text-white mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span>United States</span>
              </div>
              <p className="text-xl text-white max-w-3xl">
                Meet the leaders driving our growth and success in the Americas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">US Leadership Team</h1>
          <div className="flex items-center justify-center text-blue-600 mb-2">
            <MapPin className="h-5 w-5 mr-2" />
            <span>United States</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the leaders driving our growth and success in the Americas
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {usLeadership.map((leader) => (
            <div key={leader.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-56 bg-gray-200 flex items-center justify-center relative">
                <User className="h-24 w-24 text-gray-400" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                  <p className="text-blue-200">{leader.title}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1.5" />
                  <span>{leader.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {leader.bio}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((expertise, index) => (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {expertise}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-3">
                  {leader.linkedin && (
                    <a 
                      href={leader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      aria-label={`Connect with ${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 mr-1.5 text-blue-600" />
                      Connect
                    </a>
                  )}
                  {leader.email && (
                    <a 
                      href={`mailto:${leader.email}`}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Mail className="h-4 w-4 mr-1.5" />
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Presence */}
        <div className="mt-20 bg-gray-50 rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Presence in the Americas</h2>
            <p className="text-xl text-gray-600 mb-8">
              With offices in key financial hubs across North America, we're strategically positioned to serve our clients throughout the region.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                { city: 'New York', country: 'USA' },
                { city: 'San Francisco', country: 'USA' },
                { city: 'Chicago', country: 'USA' },
                { city: 'Toronto', country: 'Canada' },
                { city: 'São Paulo', country: 'Brazil' },
                { city: 'Mexico City', country: 'Mexico' },
                { city: 'Bogotá', country: 'Colombia' },
                { city: 'Buenos Aires', country: 'Argentina' }
              ].map((location, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">{location.city}</div>
                  <div className="text-sm text-gray-500">{location.country}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <Briefcase className="-ml-1 mr-2 h-5 w-5" />
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
