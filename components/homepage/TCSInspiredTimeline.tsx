'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Milestone {
  year: string;
  displayYear: string;
  title: string;
  photoCaption: string;
  achievements: string[];
  image: string;
  partnerLogo?: string;
}

const milestones: Milestone[] = [
  {
    year: '2006-16',
    displayYear: '2006',
    title: 'Foundation & Industry Recognition',
    photoCaption: "IBSFINtech's first major industry recognition — Express IT Award 2015, presented by Shri Ravi Shankar Prasad to Mr. C.M. Grover.",
    achievements: [
      'First Client: The Times of India – Marked a strong beginning with India\'s leading media house.',
      'Global Recognition: Winner of Thomson Reuters Fintech Challenge'
    ],
    image: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
    partnerLogo: '/Partners/IBSFINtech-Partner-KPMG.svg'
  },
  {
    year: '2017',
    displayYear: '2017',
    title: 'Client Expansion & Growth',
    photoCaption: "Acquired 8 new prestigious clients: Olam Agro India Ltd, Himatsingka Seide Ltd, Mahindra & Mahindra, Sonalika Tractors, Maruti Suzuki India Ltd, HCL Corp (Family Office), JSW Steel, Sai Life Sciences Ltd",
    achievements: [
      'Acquired 8 new clients in 2017',
      'Diversified portfolio across automotive, agriculture, textile, and pharmaceutical sectors'
    ],
    image: '/bg_6.jpg'
  },
  {
    year: '2018-20',
    displayYear: '2018',
    title: 'Global Expansion & Leadership',
    photoCaption: "Shailesh Haribhakti joins in as Chairman",
    achievements: [
      'Global Entry: Expanded into Europe & Southeast Asia with IMR Metallurgical & JSW International.',
      'Advisory Boost: Aakash Moondhra (ex-Global CFO, PayU) joins the board.',
      'Global Recognition: Ranked among the Top 8 TMS globally.'
    ],
    image: '/bg_10.jpg'
  },
  {
    year: '2021',
    displayYear: '2021',
    title: 'Product Innovation & Recognition',
    photoCaption: "IBSFINtech partners with London Stock Exchange Group (LSEG) — advancing data-driven treasury transformation",
    achievements: [
      'Product Milestone: Launched InTReaX® – IBSFINtech\'s SaaS-based Treasury Management System',
      'Global Recognition: Named Software Provider of the Year – APAC at the Corporate Treasurer Awards 2021 (Singapore)'
    ],
    image: '/p1.png',
    partnerLogo: '/Partners/IBSFINtech-Partner-LSEG.svg'
  },
  {
    year: '2022',
    displayYear: '2022',
    title: 'Strategic Partnerships',
    photoCaption: "IBSFINtech partners with Oracle to redefine the future of intelligent treasury ecosystems. Further strengthening this vision through strategic collaborations with YES Bank and KPMG — uniting financial expertise, innovation, and scale.",
    achievements: [
      'Global Partnership: Oracle, Yes Bank & KPMG',
      'Embarked on global journey – Singapore, Dubai & Japan',
      'IBSFINtech appoints Ex-Oracle, Automation Anywhere Senior leader Pramod Agrawal as the new Chief Technology Officer'
    ],
    image: '/p2.png',
    partnerLogo: '/Partners/IBSFINtech-Partner-ORACLE.svg'
  },
  {
    year: '2023',
    displayYear: '2023',
    title: 'Market Leadership & US Expansion',
    photoCaption: "Padma Shri T.V. Mohandas Pai inaugurates IBSFINtech's New, State-of-the-Art Development Centre in Bengaluru, India to fuel the TreasuryTech company's global expansion plans",
    achievements: [
      'IDC Recognition: Named a Major Player in IDC MarketScape for SaaS & Cloud Treasury solutions.',
      'Global Expansion: Entered the US market, scaling TreasuryTech globally.',
      'Advisory Boost: Manoj Kohli joins the advisory board.'
    ],
    image: '/bg_15.jpeg'
  },
  {
    year: '2024',
    displayYear: '2024',
    title: 'Innovation & Strategic Alliances',
    photoCaption: "IBSFINtech partners with Deloitte — uniting TreasuryTech innovation with global consulting expertise",
    achievements: [
      'SME Foray: Launched InnoTreasury – a SaaS TMS designed for the SME segment.',
      'Attained ISO/IEC 27001:2013 certification for robust information security.',
      'Global Recognition: Featured in IDC MarketScape 2024 for Worldwide Cash Management Systems.',
      'IBSFINtech partners with Axis Bank, Aditya Birla Capital, TraydStream and NetSuite',
      'Industry Collaboration: Partnered with TMI for its flagship treasury event in Mumbai.'
    ],
    image: '/p3.png',
    partnerLogo: '/Partners/IBSFINtech-Partner-Deloitte.svg'
  },
  {
    year: '2025',
    displayYear: '2025',
    title: 'Global Expansion & Innovation',
    photoCaption: "Deloitte CEO (SA) inaugurates IBSFINtech's new office — marking a new chapter of growth and innovation.",
    achievements: [
      'Southeast Asia Expansion: Marked a key step in IBSFINtech\'s global growth journey.',
      'Bloomberg Partnership: Enhanced market data capabilities through strategic collaboration.',
      'Office Inauguration: Romal Shetty inaugurates IBSFINtech\'s new corporate office'
    ],
    image: '/bg_18.jpg',
    partnerLogo: '/Partners/IBSFINtech-Partner-Bloomberg.svg'
  }
];

