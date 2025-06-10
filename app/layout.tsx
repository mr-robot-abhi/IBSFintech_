import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

// Import the NavbarWrapper component
const NavbarWrapper = dynamic(() => import('@/components/layout/NavbarWrapper'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IBSFINtech - Treasury Management Solutions',
  description: 'Transform your treasury operations with AI-driven insights and seamless automation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <NavbarWrapper>
              {children}
            </NavbarWrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
