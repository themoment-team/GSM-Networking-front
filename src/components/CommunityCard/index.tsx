'use client';

import React from 'react';

import * as S from './style';

import type { GwangyaPostType } from '@/types';

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

  return (
    <S.CardWrapper>
      <S.Header>
        <S.Index>#{id}</S.Index>
        <S.DateBox>
          <S.Date>
            {createdMonth}.{createdDay}
          </S.Date>
          <S.Time>
            {createdTime}:{createdMinute}
          </S.Time>
        </S.DateBox>
      </S.Header>
      <S.Content>{content}</S.Content>
    </S.CardWrapper>
  );
};

export default CommunityCard;
