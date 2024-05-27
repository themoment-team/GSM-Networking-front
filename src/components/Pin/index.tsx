'use client';

import * as S from './style';

import { PinIcon } from '@/assets';

interface Props {
  onClick: () => void;
  isPinned: boolean;
}

const Pin: React.FC<Props> = ({ onClick, isPinned }) => (
  <S.PinWrapper onClick={onClick}>
    <PinIcon isPinned={isPinned} />
    <S.Text isPinned={isPinned}>상단 고정</S.Text>
  </S.PinWrapper>
);
export default Pin;
