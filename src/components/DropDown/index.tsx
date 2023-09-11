'use client';

import React from 'react';
import * as S from './style';

const policyUrl =
  'https://gsm-networking.notion.site/GSM-Networking-06e11dfad2c34be18559fa0c0b1f8573?pvs=4';

const DropDown = ({ setIsDrop }) => {
  const backgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <S.Opacity id='background' onClick={backgroundClick}>
      <S.Container>
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
      </S.Container>
    </S.Opacity>
  );
};

export default DropDown;
