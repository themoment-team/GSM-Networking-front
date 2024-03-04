import ChattingHeader from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ChattingHeader> = {
  component: ChattingHeader,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof ChattingHeader>;

export const Primary: Story = {
  args: {
    name: '방가온',
    generation: 7,
  },
};
