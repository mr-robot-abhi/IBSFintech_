import React from 'react';
import { Shield, Lock, EyeOff, Server, Key, FileLock } from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: 'Compliance',
      description: 'Fully compliant with industry standards and regulations.'
    },
    {
      icon: <EyeOff className="h-6 w-6 text-purple-600" />,
      title: 'Access Control',
      description: 'Role-based access control with multi-factor authentication.'
    },
    {
      icon: <Server className="h-6 w-6 text-red-600" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with regular security audits.'
    },
    {
      icon: <Key className="h-6 w-6 text-yellow-600" />,
      title: 'Data Privacy',
      description: 'Strict data privacy policies and procedures in place.'
    },
    {
      icon: <FileLock className="h-6 w-6 text-indigo-600" />,
      title: 'Backup & Recovery',
      description: 'Automated backups and disaster recovery solutions.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Security First</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data's security is our top priority. We implement the highest standards to protect your information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-full mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Security Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['ISO 27001', 'SOC 2', 'GDPR', 'PCI DSS'].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center h-full flex items-center justify-center">
                <span className="font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Have security questions?</h3>
            <p className="text-gray-600 mb-6">
              Our security team is available to answer any questions you may have about our security practices.
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
              Contact Security Team
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
