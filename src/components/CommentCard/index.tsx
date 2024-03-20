'use client';

import React from 'react';

import * as S from './style';

import { MiniProfile } from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
}

const CommentCard: React.FC<Props> = ({ comment: { profile } }) => (
  <S.Container>
    <MiniProfile profile={profile} />
  </S.Container>
);

export default CommentCard;
