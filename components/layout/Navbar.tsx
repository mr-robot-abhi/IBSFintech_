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
import { useTheme } from '@/context/ThemeContext';
import { forwardRef, PropsWithChildren, ButtonHTMLAttributes } from 'react';

// Custom NavLink component with underline animation
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className={`relative group px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-teal-50/60 dark:hover:bg-gray-800/60 ${className}`}>
      <span className="relative z-10 text-inherit">{children}</span>
      {/* Animated underline for hover and active */}
      <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left" style={{transform: isActive ? 'scaleX(1)' : undefined}} />
    </Link>
  );
};

// --- Modern menu button with underline for dropdown triggers ---
const MenuButton = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>(
  function MenuButton({ children, className = '', ...props }, ref) {
    return (
      <Button
        ref={ref}
        variant="ghost"
        className={cn(
          'group flex items-center gap-1 px-4 py-2.5 rounded-xl font-medium transition-all duration-300',
          'hover:scale-105 hover:bg-teal-50/60 dark:hover:bg-gray-800/60',
          'relative',
          className
        )}
        {...props}
      >
        <span className="relative z-10 text-inherit">{children}</span>
        <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left" />
      </Button>
    );
  }
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

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
        'backdrop-blur-xl border-b',
        theme === 'dark'
          ? 'bg-gray-900/80 border-gray-800/70 shadow-lg'
          : 'bg-white/80 border-gray-200 shadow-lg'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto px-6 py-4 transition-colors duration-300',
        theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
      )}>
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <motion.div 
              className="relative h-10 w-auto flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className={cn(
                'inline-flex items-center justify-center rounded-lg',
                theme === 'dark'
                  ? 'bg-gray-900/90'
                  : 'bg-white shadow-sm ring-1 ring-gray-200',
                'px-2 py-1'
              )}>
                <Image
                  src="/ibs_logo_sample.png"
                  alt="IBS Fintech"
                  width={140}
                  height={36}
                  className="h-9 w-auto object-contain drop-shadow-md"
                  priority
                />
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Home Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MenuButton>Home <ChevronDown size={16} className="ml-1 inline" /></MenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className={cn('rounded-xl shadow-2xl border-0 mt-2 backdrop-blur-xl', theme === 'dark' ? 'bg-gray-900/95 text-gray-100' : 'bg-white/95 text-gray-900')}>
                <DropdownMenuItem asChild><Link href="/?variant=illustrative1" className="flex items-center gap-2">Illystrative Style 1</Link></DropdownMenuItem>
