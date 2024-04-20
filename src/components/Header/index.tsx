'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';
import { useGetMyInfo } from '@/hooks';
import { HeaderPosition } from '@/types';

interface Props {
  position?: HeaderPosition;
  clearList?: () => void;
}

const Header: React.FC<Props> = ({
  clearList,
  position = HeaderPosition.ABSOLUTE,
}) => {
  const { data } = useGetMyInfo();

  const { push } = useRouter();

  const handleProfileClick = () => {
    if (data) push('/mypage');
    else toast.info('멘티인 사용자에게는 지원되지 않는 기능입니다.');
  };

  return (
    <S.Header position={position}>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
      <S.Inner>
        <S.LogoLink href='/' onClick={clearList}>
          <I.GsmNetworkingIcon />
          GSM Networking
        </S.LogoLink>
        <S.RightBox>
          <S.RedirectBox>
            <S.CommunityLink href='/community/gwangya'>
              커뮤니티
            </S.CommunityLink>
            {/* <S.MentorContact type='button' onClick={comingSoonToast}>
              멘토 컨택
            </S.MentorContact> */}
            {!data && (
              <S.RedirectLink href='/register/search'>멘토 등록</S.RedirectLink>
            )}
          </S.RedirectBox>
          <S.ProfileBox type='button' onClick={handleProfileClick}>
            {data?.profileUrl ? (
              <Image
                src={data.profileUrl}
                alt='profile img'
                fill
                sizes='36px'
              />
            ) : (
              <I.MyPageIcon />
            )}
          </S.ProfileBox>
        </S.RightBox>
      </S.Inner>
    </S.Header>
  );
};
export default Header;
