'use client';

import { useState } from 'react';

import { MiniProfile } from '..';

import * as S from './style';

import * as I from '@/assets';
import { BOARD_PATH } from '@/constants';
import { useGetBoardList, usePostLikeCount } from '@/hooks';
import type { BoardInfoType } from '@/types';
import { ReverseCategoryType } from '@/types';
import { parseDateString } from '@/utils';
const BoardCard: React.FC<BoardInfoType> = ({
  id,
  createdAt,
  title,
  authorName,
  boardCategory,
  author,
  likeCount,
  commentCount,
}) => {
  const { monthDay, time } = parseDateString(createdAt);
  const [likeBtnClick, setLikeBtnClick] = useState<boolean>(false);

  const { refetch } = useGetBoardList();

  const { mutate: postMutate } = usePostLikeCount(id, {
    onSuccess: (likeCurrent) => {
      refetch();
      setLikeBtnClick(likeCurrent.currentStatus);
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
        <S.Like onClick={uploadLike} isClicked={likeBtnClick}>
          <I.LikeIcon isClicked={likeBtnClick} />
          <S.Dots isClicked={likeBtnClick} />
        </S.Like>
        <S.LikeCount>{likeCount}</S.LikeCount>
        <S.Comment>
          <I.CommentIcon />
          <S.CommentCount>{commentCount}</S.CommentCount>
        </S.Comment>
      </S.BottomBox>
    </S.ContentBox>
  );
};

export default BoardCard;
