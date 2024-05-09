import CommentCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentCard> = {
  component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Open: Story = {
  args: {
    isOppened: true,
    commentCount: 2,
    setIsOppened: () => {},
  },
};

export const Close: Story = {
  args: {
    isOppened: false,
    commentCount: 2,
    setIsOppened: () => {},
  },
};
