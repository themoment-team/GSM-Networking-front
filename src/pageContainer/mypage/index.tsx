'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import {
  Profile,
  CareerCard,
  Header,
  ProfileImgRegisterModal,
  PrivacyCard,
} from '@/components';
import { useGetMyInfo } from '@/hooks';

const MyPage: React.FC = () => {
  const [openModalCase, setOpenModalCase] = useState<
    'close' | 'profileImgRegister' | 'signOut' | 'withdraw'
  >('close');

  const { push } = useRouter();

  const { data, isError } = useGetMyInfo();

  useEffect(() => {
    if (isError) {
      toast.info('멘티인 사용자에게는 지원되지 않는 기능입니다.');
      push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  const onUpdateButtonClick = () => push('/mypage/update');

  return (
    <>
      {openModalCase === 'profileImgRegister' && (
        <ProfileImgRegisterModal closeModal={() => setOpenModalCase('close')} />
      )}
      <Header />
      <S.Container>
        {data && (
          <>
            <S.ProfileContainer>
              <Profile
                name={data.name}
                generation={data.generation}
                profileUrl={data.profileUrl}
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
                  <PrivacyCard
                    privacy={{
                      privacyKey: '전화번호',
                      privacyValue: data.phoneNumber,
                    }}
                  />
                  {data.SNS && (
                    <PrivacyCard
                      privacy={{
                        privacyKey: 'SNS',
                        privacyValue: data.SNS,
                      }}
                    />
                  )}
                </S.InfoBox>
              </S.InfoWrapper>
              <S.InfoWrapper>
                <S.InfoText>재직 정보</S.InfoText>
                <S.InfoBox>
                  {data.career.map((career) => (
                    <CareerCard career={career} key={career.id} />
                  ))}
                </S.InfoBox>
              </S.InfoWrapper>
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
        <S.UpdateButton onClick={onUpdateButtonClick}>
          개인정보 및 재직정보 수정
        </S.UpdateButton>
      </S.Container>
    </>
  );
};

export default MyPage;
