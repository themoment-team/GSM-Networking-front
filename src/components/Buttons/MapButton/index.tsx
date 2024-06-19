'use client';

import Link from 'next/link';

import * as S from './style';

import MAP_PATH from '@/constants/mapPath';

interface Props {}

const MapButton: React.FC<Props> = () => (
  <Link href={MAP_PATH}>
    <S.Button>회사 위치 살펴보기</S.Button>
  </Link>
);

export default MapButton;
