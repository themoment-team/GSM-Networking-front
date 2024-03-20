import SubFunctionHeader from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SubFunctionHeader> = {
  component: SubFunctionHeader,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SubFunctionHeader>;

export const Primary: Story = {
  args: {
    title: '방가온 7기',
    prevPath: '/',
  },
};
