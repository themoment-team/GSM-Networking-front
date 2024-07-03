'use client';

import * as S from './style';

import { FileUploadIcon, FileDownloadIcon } from '@/assets';
import type { FileType } from '@/types';

interface Props {
  file: FileType;
}

const FileDownloadButton: React.FC<Props> = ({ file: { fileUrls, name } }) => {
  const downloadFile = () => {
    window.open(fileUrls);
  };

  return (
    <S.Container onClick={downloadFile}>
      <S.FileNameContainer>
        <FileUploadIcon />
        <S.Text>{name}</S.Text>
      </S.FileNameContainer>
      <FileDownloadIcon />
    </S.Container>
  );
};

export default FileDownloadButton;
