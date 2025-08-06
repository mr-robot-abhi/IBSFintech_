import React from 'react';
import { Check, Zap, Cpu, Shield, Link2, BarChart, Star, Gauge, Settings, CpuIcon, BrainCircuit, LayoutDashboard } from 'lucide-react';

const PRIMARY_COLOR = '#241F5D';

export default function WhyChooseUsPage() {
  const differentiators = [
    {
      title: 'Comprehensive',
      description: 'End-to-end solution covering all aspects of Treasury, Risk & Trade Finance Management® (TRTFM®)',
      icon: <LayoutDashboard className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
    },
  {
    title: 'Nimble',
    description: 'Agile and responsive to evolving market needs and regulatory requirements',
    icon: <Zap className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Domain Centric',
    description: 'Built by treasury experts with deep domain knowledge and industry experience',
    icon: <BrainCircuit className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Configurable',
    description: 'Tailored to meet specific business requirements and workflows',
    icon: <Settings className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Best Practices',
    description: 'Incorporates industry best practices and compliance standards',
    icon: <Star className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  },
  {
    title: 'Integrated',
    description: 'Seamless integration with existing systems and workflows',
    icon: <Link2 className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Home%20Page%20Banner%202.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Differentiator</h1>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                IBSFINtech is at the forefront, leading the transformation of Cash & liquidity, Treasury, Risk and Trade Finance functions of the corporate. Today's Board & CxOs needs an intelligent decision support system to ensure business continuity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: PRIMARY_COLOR }}>Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${PRIMARY_COLOR}10` }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Trust Us */}
        <div className="mb-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Why Clients Trust Our Comprehensive Risk Management Solution?</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              With a surge in the wave of automation and digitization, corporates look at IBSFINtech as the only solution provider in this space with a comprehensive product offering which has the capabilities to empower the corporate to manage & mitigate holistic risks faced by the corporate. Moreover, the product is highly scalable and is designed to address the growing requirements of a thriving business. IBSFINtech's solution is an all-in-one product offering multi-asset class, multi-currency, multi-location and multi-company capabilities.
            </p>
            <p>
              The genesis of the company originates from the gaps identified by our founders in the risk management solution space for the corporates. This led to the development of IBSFINtech's comprehensive risk management solution for the corporates. With their experience, comes along the authority and the requisite knowledge to develop a holistic solution that covers the entire landscape of Treasury, Risk & Trade Finance Management® (TRTFM®) for the Corporate.
            </p>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Key Differentiators</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Driving the digitization & automation in Treasury, Risk and Trade Finance Management® (TRTFM®), IBSFINtech is empowering the corporate treasury with a highly intelligent decision support system powered by AI, ML and RPA. IBSFINtech is also launching a SaaS based Treasury management solution, very soon, which will cater to Medium and Emerging corporates of the globe.
            </p>
            <p className="text-gray-700">
              Moreover, the trust originates from demonstration of capabilities, which IBSFINtech has been consistently proving and has also demonstrated the true value-add of digitization and automation of the critical functions of Treasury, Risk Trade Finance to the corporate. Having proven its credentials across prestigious clientele from diverse sectors such as automotive, retail, commodity trading, e-commerce, fertilizer manufacturing, steel manufacturing etc., the company has left no stone unturned to establish its position as the leader in this space. Some of the Leading Corporates of the industry are on the Prestigious Client List of the company.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-xl overflow-hidden" style={{ background: PRIMARY_COLOR }}>
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to transform your treasury operations?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-200">
                Schedule a demo to see our platform in action and discover how we can help your business.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8 space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                style={{ backgroundColor: '#FF2E2E' }}
              >
                Request a Demo
              </a>
              <a
                href="/contact/sales"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
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
