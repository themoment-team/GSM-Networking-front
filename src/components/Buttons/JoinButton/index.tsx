'use client';

import * as S from './style';

import * as I from '@/assets';

interface Props {
  onClick?: () => void;
  isActive?: boolean;
  memberCount: number;
  isDetail: boolean;
}

const JoinButton: React.FC<Props> = ({
  onClick,
  isActive,
  memberCount,
  isDetail,
}) => (
  <S.Like onClick={onClick} isClicked={isActive} isDetail={isDetail}>
    <I.PlusIcon />
    <S.Dots isClicked={isActive} />
    <S.Count>{memberCount}</S.Count>
  </S.Like>
);

export default JoinButton;
