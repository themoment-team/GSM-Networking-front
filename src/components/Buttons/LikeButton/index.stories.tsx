import LikeButton from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LikeButton> = {
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof LikeButton>;

export const Primary: Story = {
  args: {
    onClick: () => {},
    isActive: false,
    likeCount: 11,
    isDetail: false,
  },
};
