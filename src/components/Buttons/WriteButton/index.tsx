'use client';

import * as S from './style';

import { WriteIcon } from '@/assets';

interface Props {
  onClick?: () => void;
}

const WriteButton: React.FC<Props> = ({ onClick }) => (
  <S.Button type='button' onClick={onClick}>
    <WriteIcon />
  </S.Button>
);

export default WriteButton;
