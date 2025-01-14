'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as S from './style';

import * as I from '@/assets';
import { RandomMentorImg } from '@/components';
import { TEACHER_NOTICE_PAGE_PATH } from '@/constants';
import { useCheckIsTeacher } from '@/hooks';
import useGetValidatedInfo from '@/hooks/useGetValidatedInfo';
import { HeaderPosition } from '@/types';

interface Props {
  position?: HeaderPosition;
  clearList?: () => void;
}

const Header: React.FC<Props> = ({
  clearList,
  position = HeaderPosition.ABSOLUTE,
}) => {
  const isTeacher = useCheckIsTeacher();

  const { push } = useRouter();

  const handleProfileClick = () => {
    push('/mypage');
  };

  const userInfo = useGetValidatedInfo();

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
            {userInfo && !isTeacher && (
              <S.RedirectLink href='/register/search'>멘토 등록</S.RedirectLink>
            )}
            <S.CommunityLink href={TEACHER_NOTICE_PAGE_PATH}>
              <I.NoticeIcon />
            </S.CommunityLink>
          </S.RedirectBox>
          {!isTeacher && (
            <S.ProfileBox type='button' onClick={handleProfileClick}>
              {userInfo?.profileUrl ? (
                <Image
                  src={userInfo.profileUrl}
                  alt='profile img'
                  fill
                  sizes='36px'
                />
              ) : (
                <RandomMentorImg
                  defaultImgNumber={Number(userInfo?.phoneNumber) ?? 0}
                />
                // <I.MyPageIcon />
              )}
            </S.ProfileBox>
          )}
        </S.RightBox>
      </S.Inner>
    </S.Header>
  );
};
export default Header;
