'use client';

import type { Dispatch, SetStateAction } from 'react';

import { css } from '@emotion/react';

import { toast } from 'react-toastify';

import * as S from './style';

import { FileRegisterIcon, CancleFileUpload } from '@/assets';
import { FileUploadModalWrapper } from '@/components';

interface Props {
  closeModal: () => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const FileUpload: React.FC<Props> = ({ closeModal, setFiles }) => {
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (!selectedFiles) return;

    setFiles(Array.from(selectedFiles));
    closeModal();
    toast.success('파일 등록에 성공하였습니다.');
  };

  return (
    <FileUploadModalWrapper
      closeModal={closeModal}
      innerCss={css`
        border-radius: 1.25rem;
        padding: 1.5rem;
      `}
    >
      <S.FileUploadInfo>
        <S.TitleContainer>
          <S.Title>파일 추가</S.Title>
          <S.CancleUploadContainer onClick={closeModal}>
            <CancleFileUpload />
          </S.CancleUploadContainer>
        </S.TitleContainer>
        <S.SmallTitle>20MB 이하의 파일</S.SmallTitle>
      </S.FileUploadInfo>
      <S.FileInput
        type='file'
        id='file-input'
        multiple
        accept='image/*, .hwp, .hwpx'
        onChange={handleFileInputChange}
      />
      <S.FileInputLabel htmlFor='file-input'>
        <FileRegisterIcon />
      </S.FileInputLabel>
    </FileUploadModalWrapper>
  );
};

export default FileUpload;
