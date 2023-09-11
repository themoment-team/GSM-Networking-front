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
          <button onClick={clearList}>
            <I.LogoIcon />
          </button>
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
      {isDrop && <DropDown setIsDrop={setIsDrop} />}
    </>
  );
};

export default Header;
