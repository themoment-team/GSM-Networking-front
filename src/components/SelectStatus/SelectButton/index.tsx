'use client';

import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import * as S from './style';

import { MenteeSelectIcon, MentorSelectIcon } from '@/assets';

interface Props {
  type: 'mentee' | 'mentor';
  role: 'mentee' | 'mentor' | null;
  setRole: Dispatch<SetStateAction<'mentee' | 'mentor' | null>>;
}

const SelectButton: React.FC<Props> = ({ type, role, setRole }) => {
  const onChangeState = (currentState: 'mentee' | 'mentor') => {
    setRole(currentState);
  };

  return (
    <>
      {type === 'mentee' ? (
        <S.SelectButton
          isActive={role === 'mentee'}
          onClick={() => onChangeState('mentee')}
        >
          <MenteeSelectIcon />
          <S.ButtonTitle>멘티</S.ButtonTitle>
          <S.ButtonContent>재학생 / 구직자</S.ButtonContent>
        </S.SelectButton>
      ) : type === 'mentor' ? (
        <S.SelectButton
          isActive={role === 'mentor'}
          onClick={() => onChangeState('mentor')}
        >
          <MentorSelectIcon />
          <S.ButtonTitle>멘토</S.ButtonTitle>
          <S.ButtonContent>대학생 / 재작자</S.ButtonContent>
        </S.SelectButton>
      ) : null}
    </>
  );
};

export default SelectButton;
