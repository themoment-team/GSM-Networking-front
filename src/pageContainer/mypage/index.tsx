'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import {
  Profile,
  CareerCard,
  Header,
  ProfileImgRegisterModal,
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
              {data.profileUrl ? (
                <Image src={data.profileUrl} fill alt='profile img' />
              ) : (
                <Profile name={data.name} generation={data.generation} />
              )}
            </S.ProfileContainer>
            <S.Line />
            <S.CareerContainer>
              <S.CareerInfoText>재직 정보</S.CareerInfoText>
              <S.CareerBox>
                {data.career.map((career) => (
                  <CareerCard career={career} key={career.id} />
                ))}
              </S.CareerBox>
            </S.CareerContainer>
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
      </S.Container>
    </>
  );
};

export default MyPage;
