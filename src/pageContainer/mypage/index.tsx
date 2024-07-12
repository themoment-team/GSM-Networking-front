'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import * as S from './style';

import {
  Profile,
  CareerCard,
  Header,
  ProfileImgRegisterModal,
  PrivacyCard,
} from '@/components';
import { useGetMyMentorInfo, useGetMyMenteeInfo } from '@/hooks';
import type { MenteeType, MentorInfoType } from '@/types';
import { formatTelNum } from '@/utils';

const MyPage: React.FC = () => {
  const [openModalCase, setOpenModalCase] = useState<
    'close' | 'profileImgRegister' | 'signOut' | 'withdraw'
  >('close');

  const { push } = useRouter();

  const [userInfo, setUserInfo] = useState<MenteeType | MentorInfoType | null>(
    null
  );

  const { data: mentorInfo } = useGetMyMentorInfo();
  const { data: menteeInfo } = useGetMyMenteeInfo();

  useEffect(() => {
    if (mentorInfo) setUserInfo(mentorInfo);
    if (menteeInfo) setUserInfo(menteeInfo);
  }, [menteeInfo, mentorInfo]);

  const onUpdateButtonClick = () => push('/register/mentor');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('hello world');
  }, []);

  return (
    <>
      {openModalCase === 'profileImgRegister' && (
        <ProfileImgRegisterModal closeModal={() => setOpenModalCase('close')} />
      )}
      <Header />
      <S.Container>
        {userInfo && (
          <>
            <S.ProfileContainer>
              <Profile
                {...userInfo}
                profileRegisterModalOpen={() =>
                  setOpenModalCase('profileImgRegister')
                }
              />
            </S.ProfileContainer>
            <S.Line />
            <S.InfoContainer>
              <S.InfoWrapper>
                <S.InfoText>개인정보</S.InfoText>
                <S.InfoBox>
                  {userInfo.phoneNumber && (
                    <PrivacyCard
                      privacy={{
                        privacyKey: '전화번호',
                        privacyValue: formatTelNum(userInfo.phoneNumber),
                      }}
                    />
                  )}
                  {'SNS' in userInfo && userInfo.SNS && (
                    <PrivacyCard
                      privacy={{
                        privacyKey: 'SNS',
                        privacyValue: userInfo.SNS,
                      }}
                    />
                  )}
                </S.InfoBox>
              </S.InfoWrapper>
              {'career' in userInfo && (
                <S.InfoWrapper>
                  <S.InfoText>재직 정보</S.InfoText>
                  <S.InfoBox>
                    {userInfo.career.map((career) => (
                      <CareerCard career={career} key={career.id} />
                    ))}
                  </S.InfoBox>
                </S.InfoWrapper>
              )}
            </S.InfoContainer>
          </>
        )}
        {/* <S.WithdrawContainer> 추후 기능 구현 시 사용
        <S.WithdrawBox hoverColor='blue'>
          <ExitIcon />
          <S.WithdrawText>로그아웃</S.WithdrawText>
        </S.WithdrawBox>
        <S.WithdrawBox hoverColor='red'>
          <PersonIcon />
          <S.WithdrawText>회원탈퇴</S.WithdrawText>
        </S.WithdrawBox>
      </S.WithdrawContainer> */}
        {userInfo && 'career' in userInfo && (
          <S.UpdateButton onClick={onUpdateButtonClick}>
            개인정보 및 재직정보 수정
          </S.UpdateButton>
        )}
      </S.Container>
    </>
  );
};

export default MyPage;
