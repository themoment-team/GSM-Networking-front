'use client';

import Link from 'next/link';

import * as S from './style';

import { MAP_PATH } from '@/constants';

const MapButton: React.FC = () => (
  <Link href={MAP_PATH}>
    <S.Button>회사 위치 살펴보기</S.Button>
  </Link>
);

export default MapButton;
