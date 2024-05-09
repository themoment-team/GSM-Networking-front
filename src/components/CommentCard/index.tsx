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
  const path = usePathname();
  const isBoardDetail = path.split('/').length === 4;

  const [isOppened, setIsOppened] = useState<boolean>(!isBoardDetail);

  const { push } = useRouter();

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
          {isBoardDetail && (
            <S.AddComment onClick={onAddCommentClick}>댓글 달기</S.AddComment>
          )}
          {replies && replies.length > 0 && (
            <>
              <DoubleCommentToggle
                isOppened={isOppened}
                setIsOppened={setIsOppened}
                commentCount={replies.length}
              />
              {isOppened && (
                <S.DoubleCommentWrapper>
                  {replies.map(({ comment }) => (
                    <DoubleCommentCard
                      key={comment.commentId}
                      comment={comment}
                      replyId={commentId}
                    />
                  ))}
                </S.DoubleCommentWrapper>
              )}
            </>
          )}
        </S.TextWrapper>
      </S.Container>
    </S.EveryWrapper>
  );
};

export default CommentCard;
