import React from 'react';
import { User, Linkedin, Mail, Building2, Award, Briefcase, Users, MapPin } from 'lucide-react';

type Leader = {
  id: number;
  name: string;
  title: string;
  bio: string;
  experience: string;
  image: string;
  linkedin?: string;
  email?: string;
  expertise: string[];
};

type DepartmentHead = {
  id: number;
  name: string;
  title: string;
  department: string;
};

export default function LeadershipPage() {
  // Top Management
  const topManagement: Leader[] = [
    {
      id: 1,
      name: 'CM Jain',
      title: 'Founder & CEO',
      bio: 'Visionary leader with a passion for transforming treasury management through technology. Under CM Jain\'s leadership, IBSFINtech has grown into a global leader in treasury solutions.',
      experience: '30+ years',
      image: '/images/leadership/cm-jain.jpg',
      linkedin: '#',
      email: 'cm.jain@ibsfingroup.com',
      expertise: [
        'Treasury Management',
        'Financial Technology',
        'Corporate Strategy',
        'Business Growth'
      ]
    },
    {
      id: 2,
      name: 'M.S. Sundara Rajan',
      title: 'Chairman',
      bio: 'Seasoned banking professional with extensive experience in the financial sector. Former Managing Director of State Bank of India, bringing deep industry insights.',
      experience: '40+ years',
      image: '/images/leadership/sundara-rajan.jpg',
      linkedin: '#',
      email: 'sundara.rajan@ibsfingroup.com',
      expertise: [
        'Banking Operations',
        'Risk Management',
        'Corporate Governance',
        'Financial Regulation'
      ]
    },
    {
      id: 3,
      name: 'Sanjeev Jain',
      title: 'Chief Operating Officer',
      bio: 'Operations leader with a track record of driving operational excellence and scaling businesses globally. Oversees all operational aspects of IBSFINtech.',
      experience: '25+ years',
      image: '/images/leadership/sanjeev-jain.jpg',
      linkedin: '#',
      email: 'sanjeev.jain@ibsfingroup.com',
      expertise: [
        'Operations Management',
        'Process Optimization',
        'Global Expansion',
        'Service Delivery'
      ]
    }
  ];

  // Department Heads
  const departmentHeads: DepartmentHead[] = [
    { id: 1, name: 'Priya Sharma', title: 'Chief Technology Officer', department: 'Technology' },
    { id: 2, name: 'Rahul Kapoor', title: 'Global Head of Sales', department: 'Sales' },
    { id: 3, name: 'Anjali Mehta', title: 'Head of Product Innovation', department: 'Product' },
    { id: 4, name: 'Vikram Singh', title: 'Chief Risk Officer', department: 'Risk Management' }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced leadership team guiding IBSFINtech's vision and strategy
          </p>
        </div>

        {/* Top Management */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-2">Top Management</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topManagement.map((leader) => (
              <div key={leader.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center relative">
                  <User className="h-24 w-24 text-gray-400" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-blue-200">{leader.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Briefcase className="h-4 w-4 mr-1.5" />
                    <span>{leader.experience} experience</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                  
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
        </div>

        {/* Department Heads */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-2">Department Heads</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {departmentHeads.map((head) => (
                <li key={head.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{head.name}</h3>
                        <p className="text-sm text-gray-600">{head.title}</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {head.department}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Leadership</h3>
              <p className="text-gray-600">We believe in working together, breaking down silos, and fostering an environment of open communication and mutual respect.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer-Centric Approach</h3>
              <p className="text-gray-600">Our leaders are committed to understanding and addressing the unique needs of our clients, ensuring their success is our top priority.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation & Excellence</h3>
              <p className="text-gray-600">We encourage creative thinking and continuous improvement to deliver cutting-edge solutions that drive business transformation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
