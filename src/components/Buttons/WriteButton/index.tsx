'use client';

import * as S from './style';

import { WriteIcon } from '@/assets';

const WRITE_PATH = '/community/write';


const WriteButton: React.FC = () => (
  <S.Button href={WRITE_PATH}>
    <WriteIcon />
  </S.Button>
);

export default WriteButton;
