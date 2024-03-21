import WriteButton from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WriteButton> = {
  component: WriteButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof WriteButton>;

export const Primary: Story = {
  args: {
    onClick: () => {},
  },
};
