'use client';

import * as S from './style';

import { PinIcon } from '@/assets';

interface Props {
  onClick: () => void;
  isClicked: boolean;
}

const Pin: React.FC<Props> = ({ onClick, isClicked }) => (
  <S.PinWrapper onClick={onClick}>
    <PinIcon isClicked={isClicked} />
    <S.Text isClicked={isClicked}>상단 고정</S.Text>
  </S.PinWrapper>
);
export default Pin;
