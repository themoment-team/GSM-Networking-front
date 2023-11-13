'use client';

import * as S from './style';

import { PenIcon } from '@/assets';

interface Props {
  onClick: () => void;
  isActive: boolean;
}

const ProfileUpdateButton: React.FC<Props> = ({ onClick, isActive }) => (
  <S.Button type='button' onClick={onClick} isActive={isActive}>
    <PenIcon />
    프로필 수정
  </S.Button>
);

export default ProfileUpdateButton;
