'use client';

import * as S from './style';

import { BOARD_PATH } from '@/constants';
import type { BoardInfoType } from '@/types';
import { ReverseCategoryType } from '@/types';
import { parseDateString } from '@/utils';

const BoardCard: React.FC<BoardInfoType> = ({
  id,
  createdAt,
  title,
  authorName,
  boardCategory,
}) => {
  const { monthDay, time } = parseDateString(createdAt);

  return (
    <S.ContentBox href={`${BOARD_PATH}/${id}`}>
      <S.BoardCard>
        <S.ContentHeader>
          <S.HeaderTitle>
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
    </S.ContentBox>
  );
};

export default BoardCard;
