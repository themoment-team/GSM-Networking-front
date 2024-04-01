import Reply from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Reply> = {
  component: Reply,
};

export default meta;

type Story = StoryObj<typeof Reply>;

export const Primary: Story = {
  args: {
    replyCommentId: '',
  },
};
