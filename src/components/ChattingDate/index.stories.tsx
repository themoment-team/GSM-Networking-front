import ChattingDate from ".";

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ChattingDate> = {
    component: ChattingDate,
    parameters: {
        layout: 'padded',
    },
};

export default meta;

type Story = StoryObj<typeof ChattingDate>;

export const Primary: Story = {
    args: {
        time: '오후 11:10'
    },
};