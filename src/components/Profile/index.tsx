'use client';

import * as S from './style';

import { RandomMentorImg } from '@/components';

const Profile = () => {
  const randomValue = Math.floor(Math.random() * 5); //0부터 4까지 중의 랜덤값 생성

  return (
    <S.ProfileBox>
      <RandomMentorImg temporaryImgNumber={randomValue} />
    </S.ProfileBox>
  );
};

export default Profile;
