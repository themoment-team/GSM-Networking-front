'use client';

import * as S from './style';

interface Props {
  name: string;
  date: string;
  content: string;
  tag: string;
}


const NoticeCard: React.FC<Props> = ({ name, date, content, tag }) => {
  const parseDateString = (
    dateString: string
  ): { monthDay: string; time: string } => {
    const date = new Date(dateString);

    const monthDayOptions: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
    };
    const monthDay = date.toLocaleString('ko-KR', monthDayOptions);

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const time = date.toLocaleString('ko-KR', timeOptions);

    return { monthDay, time };
  };

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
