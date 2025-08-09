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
  MessageSquare,
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
  description?: string;
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

// Updated menu structure with new layouts
const menu: MenuSection[] = [
  {
    label: "Home",
    href: "/",
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
          { 
            label: "Cash Visibility & Forecasting", 
            href: "/solutions/cash-visibility-forecasting", 
            icon: Eye,
            description: "Gain cash visibility, manage and forecast cash balances across the entire business"
          },
          { 
            label: "Navigate Foreign Exchange Risk", 
            href: "/solutions/fx-currency-risk", 
            icon: TrendingUp,
            description: "Efficiently manage and mitigate Foreign Exchange Risk with comprehensive solution covering all hedge derivatives"
          },
          { 
            label: "Manage end-to-end money market instruments", 
            href: "/solutions/investment-money-market", 
            icon: BarChart2,
            description: "Streamline your Investment operations and manage a wide array of financial instruments"
          },
          { 
            label: "Optimize Trade Finance operations", 
            href: "/solutions/trade-finance", 
            icon: FileText,
            description: "Streamline your trade finance operations and seamlessly navigate through every stage of the trade lifecycle."
          },
          { 
            label: "Manage Debt", 
            href: "/solutions/debt-management", 
            icon: Scale,
            description: "Simplify the entire borrowing cycle and ensure compliance with regulatory requirements."
          },
          { 
            label: "Mitigate Commodity Risk", 
            href: "/solutions/commodity-risk", 
            icon: Activity,
            description: "Effectively Mitigate the impact of volatile commodity prices through proactive risk management and strategic hedging"
          },
          { 
            label: "Automate treasury payments processes", 
            href: "/solutions/treasury-payments", 
            icon: DollarSign,
            description: "Leverage bank connectivity for treasury payment solutions"
          },
          { 
            label: "Supply Chain Finance platform", 
            href: "/solutions/supply-chain-finance", 
            icon: Zap,
            description: "Anchor driven SCF platform bringing together the networks of vendors, suppliers and financial institutions and corporates"
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    mega: true,
    groups: [
      {
        title: "Resources",
        items: [
          { label: "Our Clients", href: "/resources/our-clients", icon: Users },
          { label: "Success Stories", href: "/resources/success-stories", icon: Star },
          { label: "Why Choose Us", href: "/resources/why-choose-us", icon: Target },
          { label: "Integration Capabilities", href: "/resources/integration", icon: LinkIcon },
          { label: "Security", href: "/resources/security", icon: Shield },
          { label: "Fact Sheet", href: "/resources/fact-sheet", icon: FileText },
          { label: "Latest News", href: "/resources/news", icon: Newspaper },
          { label: "Blogs", href: "/resources/blog", icon: FileText },
          { label: "Videos", href: "/resources/videos", icon: Video },
          { label: "Testimonials", href: "/resources/testimonials", icon: MessageSquare },
          { label: "Events", href: "/resources/events", icon: Calendar },
          { label: "FAQs", href: "/resources/faqs", icon: HelpCircle },
        ],
      },
    ],
  },
  {
    label: "Company",
    mega: true,
    groups: [
      {
        title: "Company",
        items: [
          { label: "About Us", href: "/company/about-us", icon: Building2 },
          { label: "Leadership Team", href: "/company/leadership", icon: Users },
          { label: "US Leadership Team", href: "/company/us-leadership", icon: UserCheck },
          { label: "Global Partners", href: "/company/partners", icon: Handshake },
          { label: "Careers", href: "/company/careers", icon: GraduationCap },
          { label: "Awards & Recognitions", href: "/awards", icon: Trophy },
          { label: "Life at IBSFINtech", href: "/company/life", icon: Heart },
          { label: "Contact Us", href: "/contact", icon: Phone },
        ],
      },
    ],
  },
];

const locales = [
    { code: 'IND', label: 'India' },
    { code: 'US', label: 'USA' },
];

const menuVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.15, 
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.02
    } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { 
      duration: 0.1, 
      ease: [0.4, 0, 1, 1] 
    } 
  },
};

