'use client';

import { useState } from 'react';

import { toast } from 'react-toastify';

import { MiniProfile } from '..';
import { LikeButton } from '..';

import * as S from './style';

import * as I from '@/assets';
import { BOARD_PATH } from '@/constants';
import { useGetBoardList, usePostLikeCount } from '@/hooks';
import type { BoardInfoType } from '@/types';
import { ReverseCategoryType } from '@/types';
import { parseDateString } from '@/utils';

interface LikeContextType {
  previousLikeCount: number;
  previousIsLike: boolean;
}

const BoardCard: React.FC<BoardInfoType> = ({
  id,
  createdAt,
  title,
  authorName,
  boardCategory,
  author,
  likeCount,
  commentCount,
  isLike,
}) => {
  const { monthDay, time } = parseDateString(createdAt);
  const [optimisticLikeCount, setOptimisticLikeCount] = useState(likeCount);
  const [optimisticIsLike, setOptimisticIsLike] = useState(isLike);

  const { refetch } = useGetBoardList();

  const { mutate: postMutate } = usePostLikeCount(id, {
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
    <S.ContentBox>
      <S.BoardCard href={`${BOARD_PATH}/${id}`}>
        <S.ContentHeader>
          <S.HeaderTitle>
            <MiniProfile profile={author} />
            <S.Name>{authorName}</S.Name>
            <S.DateAndTime>
              <S.Date>{monthDay}</S.Date>
              <S.Time>{time}</S.Time>
            </S.DateAndTime>
          </S.HeaderTitle>
          <S.Tag>#{ReverseCategoryType[boardCategory]}</S.Tag>
        </S.ContentHeader>
        <S.Content>{title}</S.Content>
      </S.BoardCard>
      <S.BottomBox>
        <LikeButton
          onClick={uploadLike}
          likeCount={optimisticLikeCount}
          isActive={optimisticIsLike}
          isDetail={false}
        />
        <S.Comment>
          <I.CommentIcon />
          <S.CommentCount>{commentCount}</S.CommentCount>
        </S.Comment>
      </S.BottomBox>
    </S.ContentBox>
  );
};

export default BoardCard;
