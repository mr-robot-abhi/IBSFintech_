import { useRef, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  { 
    title: 'Cash & Liquidity', 
    description: 'Visibility, forecasting, bank analysis', 
    icon: '/Modules Icon_Color 1/Cash-Liquidity-Management.svg', 
    glowColor: 'rgba(255, 204, 0, 0.8)' 
  },
  { 
    title: 'Payments', 
    description: 'Approvals, automation, centralization', 
    icon: '/Modules Icon_Color 1/Payments.svg', 
    glowColor: 'rgba(0, 122, 255, 0.8)' 
  },
  { 
    title: 'Supply Chain', 
    description: 'AP/AR automation, working capital', 
    icon: '/Modules Icon_Color 1/Supply-Chain-Finance.svg', 
    glowColor: 'rgba(255, 59, 48, 0.8)' 
  },
  { 
    title: 'Commodity', 
    description: 'Margin, hedging, exposure tracking', 
    icon: '/Modules Icon_Color 1/Commodity-Management.svg', 
    glowColor: 'rgba(88, 86, 214, 0.8)' 
  },
  { 
    title: 'Currency Risk', 
    description: 'Hedging, derivatives, valuation', 
    icon: '/Modules Icon_Color 1/Currency-Risk-Management.svg', 
    glowColor: 'rgba(52, 199, 89, 0.8)' 
  },
  { 
    title: 'Investment', 
    description: 'Mutual funds, FDs, PMS, bonds', 
    icon: '/Modules Icon_Color 1/Investment-Management.svg', 
    glowColor: 'rgba(255, 0, 0, 0.8)' 
  },
  { 
    title: 'Trade Finance', 
    description: 'LCs, BCs, shipment finance', 
    icon: '/Modules Icon_Color 1/Trade-Finance-Management.svg', 
    glowColor: 'rgba(0, 255, 0, 0.8)' 
  },
  { 
    title: 'Debt Management', 
    description: 'Borrowings, loans, intercompany', 
    icon: '/Modules Icon_Color 1/Debt-Management.svg', 
    glowColor: 'rgba(90, 200, 250, 0.8)' 
  },
];

const INTERFACES = [
  { name: 'Banks', icon: '/Interface Icons color_1/Banks.svg' },
  { name: 'Dealing Platforms', icon: '/Interface Icons color_1/Dealing-Platform-Icon-color1.svg' },
  { name: 'Market Data Providers', icon: '/Interface Icons color_1/Market Data Providers.svg' },
  { name: 'ERP & 3rd Party', icon: '/Interface Icons color_1/ERP.svg' },
];

export default function OurOfferingsSection() {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false, playOnInit: true })
  );
  
  // Duplicate services for infinite scroll effect
  const duplicatedServices = [...SERVICES, ...SERVICES, ...SERVICES];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'center',
    slidesToScroll: 1,
    duration: 25,
    startIndex: SERVICES.length,
    skipSnaps: false,
    containScroll: false,
    dragFree: false
  }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index % SERVICES.length);
    };
    
    const onScroll = () => {
      if (!emblaApi) return;
      const lastIndex = emblaApi.scrollSnapList().length - 1;
      const selectedIndex = emblaApi.selectedScrollSnap();
      
      if (selectedIndex === 0) {
        emblaApi.scrollTo(lastIndex - (SERVICES.length * 2), false);
      } else if (selectedIndex === lastIndex) {
        emblaApi.scrollTo(SERVICES.length, false);
      }
    };
    
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi]);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto px-6 py-20">
      <div className="md:w-[40%] pr-8 flex flex-col justify-center relative z-10">
        <div className="backdrop-blur-sm bg-black/30 p-6 rounded-xl">
          <h2 className="text-5xl font-bold text-white mb-4">Our Offerings</h2>
          <p className="text-white text-lg">
            Modular financial services — enhanced by robust technology, customizable modules, and secure integrations.
          </p>
        </div>
      </div>

      <div className="md:w-[60%] mt-10 md:mt-0 relative group">
        <button
          onClick={scrollPrev}
          className="absolute z-10 -left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white transition-all duration-300 rounded-full p-2 shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {duplicatedServices.map((service, idx) => {
              const actualIndex = idx % SERVICES.length;
              const isActive = actualIndex === selectedIndex;
              const glowStyle = isActive ? {
                boxShadow: `0 0 10px 3px ${service.glowColor}, 0 0 20px 6px ${service.glowColor}`,
                borderColor: service.glowColor,
                borderWidth: '2px',
                transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
              } : {
                boxShadow: 'none',
                borderColor: 'transparent',
                borderWidth: '1px',
                transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
              };
              return (
                <motion.div
                  key={idx}
                  className={`px-4 py-6 transition-all duration-500 ease-in-out embla__slide flex-[0_0_33.3333%]`}
                  animate={{ 
                    scale: isActive ? 1.1 : 0.9, 
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isActive ? 10 : 1
                  }}
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
                >
                  <div
                    className={`rounded-xl px-6 pt-8 pb-16 h-full flex flex-col justify-between text-center transition-shadow duration-500 relative`}
                    style={glowStyle}
                  >
                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <Image 
                          src={service.icon} 
                          alt={service.title} 
                          width={96} 
                          height={96}
                          className={`transition-all duration-500 ${isActive ? 'scale-125' : 'scale-90 opacity-70'}`}
                          style={isActive ? { filter: `drop-shadow(0 0 10px ${service.glowColor})` } : {}}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <p className="text-sm text-white mt-4">{service.description}</p>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                      <button
                        onClick={() => {
                          const titles = ['Cash & Liquidity', 'Payments', 'Supply Chain', 'Commodity', 'Currency Risk', 'Investment', 'Trade Finance', 'Debt Management'];
                          const paths = ['/products/cashflow-liquidity', '#', '#', '#', '#', '#', '#', '#'];
                          const index = titles.indexOf(service.title);
                          if (index !== -1 && paths[index] !== '#') {
                            window.location.href = paths[index];
                          }
                        }}
                        className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                      >
                        Learn More
                      </button>
                    </div>
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          boxShadow: `0 0 30px 10px ${service.glowColor}`,
                          filter: 'blur(8px)',
                          zIndex: 0,
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute z-10 -right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white transition-all duration-300 rounded-full p-2 shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>

        <div className="mt-10">
          <h3 className="text-white text-2xl font-bold mb-2 text-center">Interfaces</h3>
          <p className="text-base text-white text-center mb-6">Integrated touchpoints powering our services</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INTERFACES.map(({ name, icon }, idx) => (
              <div
                key={idx}
                className="bg-white border border-blue-50 text-blue-800 rounded-lg p-1 flex flex-col items-center justify-center gap-1 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-100 hover:-translate-y-1 text-lg font-bold h-28"
              >
                <div className="w-20 h-20 p-0 relative flex items-center justify-center">
                  <Image 
                    src={icon} 
                    alt={name} 
                    width={80} 
                    height={80}
                    className="text-blue-500 object-contain"
                  />
                </div>
                <span className="font-bold leading-tight text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
