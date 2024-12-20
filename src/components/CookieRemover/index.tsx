'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import { deleteCookie } from '@/utils';

const CookieRemover = () => {
  const path = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    if (!path.includes('auth')) deleteCookie('redirect');
  }, [path, params]);

  return null;
};

export default CookieRemover;
