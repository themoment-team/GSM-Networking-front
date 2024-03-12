'use client'

import * as S from './style';

interface ChattingDateType {
    createdAt: string;
}

const ChattingDate: React.FC<ChattingDateType> = ({ createdAt }) => {
    const createdDate = new Date(createdAt + 'Z');
    let createdHour = createdDate.getHours();
    const createdMinute = createdDate.getMinutes();
    const period = createdHour < 12 ? '오전' : '오후';
    createdHour = createdHour % 12 || 12;

    const formattedTime = createdHour.toString().padStart(2, '0');
    const formattedMinute = createdMinute.toString().padStart(2, '0');

    return (
        <S.DateText>
            {period} {formattedTime}:{formattedMinute}
        </S.DateText>
    )
}

export default ChattingDate;