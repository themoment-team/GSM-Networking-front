import type { OpponentInfo } from '@/types/opponentInfo';

import ChattingListCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const opponent: OpponentInfo = {
  id: 1,
  name: '방가온',
  generation: 7,
};

const meta: Meta<typeof ChattingListCard> = {
  component: ChattingListCard,
  args: {
    opponent,
  },
};

export default meta;

type Story = StoryObj<typeof ChattingListCard>;

export const Primary: Story = {
  args: {
    opponent: { ...opponent },
    isNewMessage: false,
  },
};

export const isNewMessage: Story = {
  args: {
    opponent: { ...opponent },
    isNewMessage: true,
  },
};
