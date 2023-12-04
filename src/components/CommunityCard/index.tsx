'use client';

import React, { forwardRef } from 'react';

import * as S from './style';

import type { GwangyaPostType } from '@/types';

const addZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const CommunityCard = forwardRef<HTMLDivElement, GwangyaPostType>(
  ({ id, content, createdAt }, ref) => {
    const createdDate = new Date(createdAt + 'Z');

    const createdMonth = createdDate.getMonth() + 1;
    const createdDay = createdDate.getDate();
    const createdTime = createdDate.getHours();
    const createdMinute = createdDate.getMinutes();
    const morningOrAfternoon = createdTime < 12 ? '오전' : '오후';
    const convertCreatedTime =
      createdTime > 12 ? createdTime - 12 : createdTime;

    return (
      <S.CardWrapper ref={ref}>
        <S.Header>
          <S.Index>#{id}</S.Index>
          <S.DateBox>
            <S.Date>
              {createdMonth}월 {createdDay}일
            </S.Date>
            <S.Time>
              {morningOrAfternoon} {addZero(convertCreatedTime)}:
              {addZero(createdMinute)}
            </S.Time>
          </S.DateBox>
        </S.Header>
        <S.Content>{content}</S.Content>
      </S.CardWrapper>
    );
  }
);

CommunityCard.displayName = 'CommunityCard';

export default CommunityCard;
