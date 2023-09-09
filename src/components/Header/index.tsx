'use client';

import React, { useState } from 'react';

import * as S from './style';

import * as I from '@/assets';
import { DropDown } from '@/components';

interface Props {
  clearList: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  return (
    <>
      <S.Header>
        <S.Inner>
          <S.Logo type='button' onClick={clearList}>
            GSM Networking
          </S.Logo>
          <S.IconContainer
            type='button'
            onClick={() => {
              setIsDrop((isDrop) => !isDrop);
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
