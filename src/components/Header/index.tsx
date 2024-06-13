'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { RandomMentorImg } from '..';

import * as S from './style';

import * as I from '@/assets';
import { TEACHER_NOTICE_PAGE_PATH } from '@/constants';
import { useGetMyMenteeInfo, useGetMyInfo, useGetIsTeacher } from '@/hooks';
import { HeaderPosition } from '@/types';

interface Props {
  position?: HeaderPosition;
  clearList?: () => void;
}

const Header: React.FC<Props> = ({
  clearList,
  position = HeaderPosition.ABSOLUTE,
}) => {
  const { data: isTeacherData } = useGetIsTeacher();
  const isTeacher = isTeacherData?.isTeacher;

  const { data: mentorInfo } = useGetMyInfo();
  const { data: menteeInfo } = useGetMyMenteeInfo();
  const [profileUrl, setProfileUrl] = useState<string>('');
  const [profileNum, setProfileNum] = useState<number | null>(null);

  const { push } = useRouter();

  const handleProfileClick = () => {
    push('/mypage');
  };

  useEffect(() => {
    setProfileUrl('');
    if (mentorInfo?.profileUrl) setProfileUrl(mentorInfo.profileUrl);
    if (menteeInfo?.profileUrl) setProfileUrl(menteeInfo.profileUrl);
    if (mentorInfo?.defaultImgNumber !== undefined)
      setProfileNum(mentorInfo.defaultImgNumber);
    if (menteeInfo?.defaultImgNumber !== undefined)
      setProfileNum(menteeInfo.defaultImgNumber);
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
