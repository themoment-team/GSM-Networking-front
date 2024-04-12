'use client';

import React, { forwardRef } from 'react';

import * as S from './style';

import type { BoardInfoType } from '@/types';
import { ReverseCategoryType } from '@/types';
import { parseDateString } from '@/utils';

const BoardCard = forwardRef<HTMLDivElement, BoardInfoType>(
  ({ id, createdAt, title, authorName, boardCategory }, ref) => {
    const { monthDay, time } = parseDateString(createdAt);

    return (
      <S.ContentBox href={`/community/board/${id}`}>
        <S.BoardCard ref={ref}>
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
  }
);

BoardCard.displayName = 'BoardCard';

export default BoardCard;
