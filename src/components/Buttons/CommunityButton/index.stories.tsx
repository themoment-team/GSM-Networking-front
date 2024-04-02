import Community from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Community> = {
  component: Community,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Community>;

export const Primary: Story = {
  args: {},
};
