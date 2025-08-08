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
    <div className="container mx-auto px-4 py-12">
      <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/10 shadow-xl p-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Section */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Offerings
            </h2>
            <p className="text-sm text-white/90 mb-4 text-justify">
              Step into the future of treasury with IBSFINtech's comprehensive, integrated, and intelligent Treasury Management System — designed to put CFOs, Treasurers, and Finance Leaders in full control of their financial ecosystem.
            </p>
            <p className="text-sm text-white/90 mb-3 text-justify">
              Whether you're a global enterprise or an agile SME, our all-in-one platform empowers you to: <br /><br />
            </p>
            <ul className="space-y-2 mb-4 text-justify">
              <li className="flex items-start">
                <svg className="h-4 w-4 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-white/90">Gain real-time visibility across cash, risk, trade, and investments</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-white/90">Automate complex workflows and eliminate manual errors</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-white/90">Mitigate operational risks and ensure regulatory compliance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-white/90">Drive strategic efficiency and ensure business continuity</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-white/90">Operate seamlessly across multiple entities, currencies, geographies, and asset classes</span>
              </li>
            </ul>
            <p className="text-sm text-white/90">
              Built to scale with your growth, the platform is available as both on-premise and SaaS — giving you flexibility with agility.
            </p>
          </div>

          {/* Right Section with Dotted Lines Background */}
          <div className="w-full lg:w-3/5 relative group">

            {/* Swiper Carousel */}
            <div className="relative z-10">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
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
                style={{ paddingTop: '30px', paddingBottom: '30px', overflow: 'hidden' }}
              >
                {SERVICES.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className="rounded-xl px-3 pt-5 pb-6 h-[240px] flex flex-col justify-between text-center relative transition-all duration-500 bg-white/5 backdrop-blur-sm"
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
                        <div className="flex flex-col items-center gap-2 -mt-4">
                          <div className="relative w-16 h-16 flex items-center justify-center">
                            <Image
                              src={service.icon}
                              alt={service.title}
                              width={64}
                              height={64}
                              className={`${isActive ? 'scale-110' : 'scale-90 opacity-70'} transition-all duration-500`}
                              style={isActive ? { filter: `drop-shadow(0 0 8px ${service.glowColor})` } : {}}
                            />
                          </div>
                          <h3 className="text-base font-semibold text-white">{service.title}</h3>
                        </div>
                        <p className="text-xs text-white mt-2">{service.description}</p>
                        <button
                          onClick={() => window.location.href = '#'}
                          className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-700 transition mt-3"
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
                className="swiper-button-prev absolute left-[-15px] top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                className="swiper-button-next absolute right-[-15px] top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 shadow-lg"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
            
            {/* Interfaces Section */}
            <div className="mt-6 relative z-10">
              <h3 className="text-white text-lg font-bold mb-2 text-center">Interfaces</h3>
              <p className="text-xs text-white text-center mb-3">Integrated touchpoints powering our services</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {INTERFACES.map(({ name, icon }, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 border border-white/20 text-white rounded-lg p-1 flex flex-col items-center justify-center gap-0.5 text-center transition-colors duration-200 hover:bg-white/15 h-16"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image src={icon} alt={name} width={32} height={32} className="filter brightness-0 invert" />
                    </div>
                    <span className="font-medium text-xs">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}