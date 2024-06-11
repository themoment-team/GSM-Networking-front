'use client';

import { useState } from 'react';

import { usePathname } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';
import { MiniProfile, LikeButton, Pin } from '@/components';
import { BOARD_PATH } from '@/constants';
import { usePatchBoardPin } from '@/hooks';
import type { BoardInfoType } from '@/types';
import { ReverseCategoryType } from '@/types';
import { parseDateString } from '@/utils';

import type {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
} from '@tanstack/react-query';

const TEACHER_NOTICE_PAGE_PATH = '/community/board/teacher' as const;

interface Props extends BoardInfoType {
  listRefetch: (
    options?: RefetchOptions | undefined
  ) => Promise<
    QueryObserverResult<InfiniteData<BoardInfoType[], unknown>, Error>
  >;
}

const BoardCard: React.FC<Props> = ({
  id,
  createdAt,
  title,
  authorName,
  boardCategory,
  author,
  likeCount,
  commentCount,
  isPinned: initialPinned,
  listRefetch,
}) => {
  const [isPinned, setIsPinned] = useState<boolean>(initialPinned);

  const { monthDay, time } = parseDateString(createdAt);

  const pathname = usePathname();

  const isTeacherPage = TEACHER_NOTICE_PAGE_PATH === pathname;

  const { mutate: patchBoardPin } = usePatchBoardPin(id, {
    onSuccess: () => {
      console.log(listRefetch);
      listRefetch();
    },
    onError: (error) => {
      console.log(error);
      toast.error('게시물 고정에 실패했습니다.');
      setIsPinned((prev) => !prev);
    },
  });

  const onPinClick = () => {
    setIsPinned((prev) => !prev);
    patchBoardPin();
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
        {isTeacherPage ? (
          <Pin isPinned={isPinned} onClick={onPinClick} />
        ) : (
          <div />
        )}
        <S.LikeCommentWrapper>
          <LikeButton likeCount={likeCount} isDetail={false} />
          <S.Comment>
            <I.CommentIcon />
            <S.CommentCount>{commentCount}</S.CommentCount>
          </S.Comment>
        </S.LikeCommentWrapper>
      </S.BottomBox>
    </S.ContentBox>
  );
};

export default BoardCard;
