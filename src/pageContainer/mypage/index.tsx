'use client';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import { Profile, CareerCard, Header } from '@/components';
import { useGetMyInfo } from '@/hooks';

const MyPage = () => {
  const { data } = useGetMyInfo();

  const { push } = useRouter();

  if (!data) {
    toast.info('멘티인 사용자에게는 지원되지 않는 기능입니다.');
    push('/');
  }

  return (
    <S.Container>
      <Header />
      {data && (
        <>
          <S.ProfileContainer>
            <Profile name={data.name} generation={data.generation} />
          </S.ProfileContainer>
          <S.Line />
          <S.CareerContainer>
            <S.CareerInfoText>재직 정보</S.CareerInfoText>
            <S.CareerBox>
              {data.career.map((career, i) => (
                <CareerCard career={career} key={i /*career.id 수정 */} />
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
  );
};

export default MyPage;
