/**@jsxImportSource @emotion/react */

'use client';

import { useRouter, usePathname } from 'next/navigation';

import { css } from '@emotion/react';

import * as S from './style';

import { MiniProfile, Reply } from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
  isReply?: boolean;
}

const CommentCard: React.FC<Props> = ({
  comment: { commentId, author, comment, replyCommentId, replies },
  isReply,
}) => {
  const { push } = useRouter();

  const path = usePathname();

  const onAddCommentClick = () => {
    if (isReply) push(`${path}/${commentId}?reply=true`);
    push(`${path}/${commentId}`);
  };

  return (
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
          {path.split('/').length === 4 && (
            <S.AddComment onClick={onAddCommentClick}>댓글 달기</S.AddComment>
          )}
        </S.TextWrapper>
      </S.Container>
      {replies &&
        replies.length > 0 &&
        !isReply &&
        replies.map(({ comment }) => (
          <CommentCard
            key={comment.commentId}
            comment={comment}
            isReply={true}
          />
        ))}
    </S.EveryWrapper>
  );
};

export default CommentCard;
