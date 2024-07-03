/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';

import { Link } from 'next-view-transitions';

import * as S from './style';

import { GWANGYA_PATH, BOARD_PATH } from '@/constants';
import { theme } from '@/styles';
import type { SegmentType } from '@/types';

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
