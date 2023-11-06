'use client';

import React from 'react';

import * as S from './style';

import { PRIVACY_POLICY_URL } from '@/constants';

interface Props {
  setIsDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

const teamUrl =
  'https://gsm-networking.notion.site/GSM-Networking-30599e51feb345a781d1f41be1962f31?pvs=4';

const DropDown: React.FC<Props> = ({ setIsDrop }) => (
  <S.Opacity onClick={() => setIsDrop(false)}>
    <S.Container onClick={(e) => e.stopPropagation()}>
      <S.ListContainer>
        <S.ListItem>
          <S.LinkItem
            href={PRIVACY_POLICY_URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            개인정보 처리방침
          </S.LinkItem>
        </S.ListItem>
        <S.ListItem>
          <S.LinkItem href={teamUrl} target='_blank' rel='noopener noreferrer'>
            About Team
          </S.LinkItem>
        </S.ListItem>
      </S.ListContainer>
    </S.Container>
  </S.Opacity>
);

export default DropDown;
