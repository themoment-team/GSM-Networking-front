'use client';

import * as S from './style';
import * as C from '../index';
import * as I from '@/assets';
import { useState } from 'react';

const Header = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  return (
    <>
      <S.Header>
        <S.Inner>
          <I.LogoIcon />
          <S.IconContainer>
            {isDrop ? <I.FoldIcon /> : <I.MoreIcon />}
          </S.IconContainer>
        </S.Inner>
      </S.Header>
      {isDrop && <C.DropDown />}
    </>
  );
};

export default Header;
