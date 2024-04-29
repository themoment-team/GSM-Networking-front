'use client';

import { useState } from 'react';

import { LikeButton } from '..';

import * as S from './style';

import type { CategoryType } from '@/types';
import { ReverseCategoryType } from '@/types';

interface Props {
  title: string;
  content: string;
  category: CategoryType;
  likeCount: number;
}

const BoardContent: React.FC<Props> = ({
  title,
  content,
  category,
  likeCount,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <S.TextWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{content}</S.Description>
      <S.CategoryBox>
        <S.CategoryText>{ReverseCategoryType[category]}</S.CategoryText>
      </S.CategoryBox>
      <LikeButton
        likeCount={likeCount}
        onClick={() => setIsActive((isActive) => !isActive)}
        isActive={isActive}
      />
    </S.TextWrapper>
  );
};

export default BoardContent;
