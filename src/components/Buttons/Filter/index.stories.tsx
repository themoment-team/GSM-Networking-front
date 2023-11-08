import FilterButton from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilterButton> = {
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Primary: Story = {};
