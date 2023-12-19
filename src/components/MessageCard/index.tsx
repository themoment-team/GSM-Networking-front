'use client';

import React from 'react';

import * as S from './style';

interface Props {
  children: string;
  isMine: boolean;
}

const MessageCard: React.FC<Props> = ({ children, isMine }) => (
  <>
    {isMine ? (
      <S.MineContainer>
        <S.Container>{children}</S.Container>
      </S.MineContainer>
    ) : (
      <S.OpponentContainer>
        <S.Container>{children}</S.Container>
      </S.OpponentContainer>
    )}
  </>
);

export default MessageCard;
