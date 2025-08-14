import React from 'react';
import Image from 'next/image';
import { Check, Link2, Cpu, Database, Server, Cloud, Zap, BarChart } from 'lucide-react';

const PRIMARY_COLOR = '#241F5D';

const integrationFeatures = [
  {
    title: 'Pre-built ERP Integrations',
    description: 'Connect seamlessly with SAP, Oracle Fusion, Oracle EBS, Oracle NetSuite, Microsoft Dynamics, Tally, and Navision.',
    icon: <Database className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Banking & Payment Connectivity',
    description: 'API integrations with major Indian & global banks for payments, balances, statements, trade finance, and FX confirmations.',
    icon: <Server className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Dealing & Investment Platforms',
    description: 'Integration with FX ALL, FX GO, MFUs, AMFI, CAMS, CBRICS, BSE Star MF, and major exchanges.',
    icon: <Link2 className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Advanced Reporting & Market Data',
    description: 'Connectivity with BI tools like Tableau, Power BI, and market data providers like Refinitiv (LSEG) and Bloomberg.',
    icon: <BarChart className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Technical Capabilities',
    description: 'Real-time API connectivity, batch processing, end-to-end security, and high-throughput with guaranteed delivery.',
    icon: <Zap className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  }
];

const technicalCapabilities = [
  'Real-time API connectivity for instant data exchange',
  'Batch processing for structured file-based integrations',
  'End-to-end security with authentication and encryption',
  'High-throughput & guaranteed delivery with robust audit trails'
];

export default function IntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src="/Integration capabilities page Banner.svg"
          alt="Integration Capabilities Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left whitespace-nowrap">IBSFINtech's Integration Capabilities</h1>
              <p className="text-xl text-gray-200 mb-4 text-left">
                Seamless Connectivity Across Your Treasury Ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Subheading */}
        <div className="text-center mb-8">
          <p className="text-3xl font-semibold text-gray-800">Automate, Integrate & Optimize</p>
        </div>
        
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-lg text-gray-700 max-w-5xl mx-auto">
            Ensure effortless data flow between IBSFINtech's Treasury Management System (TMS) and all third-party systems—ERPs, banks, dealing platforms, investment gateways, and market data providers. Reduce operational costs, establish a single source of truth, and gain real-time visibility into your treasury data.
          </p>
        </div>

        {/* 360° Connectivity */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>360° Connectivity for a Fully Digitized Treasury</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {integrationFeatures.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}10` }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Capabilities */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: PRIMARY_COLOR }}>Technical Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {technicalCapabilities.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 mt-1 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
          <div className="px-8 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Lower Your Integration Costs with Proven Treasury Connectivity</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Leverage our best-in-class integration capabilities to optimize your treasury ecosystem, minimize manual efforts, and enhance decision-making with real-time insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                style={{ backgroundColor: '#FF2E2E' }}
              >
                Request a Demo
              </a>
              <a
                href="/contact/sales"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md"
                style={{ color: PRIMARY_COLOR, borderColor: PRIMARY_COLOR, backgroundColor: 'white' }}
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
