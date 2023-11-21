'use client';

import { css } from '@emotion/react';

import { toast } from 'react-toastify';

import * as S from './style';

import { ImageRegisterIcon } from '@/assets';
import { MyPageModalWrapper } from '@/components';
import { usePostProfileImgUrl } from '@/hooks';
import { usePostUploadFile } from '@/hooks';

interface Props {
  closeModal: () => void;
}

const ProfileImgRegisterModal: React.FC<Props> = ({ closeModal }) => {
  const { mutate: mutateUploadFile } = usePostUploadFile();
  const { mutate: mutateProfileImgUrl } = usePostProfileImgUrl();

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const profileImg = e.target.files[0];

    if (profileImg.size > 1024 * 1024 * 20) {
      return toast.error('프로필 이미지는 20MB 이하만 업로드 가능합니다.');
    }

    const formData = new FormData();

    formData.append('file', profileImg);

    mutateUploadFile(formData, {
      onSuccess: ({ fileUrl }) => {
        mutateProfileImgUrl(fileUrl, {
          onSuccess: () => {
            toast.success('프로필 이미지 업로드에 성공했습니다.');
            closeModal();
          },
          onError: () => {
            toast.error('프로필 이미지 업로드에 실패했습니다.');
          },
        });
      },
      onError: () => {
        toast.error('프로필 이미지 업로드에 실패했습니다.');
      },
    });
  };

  return (
    <MyPageModalWrapper
      closeModal={closeModal}
      innerCss={css`
        border-radius: 1.25rem;
        padding: 1.5rem;
      `}
    >
      <S.Title>프로필 이미지 변경</S.Title>
      <S.ImgInput
        type='file'
        id='img-input'
        accept='image/*'
        onChange={handleFileInputChange}
      />
      <S.ImgInputLabel htmlFor='img-input'>
        <ImageRegisterIcon />
      </S.ImgInputLabel>
    </MyPageModalWrapper>
  );
};

export default ProfileImgRegisterModal;
