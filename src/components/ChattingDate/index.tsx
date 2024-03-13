'use client';

import * as S from './style';

interface ChattingDateType {
  createdAt: string;
}

const Day = {
  morning: '오전',
  afternoon: '오후',
} as const

const HOURS_IN_HALF_DAY = 12 as const;

const ChattingDate: React.FC<ChattingDateType> = ({ createdAt }) => {
  const createdDate = new Date(createdAt + 'Z');
  let createdHour = createdDate.getHours();
  const createdMinute = createdDate.getMinutes();

  const period = createdHour < HOURS_IN_HALF_DAY ? Day.morning : Day.afternoon;
  createdHour = createdHour % HOURS_IN_HALF_DAY || HOURS_IN_HALF_DAY;

  const formattedTime = createdHour.toString().padStart(2, '0');
  const formattedMinute = createdMinute.toString().padStart(2, '0');

  return (
    <S.DateText>
      {period} {formattedTime}:{formattedMinute}
    </S.DateText>
  );
};

export default ChattingDate;
