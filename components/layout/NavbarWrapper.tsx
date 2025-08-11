'use client';

import dynamic from 'next/dynamic';

// Dynamically import ModernMegaMenu with no SSR to avoid hydration issues
const ModernMegaMenu = dynamic(() => import('@/components/layout/ModernMegaMenu'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ModernMegaMenu />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </>
  );
}
