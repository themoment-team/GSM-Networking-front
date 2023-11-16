'use client';

import * as S from './style';

import { SearchNotFoundIcon } from '@/assets';

interface Props {
  textArr: string[];
}

const CannotFind: React.FC<Props> = ({ textArr }) => (
  <S.CannotFindWrapper>
    <SearchNotFoundIcon />
    <S.CannotFindText>
      {textArr.map((text, i) => (
        <S.CannotFindText key={text + i}>{text}</S.CannotFindText>
      ))}
    </S.CannotFindText>
  </S.CannotFindWrapper>
);

export default CannotFind;
