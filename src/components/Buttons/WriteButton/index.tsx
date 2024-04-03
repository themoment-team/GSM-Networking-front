'use client';

import * as S from './style';

import { WriteIcon } from '@/assets';


const WriteButton: React.FC = () => (
  <S.Button href='/community/write'>
    <WriteIcon />
  </S.Button>
);

export default WriteButton;
