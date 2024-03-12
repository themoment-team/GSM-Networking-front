import ChattingDate from ".";

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ChattingDate> = {
    component: ChattingDate,
    args: {
        createdAt: '2023-11-27T14:10:00.000',
    },
};

export default meta;

type Story = StoryObj<typeof ChattingDate>;

export const Primary: Story = {};