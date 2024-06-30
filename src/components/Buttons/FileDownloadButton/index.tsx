'use client';

import * as S from './style';

import { FileUploadIcon, FileDownloadIcon } from '@/assets';

interface Props {
  // file: any;
}

const FileUploadButton: React.FC<Props> = ({}) => {
  const downloadFile = () => {};

  return (
    <S.Container onClick={downloadFile}>
      <S.FileNameContainer>
        <FileUploadIcon />
        <S.Text>{'파일 이름'}</S.Text>
      </S.FileNameContainer>

      <FileDownloadIcon />
    </S.Container>
  );
};

export default FileUploadButton;