export default function ModernMegaMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [locale, setLocale] = useState('IND');
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenMenu(label);
  }
  
  function handleMouseLeave() {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 50); // Reduced from 120ms to 50ms
  }

  return (
    <nav className="w-full bg-black border-b border-white/10 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
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
                <div className={`px-3 py-1.5 text-sm font-semibold text-white/80 hover:text-white rounded-lg transition-all duration-150 ease-out flex items-center gap-1 ${openMenu === item.label ? 'bg-white/10' : ''}`}>
                  {item.label}
                  {(item.submenus || item.mega) && (
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-all duration-150 ease-out ${
                        openMenu === item.label ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  )}
                </div>
              </Link>

              <AnimatePresence>
                {openMenu === item.label && (item.submenus || item.mega) && (
                  <motion.div
                    variants={menuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`absolute top-full mt-2 z-40 ${item.label === 'Solutions' ? '-left-48' : item.label === 'Resources' ? '-left-24' : item.label === 'Company' ? 'right-0' : 'left-0'}`}
                  >
                    <div className={`rounded-xl shadow-2xl border border-white/10 bg-white overflow-hidden`}>
                      {item.mega ? (
                        <div className={`p-4 ${item.label === 'Products' ? 'w-[600px]' : item.label === 'Solutions' ? 'w-[900px]' : item.label === 'Resources' ? 'w-[600px]' : 'w-[500px]'}`}>
                          {item.label === "Solutions" ? (
                            // Enhanced Solutions dropdown with descriptions in 2 columns
                            <div className="w-full">
                              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                {item.groups && item.groups[0]?.items.map((sub, index) => {
                                  const Icon = sub.icon || FileText;
                                  return (
                                    <Link 
                                      key={sub.label} 
                                      href={sub.href} 
                                      className="block p-3 rounded-lg hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-200 border border-transparent hover:border-blue-200"
                                    >
                                      <div className="flex items-start gap-3">
                                        <Icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div className="flex-1 min-w-0">
                                          <h5 className="text-sm font-semibold mb-1 leading-tight">{sub.label}</h5>
                                          {sub.description && (
                                            <p className="text-xs text-gray-600 leading-relaxed">{sub.description}</p>
                                          )}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ) : item.label === "Products" ? (
                            // Products dropdown with 2 columns for Enterprise TMS
                            <div className="w-full">
                              {item.groups?.map((group) => (
                                <div key={group.title} className="mb-4 last:mb-0">
                                  <h4 className="text-gray-900 font-bold text-sm mb-3 px-2">{group.title}</h4>
                                  {group.title === "Enterprise TMS" ? (
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-2">
                                      {group.items.map((sub, index) => {
                                        const Icon = sub.icon || FileText;
                                        return (
                                          <Link 
                                            key={sub.label} 
                                            href={sub.href} 
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-150 ease-out text-sm font-medium whitespace-nowrap"
                                          >
                                            <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                            <span className="leading-tight">{sub.label}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  ) : (
                                    <div className="flex flex-wrap gap-2 px-2">
                                      {group.items.map((sub, index) => {
                                        const Icon = sub.icon || FileText;
                                        return (
                                          <Link 
                                            key={sub.label} 
                                            href={sub.href} 
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-150 ease-out text-sm font-medium whitespace-nowrap"
                                          >
                                            <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                            <span className="leading-tight">{sub.label}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : item.label === "Resources" ? (
                            // Resources dropdown with 2 columns (6 items each)
                            <div className="w-full">
                              <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-2">
                                {item.groups && item.groups[0]?.items.map((sub, index) => {
                                  const Icon = sub.icon || FileText;
                                  return (
                                    <Link 
                                      key={sub.label} 
                                      href={sub.href} 
                                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-150 ease-out text-sm font-medium"
                                    >
                                      <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                      <span className="leading-tight">{sub.label}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ) : item.label === "Company" ? (
                            // Company dropdown with compact layout
                            <div className="w-full">
                              <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-1">
                                  <div className="grid grid-cols-1 gap-1 px-2">
                                    {item.groups && item.groups[0]?.items.slice(0, 4).map((sub, index) => {
                                      const Icon = sub.icon || FileText;
                                      return (
                                        <Link 
                                          key={sub.label} 
                                          href={sub.href} 
                                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-150 ease-out text-sm font-medium"
                                        >
                                          <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                          <span className="leading-tight">{sub.label}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div className="grid grid-cols-1 gap-1 px-2">
                                    {item.groups && item.groups[0]?.items.slice(4).map((sub, index) => {
                                      const Icon = sub.icon || FileText;
                                      return (
                                        <Link 
                                          key={sub.label} 
                                          href={sub.href} 
                                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-150 ease-out text-sm font-medium"
                                        >
                                          <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                          <span className="leading-tight">{sub.label}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 px-2">
                                <div className="bg-blue-50 rounded-lg p-3">
                                  <div className="flex items-center gap-3">
                                    <Image src="/bg_6.jpg" alt="Company" width={60} height={40} className="rounded-md object-cover" />
                                    <div className="flex-1">
                                      <h5 className='text-blue-900 font-bold text-sm mb-1'>About Us</h5>
                                      <p className="text-blue-700 text-xs leading-tight">Discover our mission, values, and commitment to transforming treasury management.</p>
                                    </div>
                                    <Link href="/company" className='text-blue-700 font-semibold text-sm flex items-center gap-1 hover:underline transition-colors duration-150 ease-out'>
                                      Learn More <ArrowRight size={14} />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full">
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
                                              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-200 whitespace-nowrap"
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
                                <Link href={sub.href} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-all duration-200">
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






