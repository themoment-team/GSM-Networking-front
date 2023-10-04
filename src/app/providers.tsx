'use client';

import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { theme } from '@/styles';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Providers;
