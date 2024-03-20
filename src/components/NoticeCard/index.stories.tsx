import NoticeCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NoticeCard> = {
  component: NoticeCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof NoticeCard>;

export const Primary: Story = {
  args: {
    name: '김형록',
    date: '11월 21일',
    time: '오전 10:10',
    content:
      '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로, 다양한경험과지식을교환하며서로를돕고',
    like: '12',
    tag: '#스터디',
  },
};
