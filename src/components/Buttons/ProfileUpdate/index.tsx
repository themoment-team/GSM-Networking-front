'use client';

import * as S from './style';

import { PenIcon } from '@/assets';

interface Props {
  onClick?: () => void;
}

const ProfileUpdateButton: React.FC<Props> = ({ onClick }) => (
  <S.Button type='button' onClick={onClick}>
    <PenIcon />
    프로필 수정
  </S.Button>
);

export default ProfileUpdateButton;
