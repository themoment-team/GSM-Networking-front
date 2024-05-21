import PopupCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PopupCard> = {
  component: PopupCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof PopupCard>;

export const Primary: Story = {
  args: { id: 1, boardId: 1, title: '안녕 나 팝업' },
};
