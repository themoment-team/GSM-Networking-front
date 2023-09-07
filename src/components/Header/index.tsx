'use client';

import * as S from './style';

import { LogoIcon } from '@/assets';

interface Props {
  clearList: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => {
  const onClick = () => {
    clearList();
  };

  return (
    <S.Header>
      <S.Inner>
        <S.LogoButton onClick={onClick}>
          <LogoIcon />
        </S.LogoButton>
        <S.PageName>취업자 리스트 조회</S.PageName>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
