'use client';

import { useState } from 'react';

import { css } from '@emotion/react';

import * as S from './style';

import { CloseIcon } from '@/assets';
import {
  DefaultProfileSelect,
  MyPageModalWrapper,
  ProfileChange,
  ProfileImgChange,
} from '@/components';
import { Step } from '@/types';

interface Props {
  closeModal: () => void;
}

const ProfileImgRegisterModal: React.FC<Props> = ({ closeModal }) => {
  const [step, setStep] = useState<Step>(Step.DEFAULT);
  const [imgUrl, setImgUrl] = useState<string>('');

  return (
    <MyPageModalWrapper
      closeModal={closeModal}
      innerCss={css`
        border-radius: 1.25rem;
        padding: 1.5rem;
      `}
    >
      <S.Container>
        <S.TitleWrapper>
          <S.Title>프로필 이미지 변경</S.Title>
          <S.XButton onClick={closeModal}>
            <CloseIcon />
          </S.XButton>
        </S.TitleWrapper>
        {
          // 처음 보게될 모달
          step === Step.DEFAULT && (
            <ProfileChange setStep={setStep} setImgUrl={setImgUrl} />
          )
        }
        {
          // 기본 이미지 변경 클릭시 보게될 모달
          step === Step.DEFAULTPROFILECHANGE && (
            <DefaultProfileSelect closeModal={closeModal} />
          )
        }
        {
          // 이미지 파일 선택시 보게될 모달
          step === Step.PROFILE_IMG_CHANGE && (
            <ProfileImgChange
              setStep={setStep}
              imgUrl={imgUrl}
              closeModal={closeModal}
            />
          )
        }
      </S.Container>
    </MyPageModalWrapper>
  );
};

export default ProfileImgRegisterModal;
