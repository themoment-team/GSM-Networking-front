/**@jsxImportSource @emotion/react */

'use client';

import { useRouter, usePathname } from 'next/navigation';

import { css } from '@emotion/react';

import * as S from './style';

import { MiniProfile, Reply } from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
  replyId?: string;
}

const CommentCard: React.FC<Props> = ({
  comment: { commentId, author, comment, replyCommentId, replies },
  replyId,
}) => {
  const { push } = useRouter();

  const path = usePathname();

  const onAddCommentClick = () => {
    push(`${path}/${replyId ? replyId + '?reply=' + commentId : commentId}`);
  };

  return (
    <S.EveryWrapper>
      <S.Container
        css={
          replyId &&
          css`
            margin-left: 2.75rem;
          `
        }
      >
        <MiniProfile profile={author} isSmallSize={!!replyId} />
        <S.TextWrapper>
          <S.Content>
            {replyCommentId && <Reply replyCommentId={replyCommentId} />}
            {comment}
          </S.Content>
          {path.split('/').length === 4 && (
            <S.AddComment onClick={onAddCommentClick}>댓글 달기</S.AddComment>
          )}
        </S.TextWrapper>
      </S.Container>
      {replies &&
        replies.length > 0 &&
        !replyId &&
        replies.map(({ comment }) => (
          <CommentCard
            key={comment.commentId}
            comment={comment}
            replyId={commentId}
          />
        ))}
    </S.EveryWrapper>
  );
};

export default CommentCard;
