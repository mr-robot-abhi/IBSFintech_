import React from 'react';
import { Cpu, Database, Zap, Link2, Server, Cloud } from 'lucide-react';

export default function IntegrationPage() {
  const integrationTypes = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: 'ERP Systems',
      description: 'Seamless integration with leading ERP solutions for unified financial management.'
    },
    {
      icon: <Server className="h-8 w-8 text-green-600" />,
      title: 'Banking APIs',
      description: 'Direct connectivity with multiple banks for real-time transaction processing.'
    },
    {
      icon: <Link2 className="h-8 w-8 text-purple-600" />,
      title: 'Payment Gateways',
      description: 'Secure and efficient payment processing with major gateways.'
    },
    {
      icon: <Cpu className="h-8 w-8 text-red-600" />,
      title: 'AI & Analytics',
      description: 'Advanced analytics and AI tools for data-driven decision making.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Trading Platforms',
      description: 'Integration with trading platforms for comprehensive risk management.'
    },
    {
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      title: 'Cloud Services',
      description: 'Cloud-based integration for scalability and flexibility.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Integration Capabilities</h1>
        <p className="text-xl text-gray-600 mb-12">
          Our platform is designed to work seamlessly with your existing systems and technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationTypes.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Custom Integration?</h2>
          <p className="text-gray-700 mb-6">
            Our team can develop custom integrations to meet your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
              View API Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
