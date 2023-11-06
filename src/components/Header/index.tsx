'use client';

import React from 'react';

import * as S from './style';

import * as I from '@/assets';

interface Props {
  clearList?: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => (
  <S.Header>
    <S.Inner>
      <S.Logo type='button' onClick={clearList}>
        <I.GsmNetworkingIcon />
        GSM Networking
      </S.Logo>
      <S.GapBox />
      <S.RedirectBox>
        <S.RedirectLink href='/'>멘토 컨택</S.RedirectLink>
        <S.RedirectLink href='/register/mentor'>멘토 등록</S.RedirectLink>
      </S.RedirectBox>
      <S.ProfileBox>
        <I.PersonImg4 />
      </S.ProfileBox>
    </S.Inner>
  </S.Header>
);

export default Header;
