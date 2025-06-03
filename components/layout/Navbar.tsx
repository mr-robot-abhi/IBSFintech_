'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, BarChart, Lightbulb, Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isIllustrativeTwo = pathname.includes('variant=illustrative2');

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
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm dark:bg-gray-900/95'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/?variant=illustrative1" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">IBS Fintech</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="group flex items-center gap-1">
                  Home
                  <ChevronDown size={16} className="transition group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link href="/?variant=illustrative1" className="flex items-center gap-2">
                    <Palette size={16} /> Illustrative Style 1
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/?variant=illustrative2" className="flex items-center gap-2">
                    <Lightbulb size={16} /> Illustrative Style 2
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/?variant=datadriven" className="flex items-center gap-2">
                    <BarChart size={16} /> Data-Driven Style
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/?variant=illustrative3" className="flex items-center gap-2">
                    <Palette size={16} className="rotate-180" /> Illustrative Style 3
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/products"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium',
                pathname === '/products'
                  ? 'text-blue-600 dark:text-blue-400'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                    : 'text-white hover:text-blue-100 dark:text-white dark:hover:text-blue-100',
                isIllustrativeTwo && 'text-white hover:text-blue-100'
              )}
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium',
                pathname === '/solutions'
                  ? 'text-blue-600 dark:text-blue-400'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                    : 'text-white hover:text-blue-100 dark:text-white dark:hover:text-blue-100',
                isIllustrativeTwo && 'text-white hover:text-blue-100'
              )}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium',
                pathname === '/about'
                  ? 'text-blue-600 dark:text-blue-400'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                    : 'text-white hover:text-blue-100 dark:text-white dark:hover:text-blue-100',
                isIllustrativeTwo && 'text-white hover:text-blue-100'
              )}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium',
                pathname === '/services'
                  ? 'text-blue-600 dark:text-blue-400'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                    : 'text-white hover:text-blue-100 dark:text-white dark:hover:text-blue-100',
                isIllustrativeTwo && 'text-white hover:text-blue-100'
              )}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium',
                pathname === '/blog'
                  ? 'text-blue-600 dark:text-blue-400'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                    : 'text-white hover:text-blue-100 dark:text-white dark:hover:text-blue-100',
                isIllustrativeTwo && 'text-white hover:text-blue-100'
              )}
            >
              Blog
            </Link>
            <Button
              variant={isScrolled || !isIllustrativeTwo ? 'outline' : 'outline'}
              className={cn(
                'ml-4',
                !isScrolled && 'text-white border-white hover:bg-white/10 hover:text-white',
                isIllustrativeTwo && 'text-white border-white hover:bg-white/10 hover:text-white'
              )}
            >
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-1">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/?variant=illustrative1"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Home (Illustrative 1)
                </Link>
                <Link
                  href="/?variant=illustrative2"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Home (Illustrative 2)
                </Link>
                <Link
                  href="/?variant=datadriven"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Home (Data-Driven)
                </Link>
                <Link
                  href="/?variant=illustrative3"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Home (Illustrative 3)
                </Link>
              </div>
              <Link
                href="/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/solutions"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}