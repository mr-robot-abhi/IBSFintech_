import Image from 'next/image';
import Link from 'next/link';

const EventsDetailsPage = () => {
  const events = [
    {
      id: 1,
      title: 'IBSFINtech at Global Trade Review (GTR) INDIA 2024',
      subtitle: 'Pioneering the Future of Trade Finance',
      date: 'May 22, 2024',
      location: 'JW Marriott, Mumbai',
      image: '/Home Page Banner 2.png',
      content: [
        'We are excited to share our incredible experience at the Global Trade Review (GTR) INDIA 2024. As a key event for trade finance professionals, GTR India provided an exceptional platform for industry leaders to explore and discuss the latest trends and innovations in the trade finance sector.',
        'As a proud co-sponsor of GTR India 2024, IBSFINtech reaffirmed our commitment to advancing the trade finance industry. Our dedicated booth featured our groundbreaking treasury and trade finance management solutions, where we engaged with delegates, showcased our cutting-edge technologies, and explored how our solutions can transform corporate treasury and trade finance operations.'
      ],
      highlights: [
        'Event Sponsorship: Our role as a sponsor was instrumental in supporting the event, promoting industry collaboration, and driving innovation.',
        'Innovative Solutions: We showcased our comprehensive suite of treasury and trade finance management solutions, with a focus on automation, risk management, and compliance.',
        'Networking Opportunities: We engaged with industry leaders, peers, and potential collaborators, fostering meaningful discussions and exploring new business opportunities.',
        'Brand Visibility: Our participation and sponsorship enhanced our brand visibility and reinforced our leadership in the trade finance and treasury management sector.'
      ]
    },
    {
      id: 2,
      title: 'IBSFINtech Leads the Conversation at the 3rd India Family Office Summit',
      subtitle: 'Navigating Regulatory and Compliance Challenges',
      date: 'March 1, 2024',
      location: 'Ginger, Mumbai International Airport',
      image: '/Home Page Banner 3.png',
      content: [
        'We are thrilled to share our impactful experience as a TreasuryTech partner at the 3rd India Family Office Summit & Awards 2024. This prestigious event provided a vital platform for industry leaders and experts to explore the evolving landscape of family offices.',
        'As a key TreasuryTech sponsor, IBSFINtech played a significant role in the panel discussion titled "Family Office Evolving Regulatory Aspects, Tax, Legal, Governance, Risk, and Compliance."'
      ],
      highlights: [
        'Navigating Regulatory Challenges: The discussion highlighted the complexities of evolving regulatory frameworks and the need for family offices to stay agile and informed to manage compliance effectively.',
        'Effective Governance Strategies: Mr. CM Grover, our Managing Director and CEO, provided key insights on governance best practices, emphasizing the importance of aligning family office structures with strategic objectives and optimizing organizational design to meet future needs.',
        'Adapting to Dynamic Environments: The panel explored strategies for family offices to adapt to today\'s rapidly changing environment, stressing the need for proactive risk management and adaptive governance models.',
        'Tax and Legal Considerations: Key discussions focused on navigating tax regulations and legal frameworks, underlining the importance of staying updated with legal requirements and implementing robust tax planning strategies.'
      ]
    },
    {
      id: 3,
      title: 'IBSFINtech\'s CEO Highlights "Bridging Finance and Technology" at The Economic Times CFO Leadership Summit 2024',
      date: 'March 7, 2024',
      location: 'Holiday Inn, Mumbai',
      image: '/Home Page Banner 4.png',
      content: [
        'The Economic Times hosted the 5th edition of their esteemed CFO Leadership Summit. As a proud sponsor of the Summit, IBSFINtech contributed to creating an exceptional platform that gathered key financial leaders to explore the evolving intersection of finance and technology.',
        'IBSFINtech\'s Managing Director and CEO, Mr. CM Grover, played a pivotal role in a thought-provoking panel discussion titled "Conflicting Roles Driving Successful Tech Investment." As a neutral mediator, Mr. Grover facilitated a dynamic dialogue among distinguished panelists.'
      ],
      highlights: [
        'Bridging Finance and Technology: The discussion underscored the need for CFOs to become more tech-savvy and work closely with CIOs to effectively manage tech investments while maintaining financial health.',
        'Dynamic Roles in Tech Investment: The panel explored how evolving roles within finance and technology impact decision-making and drive successful tech investments.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <Link 
          href="/resources/events" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Events</h1>
        <p className="text-xl text-gray-600">
          Explore our complete calendar of events, conferences, and webinars where we share insights and innovations in treasury and finance technology.
        </p>
      </div>

      <div className="space-y-16">
        {events.map((event) => (
          <article key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h2>
                {event.subtitle && (
                  <h3 className="text-xl text-blue-600 font-medium mb-4">
                    {event.subtitle}
                  </h3>
                )}
                
                <div className="prose max-w-none text-gray-600 mb-6">
                  {event.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/resources/events"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Back to Events Overview
        </Link>
      </div>
    </div>
  );
};

export default EventsDetailsPage;
