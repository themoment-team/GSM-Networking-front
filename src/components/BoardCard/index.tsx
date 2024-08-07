'use client';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';
import { MiniProfile, LikeButton, Pin } from '@/components';
import { BOARD_PATH } from '@/constants';
import { useCheckIsTeacher, usePatchBoardPin } from '@/hooks';
import type { BoardInfoType } from '@/types';
import { ReverseCategoryType } from '@/types';
import { parseDateString } from '@/utils';

import type {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
} from '@tanstack/react-query';

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
  isPinned,
  listRefetch,
}) => {
  const { monthDay, time } = parseDateString(createdAt);

  const isTeacher = useCheckIsTeacher();

  const { mutate: patchBoardPin } = usePatchBoardPin(id, {
    onSuccess: () => {
      listRefetch();

      if (!isPinned) {
        toast.success('게시물이 고정되었습니다.');
        return;
      }
      toast.success('게시물이 고정 해제되었습니다.');
    },
    onError: () => {
      toast.error('게시물 고정에 실패했습니다.');
    },
  });

  const onPinClick = () => {
    if (isTeacher) {
      patchBoardPin();
    }
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
        {isTeacher || isPinned ? (
          <Pin isPinned={isPinned} onClick={onPinClick} isTeacher={isTeacher} />
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
