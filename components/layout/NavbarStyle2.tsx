'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Palette, Lightbulb, BarChart, Globe } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  hasDropdown?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavItem = ({
  href = '#',
  children,
  className = '',
  hasDropdown = false,
  onMouseEnter,
  onMouseLeave
}: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      width: '100%',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    });
  };

  const handleHoverEnd = () => {
    if (!isActive) {
      controls.start({
        width: '0%',
        opacity: 0,
        transition: { duration: 0.2, ease: 'easeIn' }
      });
    }
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => {
        handleHoverStart();
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        handleHoverEnd();
        onMouseLeave?.();
      }}
    >
      <Link
        href={href}
        className="relative inline-flex items-center px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
          initial={{ width: 0, opacity: 0 }}
          animate={controls}
          onAnimationComplete={() => {
            if (isActive) {
              controls.set({ width: '100%', opacity: 1 });
            }
          }}
        />
      </Link>
    </div>
  );
};

export default function NavbarStyle2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50">
      <div className={cn(
        'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300',
        isScrolled ? 'py-2' : 'py-4'
      )}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/?variant=illustrative2" className="group flex items-center">
              <motion.div
                className="relative h-10 w-auto"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center">
                  <Image
                    src="/ibs_logo_sample.png"
                    alt="IBS Fintech"
                    width={160}
                    height={40}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
              >
                <NavItem hasDropdown>
                  Home
                </NavItem>
                <AnimatePresence>
                  {openDropdown === 'home' && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-gray-800/95 backdrop-blur-xl shadow-xl border-0 overflow-hidden z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-1 py-2">
                        <Link
                          href="/?variant=illustrative1"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700/50 text-gray-100 rounded-md m-1"
                        >
                          <BarChart size={16} className="text-blue-400" /> Illystrative Style 1
                        </Link>
                        <Link
                          href="/?variant=illustrative2"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700/50 text-gray-100 rounded-md m-1"
                        >
                          <Lightbulb size={16} className="text-blue-400" /> Illustrative Style 2
                        </Link>
                        <Link
                          href="/?variant=illustrative3"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700/50 text-gray-100 rounded-md m-1"
                        >
                          <Palette size={16} className="text-blue-400 rotate-180" /> Illustrative Style 3
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <NavItem hasDropdown>
                  Products
                </NavItem>
                <AnimatePresence>
                  {openDropdown === 'products' && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-gray-800/95 backdrop-blur-xl shadow-2xl border border-gray-700 overflow-hidden z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-1 py-2">
                        <span className="px-4 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Enterprise TMS
                        </span>
                        <Link
                          href="/enterprise/cashflow-liquidity"
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700/50 rounded-lg mx-1 hover:text-white transition-colors duration-200"
                        >
                          Cashflow & Liquidity
                        </Link>
                        <Link
                          href="/enterprise/currency-fx-risk"
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700/50 rounded-lg mx-1 hover:text-white transition-colors duration-200"
                        >
                          Currency (FX) Risk
                        </Link>
                        <span className="px-4 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider block mt-2">
                          SME – TMS
                        </span>
                        <Link
                          href="/sme/innottm"
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700/50 rounded-lg mx-1 hover:text-white transition-colors duration-200"
                        >
                          InnoTTM
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <NavItem hasDropdown>
                  Solutions
                </NavItem>
                <AnimatePresence>
                  {openDropdown === 'solutions' && (
                    <motion.div
                      className="absolute left-0 mt-2 w-80 rounded-xl bg-gray-800/95 backdrop-blur-xl shadow-xl border-0 overflow-hidden z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-1 py-2">
                        {[
                          { href: "/solutions/cash-visibility-forecasting", label: "Cash Visibility & Forecasting" },
                          { href: "/solutions/foreign-exchange-risk", label: "Navigate Foreign Exchange Risk" },
                          { href: "/solutions/money-market", label: "Manage end-to-end money market instruments" },
                          { href: "/solutions/trade-finance", label: "Optimize Trade Finance Operations" },
                          { href: "/solutions/manage-debt", label: "Manage Debt" },
                          { href: "/solutions/commodity-risk", label: "Mitigate Commodity Risk" },
                          { href: "/solutions/treasury-payments", label: "Automate Treasury Payment Processes" },
                          { href: "/solutions/supply-chain-finance", label: "Supply Chain Finance Platform" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-100 hover:bg-teal-600/30 rounded-lg mx-1 transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <NavItem hasDropdown>
                  Resources
                </NavItem>
                <AnimatePresence>
                  {openDropdown === 'resources' && (
                    <motion.div
                      className="absolute left-0 mt-2 w-96 rounded-xl bg-gray-800/95 backdrop-blur-xl shadow-2xl border border-gray-700 overflow-hidden z-50 p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-300">Menu Links</h4>
                          <div className="space-y-1">
                            {[
                              { href: "/resources/our-clients", label: "Our Clients" },
                              { href: "/resources/success-stories", label: "Success Stories" },
                              { href: "/resources/why-choose-us", label: "Why Choose Us" },
                              { href: "/resources/integration", label: "Integration" },
                              { href: "/resources/security", label: "Security" },
                              { href: "/resources/fact-sheet", label: "Fact Sheet" },
                              { href: "/resources/faqs", label: "FAQs" },
                            ].map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block w-full px-3 py-2 text-sm text-gray-200 hover:bg-gray-700/50 hover:text-white rounded-lg transition-colors duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-300">Resources</h4>
                          <div className="space-y-1">
                            {[
                              { href: "/resources/blog", label: "Blog" },
                              { href: "/resources/whitepapers", label: "Whitepapers" },
                              { href: "/resources/case-studies", label: "Case Studies" },
                              { href: "/resources/webinars", label: "Webinars" },
                              { href: "/resources/videos", label: "Videos" },
                              { href: "/resources/glossary", label: "Glossary" },
                              { href: "/resources/help-center", label: "Help Center" },
                            ].map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block w-full px-3 py-2 text-sm text-gray-200 hover:bg-gray-700/50 hover:text-white rounded-lg transition-colors duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <NavItem hasDropdown>
                  Company
                </NavItem>
                <AnimatePresence>
                  {openDropdown === 'company' && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-gray-800/95 backdrop-blur-xl shadow-2xl border border-gray-700 overflow-hidden z-50 p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-300">Company Information</h4>
                        <div className="space-y-1">
                          {[
                            { href: "/about", label: "About Us" },
                            { href: "/leadership", label: "Leadership" },
                            { href: "/careers", label: "Careers" },
                            { href: "/newsroom", label: "Newsroom" },
                            { href: "/contact", label: "Contact Us" },
                            { href: "/partners", label: "Partners" },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block w-full px-3 py-2 text-sm text-gray-200 hover:bg-gray-700/50 hover:text-white rounded-lg transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="hidden md:flex items-center ml-4">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <Button className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30">
                  <motion.span
                    className="relative z-10 flex items-center"
                    whileHover={{ x: 2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    Contact Us
                    <motion.span
                      className="ml-2"
                      animate={{
                        x: [0, 4, 0],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Button>
              </motion.div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="ml-2 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors flex items-center">
                    <Globe size={22} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32 mt-2 rounded-xl bg-gray-800/95 text-gray-100 shadow-2xl border-0 backdrop-blur-xl p-2">
                  <DropdownMenuItem asChild>
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-teal-600/30 transition-colors">
                      <span role="img" aria-label="India">🇮🇳</span> India
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-teal-600/30 transition-colors">
                      <span role="img" aria-label="US">🇺🇸</span> US
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden border-b border-gray-800',
            isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative group">
              <button
                className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center justify-between"
                onClick={() => { }}
              >
                Home
                <ChevronDown size={16} className="ml-2 text-gray-400 transition-transform group-hover:rotate-180" />
              </button>
              <div className="mt-1 rounded-lg bg-gray-800/95 backdrop-blur-sm border border-gray-700 shadow-2xl overflow-hidden">
                <Link
                  href="/?variant=illustrative2"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700/50 text-gray-100 rounded-md m-1"
                >
                  <Lightbulb size={16} className="text-blue-400" /> Illustrative Style 2
                </Link>
                <Link
                  href="/?variant=illustrative3"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700/50 text-gray-100 rounded-md m-1"
                >
                  <Palette size={16} className="text-blue-400 rotate-180" /> Illustrative Style 3
                </Link>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center justify-between">
                Enterprise TMS
                <ChevronDown size={16} className="ml-2 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-gray-800/95 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-lg overflow-hidden">
                {[
                  { href: "/enterprise/cashflow-liquidity", label: "Cashflow & Liquidity" },
                  { href: "/enterprise/currency-fx-risk", label: "Currency (FX) Risk" },
                  { href: "/enterprise/investment-money-market", label: "Investment (Money Market)" },
                  { href: "/enterprise/trade-finance", label: "Trade Finance – Import Export & Banking" },
                  { href: "/enterprise/debt-borrowings", label: "Debt (Borrowings)" },
                  { href: "/enterprise/commodity-risk", label: "Commodity Risk" },
                  { href: "/enterprise/payments", label: "Payments" },
                  { href: "/enterprise/supply-chain-finance", label: "Supply Chain Finance – VNDZY®" },
                ].map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full hover:bg-gray-700/50 text-gray-100 rounded-md m-1">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center justify-between">
                SME – TMS
                <ChevronDown size={16} className="ml-2 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-gray-800/95 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-lg overflow-hidden">
                {[
                  { href: "/sme/innottm", label: "InnoTTM" },
                  { href: "/sme/innovest", label: "InnoInvest" },
                ].map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full hover:bg-gray-700/50 text-gray-100 rounded-md m-1">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center justify-between">
                Solutions
                <ChevronDown size={16} className="ml-2 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-gray-800/95 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-lg overflow-hidden">
                {[
                  { href: "/solutions/cash-visibility-forecasting", label: "Cash Visibility & Forecasting" },
                  { href: "/solutions/foreign-exchange-risk", label: "Navigate Foreign Exchange Risk" },
                  { href: "/solutions/money-market", label: "Manage end-to-end money market instruments" },
                  { href: "/solutions/trade-finance", label: "Optimize Trade Finance Operations" },
                  { href: "/solutions/manage-debt", label: "Manage Debt" },
                  { href: "/solutions/commodity-risk", label: "Mitigate Commodity Risk" },
                  { href: "/solutions/treasury-payments", label: "Automate Treasury Payment Processes" },
                  { href: "/solutions/supply-chain-finance", label: "Supply Chain Finance Platform" },
                ].map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full hover:bg-gray-700/50 text-gray-100 rounded-md m-1">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center justify-between">
                Resources
                <ChevronDown size={16} className="ml-2 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-gray-800/95 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-lg overflow-hidden">
                <div className="p-2 space-y-2">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300 px-2">Menu Links</h4>
                    <div className="space-y-1">
                      {[
                        { href: "/resources/our-clients", label: "Our Clients" },
                        { href: "/resources/success-stories", label: "Success Stories" },
                        { href: "/resources/why-choose-us", label: "Why Choose Us" },
                        { href: "/resources/integration", label: "Integration Capabilities" },
                        { href: "/resources/security", label: "Security" },
                        { href: "/resources/fact-sheet", label: "Fact Sheet" },
                        { href: "/resources/faqs", label: "FAQs" },
                      ].map((item) => (
                        <DropdownMenuItem key={item.href} asChild className="p-0">
                          <Link href={item.href} className="w-full px-2 py-1.5 text-sm hover:bg-gray-700/50 text-gray-200 rounded-md block">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300 px-2 mt-4">Resources</h4>
                    <div className="space-y-1">
                      {[
                        { href: "/resources/blog", label: "Blog" },
                        { href: "/resources/whitepapers", label: "Whitepapers" },
                        { href: "/resources/case-studies", label: "Case Studies" },
                        { href: "/resources/webinars", label: "Webinars" },
                        { href: "/resources/videos", label: "Videos" },
                        { href: "/resources/glossary", label: "Glossary" },
                        { href: "/resources/help-center", label: "Help Center" },
                      ].map((item) => (
                        <DropdownMenuItem key={item.href} asChild className="p-0">
                          <Link href={item.href} className="w-full px-2 py-1.5 text-sm hover:bg-gray-700/50 text-gray-200 rounded-md block">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center justify-between">
                Company
                <ChevronDown size={16} className="ml-2 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-gray-800/95 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-lg overflow-hidden">
                {[
                  { href: "/company/about-us", label: "About Us" },
                  { href: "/company/leadership", label: "Leadership" },
                  { href: "/company/careers", label: "Careers" },
                  { href: "/company/contact-us", label: "Contact Us" },
                ].map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full hover:bg-gray-700/50 text-gray-100 rounded-md m-1">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-2 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}