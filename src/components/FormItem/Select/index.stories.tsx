import SelectFormItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

const options = ['option1', 'option2', 'option3'];

const meta: Meta<typeof SelectFormItem> = {
  component: SelectFormItem,
  parameters: {
    layout: 'padded',
  },
  args: {
    selectTitle: 'Title',
    errorMessage: '',
    options: options,
    required: false,
  },
};

export default meta;

type Story = StoryObj<typeof SelectFormItem>;

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

export const AddDefaultValue: Story = {
  args: {
    defaultValue: 'default value',
  },
};
