import BoardCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BoardCard> = {
  component: BoardCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof BoardCard>;

export const Primary: Story = {
  args: {
    title:
      '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고',
    likeCount: 11,
    isLike: false,
    boardCategory: 'CHAT',
    commentCount: 11,
    author: {
      name: '박준호',
      generation: 6,
      profileUrl: '',
      defaultImgNumber: 5,
    },
  },
};
