import { useRef, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import {
  DollarSign, CreditCard, TrendingUp, Coins, Shield, PieChart, FileText, Building,
  Banknote, BarChart3, Database, Settings, ChevronLeft, ChevronRight
} from 'lucide-react';

const SERVICES = [
  { title: 'Cash & Liquidity', description: 'Visibility, forecasting, bank analysis', icon: DollarSign },
  { title: 'Payments', description: 'Approvals, automation, centralization', icon: CreditCard },
  { title: 'Supply Chain', description: 'AP/AR automation, working capital', icon: TrendingUp },
  { title: 'Commodity', description: 'Margin, hedging, exposure tracking', icon: Coins },
  { title: 'Currency Risk', description: 'Hedging, derivatives, valuation', icon: Shield },
  { title: 'Investment', description: 'Mutual funds, FDs, PMS, bonds', icon: PieChart },
  { title: 'Trade Finance', description: 'LCs, BCs, shipment finance', icon: FileText },
  { title: 'Debt Management', description: 'Borrowings, loans, intercompany', icon: Building },
];

const INTERFACES = [
  { name: 'Banks', icon: Banknote },
  { name: 'Dealing Platforms', icon: BarChart3 },
  { name: 'Marketing Data Providers', icon: Database },
  { name: 'ERP & 3rd Party', icon: Settings },
];

export default function OurOfferingsSection() {
  const autoplay = useRef(
    Autoplay({ delay: 2200, stopOnMouseEnter: true, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto px-6 py-20">
      <div className="md:w-[40%] pr-8 flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-white mb-4">Our Offerings</h2>
        <p className="text-white text-lg">
          Modular financial services — enhanced by robust technology, customizable modules, and secure integrations.
        </p>
      </div>

      <div className="md:w-[60%] mt-10 md:mt-0 relative">
        <button
          onClick={scrollPrev}
          className="absolute z-10 -left-16 top-[45%] -translate-y-1/2 bg-white border rounded-full p-2 shadow-md hover:scale-105 transition"
        >
          <ChevronLeft className="w-5 h-5 text-blue-600" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {SERVICES.map((service, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <motion.div
                  key={idx}
                  className={`px-4 py-6 transition-all duration-500 ease-in-out embla__slide flex-[0_0_33.3333%]`}
                  animate={{ scale: isActive ? 1.15 : 0.9, opacity: isActive ? 1 : 0.3 }}
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
                >
                  <div className={`rounded-xl px-6 pt-8 pb-16 h-full flex flex-col justify-between text-center ${isActive ? 'bg-blue-100 shadow-xl' : 'bg-blue-50'} transition-shadow duration-500 relative`}>
                    <div className="flex flex-col items-center gap-3">
                      <service.icon className="text-blue-800 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">{service.description}</p>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <button
                        onClick={() => window.location.href = '#'}
                        className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute z-10 -right-16 top-[45%] -translate-y-1/2 bg-white border rounded-full p-2 shadow-md hover:scale-105 transition"
        >
          <ChevronRight className="w-5 h-5 text-blue-600" />
        </button>

        <div className="mt-10">
          <h3 className="text-white text-xl font-semibold mb-1 text-center">Interfaces</h3>
          <p className="text-sm text-white text-center mb-4">Integrated touchpoints powering our services</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INTERFACES.map(({ name, icon: Icon }, idx) => (
              <div
                key={idx}
                className="bg-white border border-blue-100 text-blue-800 rounded-lg px-2 py-2 flex flex-col items-center gap-1 text-center shadow-sm hover:shadow-md transition text-xs"
              >
                <Icon className="w-5 h-5 text-blue-500" />
                <span className="font-medium leading-tight text-[10px]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
