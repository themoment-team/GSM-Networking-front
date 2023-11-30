import WorkerListItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkerListItem> = {
  component: WorkerListItem,
};

export default meta;

type Story = StoryObj<typeof WorkerListItem>;

export const Primary: Story = {
  args: {
    worker: {
      id: 'asdfghjkl',
      name: '김형록',
      email: 'khr5k0228@gmail.com',
      registered: true,
      generation: 5,
      position: '프론트엔드',
      SNS: 'https://instagram.com/khr5k_0228',
      company: {
        name: '더모먼트',
        URL: 'https://official.hellogsm.kr/',
      },
      temporaryImgNumber: 0,
      profileUrl:
        'https://gsm-networking-bucket.s3.ap-northeast-2.amazonaws.com/a6c46a31-485e-4cc4-b9ad-e572eee14f622023-11-21T09%3A16%3A21.446456989.jpeg',
    },
  },
};
