'use client';

import * as S from './style';

import { WriteIcon } from '@/assets';

const WriteButton: React.FC<{ path: string }> = ({ path }) => (
  <S.Button href={path}>
    <WriteIcon />
  </S.Button>
);

export default WriteButton;
