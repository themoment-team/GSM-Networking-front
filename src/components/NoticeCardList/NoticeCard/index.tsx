'use client';

import * as S from './style';

import type { CardInfo } from '@/types';
import { parseDateString } from '@/utils';

interface Props {
  cardList: CardInfo;
  key: number;
}

const NoticeCard: React.FC<Props> = ({ cardList }) => {
  const { monthDay, time } = parseDateString(cardList.date);

  return (
    <S.NoticeCard>
      <S.ContentBox>
        <S.ContentHeader>
          <S.HeaderTitle>
            <S.Name>{cardList.name}</S.Name>
            <S.DateAndTime>
              <S.Date>{monthDay}</S.Date>
              <S.Time>{time}</S.Time>
            </S.DateAndTime>
          </S.HeaderTitle>
          <S.Tag>{cardList.tag}</S.Tag>
        </S.ContentHeader>
        <S.Content maxLength={50} readOnly>
          {cardList.content}
        </S.Content>
      </S.ContentBox>
    </S.NoticeCard>
  );
};

export default NoticeCard;
