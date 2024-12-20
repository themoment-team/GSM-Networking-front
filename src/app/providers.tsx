'use client';

import React, { Suspense, useState } from 'react';

import { ThemeProvider } from '@emotion/react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ViewTransitions } from 'next-view-transitions';

import QueryClient from '@/app/queryClient';
import { CookieRemover } from '@/components';
import { theme } from '@/styles';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => QueryClient);

  return (
    <ThemeProvider theme={theme}>
      <ViewTransitions>
        <QueryClientProvider client={queryClient}>
          {children}
          <Suspense>
            <CookieRemover />
          </Suspense>
        </QueryClientProvider>
      </ViewTransitions>
    </ThemeProvider>
  );
};

export default Providers;
