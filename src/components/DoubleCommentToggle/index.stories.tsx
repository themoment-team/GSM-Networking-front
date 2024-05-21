import DoubleCommentToggle from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DoubleCommentToggle> = {
  component: DoubleCommentToggle,
};

export default meta;

type Story = StoryObj<typeof DoubleCommentToggle>;

export const Open: Story = {
  args: {
    isOpened: true,
    commentCount: 2,
    setIsOpened: () => {},
  },
};

export const Close: Story = {
  args: {
    isOpened: false,
    commentCount: 2,
    setIsOpened: () => {},
  },
};
