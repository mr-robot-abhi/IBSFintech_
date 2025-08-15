import { Trophy, Award as AwardIcon, Star, Shield, Users } from 'lucide-react';

export default function AwardsPage() {
  const awards = [
    {
      id: 1,
      title: 'Best Treasury Management Solution Provider',
      organization: 'FinTech Breakthrough Awards',
      year: '2023',
      description: 'Recognized for our innovative and comprehensive treasury management solutions that are transforming financial operations.',
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      category: 'Excellence in FinTech'
    },
    {
      id: 2,
      title: 'Most Innovative Treasury Tech Solution',
      organization: 'CFO Innovation Awards',
      year: '2022',
      description: 'Awarded for our cutting-edge technology that is redefining treasury management for enterprises worldwide.',
      icon: <AwardIcon className="h-8 w-8 text-blue-500" />,
      category: 'Innovation'
    },
    {
      id: 3,
      title: 'Featured in Market Guide',
      organization: 'Gartner',
      year: '2022',
      description: 'Recognized in Gartner\'s Market Guide for Treasury and Risk Management Solutions as a representative vendor.',
      icon: <Shield className="h-8 w-8 text-green-500" />,
      category: 'Industry Recognition'
    },
    {
      id: 4,
      title: 'Emerging FinTech Leader',
      organization: 'Asian Banking & Finance Awards',
      year: '2021',
      description: 'Honored for our rapid growth and leadership in the FinTech sector across the Asian market.',
      icon: <Star className="h-8 w-8 text-purple-500" />,
      category: 'Leadership'
    },
    {
      id: 5,
      title: 'Great Place to Work Certified',
      organization: 'Great Place to Work Institute',
      year: '2020-2023',
      description: 'Certified as a Great Place to Work for three consecutive years, recognizing our exceptional workplace culture.',
      icon: <Users className="h-8 w-8 text-red-500" />,
      category: 'Workplace Excellence'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Banner & Tile Images for Resources & Company page/IBSFINtech-Awards-Recognitions-Internalpage.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Awards & Recognitions</h1>
              <p className="text-xl text-white max-w-3xl">
                Our commitment to excellence and innovation in treasury management has been recognized by leading industry organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognitions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence and innovation in treasury management has been recognized by leading industry organizations worldwide.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div key={award.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0">
                    {award.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {award.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{award.organization}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{award.description}</p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{award.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Join Our Award-Winning Team
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                Be part of an organization that's recognized for excellence in FinTech innovation and workplace culture.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <a
                href="/company/careers"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
