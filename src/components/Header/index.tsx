'use client';

import React from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';

interface Props {
  clearList?: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => {
  const comingSoonToast = () => toast.info('곧 출시 예정입니다. 감사합니다.');

  return (
    <S.Header>
      <S.Inner>
        <S.LogoLink href='/' onClick={clearList}>
          <I.GsmNetworkingIcon />
          GSM Networking
        </S.LogoLink>
        <S.RightBox>
          <S.RedirectBox>
            <S.MentorContact type='button' onClick={comingSoonToast}>
              멘토 컨택
            </S.MentorContact>
            <S.RedirectLink href='/register/search'>멘토 등록</S.RedirectLink>
          </S.RedirectBox>
          <S.ProfileBox type='button' onClick={comingSoonToast}>
            <I.PersonImg4 />
          </S.ProfileBox>
        </S.RightBox>
      </S.Inner>
    </S.Header>
  );
};
export default Header;
