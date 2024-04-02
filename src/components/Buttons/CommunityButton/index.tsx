/** @jsxImportSource @emotion/react */

'use client';

import Link from 'next/link';

import { css } from '@emotion/react';

import * as S from './style';

import { theme } from '@/styles';


type SegmentType = '' | '/community/gwangya' | '/community/board';

interface Props {
  segment: SegmentType;
}

const Community: React.FC<Props> = ({ segment }) => {
  const selectStyle = (href: SegmentType) =>
    segment === href &&
    css`
      ${theme.typo.h4}
      color : ${theme.color.black};
    `;

  return (
    <S.Button>
      <Link href='/community/gwangya' css={selectStyle('/community/gwangya')}>
        광야
      </Link>
      <S.Divide />
      <Link href='/community/board' css={selectStyle('/community/board')}>
        게시판
      </Link>
    </S.Button>
  );
};

export default Community;
