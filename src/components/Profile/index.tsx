'use client';

import * as S from './style';

import { RandomMentorImg, ProfileUpdateButton } from '@/components';

interface Props {
  name: string;
  generation: number;
}

const Profile: React.FC<Props> = ({ name, generation }) => {
  // TODO : server side 와 마크업을 일치시키기 위한 로직 변경 필요.
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
