/**@jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';

import * as S from './style';

import { MiniProfile } from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
  isReply?: boolean;
}

const CommentCard: React.FC<Props> = ({
  comment: { profile, content, mention, comments },
  isReply,
}) => (
  <S.EveryWrapper>
    <S.Container
      css={
        isReply &&
        css`
          margin-left: 2.75rem;
        `
      }
    >
      <MiniProfile profile={profile} isSmallSize={!!isReply} />
      <S.TextWrapper>
        <S.Content>
          {mention && <S.Mention>@{mention} </S.Mention>}
          {content}
        </S.Content>
        <S.AddComment>댓글 달기</S.AddComment>
      </S.TextWrapper>
    </S.Container>
    {comments &&
      !isReply &&
      comments.length > 0 &&
      comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} isReply={true} />
      ))}
  </S.EveryWrapper>
);

export default CommentCard;
