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

export const IsError: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};

export const IsRequired: Story = {
  args: {
    required: true,
  },
};
