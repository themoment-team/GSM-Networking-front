'use client';

import React from 'react';

import * as S from './style';

import type { GwangyaPostType } from '@/types';

const addZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const CommunityCard: React.FC<GwangyaPostType> = ({
  id,
  content,
  createdAt,
}) => {
  const createdDate = new Date(createdAt);

  const createdMonth = createdDate.getMonth() + 1;
  const createdDay = createdDate.getDate();
  const createdTime = createdDate.getHours();
  const createdMinute = createdDate.getMinutes();
  const morningOrAfternoon = createdTime < 12 ? '오전' : '오후';
  const convertCreatedTime = createdTime > 12 ? createdTime - 12 : createdTime;

  return (
    <S.CardWrapper>
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
};

export default CommunityCard;
