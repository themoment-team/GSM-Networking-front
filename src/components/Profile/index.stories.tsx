import Profile from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Profile> = {
  component: Profile,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {
  args: {
    // worker: {
    //   id: 'tlsgmltjd',
    //   name: '신희성',
    //   email: 's23012@gsm.hs.kr',
    //   registered: true,
    //   generation: 5,
    //   position: '백엔드',
    //   SNS: 'https://instagram.com/shs.o_o',
    //   company: {
    //     name: '더모먼트',
    //     URL: 'https://official.hellogsm.kr/',
    //   },
    //   temporaryImgNumber: 0,
    // },
  },
};
