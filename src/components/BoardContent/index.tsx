'use client';

import * as S from './style';

import type { CategoryType } from '@/types';
import { ReverseCategoryType } from '@/types';

interface Props {
  title: string;
  content: string;
  category: CategoryType;
}

const BoardContent: React.FC<Props> = ({ title, content, category }) => (
  <S.TextWrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{content}</S.Description>
    <S.CategoryBox>
      <S.CategoryText>{ReverseCategoryType[category]}</S.CategoryText>
    </S.CategoryBox>
  </S.TextWrapper>
);

export default BoardContent;
