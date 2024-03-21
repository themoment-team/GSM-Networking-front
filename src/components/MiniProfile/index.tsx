'use client';

import Image from 'next/image';

import * as S from './style';

import { RandomMentorImg } from '@/components';
import type { ProfileType } from '@/types';

interface Props {
  profile: ProfileType;
  isSmallSize?: boolean;
}

const MiniProfile: React.FC<Props> = ({
  profile: { name, generation, profileUrl },
  isSmallSize,
}) => {
  // TODO : server side 와 마크업을 일치시키기 위한 로직 변경 필요.
  const randomValue = Math.floor(Math.random() * 5); //0부터 4까지 중의 랜덤값 생성

  return (
    <S.ProfileWrapper>
      <S.ProfileImageBox isSmallSize={!!isSmallSize}>
        {profileUrl ? (
          <Image src={profileUrl} alt='profile img' fill />
        ) : (
          <RandomMentorImg temporaryImgNumber={randomValue} />
        )}
      </S.ProfileImageBox>
      <S.UserInfo>
        {generation}기 {name}
      </S.UserInfo>
    </S.ProfileWrapper>
  );
};

export default MiniProfile;
