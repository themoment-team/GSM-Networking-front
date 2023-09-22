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
          <S.ButtonTitle>
            멘티
            <S.ButtonSubTitle>{'(재학생)'}</S.ButtonSubTitle>
          </S.ButtonTitle>
          <S.ButtonContent>
            *취업하신 선배들과 자유롭게 <br />
            이야기를 나눌 수 있어요
          </S.ButtonContent>
        </S.SelectButton>
      ) : type === 'mentor' ? (
        <S.SelectButton
          isActive={role === 'mentor'}
          onClick={() => onChangeState('mentor')}
        >
          <MentorSelectIcon />
          <S.ButtonTitle>
            멘토
            <S.ButtonSubTitle>{'(졸업자)'}</S.ButtonSubTitle>
          </S.ButtonTitle>
          <S.ButtonContent>
            *재학생, 취업을 준비하는 학생들에게 도움을 줄 수 있어요
          </S.ButtonContent>
        </S.SelectButton>
      ) : null}
    </>
  );
};

export default SelectButton;
