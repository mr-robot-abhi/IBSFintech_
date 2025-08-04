'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SERVICES = [
  { title: 'Cash & Liquidity', description: 'Visibility, forecasting, bank analysis', icon: '/Modules Icon_Color 1/Cash-Liquidity-Management.svg', glowColor: 'rgba(255, 204, 0, 0.8)' },
  { title: 'Payments', description: 'Approvals, automation, centralization', icon: '/Modules Icon_Color 1/Payments.svg', glowColor: 'rgba(0, 122, 255, 0.8)' },
  { title: 'Supply Chain', description: 'AP/AR automation, working capital', icon: '/Modules Icon_Color 1/Supply-Chain-Finance.svg', glowColor: 'rgba(255, 59, 48, 0.8)' },
  { title: 'Commodity', description: 'Margin, hedging, exposure tracking', icon: '/Modules Icon_Color 1/Commodity-Management.svg', glowColor: 'rgba(88, 86, 214, 0.8)' },
  { title: 'Currency Risk', description: 'Hedging, derivatives, valuation', icon: '/Modules Icon_Color 1/Currency-Risk-Management.svg', glowColor: 'rgba(52, 199, 89, 0.8)' },
  { title: 'Investment', description: 'Mutual funds, FDs, PMS, bonds', icon: '/Modules Icon_Color 1/Investment-Management.svg', glowColor: 'rgba(255, 0, 0, 0.8)' },
  { title: 'Trade Finance', description: 'LCs, BCs, shipment finance', icon: '/Modules Icon_Color 1/Trade-Finance-Management.svg', glowColor: 'rgba(0, 255, 0, 0.8)' },
  { title: 'Debt Management', description: 'Borrowings, loans, intercompany', icon: '/Modules Icon_Color 1/Debt-Management.svg', glowColor: 'rgba(90, 200, 250, 0.8)' },
];

const INTERFACES = [
  { name: 'Banks', icon: '/Interface Icons color_1/Banks.svg' },
  { name: 'Dealing Platforms', icon: '/Interface Icons color_1/Dealing-Platform-Icon-color1.svg' },
  { name: 'Market Data Providers', icon: '/Interface Icons color_1/Market Data Providers.svg' },
  { name: 'ERP & 3rd Party', icon: '/Interface Icons color_1/ERP.svg' },
];

export default function OurOfferingsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto px-6 py-12 relative z-10">
      {/* Left Section */}
      <div className="md:w-[40%] pr-8 flex flex-col justify-start relative z-10 mt-6">
        <div className="backdrop-blur-sm bg-black/30 p-6 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Our Offerings</h2>
          <p className="text-white text-lg mb-4">
            Modular financial services — enhanced by robust technology, customizable modules, and secure integrations.
          </p>
          <p className="text-white text-base opacity-80">
            From advanced cash and liquidity solutions to comprehensive trade finance and investment options, we bring
            efficiency and transparency to your financial ecosystem.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-[60%] mt-6 md:mt-0 relative group">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper"
          style={{ paddingTop: '40px', paddingBottom: '40px', overflow: 'hidden' }}
        >
          {SERVICES.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide key={index}>
                <div
                  className="rounded-xl px-4 pt-6 pb-8 h-[280px] flex flex-col justify-between text-center relative transition-all duration-500 bg-white/5 backdrop-blur-sm"
                  style={{
                    boxShadow: isActive
                      ? `0 0 20px 6px ${service.glowColor}, 0 0 40px 14px ${service.glowColor}`
                      : 'none',
                    transform: isActive ? 'scale(1.07)' : 'scale(0.92)',
                    border: isActive ? `2px solid ${service.glowColor}` : '1px solid transparent',
                    position: 'relative',
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  {/* Content */}
                  <div className="flex flex-col items-center gap-2 -mt-6">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={80}
                        height={80}
                        className={`${isActive ? 'scale-110' : 'scale-90 opacity-70'} transition-all duration-500`}
                        style={isActive ? { filter: `drop-shadow(0 0 8px ${service.glowColor})` } : {}}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-sm text-white mt-2">{service.description}</p>
                  <button
                    onClick={() => window.location.href = '#'}
                    className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition mt-4"
                  >
                    Learn More
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev absolute left-[-20px] top-1/2 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 shadow-lg"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          className="swiper-button-next absolute right-[-20px] top-1/2 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 shadow-lg"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        {/* Dotted Line Circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-[500px] h-[500px]" viewBox="0 0 500 500">
            <defs>
              <pattern id="dottedPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="2" fill="#60A5FA" opacity="0.6">
                  <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </pattern>
              <pattern id="dottedPatternReverse" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="2" fill="#A78BFA" opacity="0.6">
                  <animate attributeName="r" values="3;1;3" dur="2s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <circle 
              cx="250" 
              cy="250" 
              r="180" 
              fill="none" 
              stroke="url(#dottedPattern)" 
              strokeWidth="4" 
              strokeDasharray="8,8"
            />
            <circle 
              cx="250" 
              cy="250" 
              r="200" 
              fill="none" 
              stroke="url(#dottedPatternReverse)" 
              strokeWidth="4" 
              strokeDasharray="8,8"
            />
          </svg>
        </div>

        {/* Interfaces Section */}
        <div className="mt-8">
          <h3 className="text-white text-xl font-bold mb-2 text-center">Interfaces</h3>
          <p className="text-sm text-white text-center mb-4">Integrated touchpoints powering our services</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INTERFACES.map(({ name, icon }, idx) => (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg p-1 flex flex-col items-center justify-center gap-1 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/50 hover:-translate-y-1 h-24"
              >
                <div className="w-12 h-12 p-0 relative flex items-center justify-center">
                  <div className="absolute w-10 h-10 bg-white/30 rounded-full blur-sm group-hover:bg-white/40 transition-all duration-300"></div>
                  <Image src={icon} alt={name} width={40} height={40} className="filter brightness-0 invert" />
                </div>
                <span className="font-bold text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}