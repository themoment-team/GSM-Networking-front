'use client';

import React, { useState } from 'react';

import { ThemeProvider } from '@emotion/react';

import { QueryClientProvider } from '@tanstack/react-query';

import QueryClient from '@/app/queryClient';
import { theme } from '@/styles';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => QueryClient);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
