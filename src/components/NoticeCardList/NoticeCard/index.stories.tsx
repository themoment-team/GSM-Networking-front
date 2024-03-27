import NoticeCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NoticeCard> = {
  component: NoticeCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof NoticeCard>;

export const Primary: Story = {
  args: {},
};
