'use client';

import React, { forwardRef } from 'react';

import * as S from './style';

import type { BoardInfo } from '@/types';
import { ReverseCategoryType } from '@/types';
import { parseDateString } from '@/utils';

// eslint-disable-next-line react/display-name
const BoardCard = forwardRef<HTMLDivElement, BoardInfo>(
  ({ id, createdAt, title, authorName, boardCategory }, ref) => {
    const { monthDay, time } = parseDateString(createdAt);

    return (
      <S.BoardCard ref={ref}>
        <S.ContentBox href={`/community/board/${id}`}>
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
        </S.ContentBox>
      </S.BoardCard>
    );
  }
);
export default BoardCard;
