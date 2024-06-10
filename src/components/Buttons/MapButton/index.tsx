'use client';

import Link from 'next/link';

import * as S from './style';

import MAP_PATH from '@/constants/mapPath';

interface Props {}

const MapButton: React.FC<Props> = () => (
  <S.Button>
    <Link href={MAP_PATH}>회사 위치 살펴보기</Link>
  </S.Button>
);

export default MapButton;
