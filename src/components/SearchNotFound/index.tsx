'use client';

import * as S from './style';

import { SearchNotFoundIcon } from '@/assets';

interface Props {
  textArr: string[];
}

const SearchNotFound: React.FC<Props> = ({ textArr }) => (
  <S.SearchNotFoundWrapper>
    <SearchNotFoundIcon />
    <S.TextWrapper>
      {textArr.map((text) => (
        <S.SearchNotFoundText key={text}>{text}</S.SearchNotFoundText>
      ))}
    </S.TextWrapper>
  </S.SearchNotFoundWrapper>
);

export default SearchNotFound;
