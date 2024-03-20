import type { OpponentInfo } from '@/types/opponentInfo';

import CommentCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const opponent: OpponentInfo = {
  id: 1,
  name: '방가온',
  generation: 7,
};

const meta: Meta<typeof CommentCard> = {
  component: CommentCard,
  args: {
    opponent,
  },
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    isNewMessage: false,
  },
};
