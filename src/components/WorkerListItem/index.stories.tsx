import WorkerListItem from './';

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
      generation: 5,
      position: '프론트엔드',
      SNS: 'https://instagram.com/khr5k0228',
      company: {
        name: '더모먼트',
        URL: 'https://official.hellogsm.kr/',
      },
    },
  },
};
