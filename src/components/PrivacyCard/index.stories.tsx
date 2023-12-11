import PrivacyCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrivacyCard> = {
  component: PrivacyCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof PrivacyCard>;

export const Primary: Story = {
  args: {
    privacy: {
      privacyKey: '전화번호',
      privacyValue: '010 9999 9999️',
    },
  },
};

export const Secondary: Story = {
  args: {
    privacy: {
      privacyKey: 'SNS',
      privacyValue: 'https://www.instagram.com/',
    },
  },
};
