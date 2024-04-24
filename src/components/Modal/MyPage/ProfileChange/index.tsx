'use client';

import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import * as S from './style';

import { ImageRegisterIcon } from '@/assets';
import { Step } from '@/types';

interface Props {
  setStep: Dispatch<SetStateAction<Step>>;
}

const ProfileChange = ({ setStep }: Props) => {
  const handleButtonClick = () => setStep(Step.DEFAULTPROFILECHANGE);

  return (
    <>
      <S.DescriptionWrapper>
        <S.Description>5mb 이하의 파일</S.Description>
      </S.DescriptionWrapper>
      <S.ImgInput
        type='file'
        id='img-input'
        accept='image/*'
        // onChange={handleFileInputChange}
      />
      <S.ImgInputLabel htmlFor='img-input'>
        <ImageRegisterIcon />
      </S.ImgInputLabel>
      <S.DefaultImgButton onClick={handleButtonClick}>
        기본 이미지 변경
      </S.DefaultImgButton>
    </>
  );
};

export default ProfileChange;
