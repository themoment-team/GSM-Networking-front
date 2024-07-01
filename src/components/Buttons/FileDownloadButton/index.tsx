'use client';

import * as S from './style';

import { FileUploadIcon, FileDownloadIcon } from '@/assets';
import type { FileType } from '@/types';

interface Props {
  file: FileType;
}

const FileUploadButton: React.FC<Props> = ({ file: { id, fileUrls } }) => {
  const downloadFile = () => {
    window.open(fileUrls);
  };

  return (
    <S.Container onClick={downloadFile}>
      <S.FileNameContainer>
        <FileUploadIcon />
        <S.Text>{id}</S.Text>
      </S.FileNameContainer>

      <FileDownloadIcon />
    </S.Container>
  );
};

export default FileUploadButton;
