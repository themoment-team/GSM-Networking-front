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
  profile: { name, generation, profileUrl, temporaryImgNumber = 0 },
  isSmallSize,
}) => (
  <S.ProfileWrapper>
    <S.ProfileImageBox isSmallSize={!!isSmallSize}>
      {profileUrl ? (
        <Image src={profileUrl} alt='profile img' fill />
      ) : (
        <RandomMentorImg temporaryImgNumber={temporaryImgNumber} />
      )}
    </S.ProfileImageBox>
    <S.UserInfo>
      {generation}기 {name}
    </S.UserInfo>
  </S.ProfileWrapper>
);

export default MiniProfile;
