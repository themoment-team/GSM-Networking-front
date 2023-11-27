import React from 'react';
import { GlobalStyle } from '../src/styles';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Providers from '../src/app/providers';

const customViewports = {
  width600: {
    name: 'width 600',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  ...INITIAL_VIEWPORTS,
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      backgrounds: {
        default: 'default',
        values: [
          {
            name: 'default',
            value: '#F5F6F8',
          },
          {
            name: 'light',
            value: '#ffffff',
          },
          {
            name: 'dark',
            value: '#050505',
          },
        ],
      },
    },
    nextjs: {
      appDirectory: true,
    },
    layout: 'fullscreen',
    viewport: {
      viewports: customViewports,
      defaultViewport: 'width600',
    },
  },
  decorators: [
    (Story) => (
      <Providers>
        <GlobalStyle />
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
