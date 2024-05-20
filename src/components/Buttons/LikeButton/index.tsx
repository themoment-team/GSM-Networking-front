'use client';

import * as S from './style';

import * as I from '@/assets';

interface Props {
  onClick: () => void;
  isActive: boolean;
  likeCount: number;
  isDetail: boolean;
}

const LikeButton: React.FC<Props> = ({
  onClick,
  isActive,
  likeCount,
  isDetail,
}) => (
  <S.Like onClick={onClick} isClicked={isActive} border={isDetail}>
    <I.LikeIcon isClicked={isActive} />
    <S.Dots isClicked={isActive} />
    <S.Count>{likeCount}</S.Count>
  </S.Like>
);

export default LikeButton;
