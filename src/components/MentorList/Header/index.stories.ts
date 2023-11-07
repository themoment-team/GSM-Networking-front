import MentorListHeader from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MentorListHeader> = {
  component: MentorListHeader,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MentorListHeader>;

export const Primary: Story = {};