const Timeline: React.FC = () => {
  const [activeYear, setActiveYear] = useState('2006');
  const [showYearIndicator, setShowYearIndicator] = useState(false);
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if we're in the timeline section
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const timelineTop = timelineRect.top + scrollY;
        const timelineBottom = timelineTop + timelineRect.height;
        
        // Show year indicator only when timeline line is actually visible
        // Add some padding to start showing when we're closer to the actual timeline content
        const adjustedTop = timelineTop + 200; // Start showing when we're closer to the timeline line
        const adjustedBottom = timelineBottom - 200; // Stop showing before the section ends
        
        // More precise: only show when we're actually seeing the timeline content
        const isTimelineInView = scrollY + windowHeight > adjustedTop && scrollY < adjustedBottom;
        
        // Additional check: ensure first milestone is actually visible before showing year indicator
        const firstMilestone = document.getElementById('milestone-0');
        const lastMilestone = document.getElementById(`milestone-${milestones.length - 1}`);
        let shouldShowIndicator = isTimelineInView;
        
        if (firstMilestone && isTimelineInView) {
          const firstMilestoneRect = firstMilestone.getBoundingClientRect();
          // Only show when first milestone is actually in viewport
          shouldShowIndicator = firstMilestoneRect.top < windowHeight * 0.8;
        }
        
        // Additional check: hide when last milestone is going out of view
        if (lastMilestone && shouldShowIndicator) {
          const lastMilestoneRect = lastMilestone.getBoundingClientRect();
          // Hide when last milestone is going out of viewport
          if (lastMilestoneRect.bottom < windowHeight * 0.3) {
            shouldShowIndicator = false;
          }
        }
        
        setShowYearIndicator(shouldShowIndicator);
      }
      
      milestones.forEach((milestone, index) => {
        const element = document.getElementById(`milestone-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if element is in viewport
          if (scrollY + windowHeight * 0.6 >= elementTop && scrollY + windowHeight * 0.4 <= elementBottom) {
            setActiveYear(milestone.displayYear);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={timelineRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IBSFINtech Journey of <span className="text-blue-600">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our remarkable journey from a startup to a global leader in treasury technology solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline Container */}
          <div className="flex">
            {/* Year Indicator - Fixed Position - Only show when timeline is in view */}
            {showYearIndicator && (
              <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-50">
                <div 
                  className="text-6xl font-black text-black"
                  style={{ fontFamily: 'Kahlo Black Essential, sans-serif' }}
                >
                  {activeYear}
                </div>
              </div>
            )}
            
            {/* Spacer for layout */}
            <div className="w-8 flex-shrink-0"></div>

            {/* Timeline Content */}
            <div className="flex-1 relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {/* Timeline Items */}
              <div className="pl-8 space-y-16">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    id={`milestone-${index}`}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-2 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                      <div className="md:flex">
                        {/* Image/Logo Background */}
                        <div className="md:w-1/3 relative">
                          {milestone.partnerLogo ? (
                            /* Use partner logo as background */
                            <div className="w-full h-64 bg-white flex items-center justify-center p-4">
                              <img 
                                src={milestone.partnerLogo} 
                                alt="Partner Logo Background"
                                className="w-full h-full object-contain opacity-15"
                                style={{ filter: 'brightness(0) saturate(100%)' }}
                              />
                            </div>
                          ) : (
                            /* Fallback to original image for years without partner logos */
                            <img 
                              src={milestone.image} 
                              alt={milestone.title}
                              className="w-full h-64 object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="md:w-2/3 p-8">
                          {/* Photo Caption - Now Prominent */}
                          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                            <p className="text-gray-700 font-bold text-lg leading-relaxed">
                              {milestone.photoCaption}
                            </p>
                          </div>
                          
                          {/* Achievements */}
                          <ul className="space-y-3">
                            {milestone.achievements.map((achievement, achievementIndex) => (
                              <li 
                                key={achievementIndex}
                                className="flex items-start text-gray-600"
                              >
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="leading-relaxed font-medium">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;