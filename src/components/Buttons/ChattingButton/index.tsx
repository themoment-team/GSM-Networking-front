'use client';

import * as S from './style';

import { locateToMessage } from '@/utils';

interface Props {
  phoneNumber: string;
}

const ChattingButton: React.FC<Props> = ({ phoneNumber }) => (
  <S.Button type='button' onClick={() => locateToMessage(phoneNumber)}>
    채팅하기
  </S.Button>
);

export default ChattingButton;
