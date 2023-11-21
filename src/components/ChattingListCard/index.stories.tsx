import type { Opponent } from '@/types/opponent';

import ChattingListCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const opponent: Opponent = {
  id: 1,
  name: '방가온',
  generation: 7,
};

const meta: Meta<typeof ChattingListCard> = {
  component: ChattingListCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    opponent,
  },
};

export default meta;

type Story = StoryObj<typeof ChattingListCard>;

export const Primary: Story = {
  args: {
    opponent: { ...opponent },
    isCheck: true,
  },
};

export const isCheck: Story = {
  args: {
    opponent: { ...opponent },
    isCheck: false,
  },
};
