import MapButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MapButton> = {
  component: MapButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MapButton>;

export const Primary: Story = {
  args: {},
};
