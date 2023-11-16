import CareerCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const career = {
  companyName: '더모먼트',
  companyUrl: '',
  position: '프론트엔드',
  startDate: new Date(),
  endDate: new Date(),
  isWorking: false,
};

const meta: Meta<typeof CareerCard> = {
  component: CareerCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    career,
  },
};

export default meta;

type Story = StoryObj<typeof CareerCard>;

export const Primary: Story = {};

export const isWorking: Story = {
  args: {
    career: {
      ...career,
      isWorking: true,
    },
  },
};
