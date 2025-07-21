'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Re-using the same menu structure
const menu = [
  {
    label: "Home",
    href: "/?variant=illustrative1",
    submenus: [
      { label: "Illystrative Style 1", href: "/?variant=illustrative1" },
      { label: "Illustrative Style 2", href: "/?variant=illustrative2" },
      { label: "Illustrative Style 3", href: "/?variant=illustrative3" },
    ],
  },
  {
    label: "Products",
    mega: true,
    groups: [
      {
        title: "Enterprise TMS",
        items: [
          { label: "Cashflow & Liquidity", href: "/enterprise/cashflow-liquidity" },
          { label: "Currency (FX) Risk", href: "/enterprise/currency-fx-risk" },
          { label: "Investment (Money Market)", href: "/enterprise/investment-money-market" },
          { label: "Trade Finance – Import Export & Banking", href: "/enterprise/trade-finance" },
          { label: "Debt (Borrowings)", href: "/enterprise/debt-borrowings" },
          { label: "Commodity Risk", href: "/enterprise/commodity-risk" },
          { label: "Payments", href: "/enterprise/payments" },
          { label: "Supply Chain Finance – VNDZY®", href: "/enterprise/supply-chain-finance" },
        ],
      },
      {
        title: "SME – TMS",
        items: [
          { label: "InnoTTM", href: "/sme/innottm" },
          { label: "InnoInvest", href: "/sme/innovest" },
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
          { label: "Cash Visibility & Forecasting", href: "/solutions/cash-visibility-forecasting" },
          { label: "Navigate Foreign Exchange Risk", href: "/solutions/foreign-exchange-risk" },
          { label: "Manage end-to-end money market instruments", href: "/solutions/money-market" },
          { label: "Optimize Trade Finance Operations", href: "/solutions/trade-finance" },
          { label: "Manage Debt", href: "/solutions/manage-debt" },
          { label: "Mitigate Commodity Risk", href: "/solutions/commodity-risk" },
          { label: "Automate Treasury Payment Processes", href: "/solutions/treasury-payments" },
          { label: "Supply Chain Finance Platform", href: "/solutions/supply-chain-finance" },
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
          { label: "Our Clients", href: "/resources/our-clients" },
          { label: "Success Stories", href: "/resources/success-stories" },
          { label: "Why Choose Us", href: "/resources/why-choose-us" },
          { label: "Integration Capabilities", href: "/resources/integration" },
          { label: "Security", href: "/resources/security" },
          { label: "Fact Sheet", href: "/resources/fact-sheet" },
          { label: "FAQs", href: "/resources/faqs" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/resources/blog" },
          { label: "Whitepapers", href: "/resources/whitepapers" },
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Webinars", href: "/resources/webinars" },
          { label: "Videos", href: "/resources/videos" },
          { label: "Glossary", href: "/resources/glossary" },
          { label: "Help Center", href: "/resources/help-center" },
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
          { label: "About Us", href: "/company/about" },
          { label: "Leadership Team", href: "/company/leadership" },
          { label: "US Leadership Team", href: "/company/us-leadership" },
          { label: "Global Partners", href: "/company/partners" },
          { label: "Career", href: "/company/careers" },
        ],
      },
      {
        title: "Culture & Recognition",
        items: [
          { label: "Awards & Recognitions", href: "/company/awards" },
          { label: "Life at IBSFINtech", href: "/company/life" },
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
    <nav className="w-full bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/?variant=illustrative1" className="flex items-center gap-2 group">
          <Image src="/ibs_logo_sample.png" alt="IBS Fintech" width={140} height={36} className="object-contain h-9 w-auto" priority />
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
                <div className={`px-4 py-2 font-semibold text-white/80 hover:text-white rounded-lg transition-colors flex items-center gap-1 ${openMenu === item.label ? 'bg-white/10' : ''}`}>
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
                    className={`absolute top-full mt-2 z-40 ${index >= menu.length - 2 ? 'right-0' : 'left-0'}`}
                  >
                    <div className={`rounded-xl shadow-2xl border border-white/10 bg-white overflow-hidden`}>
                      {item.mega ? (
                        <div className="grid grid-cols-3 gap-6 p-6 w-[700px]">
                          <div className="col-span-2 grid grid-cols-2 gap-6">
                            {item.groups.map((group) => (
                              <div key={group.title}>
                                <h4 className="text-gray-900 font-bold text-sm mb-3 px-2">{group.title}</h4>
                                <ul className="space-y-1">
                                  {group.items.map((sub) => (
                                    <li key={sub.label}>
                                      <Link href={sub.href} className="block px-2 py-1.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors">
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="col-span-1">
                            <div className="bg-blue-50 rounded-lg p-4 h-full flex flex-col justify-between">
                                <div>
                                    <h5 className='text-blue-900 font-bold mb-2'>Featured Insight</h5>
                                    <Image src="/bg_1.jpg" alt="Featured" width={300} height={150} className="rounded-md mb-2" />
                                    <p className='text-gray-700 text-sm'>Discover how our solutions are driving innovation in finance.</p>
                                </div>
                                <Link href="/resources/case-studies" className='text-blue-700 font-semibold text-sm mt-4 flex items-center gap-1 hover:underline'>
                                    Read More <ArrowRight size={14} />
                                </Link>
                            </div>
                          </div>
                        </div>
                      ) : item.submenus ? (
                        <div className="p-2 w-56 bg-white shadow-xl rounded-xl border border-white/10">
                            <ul className="space-y-1">
                            {item.submenus.map((sub) => (
                                <li key={sub.label}>
                                <Link href={sub.href} className="block px-2 py-1.5 rounded hover:bg-blue-50 text-gray-800 hover:text-blue-700 transition-colors">
                                    {sub.label}
                                </Link>
                                </li>
                            ))}
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
            href="/contact"
            className="ml-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
}
