'use client';

import { useState } from 'react';

import { css } from '@emotion/react';

import { toast } from 'react-toastify';

import * as S from './style';

import { FileRegisterIcon, CancleFileUpload } from '@/assets';
import { FileUploadModalWrapper } from '@/components';
import { CommunityWrite } from '@/pageContainer';

interface Props {
  closeModal: () => void;
}

const FileUpload: React.FC<Props> = ({ closeModal }) => {
  const [state, setState] = useState<File>();
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = e.target.files;
    setState(selectedFiles[0]);
    // console.log(Array(selectedFiles[0]));
    // console.log(state);

    <CommunityWrite selectedFile={selectedFiles[0]} />;

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
