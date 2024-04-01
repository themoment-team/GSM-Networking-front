'use client';

import * as S from './style';

import type { ReverseCategoryType } from '@/types';

interface Props {
  title: string;
  description: string;
  category: ReverseCategoryType;
}

const PostContent: React.FC<Props> = ({ title, description, category }) => (
  <S.TextWrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.CategoryBox>
      <S.CategoryText>{category}</S.CategoryText>
    </S.CategoryBox>
  </S.TextWrapper>
);

export default PostContent;
