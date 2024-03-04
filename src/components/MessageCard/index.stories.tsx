import MessageCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MessageCard> = {
  component: MessageCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    children: '안녕하세요',
    isMine: true,
  },
};

export default meta;

type Story = StoryObj<typeof MessageCard>;

export const Primary: Story = {
  args: {
    children: '안녕하세요',
    isMine: true,
  },
};

export const isMine: Story = {
  args: {
    children: '안녕하세요',
    isMine: false,
  },
};
