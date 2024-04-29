'use client';

import * as S from './style';

import { LikeIcon } from '@/assets';

interface Props {
  onClick: () => void;
  isActive: boolean;
  likeCount: number;
}

const LikeButton: React.FC<Props> = ({ onClick, isActive, likeCount }) => (
  <S.Button type='button' onClick={onClick} isActive={isActive}>
    <LikeIcon isClicked={isActive} />
    <span>{likeCount}</span>
  </S.Button>
);

export default LikeButton;
