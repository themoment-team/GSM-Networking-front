import ChattingButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ChattingButton> = {
  component: ChattingButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ChattingButton>;

export const Primary: Story = {};
