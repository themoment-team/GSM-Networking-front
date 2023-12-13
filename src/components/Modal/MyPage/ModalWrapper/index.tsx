/**@jsxImportSource @emotion/react */

'use client';

import React from 'react';

import type { Interpolation, Theme } from '@emotion/react';

import * as S from './style';

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
  innerCss?: Interpolation<Theme>;
}

const MyPageModalWrapper: React.FC<Props> = ({
  children,
  closeModal,
  innerCss,
}) => (
  <S.ModalWrapper onClick={closeModal}>
    <S.ModalInner onClick={(e) => e.stopPropagation()} css={innerCss}>
      {children}
    </S.ModalInner>
  </S.ModalWrapper>
);

export default MyPageModalWrapper;
