'use client';

import { useRouter } from 'next/navigation';

import * as S from './style';

import { GoBackIcon } from '@/assets';

interface Props {
  name: string;
  generation: number;
}

const ChattingHeader: React.FC<Props> = ({ name, generation }) => {
  const { push } = useRouter();

  // 어디로 이동해야 할지 정해지지 않아 /로 이동하게 해두었습니다!
  const handleGoBackIconClick = () => push('/');

  return (
    <S.Container>
      <S.IconBox onClick={handleGoBackIconClick}>
        <GoBackIcon />
      </S.IconBox>
      <S.OpponentInfo>
        {generation}기 {name}
      </S.OpponentInfo>
      <S.SpaceBox />
    </S.Container>
  );
};

export default ChattingHeader;
