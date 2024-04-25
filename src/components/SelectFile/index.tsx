'use client';

import * as S from './style';

import { FileUploadIcon } from '@/assets';

interface Props {
  onClick?: () => void;
}

const SelectFile: React.FC<Props> = () => (
  <S.Container>
    <FileUploadIcon />
    <S.Text>파일 추가</S.Text>
  </S.Container>
);

export default SelectFile;
