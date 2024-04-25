'use client';

import { useState } from 'react';

import { css } from '@emotion/react';

import { toast } from 'react-toastify';

import * as S from './style';

import { FileRegisterIcon, CancleFileUpload } from '@/assets';
import { FileUploadModalWrapper } from '@/components';

interface Props {
  closeModal: () => void;
}

const FileUpload: React.FC<Props> = ({ closeModal }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    if (selectedFiles.length + files.length > 10) {
      return toast.error('최대 10개까지 파일을 업로드할 수 있습니다.');
    }

    const formData = new FormData();

    files.forEach((file) => {
      if (file.size > 1024 * 1024 * 20) {
        toast.error('파일은 20MB 이하만 업로드 가능합니다.');
      } else {
        setSelectedFiles((prevFiles) => [...prevFiles, file]);
        formData.append('files', file);
      }
    });
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
