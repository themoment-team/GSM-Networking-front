import BoardCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BoardCard> = {
  component: BoardCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof BoardCard>;

export const Primary: Story = {
  args: {},
};
