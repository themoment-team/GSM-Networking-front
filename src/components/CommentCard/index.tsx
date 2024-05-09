/**@jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import * as S from './style';

import {
  MiniProfile,
  Reply,
  DoubleCommentToggle,
  DoubleCommentCard,
} from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
}

const CommentCard: React.FC<Props> = ({
  comment: { commentId, author, comment, replyCommentId, replies },
}) => {
  const [isOppened, setIsOppened] = useState<boolean>(false);

  const { push } = useRouter();

  const path = usePathname();

  const onAddCommentClick = () => {
    push(`${path}/${commentId}`);
  };

  return (
    <S.EveryWrapper>
      <S.Container>
        <MiniProfile profile={author} isSmallSize={false} />
        <S.TextWrapper>
          <S.Content>
            {replyCommentId && <Reply replyCommentId={replyCommentId} />}
            {comment}
          </S.Content>
          {path.split('/').length === 4 && (
            <S.AddComment onClick={onAddCommentClick}>댓글 달기</S.AddComment>
          )}
          {replies && replies.length > 0 && (
            <DoubleCommentToggle
              isOppened={isOppened}
              setIsOppened={setIsOppened}
              commentCount={0}
            />
          )}
        </S.TextWrapper>
      </S.Container>

      {replies &&
        replies.length > 0 &&
        replies.map(({ comment }) => (
          <DoubleCommentCard
            key={comment.commentId}
            comment={comment}
            replyId={commentId}
          />
        ))}
    </S.EveryWrapper>
  );
};

export default CommentCard;
