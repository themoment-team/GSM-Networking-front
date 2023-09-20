'use client';

import * as S from './style';

import { MenteeSelectIcon } from '@/assets';

const SelectButton = () => {
  let a;

  return (
    <S.SelectButton>
      <MenteeSelectIcon />
      <S.ButtonTitle>
        멘티
        <S.ButtonSubTitle>{'(재학생)'}</S.ButtonSubTitle>
      </S.ButtonTitle>
      <S.ButtonContent>
        *멘토들에게 자유롭게 커피챗을 <br />
        신청할 수 있어요
      </S.ButtonContent>
    </S.SelectButton>
  );
};

export default SelectButton;
