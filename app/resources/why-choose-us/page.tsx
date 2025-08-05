import React from 'react';
import { CheckCircle, Zap, Cpu, Shield, Link2, BarChart, Cloud, CpuIcon, BrainCircuit } from 'lucide-react';

export default function WhyChooseUsPage() {
  const keyDifferentiators = [
    {
      title: 'Comprehensive Solution Suite',
      description: 'End-to-end treasury management platform covering all your financial needs.',
      icon: <Cpu className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Domain Expertise',
      description: '25+ years focused exclusively on treasury technology solutions.',
      icon: <BrainCircuit className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Global Compliance',
      description: 'Supports 150+ regulatory requirements across 30+ countries.',
      icon: <Shield className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Real-time insights and predictive capabilities for better decision making.',
      icon: <BarChart className="h-6 w-6 text-orange-600" />
    },
    {
      title: 'Seamless Integration',
      description: '200+ pre-built connectors to ERPs and banking systems.',
      icon: <Link2 className="h-6 w-6 text-indigo-600" />
    }
  ];

  const technologyHighlights = [
    {
      title: 'Cloud-Native Architecture',
      description: 'Built for scalability and performance with bank-grade security.',
      icon: <Cloud className="h-5 w-5 text-blue-600" />
    },
    {
      title: 'Blockchain-Enabled',
      description: 'Secure and transparent payment validation.',
      icon: <Zap className="h-5 w-5 text-green-600" />
    },
    {
      title: 'Machine Learning',
      description: 'Advanced algorithms for accurate cash flow forecasting.',
      icon: <CpuIcon className="h-5 w-5 text-purple-600" />
    },
    {
      title: 'API-First Design',
      description: 'Easy ecosystem integration and extensibility.',
      icon: <Link2 className="h-5 w-5 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Why Choose IBSFINtech?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative treasury management solutions can transform your financial operations
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-2">Key Differentiators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-2">Technology Highlights</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologyHighlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to transform your treasury operations?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                Schedule a demo to see our platform in action and discover how we can help your business.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                Request a Demo
              </a>
              <a
                href="/contact/sales"
                className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
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
