import ProfileUpdateButton from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileUpdateButton> = {
  component: ProfileUpdateButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ProfileUpdateButton>;

export const Primary: Story = {};
