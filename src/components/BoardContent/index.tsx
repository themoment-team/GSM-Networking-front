'use client';

import * as S from './style';

import { CategoryType } from '@/types';
import type { ReverseCategoryType } from '@/types';

interface Props {
  title: string;
  content: string;
  category: ReverseCategoryType;
}

const BoardContent: React.FC<Props> = ({ title, content, category }) => (
  <S.TextWrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{content}</S.Description>
    <S.CategoryBox>
      <S.CategoryText>{CategoryType[category]}</S.CategoryText>
    </S.CategoryBox>
  </S.TextWrapper>
);

export default BoardContent;
