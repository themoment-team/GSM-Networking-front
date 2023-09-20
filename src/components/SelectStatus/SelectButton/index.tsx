'use client';

import * as S from './style';

import { MenteeSelectIcon, MentorSelectIcon } from '@/assets';

const SelectButton = ({ type }: { type: 'mentee' | 'mentor' }) => {
  let a;

  return (
    <>
      {type === 'mentee' ? (
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
      ) : type === 'mentor' ? (
        <S.SelectButton>
          <MentorSelectIcon />
          <S.ButtonTitle>
            멘토
            <S.ButtonSubTitle>{'(졸업자)'}</S.ButtonSubTitle>
          </S.ButtonTitle>
          <S.ButtonContent>*멘티들에게 도움을 줄 수 있어요</S.ButtonContent>
        </S.SelectButton>
      ) : null}
    </>
  );
};

export default SelectButton;
