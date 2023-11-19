'use client';

import * as S from './style';

import { Profile, CareerCard, Header } from '@/components';
import type { MentorInfoType } from '@/types';

interface Props {
  myInfo: MentorInfoType;
}

const MyPage: React.FC<Props> = ({
  myInfo: { name, generation, career: careerList },
}) => (
  <S.Container>
    <Header />
    <S.ProfileContainer>
      <Profile name={name} generation={generation} />
    </S.ProfileContainer>
    <S.Line />
    <S.CareerContainer>
      <S.CareerInfoText>재직 정보</S.CareerInfoText>
      <S.CareerBox>
        {careerList.map((career, i) => (
          <CareerCard career={career} key={i /*career.id 수정 */} />
        ))}
      </S.CareerBox>
    </S.CareerContainer>
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

export default MyPage;
