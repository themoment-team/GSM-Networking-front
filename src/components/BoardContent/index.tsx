'use client';

import { useState } from 'react';

import { toast } from 'react-toastify';

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
interface LikeContextType {
  previousLikeCount: number;
  previousIsLike: boolean;
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

  const [optimisticLikeCount, setOptimisticLikeCount] = useState(likeCount);
  const [optimisticIsLike, setOptimisticIsLike] = useState(isLike);

  const { mutate: postMutate } = usePostLikeCount(parseInt(boardId), {
    onMutate: async (): Promise<LikeContextType> => {
      setOptimisticLikeCount((prev) =>
        optimisticIsLike ? prev - 1 : prev + 1
      );
      setOptimisticIsLike((prev) => !prev);

      return {
        previousLikeCount: optimisticLikeCount,
        previousIsLike: optimisticIsLike,
      };
    },
    onError: (err, variables, context) => {
      const contextData = context as LikeContextType;
      if (contextData) {
        setOptimisticLikeCount(contextData.previousLikeCount);
        setOptimisticIsLike(contextData.previousIsLike);
      }
      toast.error('좋아요 업데이트에 실패했습니다.');
    },
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
          likeCount={optimisticLikeCount}
          isActive={optimisticIsLike}
          isDetail={true}
        />
      </S.CategoryBox>
    </S.TextWrapper>
  );
};

export default BoardContent;
