'use client'

import * as S from './style';

interface ChattingDateType {
    createdAt: string;
}

const ChattingDate: React.FC<ChattingDateType> = ({ createdAt }) => {
    const createdDate = new Date(createdAt + 'Z');
    let createdTime = createdDate.getHours();
    const createdMinute = createdDate.getMinutes();
    const isMorning = createdTime < 12;
    createdTime = createdTime % 12 || 12;

    const formattedTime = createdTime.toString().padStart(2, '0');
    const formattedMinute = createdMinute.toString().padStart(2, '0');

    return (
        <S.DateText>
            {isMorning ? '오전' : '오후'} {formattedTime}:{formattedMinute}
        </S.DateText>
    )
}

export default ChattingDate;