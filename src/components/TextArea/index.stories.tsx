import TextArea from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Gwangya: Story = {
  args: {
    textAreaType: 'gwangya',
  },
};

export const Chatting: Story = {
  args: {
    textAreaType: 'chatting',
  },
};
