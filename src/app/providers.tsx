'use client';

import React, { useState } from 'react';

import { ThemeProvider } from '@emotion/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SocketProvider } from '@/components';
import { theme } from '@/styles';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  );

  return (
    <ThemeProvider theme={theme}>
      <SocketProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SocketProvider>
    </ThemeProvider>
  );
};

export default Providers;
