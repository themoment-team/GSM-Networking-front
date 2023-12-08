'use client';

import { usePathname } from 'next/navigation';

import * as S from './style';

import { PenIcon } from '@/assets';

interface Props {
  onClick?: () => void;
}

const MY_PAGE_PATh = '/mypage' as const;

const ProfileUpdateButton: React.FC<Props> = ({ onClick }) => {
  const pathName = usePathname();

  return (
    <S.Button type='button' onClick={onClick}>
      <PenIcon />
      {pathName === MY_PAGE_PATh ? '프로필 수정' : '이미지 수정'}
    </S.Button>
  );
};

export default ProfileUpdateButton;
