'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Homepage variants
import IllustrativeTwo from '@/components/homepage/IllustrativeTwo';
import IllustrativeThree from '@/components/homepage/IllustrativeThree';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const variant = searchParams.get('variant') || 'illustrative2';

  useEffect(() => {
    if (!searchParams.get('variant')) {
      router.push('/?variant=illustrative2');
    }
  }, [searchParams, router]);

  return (
    <>
      {variant === 'illustrative2' && <IllustrativeTwo />}
      {variant === 'illustrative3' && <IllustrativeThree />}
    </>
  );
}