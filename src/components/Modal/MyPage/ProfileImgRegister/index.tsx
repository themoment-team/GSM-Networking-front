'use client';

import { useState } from 'react';

import { css } from '@emotion/react';

import * as S from './style';

import { CloseIcon } from '@/assets';
import {
  DefaultProfileSelect,
  MyPageModalWrapper,
  ProfileChange,
} from '@/components';
import { Step } from '@/types';

interface Props {
  closeModal: () => void;
}

const ProfileImgRegisterModal: React.FC<Props> = ({ closeModal }) => {
  const [step, setStep] = useState<Step>(Step.DEFAULT);

  // const { mutate: mutateUploadFile } = usePostUploadFile();
  // const { mutate: mutateProfileImgUrl } = usePostProfileImgUrl();
  // const { refetch: refetchGetMyInfo } = useGetMyInfo();
  // const { refetch: refetchGetMyMenteeInfo } = useGetMyMenteeInfo();

  // const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files) return;

  //   const profileImg = e.target.files[0];

  //   if (profileImg.size > 1024 * 1024 * 20) {
  //     return toast.error('프로필 이미지는 20MB 이하만 업로드 가능합니다.');
  //   }

  //   const formData = new FormData();

  //   formData.append('file', profileImg);

  //   mutateUploadFile(formData, {
  //     onSuccess: ({ fileUrl }) => {
  //       const data: PostProfileImgType = {
  //         profileUrl: fileUrl,
  //       };

  //       mutateProfileImgUrl(data, {
  //         onSuccess: () => {
  //           toast.success('프로필 이미지 업로드에 성공했습니다.');
  //           refetchGetMyMenteeInfo();
  //           refetchGetMyInfo();
  //           closeModal();
  //         },
  //         onError: () => {
  //           toast.error('프로필 이미지 업로드에 실패했습니다.');
  //         },
  //       });
  //     },
  //     onError: () => {
  //       toast.error('프로필 이미지 업로드에 실패했습니다.');
  //     },
  //   });
  // };

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
        {step === Step.DEFAULT && <ProfileChange setStep={setStep} />}
        {/* {step === Step.PROFILE_IMG_CHANGE && <ProfileChange />} */}
        {step === Step.DEFAULTPROFILECHANGE && (
          <DefaultProfileSelect closeModal={closeModal} />
        )}
      </S.Container>
    </MyPageModalWrapper>
  );
};

export default ProfileImgRegisterModal;
