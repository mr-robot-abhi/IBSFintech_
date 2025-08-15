import React from 'react';
import { Calendar, Clock, Play, User, Users, ArrowRight } from 'lucide-react';

const WebinarsPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI-Powered Treasury Management: The Future is Now',
      date: '2025-09-15',
      time: '14:00',
      duration: '60 mins',
      speaker: 'Dr. Ananya Sharma',
      speakerTitle: 'Chief Innovation Officer, IBSFINtech',
      attendees: 287,
      description: 'Discover how AI is transforming treasury operations with real-time analytics, predictive cash flow forecasting, and intelligent decision-making capabilities.',
      image: '/Home Page Banner 2.png',
      category: 'AI & Automation',
      level: 'Intermediate',
      language: 'English',
      cpeCredits: 1.0
    },
    {
      id: 2,
      title: 'Navigating Global Trade Finance in 2025',
      date: '2025-09-22',
      time: '15:30',
      duration: '75 mins',
      speaker: 'Rajiv Mehta',
      speakerTitle: 'Global Head of Trade Finance',
      attendees: 193,
      description: 'Expert insights on managing trade finance complexities, blockchain implementations, and optimizing working capital in a global supply chain.',
      image: '/Home Page Banner 3.png',
      category: 'Trade Finance',
      level: 'Advanced',
      language: 'English',
      cpeCredits: 1.25
    },
    {
      id: 3,
      title: 'Treasury Transformation: From Legacy to Digital',
      date: '2025-10-05',
      time: '11:00',
      duration: '90 mins',
      speaker: 'Priya Kapoor',
      speakerTitle: 'Digital Transformation Leader',
      attendees: 156,
      description: 'A comprehensive guide to modernizing your treasury operations with cloud solutions, APIs, and automation for better efficiency and control.',
      image: '/Home Page Banner 4.png',
      category: 'Digital Transformation',
      level: 'All Levels',
      language: 'English',
      cpeCredits: 1.5
    },
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'The Future of Digital Payments: Trends & Innovations',
      date: '2025-08-10',
      duration: '68 mins',
      speaker: 'Vikram Patel',
      speakerTitle: 'Head of Payments Innovation',
      attendees: 342,
      description: 'Explore the latest trends in digital payments, including real-time payments, blockchain, and the future of cross-border transactions.',
      image: '/Home Page Banner 5.png',
      category: 'Digital Payments',
      recordingUrl: '#',
      views: 1245,
      rating: 4.8
    },
    {
      id: 5,
      title: 'Risk Management in Treasury: Advanced Strategies',
      date: '2025-07-28',
      duration: '82 mins',
      speaker: 'Dr. Sanjay Verma',
      speakerTitle: 'Chief Risk Officer',
      attendees: 289,
      description: 'Advanced techniques for managing financial risks including FX, interest rate, and commodity price risks in corporate treasury.',
      image: '/Home Page Banner 6.png',
      category: 'Risk Management',
      recordingUrl: '#',
      views: 987,
      rating: 4.9
    },
    {
      id: 6,
      title: 'Treasury 4.0: The Digital Revolution',
      date: '2025-07-15',
      duration: '75 mins',
      speaker: 'Anjali Deshpande',
      speakerTitle: 'Digital Treasury Expert',
      attendees: 412,
      description: 'How emerging technologies like AI, blockchain, and cloud computing are reshaping the future of treasury management.',
      image: '/Home Page Banner 7.png',
      category: 'Digital Transformation',
      recordingUrl: '#',
      views: 1567,
      rating: 4.7
    },
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Banner & Tile Images for Resources & Company page/IBSFINtech-Greatest-Strength.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Webinars</h1>
              <p className="text-xl text-white max-w-3xl">
                Join industry experts for insights on treasury management, risk strategies, and financial technology innovations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Webinars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join industry experts for insights on treasury management, risk strategies, and financial technology innovations
          </p>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Upcoming Webinars</h2>
            <div className="text-sm text-gray-500">
              Showing {upcomingWebinars.length} upcoming webinars
            </div>
          </div>

          {upcomingWebinars.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                    <Play className="h-12 w-12 text-white bg-blue-600 rounded-full p-2 absolute" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {webinar.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <span>{formatDate(webinar.date)}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1.5" />
                      <span>{webinar.time} ({webinar.duration})</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1.5" />
                      <span className="mr-3">{webinar.speaker}</span>
                      <Users className="h-4 w-4 mr-1.5" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {webinar.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Register Now
                      </button>
                      <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                        Add to Calendar
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No upcoming webinars</h3>
              <p className="mt-1 text-sm text-gray-500">Check back later for upcoming events.</p>
            </div>
          )}
        </div>

        {/* Past Webinars */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Past Webinars</h2>
            <div className="text-sm text-gray-500">
              Showing {pastWebinars.length} past webinars
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {pastWebinars.map((webinar) => (
                <li key={webinar.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-3">
                            {webinar.category}
                          </span>
                          <p className="text-sm text-gray-500">
                            {formatDate(webinar.date)} • {webinar.duration}
                          </p>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mt-1">
                          {webinar.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {webinar.description}
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <User className="flex-shrink-0 mr-1.5 h-4 w-4" />
                          <span>{webinar.speaker}</span>
                          <span className="mx-2">•</span>
                          <Users className="flex-shrink-0 mr-1.5 h-4 w-4" />
                          <span>{webinar.attendees} attended</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={webinar.recordingUrl}
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <Play className="-ml-0.5 mr-2 h-4 w-4" />
                          Watch Recording
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pagination */}
          <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-8 rounded-b-lg">
            <div className="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                  <span className="font-medium">12</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </nav>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-700 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Want to speak at one of our webinars?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                We're always looking for industry experts to share their insights. Let us know if you're interested in being a speaker.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <a
                href="/contact/speaker"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Become a Speaker
              </a>
              <a
                href="/contact"
                className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage;
