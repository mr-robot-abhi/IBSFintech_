'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  year: string;
  title: string;
  photoCaption: string;
  achievements: string[];
  image: string;
}

const milestones: Milestone[] = [
  {
    year: '2006-16',
    title: 'Foundation & Industry Recognition',
    photoCaption: "IBSFINtech's first major industry recognition — Express IT Award 2015, presented by Shri Ravi Shankar Prasad to Mr. C.M. Grover.",
    achievements: [
      'First Client: The Times of India – Marked a strong beginning with India\'s leading media house.',
      'Global Recognition: Winner of Thomson Reuters Fintech Challenge'
    ],
    image: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg'
  },
  {
    year: '2017',
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
    title: 'Product Innovation & Recognition',
    photoCaption: "IBSFINtech partners with London Stock Exchange Group (LSEG) — advancing data-driven treasury transformation",
    achievements: [
      'Product Milestone: Launched InTReaX® – IBSFINtech\'s SaaS-based Treasury Management System',
      'Global Recognition: Named Software Provider of the Year – APAC at the Corporate Treasurer Awards 2021 (Singapore)'
    ],
    image: '/bg_13.jpeg'
  },
  {
    year: '2022',
    title: 'Strategic Partnerships',
    photoCaption: "IBSFINtech partners with Oracle to redefine the future of intelligent treasury ecosystems. Further strengthening this vision through strategic collaborations with YES Bank and KPMG — uniting financial expertise, innovation, and scale.",
    achievements: [
      'Global Partnership: Oracle, Yes Bank & KPMG',
      'Embarked on global journey – Singapore, Dubai & Japan',
      'IBSFINtech appoints Ex-Oracle, Automation Anywhere Senior leader Pramod Agrawal as the new Chief Technology Officer'
    ],
    image: '/bg_14.jpeg'
  },
  {
    year: '2023',
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
    title: 'Innovation & Strategic Alliances',
    photoCaption: "IBSFINtech partners with Deloitte — uniting TreasuryTech innovation with global consulting expertise",
    achievements: [
      'SME Foray: Launched InnoTreasury – a SaaS TMS designed for the SME segment.',
      'Attained ISO/IEC 27001:2013 certification for robust information security.',
      'Global Recognition: Featured in IDC MarketScape 2024 for Worldwide Cash Management Systems.',
      'IBSFINtech partners with Axis Bank, Aditya Birla Capital, TraydStream and NetSuite',
      'Industry Collaboration: Partnered with TMI for its flagship treasury event in Mumbai.'
    ],
    image: '/bg_16.jpg'
  },
  {
    year: '2025',
    title: 'Global Expansion & Innovation',
    photoCaption: "Deloitte CEO (SA) inaugurates IBSFINtech's new office — marking a new chapter of growth and innovation.",
    achievements: [
      'Southeast Asia Expansion: Marked a key step in IBSFINtech\'s global growth journey.',
      'Bloomberg Partnership: Enhanced market data capabilities through strategic collaboration.',
      'Office Inauguration: Romal Shetty inaugurates IBSFINtech\'s new corporate office'
    ],
    image: '/bg_18.jpg'
  }
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearIndicatorRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const yearIndicator = yearIndicatorRef.current;
    const timeline = timelineRef.current;

    if (!container || !yearIndicator || !timeline) return;

    // Create ScrollTrigger for each milestone
    milestones.forEach((milestone, index) => {
      const milestoneElement = document.querySelector(`[data-milestone="${index}"]`);
      if (!milestoneElement) return;

      ScrollTrigger.create({
        trigger: milestoneElement,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          gsap.to(yearIndicator, {
            duration: 0.6,
            ease: 'power2.out',
            onUpdate: function() {
              if (yearIndicator) {
                yearIndicator.textContent = milestone.year;
              }
            }
          });
          
          // Add glow effect to current year
          gsap.to(yearIndicator, {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        },
        onLeave: () => {
          gsap.to(yearIndicator, {
            boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        },
        onEnterBack: () => {
          gsap.to(yearIndicator, {
            duration: 0.6,
            ease: 'power2.out',
            onUpdate: function() {
              if (yearIndicator) {
                yearIndicator.textContent = milestone.year;
              }
            }
          });
          
          gsap.to(yearIndicator, {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(yearIndicator, {
            boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });

      // Animate milestone cards on scroll
      gsap.fromTo(milestoneElement, 
        {
          opacity: 0,
          x: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: milestoneElement,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate timeline line
    gsap.fromTo(timeline,
      { height: 0 },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
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

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IBSFINtech Journey of <span className="text-blue-600">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our remarkable journey from a startup to a global leader in treasury technology solutions
          </p>
        </div>

        <div className="relative flex">
          {/* Fixed Year Indicator */}
          <div className="sticky top-1/2 transform -translate-y-1/2 z-10">
            <div 
              ref={yearIndicatorRef}
              className="bg-white border-4 border-blue-600 rounded-full w-32 h-32 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-xl transition-all duration-300"
            >
              2006-16
            </div>
          </div>

          {/* Timeline Line */}
          <div className="relative ml-16 flex-1">
            <div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" ref={timelineRef}></div>

            {/* Timeline Items */}
            <div className="space-y-16 ml-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  data-milestone={index}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-12 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/3 relative">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl font-bold text-blue-600 mr-4">
                            {milestone.year}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {milestone.title}
                          </h3>
                        </div>
                        
                        {/* Photo Caption */}
                        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                          <p className="text-gray-700 italic leading-relaxed">
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
    </section>
  );
};

export default Timeline;