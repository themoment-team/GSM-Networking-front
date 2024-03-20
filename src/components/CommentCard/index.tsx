'use client';

import React from 'react';

import * as S from './style';

import { MiniProfile } from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
  isReply?: boolean;
}

const CommentCard: React.FC<Props> = ({
  comment: { profile, content, mention },
  isReply,
}) => (
  <S.Container>
    <MiniProfile profile={profile} isSmallSize={!!isReply} />
    <S.TextWrapper>
      <S.Content>
        {mention && <S.Mention>@{mention}</S.Mention>}
        {content}
      </S.Content>
      <S.AddComment>댓글 달기</S.AddComment>
    </S.TextWrapper>
  </S.Container>
);

export default CommentCard;
