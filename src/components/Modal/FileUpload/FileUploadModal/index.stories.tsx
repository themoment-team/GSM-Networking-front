import FileUpload from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Primary: Story = {};
