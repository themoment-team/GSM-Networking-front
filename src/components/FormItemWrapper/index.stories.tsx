import FormItemWrapper from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormItemWrapper> = {
  component: FormItemWrapper,
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Title',
  },
};

export default meta;

type Story = StoryObj<typeof FormItemWrapper>;

export const Primary: Story = {};

export const Errored: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};
