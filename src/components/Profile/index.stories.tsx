import Profile from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Profile> = {
  component: Profile,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {
  args: {
    name: '김형록',
    generation: 5,
  },
};
