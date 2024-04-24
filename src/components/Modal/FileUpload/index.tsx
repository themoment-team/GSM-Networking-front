'use client';

import { css } from '@emotion/react';

import { toast } from 'react-toastify';

import * as S from './style';

import { FileRegisterIcon, CancleFileUpload } from '@/assets';
import { MyPageModalWrapper } from '@/components';
import {
  useGetMyInfo,
  useGetMyMenteeInfo,
  usePostProfileImgUrl,
  usePostUploadFile,
} from '@/hooks';
import type { PostProfileImgType } from '@/types';

interface Props {
  closeModal: () => void;
}

const FileUpload: React.FC<Props> = ({ closeModal }) => {
  const { mutate: mutateUploadFile } = usePostUploadFile();
  const { mutate: mutateProfileImgUrl } = usePostProfileImgUrl();
  const { refetch: refetchGetMyInfo } = useGetMyInfo();
  const { refetch: refetchGetMyMenteeInfo } = useGetMyMenteeInfo();

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
        const data: PostProfileImgType = {
          profileUrl: fileUrl,
        };

        mutateProfileImgUrl(data, {
          onSuccess: () => {
            toast.success('프로필 이미지 업로드에 성공했습니다.');
            refetchGetMyMenteeInfo();
            refetchGetMyInfo();
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
      <S.FileUploadInfo>
        <S.TitleContainer>
          <S.Title>파일 추가</S.Title>
          <S.CancleUploadContainer
            onClick={() => {
              closeModal();
            }}
          >
            <CancleFileUpload />
          </S.CancleUploadContainer>
        </S.TitleContainer>
        <S.SmallTitle>20MB 이하의 파일</S.SmallTitle>
      </S.FileUploadInfo>
      <S.FileInput
        type='file'
        id='file-input'
        accept='image/*'
        onChange={handleFileInputChange}
      />
      <S.FileInputLabel htmlFor='file-input'>
        <FileRegisterIcon />
      </S.FileInputLabel>
    </MyPageModalWrapper>
  );
};

export default FileUpload;
