'use client';

import * as S from './style';

interface Props {
  name: string;
  date: string;
  time: string;
  content: string;
  tag: string;
}

const NoticeCard: React.FC<Props> = ({ name, date, time, content, tag }) => (
  <S.NoticeCard>
    <S.ContentBox>
      <S.ContentHeader>
        <S.HeaderTitle>
          <S.Name>{name}</S.Name>
          <S.DateAndTime>
            <S.Date>{date}</S.Date>
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

export default NoticeCard;
