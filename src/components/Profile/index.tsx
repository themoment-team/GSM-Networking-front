'use client';

import * as S from './style';

import { RandomMentorImg } from '@/components';

const Profile = () => {
  const randomValue = Math.floor(Math.random() * 5); //0부터 4까지 중의 랜덤값 생성

  return (
    <S.ProfileWrapper>
      <S.ProfileImageBox>
        <RandomMentorImg temporaryImgNumber={randomValue} />
      </S.ProfileImageBox>
      <S.UserName>5기 김형록</S.UserName>
    </S.ProfileWrapper>
  );
};

export default Profile;
