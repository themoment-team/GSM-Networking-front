'use client';

import Image from 'next/image';

import * as S from './style';

import {
  ProfileUpdateButton,
  RandomMentorImg /*ProfileUpdateButton*/,
} from '@/components';

interface Props {
  name: string;
  generation: number;
  profileUrl?: string;
  defaultImgNumber: number;
  profileRegisterModalOpen?: () => void;
}

const Profile: React.FC<Props> = ({
  name,
  generation,
  profileUrl,
  defaultImgNumber,
  profileRegisterModalOpen,
}) => (
  <S.ProfileWrapper>
    <S.ProfileImageBox>
      {profileUrl ? (
        <Image src={profileUrl} alt='profile img' fill />
      ) : (
        <RandomMentorImg defaultImgNumber={defaultImgNumber} />
      )}
    </S.ProfileImageBox>
    <S.ProfileInfo>
      <S.UserName>
        {generation}기 {name}
      </S.UserName>
      <ProfileUpdateButton onClick={profileRegisterModalOpen} />
    </S.ProfileInfo>
  </S.ProfileWrapper>
);

export default Profile;
