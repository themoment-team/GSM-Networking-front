import MapComponent from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MapComponent> = {
  component: MapComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MapComponent>;

export const Primary: Story = {
  args: {},
};
