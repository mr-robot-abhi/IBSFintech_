'use client';

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import Navbar components with no SSR to avoid hydration issues
const Navbar = dynamic(() => import('@/components/layout/Navbar'), { ssr: false });
const NavbarStyle1 = dynamic(() => import('@/components/layout/NavbarStyle1'), { ssr: false });
const NavbarStyle2 = dynamic(() => import('@/components/layout/NavbarStyle2'), { ssr: false });

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const variant = searchParams.get('variant') || 'illustrative1';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  // Don't render any navbar for pages that include their own navigation
  if (pathname.includes('(style1)')) {
    return (
      <>
        <NavbarStyle1 />
        <main className="flex-grow">{children}</main>
      </>
    );
  }

  // Select the appropriate Navbar based on the variant
  const getNavbar = () => {
    switch (variant) {
      case 'illustrative3':
        return null; // No navbar for Style 3 as it has its own header
      case 'illustrative1':
        return <NavbarStyle1 />;
      case 'illustrative2':
        return <NavbarStyle2 />;
      case 'datadriven':
      default:
        return <Navbar />;
    }
  };

  return (
    <>
      {getNavbar()}
      <main className="flex-grow">{children}</main>
    </>
  );
}
