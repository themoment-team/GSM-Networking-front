import FileUploadButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FileUploadButton> = {
  component: FileUploadButton,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FileUploadButton>;

export const Primary: Story = {};
