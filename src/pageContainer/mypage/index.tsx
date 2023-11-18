'use client';

import * as S from './style';

import { ExitIcon, PersonIcon } from '@/assets';
import { Profile, CareerCard, Header } from '@/components';
import type { CareerType } from '@/types';

interface MentorInfoType {
  id: number;
  name: string;
  email: string;
  generation: number;
  SNS?: string;
  profileUrl?: string;
  registerd: boolean;
  career: CareerType[];
}

interface Props {
  myInfo: MentorInfoType;
}

const MyPage: React.FC<Props> = ({
  myInfo: { name, generation, career: careerList },
}) => (
  <>
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
    <S.WithdrawContainer>
      <S.WithdrawBox hoverColor='blue'>
        <ExitIcon />
        <S.WithdrawText>로그아웃</S.WithdrawText>
      </S.WithdrawBox>
      <S.WithdrawBox hoverColor='red'>
        <PersonIcon />
        <S.WithdrawText>회원탈퇴</S.WithdrawText>
      </S.WithdrawBox>
    </S.WithdrawContainer>
  </>
);

export default MyPage;
