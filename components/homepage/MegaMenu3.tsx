'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Box, 
  Briefcase, 
  BookOpen, 
  FileText, 
  Users, 
  Mail, 
  BarChart2, 
  Layers, 
  FileSearch, 
  Shield, 
  MessageSquare, 
  Video, 
  Calendar, 
  HelpCircle, 
  FileCheck, 
  Globe, 
  Building, 
  User, 
  Award, 
  Book, 
  Newspaper, 
  FileCode, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const menuItems = [
  {
    name: 'Home',
    href: '/',
    submenu: [
      { name: 'Illustrative Style 1', href: '/?variant=illustrative1' },
      { name: 'Illustrative Style 2', href: '/?variant=illustrative2' },
      { name: 'Illustrative Style 3', href: '/?variant=illustrative3' },
    ],
  },
  {
    name: 'Products',
    icon: Box,
    href: '/products',
    submenu: [
      {
        title: 'Enterprise TMS',
        items: [
          { name: 'Cashflow & Liquidity', href: '/enterprise/cashflow-liquidity', icon: BarChart2 },
          { name: 'Currency (FX) Risk', href: '/enterprise/currency-fx-risk', icon: Globe },
          { name: 'Investment (Money Market)', href: '/enterprise/investment-money-market', icon: Layers },
          { name: 'Trade Finance', href: '/enterprise/trade-finance', icon: FileCheck },
          { name: 'Debt (Borrowings)', href: '/enterprise/debt-borrowings', icon: FileText },
          { name: 'Commodity Risk', href: '/enterprise/commodity-risk', icon: Shield },
          { name: 'Payments', href: '/enterprise/payments', icon: Briefcase },
          { name: 'Supply Chain Finance – VNDZY®', href: '/enterprise/supply-chain-finance', icon: Layers },
        ],
      },
      {
        title: 'SME – TMS',
        items: [
          { name: 'InnoTreasury', href: '/sme/innottm', icon: Briefcase },
          { name: 'InnoInvest', href: '/sme/innovest', icon: BarChart2 },
        ],
      },
    ],
    featured: {
      title: 'Featured Product',
      description: 'Discover our latest treasury management solutions',
      image: '/Product Image.svg',
      cta: 'Learn more',
      ctaLink: '/products/enterprise-tms'
    }
  },
  {
    name: 'Solutions',
    icon: Briefcase,
    href: '/solutions',
    submenu: [
      { name: 'Cash Visibility & Forecasting', href: '/solutions/cash-visibility-forecasting', icon: BarChart2 },
      { name: 'Navigate Foreign Exchange Risk', href: '/solutions/foreign-exchange-risk', icon: Globe },
      { name: 'Money Market Instruments', href: '/solutions/money-market', icon: Layers },
      { name: 'Trade Finance Operations', href: '/solutions/trade-finance', icon: FileCheck },
      { name: 'Manage Debt', href: '/solutions/manage-debt', icon: FileText },
      { name: 'Mitigate Commodity Risk', href: '/solutions/commodity-risk', icon: Shield },
      { name: 'Payment Automation', href: '/solutions/treasury-payments', icon: Briefcase },
      { name: 'Supply Chain Finance', href: '/solutions/supply-chain-finance', icon: Layers },
    ],
    featured: {
      title: 'Industry Solutions',
      description: 'Tailored solutions for your industry needs',
      image: '/Solutions Image.svg',
      cta: 'Learn more',
      ctaLink: '/solutions'
    }
  },
  {
    name: 'Resources',
    icon: FileText,
    href: '/resources',
    submenu: [
      {
        title: 'Menu Links',
        items: [
          { name: 'Our Clients', href: '/resources/our-clients', icon: Users },
          { name: 'Success Stories', href: '/resources/success-stories', icon: Award },
          { name: 'Why Choose Us', href: '/resources/why-choose-us', icon: HelpCircle },
          { name: 'Integration Capabilities', href: '/resources/integration', icon: Layers },
          { name: 'Security', href: '/resources/security', icon: Shield },
          { name: 'Fact Sheet', href: '/resources/fact-sheet', icon: FileText },
          { name: 'FAQs', href: '/resources/faqs', icon: HelpCircle },
        ],
      },
      {
        title: 'Media & Updates',
        items: [
          { name: 'Latest News', href: '/resources/news', icon: Newspaper },
          { name: 'Blogs', href: '/resources/blogs', icon: Book },
          { name: 'Videos', href: '/resources/videos', icon: Video },
          { name: 'Webinars', href: '/resources/webinars', icon: MessageSquare },
          { name: 'Events', href: '/resources/events', icon: Calendar },
        ],
      },
    ],
    featured: {
      title: 'Resource Center',
      description: 'Access our latest resources and insights',
      image: '/bg_12.jpg',
      cta: 'View Resources',
      ctaLink: '/resources'
    }
  },
  { 
    name: 'Company', 
    icon: Building,
    href: '/company',
    submenu: [
      {
        title: 'About Us',
        items: [
          { name: 'Our Story', href: '/company/about', icon: BookOpen },
          { name: 'Leadership', href: '/company/leadership', icon: Users },
          { name: 'Careers', href: '/company/careers', icon: Briefcase },
          { name: 'Awards & Recognition', href: '/company/awards', icon: Award },
        ]
      },
      {
        title: 'Media Center',
        items: [
          { name: 'Press Releases', href: '/company/press', icon: Newspaper },
          { name: 'In the News', href: '/company/news', icon: FileText },
          { name: 'Media Kit', href: '/company/media-kit', icon: FileCode },
        ]
      },
      {
        title: 'Learn More',
        items: [
          { name: 'Case Studies', href: '/resources/case-studies', icon: FileSearch },
          { name: 'Blog', href: '/blog', icon: Book },
          { name: 'Events', href: '/events', icon: Calendar },
          { name: 'Webinars', href: '/webinars', icon: Video },
        ]
      }
    ],
    featured: {
      title: 'About Our Company',
      description: 'Learn about our mission, vision, and values',
      image: '/bg_13.jpeg',
      cta: 'Our Story',
      ctaLink: '/company/about'
    }
  },
  { 
    name: 'Contact Us', 
    icon: Mail,
    href: '/contact',
    submenu: [
      {
        title: 'Get in Touch',
        items: [
          { name: 'Contact Sales', href: '/contact/sales', icon: Phone },
          { name: 'Support', href: '/support', icon: HelpCircle },
          { name: 'Locations', href: '/contact/locations', icon: MapPin },
          { name: 'General Inquiries', href: '/contact/general', icon: Mail },
        ]
      }
    ]
  },
  { 
    name: 'Request Demo', 
    icon: Video,
    href: '/demo'
  }
];

