/**@jsxImportSource @emotion/react */

'use client';

import { useRouter, usePathname } from 'next/navigation';

import * as S from './style';

import { MiniProfile, Reply } from '@/components';
import type { CommentType } from '@/types';

interface Props {
  comment: CommentType;
  replyId?: string;
}

const DoubleCommentCard: React.FC<Props> = ({
  comment: { commentId, author, comment, replyCommentId },
  replyId,
}) => {
  const { push } = useRouter();

  const path = usePathname();

  const onAddCommentClick = () => {
    push(`${path}/${replyId + '?reply=' + commentId}`);
  };

  return (
    <S.EveryWrapper>
      <S.Container>
        <MiniProfile profile={author} isSmallSize={true} />
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
    </S.EveryWrapper>
  );
};

export default DoubleCommentCard;
