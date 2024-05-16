'use client';

import { MiniProfile } from '..';
import { LikeButton } from '..';

import * as S from './style';

import * as I from '@/assets';
import { BOARD_PATH } from '@/constants';
import { useGetBoardList, useOptimisticLike } from '@/hooks';
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
  isLike,
}) => {
  const { monthDay, time } = parseDateString(createdAt);

  const { refetch } = useGetBoardList();

  const { optimisticLikeCount, optimisticIsLike, uploadLike } =
    useOptimisticLike(id, likeCount, isLike, refetch);

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
