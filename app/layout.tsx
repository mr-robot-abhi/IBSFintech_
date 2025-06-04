import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

// Import the NavbarWrapper component
const NavbarWrapper = dynamic(() => import('@/components/layout/NavbarWrapper'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IBS Fintech | Treasury Management Solutions',
  description: 'Comprehensive treasury management solutions for enterprise businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
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
