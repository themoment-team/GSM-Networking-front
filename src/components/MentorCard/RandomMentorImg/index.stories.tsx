import RandomMentorImg from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RandomMentorImg> = {
  component: RandomMentorImg,
};

export default meta;

type Story = StoryObj<typeof RandomMentorImg>;

export const MentorImg0: Story = {
  args: {
    temporaryImgNumber: 0,
  },
};

export const MentorImg1: Story = {
  args: {
    temporaryImgNumber: 1,
  },
};

export const MentorImg2: Story = {
  args: {
    temporaryImgNumber: 2,
  },
};

export const MentorImg3: Story = {
  args: {
    temporaryImgNumber: 3,
  },
};

export const MentorImg4: Story = {
  args: {
    temporaryImgNumber: 4,
  },
};
