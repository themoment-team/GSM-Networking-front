import type { CareerType } from '@/types';

import CareerCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const career: CareerType = {
  companyName: '더모먼트',
  companyUrl: '',
  position: '프론트엔드',
  startDate: '2022-02-02',
  endDate: '2022-02-02',
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
