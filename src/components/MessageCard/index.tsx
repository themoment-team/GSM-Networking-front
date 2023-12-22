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
        <S.Content>{children}</S.Content>
      </S.MineContainer>
    ) : (
      <S.OpponentContainer>
        <S.Content>{children}</S.Content>
      </S.OpponentContainer>
    )}
  </>
);

export default MessageCard;
