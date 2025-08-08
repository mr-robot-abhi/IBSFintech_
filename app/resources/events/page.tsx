import Image from 'next/image';
import Link from 'next/link';

const EventsPage = () => {
  const featuredEvents = [
    {
      id: 1,
      title: 'IBSFINtech at Global Trade Review (GTR) INDIA 2024',
      subtitle: 'Pioneering the Future of Trade Finance',
      date: 'May 22, 2024',
      location: 'JW Marriott, Mumbai',
      image: '/Home Page Banner 2.png',
      excerpt: 'Our participation in GTR India 2024 showcased our commitment to advancing trade finance through innovative treasury and trade finance solutions.'
    },
    {
      id: 2,
      title: '3rd India Family Office Summit',
      subtitle: 'Navigating Regulatory and Compliance Challenges',
      date: 'March 1, 2024',
      location: 'Ginger, Mumbai International Airport',
      image: '/Home Page Banner 3.png',
      excerpt: 'As a key TreasuryTech partner, we led discussions on evolving regulatory aspects and governance strategies for family offices.'
    },
    {
      id: 3,
      title: 'The Economic Times CFO Leadership Summit 2024',
      subtitle: 'Bridging Finance and Technology',
      date: 'March 7, 2024',
      location: 'Holiday Inn, Mumbai',
      image: '/Home Page Banner 4.png',
      excerpt: 'Our CEO facilitated a thought-provoking panel on the evolving roles of CFOs and CIOs in driving successful tech investments.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming & Past Events</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join us at industry-leading events where we share insights, showcase innovations, and connect with thought leaders in treasury and finance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                  {event.date}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 h-16">
                {event.title}
              </h2>
              {event.subtitle && (
                <h3 className="text-lg text-blue-600 font-medium mb-3">
                  {event.subtitle}
                </h3>
              )}
              <p className="text-gray-600 mb-6 line-clamp-3 h-20">
                {event.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
              <Link 
                href={`/resources/events/details`} 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          href="/resources/events/details"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          View All Events
        </Link>
        
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            Stay updated with our latest insights and developments in #TreasuryTech, #Digitization, #tradefinance, and #TreasuryManagement by following us on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
