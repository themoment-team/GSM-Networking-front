import { CategoryType } from '@/types';

import PostContent from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostContent> = {
  component: PostContent,
};

export default meta;

type Story = StoryObj<typeof PostContent>;

export const Primary: Story = {
  args: {
    boardData: {
      title:
        '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고',
      content:
        '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고이해하는장소입니다.온라인이나오프라인에서형성되며,멤버들은공동의목표를달성하거나지식을나누며함께성장합니다.이는문화적,사회적차원에서다양성을존중하고유대감을형성하며,새로운아이디어를육성하고진보하는데중요한역할을합니다.상호작용과협력을통해커뮤니티는멤버들의참여와기여를촉진하며,함께하는경험을즐커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고이해하는장소입니다.온라인이나오프라인에서형성되며,멤버들은공동의목표를달성하거나지식을나누며함께성장합니다.이는문화적,사회적차원에서다양성을존중하고유대감을형성하며,새로운아이디어를육성하고진보하는데중요한역할을합니다.상호작용과협력을통해커뮤니티는멤버들의참여와기여를촉진하며,함께하는경험을즐커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고이해하는장소입니다.온라인이나오프라인에서형성되며,멤버들은공동의',
      boardCategory: CategoryType.QnA,
      likeCount: 11,
      isLike: false,
      createdAt: new Date(),
      comments: [],
      id: 1,
      author: {
        id: 1,
        generation: 6,
        defaultImgNumber: 1,
        name: '이승제',
        phoneNumber: '01012341234',
      },
      isPinned: false,
    },
  },
};
