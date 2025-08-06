'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  Eye, 
  BarChart2, 
  TrendingUp, 
  DollarSign, 
  Scale, 
  Shield, 
  Clock, 
  Zap, 
  Activity, 
  FileText,
  Home,
  Briefcase,
  BookOpen,
  Building2,
  Users,
  Award,
  Heart,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Play,
  Newspaper,
  BookOpenCheck,
  Presentation,
  Video,
  HelpCircle,
  Star,
  Trophy,
  Smile,
  UserCheck,
  Handshake,
  GraduationCap,
  Target,
  TrendingDown,
  PiggyBank,
  CreditCard,
  Truck,
  Warehouse,
  Send,
  Link as LinkIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types for menu items
interface MenuItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

interface MenuSection {
  label: string;
  href?: string;
  mega?: boolean;
  submenus?: MenuItem[];
  groups?: MenuGroup[];
}

// Re-using the same menu structure
const menu: MenuSection[] = [
  {
    label: "Home",
    href: "/?variant=illustrative1",
    submenus: [
      { label: "Illystrative Style 1", href: "/?variant=illustrative1", icon: Home },
      { label: "Illustrative Style 2", href: "/?variant=illustrative2", icon: Home },
      { label: "Illustrative Style 3", href: "/?variant=illustrative3", icon: Home },
    ],
  },
  {
    label: "Products",
    mega: true,
    groups: [
      {
        title: "Enterprise TMS",
        items: [
          { label: "Cashflow & Liquidity", href: "/products/enterprise/cashflow-liquidity", icon: TrendingUp },
          { label: "Currency (FX) Risk", href: "/products/enterprise/currency-fx-risk", icon: TrendingDown },
          { label: "Investment (Money Market)", href: "/products/enterprise/investment-money-market", icon: PiggyBank },
          { label: "Trade Finance – Import Export & Banking", href: "/products/enterprise/trade-finance", icon: CreditCard },
          { label: "Debt (Borrowings)", href: "/products/enterprise/debt-borrowings", icon: Scale },
          { label: "Commodity Risk", href: "/products/enterprise/commodity-risk-management", icon: Warehouse },
          { label: "Payments", href: "/products/enterprise/payments", icon: Send },
          { label: "Supply Chain Finance – VNDZY®", href: "/products/enterprise/supply-chain-finance", icon: Truck, className: "flex items-center" },
        ],
      },
      {
        title: "SME – TMS",
        items: [
          { label: "InnoTreasury", href: "/products/sme/innotreasury", icon: Briefcase },
          { label: "InnoInvest", href: "/products/sme/innoinvest", icon: BarChart2 },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    mega: true,
    groups: [
      {
        title: "Solutions",
        items: [
          { label: "Cash Visibility & Forecasting", href: "/solutions/cash-visibility-forecasting", icon: Eye },
          { label: "FX Risk", href: "/solutions/fx-currency-risk", icon: TrendingUp },
          { label: "Money Market", href: "/solutions/investment-money-market", icon: BarChart2 },
          { label: "Trade Finance", href: "/solutions/trade-finance", icon: FileText },
          { label: "Debt Management", href: "/solutions/debt-management", icon: Scale },
          { label: "Commodity Risk", href: "/solutions/commodity-risk", icon: Activity },
          { label: "Treasury Payments", href: "/solutions/treasury-payments", icon: DollarSign },
          { label: "SCF Platform", href: "/solutions/supply-chain-finance", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "Resources",
    mega: true,
    groups: [
      {
        title: "Menu Links",
        items: [
          { label: "Our Clients", href: "/resources/our-clients", icon: Users },
          { label: "Success Stories", href: "/resources/success-stories", icon: Star },
          { label: "Why Choose Us", href: "/resources/why-choose-us", icon: Target },
          { label: "Integration Capabilities", href: "/resources/integration", icon: LinkIcon },
          { label: "Security", href: "/resources/security", icon: Shield },
          { label: "Fact Sheet", href: "/resources/fact-sheet", icon: FileText },
          { label: "Latest News", href: "/resources/news", icon: Newspaper },
          { label: "Events", href: "/resources/events", icon: Calendar },
          { label: "FAQs", href: "/resources/faqs", icon: HelpCircle },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/resources/blog", icon: FileText },
          { label: "Whitepapers", href: "/resources/whitepapers", icon: BookOpenCheck },
          { label: "Case Studies", href: "/resources/case-studies", icon: FileText },
          { label: "Webinars", href: "/resources/webinars", icon: Presentation },
          { 
            label: "Videos", 
            href: "/resources/videos", 
            icon: () => (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            )
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    mega: true,
    groups: [
      {
        title: "Company Information",
        items: [
          { label: "About Us", href: "/company/about-us", icon: Building2 },
          { label: "Leadership Team", href: "/company/leadership", icon: Users },
          { label: "US Leadership Team", href: "/company/us-leadership", icon: UserCheck },
          { label: "Global Partners", href: "/company/partners", icon: Handshake },
          { label: "Career", href: "/company/careers", icon: GraduationCap },
          { label: "Contact Us", href: "/contact", icon: Phone },
        ],
      },
      {
        title: "Culture & Recognition",
        items: [
          { label: "Awards & Recognitions", href: "/awards", icon: Trophy },
          { label: "Life at IBSFINtech", href: "/company/life", icon: Heart },
        ],
      }
    ],
  },
];

const locales = [
    { code: 'IND', label: 'India' },
    { code: 'US', label: 'USA' },
];

const menuVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
};

export default function ModernMegaMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [locale, setLocale] = useState('IND');
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(label);
  }
  function handleMouseLeave() {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 120); // 120ms delay
  }

  return (
    <nav className="w-full bg-black border-b border-white/10 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/?variant=illustrative1" className="flex items-center gap-2 group">
          <div className="relative h-16  w-64">
            <Image 
              src="/IBSFINtech Logo_Transparent_Black BG.png" 
              alt="IBS Fintech" 
              fill 
              className="object-contain"
              priority 
            />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
          {menu.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href || '#'}>
                <div className={`px-3 py-1.5 text-sm font-semibold text-white/80 hover:text-white rounded-lg transition-colors flex items-center gap-1 ${openMenu === item.label ? 'bg-white/10' : ''}`}>
                  {item.label}
                  {(item.submenus || item.mega) && <ChevronDown size={16} className="ml-1 transition-transform duration-200" style={{ transform: openMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)'}} />}
                </div>
              </Link>

              <AnimatePresence>
                {openMenu === item.label && (item.submenus || item.mega) && (
                  <motion.div
                    variants={menuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`absolute top-full mt-2 z-40 ${item.label === 'Products' || item.label === 'Solutions' ? 'left-0' : index >= menu.length - 2 ? 'right-0' : 'left-0'}`}
                  >
                    <div className={`rounded-xl shadow-2xl border border-white/10 bg-white overflow-hidden`}>
                      {item.mega ? (
                        <div className={`grid grid-cols-3 gap-3 p-3 ${item.label === 'Products' ? 'w-[650px]' : item.label === 'Solutions' ? 'w-[700px]' : item.label === 'Resources' ? 'w-[650px]' : 'w-[600px]'}`}>
                          {item.label === "Solutions" ? (
                            // Special layout for Solutions dropdown with two columns and aligned icons
                            <>
                              <div className="col-span-2">
                                <h4 className="text-gray-900 font-bold text-sm mb-1 px-2">Our Solutions</h4>
                                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 px-2">
                                  {item.groups && item.groups[0]?.items.map((sub, index) => {
                                    const Icon = sub.icon || FileText;
                                    return (
                                      <Link 
                                        key={sub.label} 
                                        href={sub.href} 
                                        className="flex items-start gap-2 px-2 py-0.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors"
                                      >
                                        <Icon className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium leading-tight">{sub.label}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="col-span-1">
                                <div className="bg-blue-50 rounded-lg p-2 h-full flex flex-col">
                                    <div>
                                        <h5 className='text-blue-900 font-bold mb-1 text-sm'>Our Solutions</h5>
                                        <Image src="/Solutions Image.svg" alt="Solutions" width={180} height={100} className="rounded-md mb-1 mx-auto" />
                                    </div>
                                    <div className="mt-auto">
                                      <Link href="/all_solutions" className='text-blue-700 font-semibold text-sm flex items-center gap-1 hover:underline justify-center'>
                                        View All Solutions <ArrowRight size={14} />
                                      </Link>
                                    </div>
                                </div>
                              </div>
                            </>
                          ) : item.label === "Products" ? (
                            // Special layout for Products dropdown with all items in one line
                            <>
                              <div className="col-span-2">
                                {item.groups?.map((group) => (
                                  <div key={group.title} className="mb-3 last:mb-0">
                                    <h4 className="text-gray-900 font-bold text-sm mb-1 px-2">{group.title}</h4>
                                    <div className="flex flex-wrap gap-1 px-2">
                                      {group.items.map((sub, index) => {
                                        const Icon = sub.icon || FileText;
                                        return (
                                          <Link 
                                            key={sub.label} 
                                            href={sub.href} 
                                            className="flex items-start gap-1 px-2 py-0.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors text-xs font-medium"
                                          >
                                            <Icon className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="leading-tight">{sub.label}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="col-span-1">
                                <div className="bg-blue-50 rounded-lg p-2 h-full flex flex-col">
                                    <div>
                                        <h5 className='text-blue-900 font-bold mb-1 text-sm'>Our Products</h5>
                                        <Image src="/Product Image.svg" alt="Products" width={180} height={100} className="rounded-md mb-1 mx-auto" />
                                    </div>
                                    <div className="mt-auto">
                                      <Link href="/all_products" className='text-blue-700 font-semibold text-sm flex items-center gap-1 hover:underline justify-center'>
                                        View All Products <ArrowRight size={14} />
                                      </Link>
                                    </div>
                                </div>
                              </div>
                            </>
                          ) : item.label === "Resources" ? (
                            // Special layout for Resources dropdown with image
                            <>
                              <div className="col-span-2">
                                <div className="flex gap-6 w-max">
                                  {item.groups?.map((group) => (
                                    <div key={group.title} className="min-w-[150px]">
                                      <h4 className="text-gray-900 font-bold text-sm mb-1 px-2">{group.title}</h4>
                                      <ul className="space-y-0.5">
                                        {group.items.map((sub) => {
                                          const Icon = sub.icon || FileText;
                                          return (
                                            <li key={sub.label}>
                                              <Link 
                                                href={sub.href} 
                                                className="flex items-center gap-2 px-2 py-0.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors whitespace-nowrap"
                                              >
                                                <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                <span className="text-sm">{sub.label}</span>
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="col-span-1">
                                <div className="bg-blue-50 rounded-lg p-2 h-full flex flex-col">
                                    <div>
                                        <h5 className='text-blue-900 font-bold mb-1 text-sm'>Resources</h5>
                                        <Image src="/bg_1.jpg" alt="Resources" width={180} height={100} className="rounded-md mb-1 mx-auto object-cover" />
                                    </div>
                                    <div className="mt-auto">
                                      <Link href="/resources" className='text-blue-700 font-semibold text-sm flex items-center gap-1 hover:underline justify-center'>
                                        View All Resources <ArrowRight size={14} />
                                      </Link>
                                    </div>
                                </div>
                              </div>
                            </>
                          ) : item.label === "Company" ? (
                            // Special layout for Company dropdown with image below content
                            <>
                              <div className="col-span-2">
                                <div className="flex gap-6 w-max">
                                  {item.groups?.map((group) => (
                                    <div key={group.title} className="min-w-[150px]">
                                      <h4 className="text-gray-900 font-bold text-sm mb-1 px-2">{group.title}</h4>
                                      <ul className="space-y-0.5">
                                        {group.items.map((sub) => {
                                          const Icon = sub.icon || FileText;
                                          return (
                                            <li key={sub.label}>
                                              <Link 
                                                href={sub.href} 
                                                className="flex items-center gap-2 px-2 py-0.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors whitespace-nowrap"
                                              >
                                                <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                <span className="text-sm">{sub.label}</span>
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-3 px-2">
                                  <Image src="/bg_6.jpg" alt="Company" width={400} height={80} className="rounded-md w-full object-cover" />
                                </div>
                              </div>
                              <div className="col-span-1">
                                <div className="bg-blue-50 rounded-lg p-2 h-full flex flex-col justify-center">
                                  <div className="text-center">
                                    <h5 className='text-blue-900 font-bold mb-2 text-sm'>About Us</h5>
                                    <p className="text-blue-700 text-xs mb-3 leading-tight">Discover our mission, values, and commitment to transforming treasury management.</p>
                                    <Link href="/company" className='text-blue-700 font-semibold text-sm flex items-center gap-1 hover:underline justify-center'>
                                      Learn More <ArrowRight size={14} />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="col-span-2">
                              <div className="flex gap-8 w-max">
                                {item.groups?.map((group) => (
                                  <div key={group.title} className="min-w-[160px]">
                                    <h4 className="text-gray-900 font-bold text-sm mb-2 px-2">{group.title}</h4>
                                    <ul className="space-y-1">
                                      {group.items.map((sub) => {
                                        const Icon = sub.icon || FileText;
                                        return (
                                          <li key={sub.label}>
                                            <Link 
                                              href={sub.href} 
                                              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors whitespace-nowrap"
                                            >
                                              <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                              <span className="text-sm">{sub.label}</span>
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : item.submenus ? (
                        <div className="p-2 w-56 bg-white shadow-xl rounded-xl border border-white/10">
                            <ul className="space-y-1">
                            {item.submenus.map((sub) => {
                              const Icon = sub.icon || FileText;
                              return (
                                <li key={sub.label}>
                                <Link href={sub.href} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors">
                                    <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                    {sub.label}
                                </Link>
                                </li>
                              );
                            })}
                            </ul>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            href="/request-demo"
            className="ml-4 px-4 py-1.5 text-sm bg-[#FF073A] hover:bg-[#e60634] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,7,58,0.3)] active:translate-y-0"
          >
            Request a demo
          </Link>

        </div>
      </div>
    </nav>
  );
}
