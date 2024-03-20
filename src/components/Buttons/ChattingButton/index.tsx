'use client';

import * as S from './style';

interface Props {
  onClick: () => void;
}

const ChattingButton: React.FC<Props> = ({ onClick }) => (
  <S.Button type='button' onClick={onClick}>
    채팅하기
  </S.Button>
);

export default ChattingButton;