<DropdownMenuItem asChild><Link href="/?variant=illustrative2" className="flex items-center gap-2">Illustrative Style 2</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/?variant=illustrative3" className="flex items-center gap-2">Illustrative Style 3</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MenuButton>Products <ChevronDown size={16} className="ml-1 inline" /></MenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[800px] p-6 rounded-xl shadow-2xl border-0 mt-2 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="px-2 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">Enterprise TMS</h4>
                    <div className="grid grid-cols-2 gap-1">
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/cashflow-liquidity" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Cashflow & Liquidity</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/currency-fx-risk" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Currency (FX) Risk</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/investment-money-market" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Investment (Money Market)</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/trade-finance" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Trade Finance</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/debt-borrowings" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Debt (Borrowings)</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/commodity-risk" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Commodity Risk</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/payments" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Payments</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/enterprise/supply-chain-finance" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Supply Chain Finance – VNDZY®</Link></DropdownMenuItem>
                    </div>
                  </div>
                  <div>
                    <h4 className="px-2 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">SME – TMS</h4>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild className="p-0"><Link href="/sme/innottm" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">InnoTTM</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/sme/innovest" className="block w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">InnoInvest</Link></DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MenuButton>Solutions <ChevronDown size={16} className="ml-1 inline" /></MenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 rounded-xl shadow-2xl border-0 mt-2 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95">
                <DropdownMenuItem asChild><Link href="/solutions/cash-visibility-forecasting" className="w-full">Cash Visibility & Forecasting</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/solutions/foreign-exchange-risk" className="w-full">Navigate Foreign Exchange Risk</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/solutions/money-market" className="w-full">Money Market Instruments</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/solutions/trade-finance" className="w-full">Trade Finance Operations</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/solutions/manage-debt" className="w-full">Manage Debt</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/solutions/commodity-risk" className="w-full">Mitigate Commodity Risk</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/solutions/treasury-payments" className="w-full">Payment Automation</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/solutions/supply-chain-finance" className="w-full">Supply Chain Finance</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MenuButton>Resources <ChevronDown size={16} className="ml-1 inline" /></MenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-96 p-4 rounded-xl shadow-2xl border-0 mt-2 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Menu Links</h4>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/our-clients" className="w-full px-2 py-1.5 text-sm">Our Clients</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/success-stories" className="w-full px-2 py-1.5 text-sm">Success Stories</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/why-choose-us" className="w-full px-2 py-1.5 text-sm">Why Choose Us</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/integration" className="w-full px-2 py-1.5 text-sm">Integration Capabilities</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/security" className="w-full px-2 py-1.5 text-sm">Security</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/fact-sheet" className="w-full px-2 py-1.5 text-sm">Fact Sheet</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/faqs" className="w-full px-2 py-1.5 text-sm">FAQs</Link></DropdownMenuItem>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Media & Updates</h4>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/news" className="w-full px-2 py-1.5 text-sm">Latest News</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/blogs" className="w-full px-2 py-1.5 text-sm">Blogs</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/videos" className="w-full px-2 py-1.5 text-sm">Videos</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/webinars" className="w-full px-2 py-1.5 text-sm">Webinars</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/resources/events" className="w-full px-2 py-1.5 text-sm">Events</Link></DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MenuButton>Company <ChevronDown size={16} className="ml-1 inline" /></MenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-96 p-4 rounded-xl shadow-2xl border-0 mt-2 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Company Information</h4>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild className="p-0"><Link href="/company/about" className="w-full px-2 py-1.5 text-sm">About Us</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/company/leadership" className="w-full px-2 py-1.5 text-sm">Leadership Team</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/company/us-leadership" className="w-full px-2 py-1.5 text-sm">US Leadership Team</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/company/partners" className="w-full px-2 py-1.5 text-sm">Global Partners</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/company/careers" className="w-full px-2 py-1.5 text-sm">Career</Link></DropdownMenuItem>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Culture & Recognition</h4>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild className="p-0"><Link href="/company/awards" className="w-full px-2 py-1.5 text-sm">Awards & Recognitions</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="p-0"><Link href="/company/life" className="w-full px-2 py-1.5 text-sm">Life at IBSFINtech</Link></DropdownMenuItem>
                    </div>
                    <div className="pt-2">
                      <DropdownMenuItem asChild className="p-0"><Link href="/contact" className="block px-2 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 dark:hover:bg-gray-800 rounded">Contact Us →</Link></DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Contact Us Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group ml-2"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur opacity-60 group-hover:opacity-90 transition duration-300 pointer-events-none" />
              <Button className="relative z-10 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full px-7 py-2.5 shadow-lg hover:shadow-xl hover:from-teal-400 hover:to-teal-500 transition-all duration-300 border-0 focus:ring-2 focus:ring-teal-300 focus:outline-none">
                Contact Sales
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'md:hidden rounded-md p-2',
              theme === 'dark' ? 'text-gray-100 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-1">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="flex flex-col space-y-2">
                <div className="pl-3 border-l-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Home Styles</h3>
                  <div className="space-y-1 mt-1">
                    <Link href="/?variant=illustrative2" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Illustrative Style 2</Link>
                    <Link href="/?variant=illustrative3" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Illustrative Style 3</Link>
                  </div>
                </div>
                
                {/* Enterprise TMS */}
                <div className="pl-3 border-l-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Enterprise TMS</h3>
                  <div className="space-y-1 mt-1">
                    <Link href="/enterprise/cashflow-liquidity" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Cashflow & Liquidity</Link>
                    <Link href="/enterprise/currency-fx-risk" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Currency (FX) Risk</Link>
                    <Link href="/enterprise/investment-money-market" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Investment (Money Market)</Link>
                    <Link href="/enterprise/trade-finance" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Trade Finance</Link>
                    <Link href="/enterprise/debt-borrowings" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Debt (Borrowings)</Link>
                    <Link href="/enterprise/commodity-risk" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Commodity Risk</Link>
                    <Link href="/enterprise/payments" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Payments</Link>
                    <Link href="/enterprise/supply-chain-finance" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Supply Chain Finance – VNDZY®</Link>
                  </div>
                </div>

                {/* SME TMS */}
                <div className="pl-3 border-l-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">SME – TMS</h3>
                  <div className="space-y-1 mt-1">
                    <Link href="/sme/innottm" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>InnoTTM</Link>
                    <Link href="/sme/innovest" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>InnoInvest</Link>
                  </div>
                </div>

                {/* Solutions */}
                <div className="pl-3 border-l-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Solutions</h3>
                  <div className="space-y-1 mt-1">
                    <Link href="/solutions/cash-visibility-forecasting" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Cash Visibility & Forecasting</Link>
                    <Link href="/solutions/foreign-exchange-risk" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Navigate Foreign Exchange Risk</Link>
                    <Link href="/solutions/money-market" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Money Market Instruments</Link>
                    <Link href="/solutions/trade-finance" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Trade Finance Operations</Link>
                    <Link href="/solutions/manage-debt" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Manage Debt</Link>
                    <Link href="/solutions/commodity-risk" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Mitigate Commodity Risk</Link>
                    <Link href="/solutions/treasury-payments" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Payment Automation</Link>
                    <Link href="/solutions/supply-chain-finance" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Supply Chain Finance</Link>
                  </div>
                </div>

                {/* Resources */}
                <div className="pl-3 border-l-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Resources</h3>
                  <div className="space-y-3 mt-1">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 px-2 py-1">Menu Links</h4>
                      <Link href="/resources/our-clients" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Our Clients</Link>
                      <Link href="/resources/success-stories" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Success Stories</Link>
                      <Link href="/resources/why-choose-us" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Why Choose Us</Link>
                      <Link href="/resources/integration" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Integration Capabilities</Link>
                      <Link href="/resources/security" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Security</Link>
                      <Link href="/resources/fact-sheet" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Fact Sheet</Link>
                      <Link href="/resources/faqs" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>FAQs</Link>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 px-2 py-1">Media & Updates</h4>
                      <Link href="/resources/news" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Latest News</Link>
                      <Link href="/resources/blogs" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Blogs</Link>
                      <Link href="/resources/videos" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Videos</Link>
                      <Link href="/resources/webinars" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Webinars</Link>
                      <Link href="/resources/events" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Events</Link>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="pl-3 border-l-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Company</h3>
                  <div className="space-y-3 mt-1">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 px-2 py-1">Company Information</h4>
                      <Link href="/company/about" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>About Us</Link>
                      <Link href="/company/leadership" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Leadership Team</Link>
                      <Link href="/company/us-leadership" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>US Leadership Team</Link>
                      <Link href="/company/partners" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Global Partners</Link>
                      <Link href="/company/careers" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Career</Link>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 px-2 py-1">Culture & Recognition</h4>
                      <Link href="/company/awards" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Awards & Recognitions</Link>
                      <Link href="/company/life" className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Life at IBSFINtech</Link>
                    </div>
                    <div className="pt-2">
                      <Link href="/contact" className="block px-2 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Contact Us →</Link>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}