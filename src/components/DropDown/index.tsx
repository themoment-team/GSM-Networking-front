'use client';
import React, { useState } from 'react';
import * as S from './style';

interface DropDownProps {
  setIsDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

const policyUrl =
  'https://gsm-networking.notion.site/GSM-Networking-06e11dfad2c34be18559fa0c0b1f8573?pvs=4';

const DropDown: React.FC<DropDownProps> = ({ setIsDrop }) => {
  const backgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDrop(false);
    return false;
  };

  return (
    <S.Container>
      <S.MenuContainer>
        <S.ListContainer>
          <S.ListItem>
            <S.LinkItem
              href={policyUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              개인정보 처리방침
            </S.LinkItem>
          </S.ListItem>
        </S.ListContainer>
      </S.MenuContainer>
      <S.Opacity onClick={backgroundClick} />
    </S.Container>
  );
};

export default DropDown;
