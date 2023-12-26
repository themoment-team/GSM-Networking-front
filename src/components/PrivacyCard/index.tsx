'use client';

import React from 'react';

import * as S from './style';

interface PrivacyType {
  privacyKey: string;
  privacyValue: string;
}

interface Props {
  privacy: PrivacyType;
}

const PrivacyCard: React.FC<Props> = ({ privacy }) => (
  <S.PrivacyCardContainer>
    <S.PrivacyInfoBox>
      <S.PrivacyKey>{privacy.privacyKey}</S.PrivacyKey>
      <S.PrivacyValue>{privacy.privacyValue}</S.PrivacyValue>
    </S.PrivacyInfoBox>
  </S.PrivacyCardContainer>
);

export default PrivacyCard;
