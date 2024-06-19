'use client';

import * as S from './style';

import { PinIcon } from '@/assets';

interface Props {
  onClick: () => void;
  isPinned: boolean;
  isTeacher: boolean;
}

const Pin: React.FC<Props> = ({ onClick, isPinned, isTeacher }) => (
  <S.PinWrapper onClick={onClick} isTeacher={isTeacher}>
    <PinIcon isPinned={isPinned} />
    <S.Text isPinned={isPinned}>상단 고정</S.Text>
  </S.PinWrapper>
);
export default Pin;
