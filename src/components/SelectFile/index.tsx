'use client';

import * as S from './style';

import { CancleFileUpload, FileUploadIcon } from '@/assets';

interface Props {
  file: File;
}

const SelectFile: React.FC<Props> = ({ file }) => (
  <S.Container>
    <S.FileNameContainer>
      <FileUploadIcon />
      <S.Text>{file.name}</S.Text>
    </S.FileNameContainer>
    <S.CancleUploadContainer>
      <CancleFileUpload />
    </S.CancleUploadContainer>
  </S.Container>
);

export default SelectFile;
