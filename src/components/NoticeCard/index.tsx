'use client';

import * as S from './style';

import type { CardInfo } from '@/types';
import { parseDateString } from '@/utils';

const NoticeCard: React.FC<CardInfo> = ({ name, date, content, tag }) => {
  const { monthDay, time } = parseDateString(date);

  return (
    <S.NoticeCard>
      <S.ContentBox>
        <S.ContentHeader>
          <S.HeaderTitle>
            <S.Name>{name}</S.Name>
            <S.DateAndTime>
              <S.Date>{monthDay}</S.Date>
              <S.Time>{time}</S.Time>
            </S.DateAndTime>
          </S.HeaderTitle>
          <S.Tag>{tag}</S.Tag>
        </S.ContentHeader>
        <S.Content maxLength={50} readOnly>
          {content}
        </S.Content>
      </S.ContentBox>
    </S.NoticeCard>
  );
};

export default NoticeCard;
