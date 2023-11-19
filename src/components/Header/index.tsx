'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';
import { useGetMyInfo } from '@/hooks';

interface Props {
  clearList?: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => {
  const { data } = useGetMyInfo();

  const { push } = useRouter();

  const comingSoonToast = () => toast.info('곧 출시 예정입니다. 감사합니다.');

  const handleProfileClick = () => {
    if (data) push('/mypage');
    else toast.info('멘티인 사용자에게는 지원되지 않는 기능입니다.');
  };

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
            {!data && (
              <S.RedirectLink href='/register/search'>멘토 등록</S.RedirectLink>
            )}
          </S.RedirectBox>
          <S.ProfileBox type='button' onClick={handleProfileClick}>
            <I.PersonImg4 />
          </S.ProfileBox>
        </S.RightBox>
      </S.Inner>
    </S.Header>
  );
};
export default Header;
