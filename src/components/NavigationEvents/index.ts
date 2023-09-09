'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import { pageview } from '@/libs';

export default function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
