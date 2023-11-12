import Select from '.';

import type { Meta, StoryObj } from '@storybook/react';

const options = ['option1', 'option2', 'option3'];

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    layout: 'padded',
  },
  args: {
    options: options,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};

export const isError: Story = {
  args: {
    errorMessage: 'error message',
  },
};

export const AddDefaultValue: Story = {
  args: {
    defaultValue: 'default value',
  },
};
