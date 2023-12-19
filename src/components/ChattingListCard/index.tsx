'use client';

import React from 'react';

import * as S from './style';

import { PersonImg4 } from '@/assets';
import type { OpponentInfo } from '@/types';

interface Props {
  opponent: OpponentInfo;
  isNewMessage: boolean;
}

const ChattingListCard: React.FC<Props> = ({ opponent, isNewMessage }) => (
  <S.Container>
    <S.OpponentProfile>
      <S.ProfileImg>
        <PersonImg4 />
      </S.ProfileImg>

      <S.ProfileBox>
        <S.ProfileInfo>
          {opponent.generation}기 {opponent.name}
        </S.ProfileInfo>
        <S.ChattingTime>1시간 전 채팅</S.ChattingTime>
      </S.ProfileBox>
    </S.OpponentProfile>
    {isNewMessage && <S.BlueCircleIcon />}
  </S.Container>
);

export default ChattingListCard;
