import React from 'react';

import * as S from './style';

interface Props {
  index: number;
  content: string;
}

const CommunityCard: React.FC<Props> = ({ index, content }) => (
  <S.CardWrapper>
    <S.Header>
      <S.Index>#{index}</S.Index>
      <S.DateBox>
        {/* TODO: 추후에 api 연동 시, Date 핸들링 구체화 하겠습니다. */}
        <S.Date>2020.01.01</S.Date>
        <S.Time>12:12</S.Time>
      </S.DateBox>
    </S.Header>
    <S.Content>{content}</S.Content>
  </S.CardWrapper>
);

export default CommunityCard;
