'use client';

import { LikeButton } from '..';

import * as S from './style';

import { useGetBoardDetail } from '@/hooks';
import { usePostLikeCount } from '@/hooks';
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

  const { mutate: postMutate } = usePostLikeCount(parseInt(boardId), {
    onSuccess: () => {
      refetch();
    },
  });

  const uploadLike = () => {
    postMutate();
  };

  return (
    <S.TextWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{content}</S.Description>
      <S.CategoryBox>
        <S.CategoryText>{ReverseCategoryType[category]}</S.CategoryText>
        <LikeButton
          onClick={uploadLike}
          likeCount={likeCount}
          isActive={isLike}
          isDetail={true}
        />
      </S.CategoryBox>
    </S.TextWrapper>
  );
};

export default BoardContent;
