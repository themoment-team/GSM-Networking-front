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
    profile: {
      name: '김형록',
      email: 'abcdefg@gmail.com',
      generation: 5,
      phoneNumber: '010-1234-5678',
      snsUrl: null,
      profileUrl: null,
      career: [
        {
          companyName: '더모먼트',
          companyUrl: null,
          position: '프론트엔드',
          startDate: new Date(),
          endDate: null,
          isWorking: false,
        },
      ],
    },
  },
};
