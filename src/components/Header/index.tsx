'use client';

import React, { useState } from 'react';

import * as S from './style';

import * as I from '@/assets';
import { DropDown } from '@/components';

const Header = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  return (
    <>
      <S.Header>
        <S.Inner>
          <I.LogoIcon />
          <S.IconContainer
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              setIsDrop((prev) => !prev);
            }}
          >
            {isDrop ? <I.FoldIcon /> : <I.MoreIcon />}
          </S.IconContainer>
        </S.Inner>
      </S.Header>
      {isDrop && <DropDown />}
    </>
  );
};

export default Header;
