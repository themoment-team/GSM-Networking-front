import InputFormItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputFormItem> = {
  component: InputFormItem,
  parameters: {
    layout: 'padded',
  },
  args: {
    inputTitle: 'Input Title',
    required: false,
    errorMessage: '',
  },
};

export default meta;

type Story = StoryObj<typeof InputFormItem>;

export const Primary: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Errored: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};
