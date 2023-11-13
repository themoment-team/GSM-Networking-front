'use client';

import * as S from './style';

import { RandomMentorImg, ProfileUpdateButton } from '@/components';
import type { MentorType } from '@/types';

interface Props {
  profile: MentorType;
}

const Profile: React.FC<Props> = ({ profile: { name, generation } }) => {
  const randomValue = Math.floor(Math.random() * 5); //0부터 4까지 중의 랜덤값 생성

  const handleClick = () => {};

  return (
    <S.ProfileWrapper>
      <S.ProfileImageBox>
        <RandomMentorImg temporaryImgNumber={randomValue} />
      </S.ProfileImageBox>
      <S.ProfileInfo>
        <S.UserName>
          {generation}기 {name}
        </S.UserName>
        <ProfileUpdateButton onClick={handleClick} />
      </S.ProfileInfo>
    </S.ProfileWrapper>
  );
};

export default Profile;
