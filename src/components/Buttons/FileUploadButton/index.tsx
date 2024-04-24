'use client';

import * as S from './style';

import { FileUploadIcon } from '@/assets';

interface Props {
  onClick?: () => void;
}

const FileUploadButton: React.FC<Props> = ({ onClick }) => (
  <S.Container type='button' onClick={onClick}>
    <FileUploadIcon />
    <S.Text>파일 추가</S.Text>
  </S.Container>
);

export default FileUploadButton;
