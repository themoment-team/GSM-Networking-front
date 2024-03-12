'use client'

import * as S from './style';

interface Props {
    time: string
}

const ChattingDate: React.FC<Props> = ({ time }) => (
    <S.DateText>
        {time}
    </S.DateText>
)

export default ChattingDate;