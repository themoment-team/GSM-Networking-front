'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import * as S from './style';

import * as I from '@/assets';

interface Props {
  clearList?: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => {
  const { push } = useRouter();

  const mentorRegisteClick = () => push('/register/mentor');

  return (
    <S.Header>
      <S.Inner>
        <S.Logo type='button' onClick={clearList}>
          <I.GsmNetworkingIcon />
          GSM Networking
        </S.Logo>
        <S.GapBox />
        <S.RedirectBox>
          <S.RedirectButton>멘토 컨택</S.RedirectButton>
          <S.RedirectButton onClick={mentorRegisteClick}>
            멘토 등록
          </S.RedirectButton>
        </S.RedirectBox>
        <S.ProfileBox>
          <I.PersonImg4 />
        </S.ProfileBox>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
