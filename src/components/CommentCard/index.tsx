/**@jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';

import * as S from './style';

import { MiniProfile, Reply } from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
  isReply?: boolean;
}

const CommentCard: React.FC<Props> = ({
  comment: { author, comment, replyCommentId, replies },
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
      <MiniProfile profile={author} isSmallSize={!!isReply} />
      <S.TextWrapper>
        <S.Content>
          {replyCommentId && <Reply replyCommentId={replyCommentId} />}
          {comment}
        </S.Content>
        <S.AddComment>댓글 달기</S.AddComment>
      </S.TextWrapper>
    </S.Container>
    {replies &&
      replies.length > 0 &&
      !isReply &&
      replies.length > 0 &&
      replies.map((comment) => (
        <CommentCard key={comment.commentId} comment={comment} isReply={true} />
      ))}
  </S.EveryWrapper>
);

export default CommentCard;
