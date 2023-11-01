'use client';

import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import * as S from './style';

import { MenteeSelectIcon, MentorSelectIcon } from '@/assets';

interface Props {
  role: 'mentee' | 'mentor' | null;
  setRole: Dispatch<SetStateAction<'mentee' | 'mentor' | null>>;
}

const UserStatusSelect: React.FC<Props> = ({ role, setRole }) => (
  <S.Container>
    <S.SelectButton
      isActive={role === 'mentee'}
      onClick={() => setRole('mentee')}
    >
      <MenteeSelectIcon />
      <S.ButtonTitle>멘티</S.ButtonTitle>
      <S.ButtonContent>재학생 / 구직자</S.ButtonContent>
    </S.SelectButton>
    <S.SelectButton
      isActive={role === 'mentor'}
      onClick={() => setRole('mentor')}
    >
      <MentorSelectIcon />
      <S.ButtonTitle>멘토</S.ButtonTitle>
      <S.ButtonContent>재직자 / 대학생</S.ButtonContent>
    </S.SelectButton>
  </S.Container>
);

export default UserStatusSelect;
