import FilterModal from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilterModal> = {
  component: FilterModal,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FilterModal>;

export const Primary: Story = {};
