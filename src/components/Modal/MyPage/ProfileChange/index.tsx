'use client';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import { ImageRegisterIcon } from '@/assets';
import { Step } from '@/types';

interface Props {
  setStep: Dispatch<SetStateAction<Step>>;
  setImgUrl: Dispatch<SetStateAction<string>>;
}

const ProfileChange = ({ setStep, setImgUrl }: Props) => {
  const handleButtonClick = () => setStep(Step.DEFAULTPROFILECHANGE);
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (typeof reader.result === 'string') setImgUrl(reader.result);
      };
      setStep(Step.PROFILE_IMG_CHANGE);
    } else {
      toast('에러가 발생했습니다.');
    }
  };

  return (
    <>
      <S.DescriptionWrapper>
        <S.Description>5mb 이하의 파일</S.Description>
      </S.DescriptionWrapper>
      <S.ImgInput
        type='file'
        id='img-input'
        accept='image/*'
        onChange={handleFileInputChange}
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
