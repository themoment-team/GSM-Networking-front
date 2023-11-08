import SearchBar from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Primary: Story = {};