export default function MegaMenu3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const pathname = usePathname();
  const menuItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const handleMenuEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setTimeout(() => {
      if (activeMenu && !menuRef.current?.matches(':hover')) {
        setActiveMenu(null);
      }
    }, 200);
  };

  const renderSubmenu = (item: any) => {
    if (!item.submenu) return null;

    const isProductsMenu = item.name === 'Products';
    const isSolutionsMenu = item.name === 'Solutions';
    const isResourcesMenu = item.name === 'Resources';
    const isCompanyMenu = item.name === 'Company';
    const isContactMenu = item.name === 'Contact Us';

    if (isContactMenu) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="z-40 bg-white/95 dark:bg-gray-900/95 shadow-lg border border-gray-200 dark:border-gray-800 rounded-lg w-48 py-2"
          onMouseEnter={() => handleMenuEnter(item.name)}
          onMouseLeave={handleMenuLeave}
        >
          {item.submenu.map((section: any, idx: number) => (
            <div key={idx} className="space-y-1 px-3 py-1">
              {section.title && (
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2 py-1">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((subItem: any, subIdx: number) => (
                  <li key={subIdx}>
                    <Link
                      href={subItem.href}
                      className={`text-sm ${
                        theme === 'dark'
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700 hover:text-gray-900'
                      } transition-colors duration-200 flex items-center px-2 py-1.5 rounded`}
                    >
                      {subItem.icon && (
                        <subItem.icon className="h-4 w-4 mr-2 text-blue-500" />
                      )}
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className={`z-40 bg-white/95 dark:bg-gray-900/95 shadow-2xl border border-gray-200 dark:border-gray-800 rounded-lg ${
          isProductsMenu || isSolutionsMenu ? 'w-[900px]' : 
          isResourcesMenu || isCompanyMenu ? 'w-[700px]' : 'w-full'
        }`}
        onMouseEnter={() => handleMenuEnter(item.name)}
        onMouseLeave={handleMenuLeave}
      >
        <div className="w-full">
          <div className={`flex ${isResourcesMenu ? 'flex-col' : 'gap-6'} p-4`}>
            {/* Left column - Menu items */}
            {isSolutionsMenu ? (
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 flex-1">
                {item.submenu.map((subItem: any, idx: number) => (
                  <Link
                    key={idx}
                    href={subItem.href}
                    className={`py-1.5 text-sm ${
                      theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    } transition-colors duration-200 flex items-center space-x-2`}
                  >
                    {subItem.icon && (
                      <subItem.icon className="h-4 w-4 flex-shrink-0 text-blue-500" />
                    )}
                    <span className="whitespace-nowrap">{subItem.name}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={`${isResourcesMenu ? 'w-full' : 'flex-1'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
                {item.submenu.map((section: any, idx: number) => {
                  if (isProductsMenu && section.title === 'Enterprise TMS') {
                    const halfLength = Math.ceil(section.items.length / 2);
                    const firstHalf = section.items.slice(0, halfLength);
                    const secondHalf = section.items.slice(halfLength);
                    
                    return (
                      <div key={idx} className="col-span-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider text-center mb-3">
                          Enterprise TMS
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {firstHalf.map((subItem: any, subIdx: number) => (
                              <div key={subIdx} className="flex-shrink-0">
                                <Link
                                  href={subItem.href}
                                  className={`text-sm ${
                                    theme === 'dark'
                                      ? 'text-gray-300 hover:text-white'
                                      : 'text-gray-700 hover:text-gray-900'
                                  } transition-colors duration-200 flex items-center group whitespace-nowrap`}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="h-4 w-4 mr-2 flex-shrink-0 text-blue-500" />
                                  )}
                                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {secondHalf.map((subItem: any, subIdx: number) => (
                              <div key={subIdx} className="flex-shrink-0">
                                <Link
                                  href={subItem.href}
                                  className={`text-sm ${
                                    theme === 'dark'
                                      ? 'text-gray-300 hover:text-white'
                                      : 'text-gray-700 hover:text-gray-900'
                                  } transition-colors duration-200 flex items-center group whitespace-nowrap`}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="h-4 w-4 mr-2 flex-shrink-0 text-blue-500" />
                                  )}
                                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  if (isProductsMenu && section.title === 'SME – TMS') {
                    return (
                      <div key={idx} className="lg:col-start-3">
                        <div className="space-y-2">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem: any, subIdx: number) => (
                              <li key={subIdx}>
                                <Link
                                  href={subItem.href}
                                  className={`text-sm ${
                                    theme === 'dark'
                                      ? 'text-gray-300 hover:text-white'
                                      : 'text-gray-700 hover:text-gray-900'
                                  } transition-colors duration-200 flex items-start group`}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
                                  )}
                                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={idx} className="space-y-2">
                      {section.title && (
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                          {section.title}
                        </h3>
                      )}
                      <ul className="space-y-2">
                        {(section.items || [section]).map((subItem: any, subIdx: number) => (
                          <li key={subIdx}>
                            <Link
                              href={subItem.href}
                              className={`text-sm ${
                                theme === 'dark'
                                  ? 'text-gray-300 hover:text-white'
                                  : 'text-gray-700 hover:text-gray-900'
                              } transition-colors duration-200 flex items-start group`}
                            >
                              {subItem.icon && (
                                <subItem.icon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
                              )}
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                {subItem.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Right column - Featured content */}
            {item.featured && !isContactMenu && !isResourcesMenu && (
              <div className={`${isResourcesMenu ? 'w-40 h-40 ml-0' : 'w-48 h-40'}`}>
                <div className="relative rounded-lg overflow-hidden w-full h-full bg-gradient-to-br from-blue-600 to-blue-800">
                  <Image
                    src={item.featured.image}
                    alt={item.featured.title}
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <Link
                    href={item.featured.ctaLink}
                    className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 text-white text-xs font-medium px-2 py-1 rounded transition-colors flex items-center space-x-1"
                  >
                    <span>{item.featured.cta}</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative" ref={menuRef}>
      <div className="fixed w-full left-0 right-0 z-50 px-4">
        <header
          className={`max-w-7xl mx-auto transition-all duration-300 ${
            isScrolled || activeMenu
              ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm'
              : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
          }`}
        >
          <nav className="w-full">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/IBSFINtech_Logo_Main.svg"
                    alt="IBS Fintech"
                    width={160}
                    height={40}
                    className="h-10 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1 relative">
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleMenuEnter(item.name)}
                    onMouseLeave={handleMenuLeave}
                    ref={(el) => {
                      menuItemRefs.current[item.name] = el;
                    }}
                  >
                    <button
                      className={`px-4 py-2.5 text-sm font-medium relative ${
                        activeMenu === item.name
                          ? 'text-blue-600 dark:text-blue-400'
                          : theme === 'dark'
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700 hover:text-gray-900'
                      } transition-colors duration-200 flex items-center`}
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                      {item.name}
                      {item.submenu && (
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${
                            activeMenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Desktop Mega Menu */}
            <AnimatePresence>
              {activeMenu && (
                <div className="hidden md:block absolute left-0 right-0">
                  <div className="max-w-7xl mx-auto relative">
                    {menuItems.map(
                      (item) =>
                        activeMenu === item.name && (
                          <div 
                            key={item.name}
                            className="absolute top-0"
                            style={(() => {
                              const menuItemEl = menuItemRefs.current[item.name];
                              const containerEl = menuRef.current;
                              if (!menuItemEl || !containerEl) return { left: 0 };
                              
                              const menuItemRect = menuItemEl.getBoundingClientRect();
                              const containerRect = containerEl.getBoundingClientRect();
                              const relativeLeft = menuItemRect.left - containerRect.left;
                              const relativeRight = containerRect.right - menuItemRect.right;
                              
                              // For mega menus (Products, Solutions), use full width but position from left
                              if (item.name === 'Products' || item.name === 'Solutions') {
                                return { left: 0, width: '100%' };
                              }
                              
                              // For smaller dropdowns (Resources, Company, Contact Us), position directly below
                              const dropdownWidth = item.name === 'Contact Us' ? 280 : 
                                                   item.name === 'Resources' ? 700 : 
                                                   item.name === 'Company' ? 700 : 280;
                              
                              // Ensure dropdown doesn't exceed right edge (Request Demo position)
                              const maxRight = containerRect.width - 20; // 20px margin from edge
                              const proposedRight = relativeLeft + dropdownWidth;
                              
                              if (proposedRight > maxRight) {
                                return { 
                                  left: 'auto',
                                  right: 20, // 20px from right edge
                                  width: `${dropdownWidth}px`
                                };
                              }
                              
                              return { 
                                left: `${relativeLeft}px`,
                                width: `${dropdownWidth}px`
                              };
                            })()}
                          >
                            <div className="absolute top-0 left-0 mt-1">
                              {renderSubmenu(item)}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}
            </AnimatePresence>
            
            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="px-6 py-4 space-y-2">
                    {menuItems.map((item) => (
                      <div key={item.name} className="py-2">
                        <button
                          onClick={() =>
                            setActiveMenu(activeMenu === item.name ? null : item.name)
                          }
                          className="flex items-center justify-between w-full text-left text-base font-medium"
                        >
                          <span>{item.name}</span>
                          {item.submenu && (
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${
                                activeMenu === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          )}
                        </button>
                        {activeMenu === item.name && item.submenu && (
                          <div className="mt-2 pl-4 space-y-2">
                            {item.submenu.map((section: any, idx: number) => (
                              <div key={idx}>
                                {section.title && (
                                  <h4 className="font-medium text-sm text-gray-500 mt-3 mb-1">
                                    {section.title}
                                  </h4>
                                )}
                                <ul className="space-y-1">
                                  {(section.items || [section]).map(
                                    (subItem: any, subIdx: number) => (
                                      <li key={subIdx}>
                                        <Link
                                          href={subItem.href}
                                          className="block py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      </div>
      {/* Add padding to account for fixed header */}
      <div className="h-16"></div>
    </div>
  );
}