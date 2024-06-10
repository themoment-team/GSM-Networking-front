import MapMentorCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MapMentorCard> = {
  component: MapMentorCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MapMentorCard>;

export const Primary: Story = {
  args: {
    worker: {
      id: 'qkrwnsgh',
      name: '박준호',
      email: '',
      registered: true,
      generation: 5,
      position: 'DevOps',
      SNS: '',
      company: {
        name: '더모먼트',
        URL: 'https://official.hellogsm.kr/',
      },
      defaultImgNumber: 0,
      profileUrl: null,
    },
  },
};
