'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as S from './style';

import * as I from '@/assets';
import { RandomMentorImg } from '@/components';
import { TEACHER_NOTICE_PAGE_PATH } from '@/constants';
import {
  useGetMyMenteeInfo,
  useGetMyMentorInfo,
  useCheckIsTeacher,
} from '@/hooks';
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

  const { data: mentorInfo } = useGetMyMentorInfo();
  const { data: menteeInfo } = useGetMyMenteeInfo();
  const [profileUrl, setProfileUrl] = useState<string>('');
  const [profileNum, setProfileNum] = useState<number>();

  const { push } = useRouter();

  const handleProfileClick = () => {
    push('/mypage');
  };

  useEffect(() => {
    const userProfileUrl =
      menteeInfo?.profileUrl || mentorInfo?.profileUrl || '';
    const userProfileNum =
      menteeInfo?.defaultImgNumber !== undefined
        ? menteeInfo.defaultImgNumber
        : mentorInfo?.defaultImgNumber !== undefined
        ? mentorInfo.defaultImgNumber
        : undefined;

    setProfileUrl(userProfileUrl);
    setProfileNum(userProfileNum);
  }, [mentorInfo, menteeInfo]);

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
            {menteeInfo && !isTeacher && (
              <S.RedirectLink href='/register/search'>멘토 등록</S.RedirectLink>
            )}
            <S.CommunityLink href={TEACHER_NOTICE_PAGE_PATH}>
              <I.NoticeIcon />
            </S.CommunityLink>
          </S.RedirectBox>
          {!isTeacher && (
            <S.ProfileBox type='button' onClick={handleProfileClick}>
              {profileUrl ? (
                <Image src={profileUrl} alt='profile img' fill sizes='36px' />
              ) : (
                <RandomMentorImg defaultImgNumber={profileNum!} />
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
