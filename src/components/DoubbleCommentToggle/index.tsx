/**@jsxImportSource @emotion/react */

'use client';

import type { Dispatch, SetStateAction } from 'react';

import * as S from './style';

import { ToggleIcon } from '@/assets';

interface Props {
  isOppened: boolean;
  setIsOppened: Dispatch<SetStateAction<boolean>>;
  commentCount: number;
}

const CommentCard: React.FC<Props> = ({
  isOppened,
  setIsOppened,
  commentCount,
}) => {
  const onToggleClick = () => {
    setIsOppened((prev) => !prev);
  };

  return (
    <S.ToggleWrapper>
      <S.Text>댓글 {commentCount}개</S.Text>
      <S.ToggleButton isOppened={isOppened} onClick={onToggleClick}>
        <ToggleIcon />
      </S.ToggleButton>
    </S.ToggleWrapper>
  );
};

export default CommentCard;
