/** @jsxImportSource @emotion/react */

'use client';

import Link from 'next/link';

import { css } from '@emotion/react';

import * as S from './style';

import { theme } from '@/styles';

const GWANGYA_PATH = '/community/gwangya';
const BOARD_PATH = '/community/board';

type SegmentType = '' | typeof GWANGYA_PATH | typeof BOARD_PATH;

interface Props {
  segment: SegmentType;
}

const CommunityButton: React.FC<Props> = ({ segment }) => {
  const selectStyle = (href: SegmentType) =>
    segment === href &&
    css`
      ${theme.typo.h4}
      color : ${theme.color.black};
    `;

  return (
    <S.Button>
      <Link href={GWANGYA_PATH} css={selectStyle(GWANGYA_PATH)}>
        광야
      </Link>
      <S.Divide />
      <Link href={BOARD_PATH} css={selectStyle(BOARD_PATH)}>
        게시판
      </Link>
    </S.Button>
  );
};

export default CommunityButton;
