'use client';

import { useRouter } from 'next/navigation';

import * as S from './style';

import { GoBackIcon } from '@/assets';

interface Props {
  prevPath: string;
  title: string;
}

const SubFunctionHeader: React.FC<Props> = ({ title, prevPath }) => {
  const { push } = useRouter();

  const handleGoPrevClick = () => push(prevPath);

  return (
    <S.Container>
      <S.IconBox onClick={handleGoPrevClick}>
        <GoBackIcon />
      </S.IconBox>
      <S.OpponentInfo>{title}</S.OpponentInfo>
    </S.Container>
  );
};

export default SubFunctionHeader;
