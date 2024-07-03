'use client';

import type { Dispatch, SetStateAction } from 'react';

import * as S from './style';

import { ToggleIcon } from '@/assets';

interface Props {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  commentCount: number;
}

const DoubleCommentToggle: React.FC<Props> = ({
  isOpened,
  setIsOpened,
  commentCount,
}) => {
  const onToggleClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <S.ToggleWrapper>
      <S.Text>댓글 {commentCount}개</S.Text>
      <S.ToggleButton isOppened={isOpened} onClick={onToggleClick}>
        <ToggleIcon />
      </S.ToggleButton>
    </S.ToggleWrapper>
  );
};

export default DoubleCommentToggle;
