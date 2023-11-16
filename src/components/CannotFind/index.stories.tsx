import CannotFind from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CannotFind> = {
  component: CannotFind,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CannotFind>;

export const SearchMentor: Story = {
  args: {
    textArr: [
      '해당 정보를 가진 졸업생을 찾을 수 없어요.',
      '오타, 띄어쓰기 등을 확인 해주세요.',
    ],
  },
};

export const ResistorSearchMentor: Story = {
  args: {
    textArr: ['이름을 찾을 수 없어요.', '오타, 띄어쓰기 등을 확인 해주세요.'],
  },
};
