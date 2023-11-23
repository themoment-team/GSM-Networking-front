import CommunityCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommunityCard> = {
  component: CommunityCard,
  args: {
    index: 1,
  },
};

export default meta;

type Story = StoryObj<typeof CommunityCard>;

export const Primary: Story = {
  args: {
    content:
      '커뮤니티는 다양한 사람들이 모여 소통하고 공유하는 공간으로, 서로의 경험과 지식을 나누며 유대감을 형성합니다.',
  },
};

export const LongContent: Story = {
  args: {
    content:
      '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고이해하는장소입니다.온라인이나오프라인에서형성되며,멤버들은공동의목표를달성하거나지식을나누며함께성장합니다.이는문화적,사회적차원에서다양성을존중하고유대감을형성하며,새로운아이디어를육성하고진보하는데중요한역할을합니다.상호작용과협력을통해커뮤니티는멤버들의참여와기여를촉진하며,함께하는경험을즐기고배우는공간으로자리매깁니다.',
  },
};
