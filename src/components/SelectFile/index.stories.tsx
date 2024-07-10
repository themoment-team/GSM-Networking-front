import SelectFile from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectFile> = {
  component: SelectFile,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SelectFile>;

export const Primary: Story = {};
