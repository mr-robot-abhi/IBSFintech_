'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Homepage variants
import IllustrativeOne from '@/components/homepage/IllustrativeOne';
import IllustrativeTwo from '@/components/homepage/IllustrativeTwo';
import IllustrativeThree from '@/components/homepage/IllustrativeThree';
import DataDriven from '@/components/homepage/DataDriven';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const variant = searchParams.get('variant') || 'illustrative1';

  useEffect(() => {
    if (!searchParams.get('variant')) {
      router.push('/?variant=illustrative1');
    }
  }, [searchParams, router]);

  return (
    <>
      {variant === 'illustrative1' && <IllustrativeOne />}
      {variant === 'illustrative2' && <IllustrativeTwo />}
      {variant === 'illustrative3' && <IllustrativeThree />}
      {variant === 'datadriven' && <DataDriven />}
    </>
  );
}