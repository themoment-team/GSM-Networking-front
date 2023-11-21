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
}) => {
  const handleModalWrapperClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    closeModal();
    e.stopPropagation();
  };

  return (
    <S.ModalWrapper onClick={handleModalWrapperClick}>
      <S.ModalInner css={innerCss}>{children}</S.ModalInner>
    </S.ModalWrapper>
  );
};

export default MyPageModalWrapper;
