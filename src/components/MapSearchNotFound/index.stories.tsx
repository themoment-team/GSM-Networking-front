import SearchNotFound from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchNotFound> = {
  component: SearchNotFound,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SearchNotFound>;

export const SearchMentor: Story = {
  args: {
    textArr: [
      '회사 및 사람을 찾을 수 없어요.',
      '오타, 띄어쓰기 등을 확인 해주세요.',
    ],
  },
};

export const ResistorSearchMentor: Story = {
  args: {
    textArr: [
      '회사 및 사람을 찾을 수 없어요.',
      '오타, 띄어쓰기 등을 확인 해주세요.',
    ],
  },
};
