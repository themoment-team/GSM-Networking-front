import Pin from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pin> = {
  component: Pin,
};

export default meta;

type Story = StoryObj<typeof Pin>;

export const Clicked: Story = {
  args: {
    onClick: () => {},
    isPinned: true,
  },
};

export const NotClicked: Story = {
  args: {
    onClick: () => {},
    isPinned: false,
  },
};
