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
          { name: 'InnoTTM', href: '/sme/innottm', icon: Briefcase },
          { name: 'InnoInvest', href: '/sme/innovest', icon: BarChart2 },
        ],
      },
    ],
    featured: {
      title: 'Featured Product',
      description: 'Discover our latest treasury management solutions',
      image: '/bg_10.jpg',
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
      image: '/bg_11.jpg',
      cta: 'Explore Solutions',
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
    ],
    featured: {
      title: 'We\'re Here to Help',
      description: 'Get in touch with our team for any questions or support',
      image: '/bg_14.jpeg',
      cta: 'Contact Us',
      ctaLink: '/contact'
    }
  },
];

export default function MegaMenu3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const pathname = usePathname();

  // Close menu when clicking outside
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const handleMenuEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    // Delay closing to allow for mouse movement between menu items
    setTimeout(() => {
      if (activeMenu && !menuRef.current?.matches(':hover')) {
        setActiveMenu(null);
      }
    }, 200);
  };

  const renderSubmenu = (item: any) => {
    if (!item.submenu) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className={`absolute left-0 right-0 top-full z-50 w-full ${
          theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'
        } shadow-2xl border-b border-gray-200 dark:border-gray-800`}
        onMouseEnter={() => handleMenuEnter(item.name)}
        onMouseLeave={handleMenuLeave}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column - Menu items */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.submenu.map((section: any, idx: number) => (
                <div key={idx} className="space-y-4">
                  {section.title && (
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                      {section.title}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {(section.items || [section]).map((subItem: any, subIdx: number) => (
                      <li key={subIdx}>
                        <Link
                          href={subItem.href}
                          className={`text-base ${
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
                          <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right column - Featured content */}
            {item.featured && (
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.featured.image}
                      alt={item.featured.title}
                      fill
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.featured.title}</h3>
                    <p className="text-blue-100 text-sm mb-4 flex-1">
                      {item.featured.description}
                    </p>
                    <Link 
                      href={item.featured.ctaLink}
                      className="text-white text-sm font-medium hover:underline flex items-center self-start"
                    >
                      {item.featured.cta} <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/ibs_logo_sample.png"
                  alt="IBS Fintech"
                  width={140}
                  height={36}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(item.name)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    className={`px-4 py-2.5 text-sm font-medium ${
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
        </nav>

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <div className="hidden md:block">
              {menuItems.map(
                (item) =>
                  activeMenu === item.name && (
                    <div key={item.name} className="w-full">
                      {renderSubmenu(item)}
                    </div>
                  )
              )}
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
      </header>

      {/* Add padding to account for fixed header */}
      <div className="h-16"></div>
    </div>
  );
}
