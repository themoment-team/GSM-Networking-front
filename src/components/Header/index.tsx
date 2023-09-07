'use client';

import * as S from './style';

import { LogoIcon } from '@/assets';

const Header = () => (
  <S.Header>
    <S.Inner>
      <S.LogoImg>
        <LogoIcon />
      </S.LogoImg>
      <S.PageName>취업자 리스트 조회</S.PageName>
    </S.Inner>
  </S.Header>
);

export default Header;
