'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { MapPin, Building, Globe } from 'lucide-react';

interface OfficeLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  phone2?: string;
  email: string;
  coordinates: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
}

const WorldMap = () => {
  const { theme } = useTheme();
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const offices: OfficeLocation[] = [
    {
      id: 'bengaluru',
      name: 'Bengaluru',
      city: 'Karnataka, India',
      address: 'JP CORP Building, #219/11, 2nd Floor, Bellary Road, Sadashivanagar, Bengaluru-560080',
      phone: '(+91) 95915 99720',
      phone2: '(+91) (80) 41219181',
      email: 'contactus@ibsfintech.com',
      coordinates: { x: 77.5, y: 45 } // India position
    },
    {
      id: 'usa',
      name: 'New Jersey',
      city: 'USA',
      address: '924 US-9 SUITE 200, South Amboy, NJ 08879',
      phone: '+1 (908) 529-1096',
      email: 'sales-us@ibsfintech.com',
      coordinates: { x: 25, y: 35 } // USA East Coast
    },
    {
      id: 'mumbai-andheri',
      name: 'Mumbai - Andheri',
      city: 'Maharashtra, India',
      address: 'Level – 7, Wing – B, Satellite Gazebo, Guruhargovidji Marg, Andheri Ghatkopar Link Road, Chakala, Andheri, Mumbai - 400093',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      coordinates: { x: 75, y: 42 } // Mumbai position
    },
    {
      id: 'mumbai-bkc',
      name: 'Mumbai - BKC',
      city: 'Maharashtra, India',
      address: 'AKT Corporate Office: Level 20, Crescenzo Business District, Bandra Kurla Complex, Bandra, Mumbai - 400051',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      coordinates: { x: 75.5, y: 43 } // Mumbai BKC position (slightly offset)
    },
    {
      id: 'gurugram',
      name: 'Gurugram',
      city: 'Haryana, India',
      address: 'Building 8, Level 12, Tower C, DLF Cyber City Complex, 12th Cross Road, DLF City Phase II, Gurgaon, Haryana, 122002',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      coordinates: { x: 76, y: 38 } // Delhi/Gurugram position
    }
  ];

  return (
    <div className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 mb-6"
          >
            <Globe className="h-8 w-8 text-white" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Global Presence
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With strategically located offices across India and the United States, we're positioned to serve clients globally with local expertise and support.
          </motion.p>
        </div>

        {/* World Map Container */}
        <motion.div 
          className={`relative rounded-3xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-8`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* World Map SVG */}
          <div className="relative w-full aspect-[2/1] min-h-[400px]">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              style={{ filter: theme === 'dark' ? 'brightness(0.8)' : 'none' }}
            >
              {/* World Map Path - Simplified continents */}
              <g fill={theme === 'dark' ? '#374151' : '#e5e7eb'} stroke={theme === 'dark' ? '#4b5563' : '#d1d5db'} strokeWidth="0.5">
                {/* North America */}
                <path d="M50,50 L250,50 L280,80 L290,120 L270,150 L240,180 L200,200 L150,190 L100,160 L70,120 Z" />
                {/* South America */}
                <path d="M200,220 L250,210 L270,250 L280,300 L270,350 L250,380 L220,390 L200,380 L190,340 L185,300 L190,260 Z" />
                {/* Europe */}
                <path d="M450,80 L520,70 L550,90 L560,120 L540,140 L500,150 L460,140 L440,120 L445,100 Z" />
                {/* Africa */}
                <path d="M480,160 L550,150 L580,200 L590,280 L570,350 L540,380 L500,390 L470,380 L450,340 L460,280 L470,220 Z" />
                {/* Asia */}
                <path d="M600,60 L800,50 L850,80 L900,120 L920,160 L900,200 L850,220 L800,210 L750,180 L700,150 L650,120 L620,90 Z" />
                {/* Australia */}
                <path d="M750,320 L850,310 L880,330 L890,350 L870,370 L830,380 L780,375 L750,360 Z" />
                {/* India subcontinent highlight */}
                <path d="M720,180 L780,170 L800,200 L790,240 L770,260 L740,250 L720,220 Z" fill={theme === 'dark' ? '#065f46' : '#d1fae5'} stroke="#10b981" strokeWidth="1"/>
              </g>
              
              {/* Grid lines for professional look */}
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke={theme === 'dark' ? '#374151' : '#f3f4f6'} strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Office Location Pins */}
              {offices.map((office, index) => (
                <g key={office.id}>
                  {/* Animated pulse effect */}
                  <motion.circle
                    cx={office.coordinates.x * 10}
                    cy={office.coordinates.y * 10}
                    r="20"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0.6"
                    initial={{ r: 15, opacity: 0.8 }}
                    animate={{ 
                      r: [15, 25, 15], 
                      opacity: [0.8, 0.3, 0.8] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.4 
                    }}
                  />
                  
                  {/* Main pin */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setHoveredLocation(office.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={office.coordinates.x * 10}
                      cy={office.coordinates.y * 10}
                      r="12"
                      fill="url(#pinGradient)"
                      stroke="#ffffff"
                      strokeWidth="3"
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
                    />
                    <circle
                      cx={office.coordinates.x * 10}
                      cy={office.coordinates.y * 10}
                      r="6"
                      fill="#ffffff"
                    />
                  </motion.g>
                </g>
              ))}

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Hover Cards */}
            <AnimatePresence>
              {hoveredLocation && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-10 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-2xl border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} p-4 max-w-sm`}
                  style={{
                    left: `${offices.find(o => o.id === hoveredLocation)?.coordinates.x}%`,
                    top: `${(offices.find(o => o.id === hoveredLocation)?.coordinates.y || 0) - 15}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  {(() => {
                    const office = offices.find(o => o.id === hoveredLocation);
                    if (!office) return null;
                    
                    return (
                      <>
                        <div className="flex items-start mb-3">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-teal-900/30' : 'bg-teal-100'} mr-3`}>
                            <Building className={`h-5 w-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-base mb-1">{office.name}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{office.city}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <MapPin className={`h-3 w-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mr-2 mt-0.5 flex-shrink-0`} />
                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                              {office.address}
                            </p>
                          </div>
                          
                          <div className="flex items-center">
                            <svg className={`h-3 w-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mr-2`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <a 
                              href={`tel:${office.phone.replace(/\D/g, '')}`}
                              className={`text-xs hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                            >
                              {office.phone}
                            </a>
                          </div>

                          {office.phone2 && (
                            <div className="flex items-center">
                              <svg className={`h-3 w-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mr-2`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                              <a 
                                href={`tel:${office.phone2.replace(/\D/g, '')}`}
                                className={`text-xs hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                              >
                                {office.phone2}
                              </a>
                            </div>
                          )}
                          
                          <div className="flex items-center">
                            <svg className={`h-3 w-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mr-2`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a 
                              href={`mailto:${office.email}`}
                              className={`text-xs hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Office Statistics */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={`text-center p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-3xl font-bold text-teal-600 mb-2">5</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Global Offices</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Countries</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Support</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Experts</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorldMap;

