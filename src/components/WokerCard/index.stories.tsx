import WorkerCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkerCard> = {
  component: WorkerCard,
};

export default meta;

type Story = StoryObj<typeof WorkerCard>;

export const Primary: Story = {};
