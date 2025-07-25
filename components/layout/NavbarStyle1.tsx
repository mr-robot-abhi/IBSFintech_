'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight, Palette, Lightbulb, BarChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import ModernMegaMenu from './ModernMegaMenu';

// Floating NavLink component
interface FloatingNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FloatingNavLink = ({ href, children, className = '' }: FloatingNavLinkProps) => {
  return (
    <Link href={href} className={`relative group ${className}`}>
      <motion.div
        whileHover={{ y: -2 }}
        className="relative px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-white/5"
      >
        <span className="relative z-10 text-white group-hover:text-blue-200 transition-colors duration-300">
          {children}
        </span>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
          style={{ originX: 0, originY: 0.5 }}
        />
      </motion.div>
    </Link>
  );
};

export default function NavbarStyle1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isScrolled
          ? 'bg-gradient-to-r from-blue-800/95 to-blue-700/95 shadow-xl backdrop-blur-xl border-b border-blue-600/20'
          : 'bg-gradient-to-r from-blue-800/80 to-blue-700/80 backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/?variant=illustrative1" className="group flex items-center">
            <motion.div 
              className="relative h-10 w-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Image
                src="/ibs_logo_sample.png"
                alt="IBS Fintech"
                width={160}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-blue-300 ml-2"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: ['0 0 0 0 rgba(147, 197, 253, 0.7)', '0 0 0 6px rgba(147, 197, 253, 0)']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ModernMegaMenu />
          </div>

          <div className="hidden md:flex items-center ml-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <motion.div 
                className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Button className="relative bg-white text-blue-700 hover:bg-blue-50 font-medium rounded-full px-6 py-2.5 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Contact Us
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700/50 focus:outline-none"
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
          'md:hidden bg-gradient-to-b from-blue-800 to-blue-700 transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-white hover:bg-blue-600 flex items-center justify-between">
              Home
              <ChevronDown size={16} className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-xl overflow-hidden">
              <DropdownMenuItem asChild>
                <Link href="/?variant=illustrative2" className="flex items-center gap-2 hover:bg-blue-50 rounded-lg m-1">
                  <Lightbulb size={16} className="text-blue-600" /> Illustrative Style 2
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/?variant=illustrative3" className="flex items-center gap-2 hover:bg-blue-50 rounded-lg m-1">
                  <Palette size={16} className="text-blue-600" /> Illustrative Style 3
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-white hover:bg-blue-600 flex items-center justify-between">
              Enterprise TMS
              <ChevronDown size={16} className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-xl overflow-hidden">
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
                  <Link href={item.href} className="w-full hover:bg-blue-50 rounded-lg m-1">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-white hover:bg-blue-600 flex items-center justify-between">
              SME – TMS
              <ChevronDown size={16} className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-xl overflow-hidden">
              {[
                { href: "/sme/innottm", label: "InnoTTM" },
                { href: "/sme/innovest", label: "InnoInvest" },
              ].map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="w-full hover:bg-blue-50 rounded-lg m-1">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-white hover:bg-blue-600 flex items-center justify-between">
              Solutions
              <ChevronDown size={16} className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-xl overflow-hidden">
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
                  <Link href={item.href} className="w-full hover:bg-blue-50 rounded-lg m-1">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-white hover:bg-blue-600 flex items-center justify-between">
              Resources
              <ChevronDown size={16} className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-xl overflow-hidden">
              <div className="p-2 space-y-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 px-2">Menu Links</h4>
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
                        <Link href={item.href} className="w-full px-2 py-1.5 text-sm hover:bg-blue-50 rounded-lg block">
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 px-2 mt-4">Resources</h4>
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
                        <Link href={item.href} className="w-full px-2 py-1.5 text-sm hover:bg-blue-50 rounded-lg block">
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
            <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-white hover:bg-blue-600 flex items-center justify-between">
              Company
              <ChevronDown size={16} className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-xl overflow-hidden">
              {[
                { href: "/company/about-us", label: "About Us" },
                { href: "/company/leadership", label: "Leadership" },
                { href: "/company/careers", label: "Careers" },
                { href: "/company/contact-us", label: "Contact Us" },
              ].map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="w-full hover:bg-blue-50 rounded-lg m-1">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="w-full mt-2 bg-white text-blue-700 hover:bg-blue-50 font-medium rounded-full px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
