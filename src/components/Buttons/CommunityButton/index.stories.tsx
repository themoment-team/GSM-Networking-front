import CommunityButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommunityButton> = {
  component: CommunityButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CommunityButton>;

export const Primary: Story = {
};
