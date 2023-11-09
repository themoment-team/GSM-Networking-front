import ToolTip from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToolTip> = {
  component: ToolTip,
};

export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Primary: Story = {
  args: {
    textArr: ['등록된 멘토임을 의미합니다.', '차후 등록을 진행해 보세요.'],
  },
};
