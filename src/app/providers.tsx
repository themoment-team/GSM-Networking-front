'use client';

import React, { useState } from 'react';
import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { ThemeProvider } from '@emotion/react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ViewTransitions } from 'next-view-transitions';

import QueryClient from '@/app/queryClient';
import { theme } from '@/styles';
import { deleteCookie } from '@/utils';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => QueryClient);

  const path = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    if (!path.includes('auth')) deleteCookie('redirect');
  }, [path, params]);

  return (
    <ThemeProvider theme={theme}>
      <ViewTransitions>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ViewTransitions>
    </ThemeProvider>
  );
};

export default Providers;
