'use client';

import * as S from './style';

import { MapSearchNotFoundIcon } from '@/assets';

interface Props {
  textArr: string[];
}

const MapSearchNotFound: React.FC<Props> = ({ textArr }) => (
  <S.SearchNotFoundWrapper>
    <MapSearchNotFoundIcon />
    <S.TextWrapper>
      {textArr.map((text) => (
        <S.SearchNotFoundText key={text}>{text}</S.SearchNotFoundText>
      ))}
    </S.TextWrapper>
  </S.SearchNotFoundWrapper>
);

export default MapSearchNotFound;
