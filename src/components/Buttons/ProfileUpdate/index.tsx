'use client';

import * as S from './style';

import { PenIcon } from '@/assets';

interface Props {
  onClick?: () => void;
}

const ProfileUpdateButton: React.FC<Props> = ({ onClick }) => (
  <S.Button type='button' onClick={onClick}>
    <PenIcon />
    이미지 등록
    {/* 프로필 수정 // 임시로 이미지 등록으로 내용 변경해두겠습니다. */}
  </S.Button>
);

export default ProfileUpdateButton;
