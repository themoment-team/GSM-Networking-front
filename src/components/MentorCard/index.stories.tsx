import MentorCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MentorCard> = {
  component: MentorCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MentorCard>;

export const Primary: Story = {
  args: {
    worker: {
      id: 'tlsgmltjd',
      name: '신희성',
      email: 's23012@gsm.hs.kr',
      registered: true,
      generation: 5,
      position: '백엔드',
      SNS: 'https://instagram.com/shs.o_o',
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
