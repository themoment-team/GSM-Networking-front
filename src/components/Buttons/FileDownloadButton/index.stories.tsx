import FileDownloadButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FileDownloadButton> = {
  component: FileDownloadButton,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FileDownloadButton>;

export const Primary: Story = {
  args: {
    file: {
      id: '1',
      fileUrls: 'file url test',
      name: 'test',
    },
  },
};
