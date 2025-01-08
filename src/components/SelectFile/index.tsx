'use client';

import type { Dispatch, SetStateAction } from 'react';

import * as S from './style';

import { CancelFileUpload, FileUploadIcon } from '@/assets';

interface Props {
  file: File;
  setFiles: Dispatch<SetStateAction<File[]>>;
  index: number;
}

const SelectFile: React.FC<Props> = ({ file, setFiles, index }) => (
  <S.Container>
    <S.FileNameContainer>
      <FileUploadIcon />
      <S.Text>{file.name}</S.Text>
    </S.FileNameContainer>
    <S.CancelUploadContainer
      onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
    >
      <CancelFileUpload />
    </S.CancelUploadContainer>
  </S.Container>
);

export default SelectFile;
