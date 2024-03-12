'use client'

import * as S from './style';

import type { ChattingPostType } from '@/types/chatting';

const addZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const ChattingDate: React.FC<ChattingPostType> = ({ createdAt }) => {
    const createdDate = new Date(createdAt + 'Z');
    const createdTime = createdDate.getHours();
    const createdMinute = createdDate.getMinutes();
    const morningOrAfternoon = createdTime < 12 ? '오전' : '오후';
    const convertCreatedTime = createdTime > 12 ? createdTime - 12 : createdTime;
    return (
        <S.DateText>
            {morningOrAfternoon} {addZero(convertCreatedTime)}:
            {addZero(createdMinute)}
        </S.DateText>
    )
}

export default ChattingDate;