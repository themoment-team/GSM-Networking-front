'use client';

import * as S from './style';

import { CannotFindIcon } from '@/assets';

interface Props {
  textArr: string[];
}

const CannotFind: React.FC<Props> = ({ textArr }) => (
  <S.CannotFindWrapper>
    <CannotFindIcon />
    <S.CannotFindText>
      {textArr.map((text, i) => (
        <S.CannotFindText key={text + i}>{text}</S.CannotFindText>
      ))}
    </S.CannotFindText>
  </S.CannotFindWrapper>
);

export default CannotFind;
