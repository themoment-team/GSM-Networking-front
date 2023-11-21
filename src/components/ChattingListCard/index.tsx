import React from 'react';

import * as S from './style';

import { PersonImg4, BlueCircleIcon } from '@/assets';
import type { Opponent } from '@/types/opponent';

interface Props {
  opponent: Opponent;
  isCheck: boolean;
}

const ChattingListCard: React.FC<Props> = ({ opponent, isCheck }) => (
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
    <S.SpaceBlock />
    {!isCheck && <BlueCircleIcon />}
  </S.Container>
);

export default ChattingListCard;
