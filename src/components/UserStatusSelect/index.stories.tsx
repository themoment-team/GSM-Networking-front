import UserStatusSelect from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UserStatusSelect> = {
  component: UserStatusSelect,
  parameters: {
    layout: 'padded',
  },
  args: {
    role: null,
    setRole: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof UserStatusSelect>;

export const Primary: Story = {};
