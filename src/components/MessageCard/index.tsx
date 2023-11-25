'use client';

import React from 'react';

import * as S from './style';

interface Props {
  children: string;
  isMine: boolean;
}

const MessageCard: React.FC<Props> = ({ children, isMine }) => (
  <S.Container isMine={isMine}>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default MessageCard;
