import MiniProfile from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MiniProfile> = {
  component: MiniProfile,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MiniProfile>;

export const Primary: Story = {
  args: {
    profile: { name: '김형록', generation: 5, defaultImgNumber: 1 },
  },
};

export const HavedImage: Story = {
  args: {
    profile: {
      name: '김형록',
      defaultImgNumber: 1,
      generation: 5,
      profileUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmut5h67L7lxQoTWdCnEQtWxh1LNN-sWgQw&usqp=CAU',
    },
  },
};

export const Small: Story = {
  args: {
    isSmallSize: true,
    profile: {
      name: '김형록',
      defaultImgNumber: 1,
      generation: 5,
      profileUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmut5h67L7lxQoTWdCnEQtWxh1LNN-sWgQw&usqp=CAU',
    },
  },
};
