'use client';

import { LikeButton } from '..';

import * as S from './style';

import { useGetBoardDetail } from '@/hooks';
import { useOptimisticLike } from '@/hooks';
import type { CategoryType } from '@/types';
import { ReverseCategoryType } from '@/types';
interface Props {
  title: string;
  content: string;
  category: CategoryType;
  likeCount: number;
  isLike: boolean;
  boardId: string;
}

const BoardContent: React.FC<Props> = ({
  title,
  content,
  category,
  likeCount,
  isLike,
  boardId,
}) => {
  const { refetch } = useGetBoardDetail(boardId);

  const { optimisticLikeCount, optimisticIsLike, uploadLike } =
    useOptimisticLike(parseInt(boardId), likeCount, isLike, refetch);

  return (
    <S.TextWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{content}</S.Description>
      <S.CategoryBox>
        <S.CategoryText>{ReverseCategoryType[category]}</S.CategoryText>
        <LikeButton
          onClick={uploadLike}
          likeCount={optimisticLikeCount}
          isActive={optimisticIsLike}
          isDetail={true}
        />
      </S.CategoryBox>
    </S.TextWrapper>
  );
};

export default BoardContent;
