'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import * as S from './style';

import {
  ProfileUpdateButton,
  RandomMentorImg /*ProfileUpdateButton*/,
} from '@/components';

interface Props {
  name: string;
  generation: number;
  profileUrl?: string;
  profileRegisterModalOpen?: () => void;
}

const Profile: React.FC<Props> = ({
  name,
  generation,
  profileUrl,
  profileRegisterModalOpen,
}) => {
  // TODO : server side 와 마크업을 일치시키기 위한 로직 변경 필요.
  const randomValue = Math.floor(Math.random() * 5); //0부터 4까지 중의 랜덤값 생성

  const pathName = usePathname();

  const { push } = useRouter();

  const handleClick = () => {
    if (pathName === '/mypage') push('/mypage/update');
    else if (pathName === '/mypage/update' && profileRegisterModalOpen)
      profileRegisterModalOpen();
  };

  return (
    <S.ProfileWrapper>
      <S.ProfileImageBox>
        {profileUrl ? (
          <Image src={profileUrl} alt='profile img' fill />
        ) : (
          <RandomMentorImg temporaryImgNumber={randomValue} />
        )}
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
