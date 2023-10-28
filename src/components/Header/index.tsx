'use client';

import React, { useState } from 'react';

import * as S from './style';

import * as I from '@/assets';
import { DropDown } from '@/components';

interface Props {
  clearList?: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const handleLogoClick = () => clearList && clearList();

  return (
    <>
      <S.Header>
        <S.Inner>
          <S.LogoLink href='/' onClick={handleLogoClick}>
            <I.GsmNetworkingIcon />
            GSM Networking
          </S.LogoLink>
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
