'use client';

import { useParams } from 'next/navigation';

import * as S from './style';

import { Header, SubFunctionHeader, CommentCard, TextArea } from '@/components';
import { useGetCommentDetail } from '@/hooks';
import type { CommentType } from '@/types';

interface Props {
  initialData: CommentType | null;
  commentId: string;
}

const PREV_PATH = '/community/board' as const;

const AddComment: React.FC<Props> = ({ initialData, commentId }) => {
  const { data } = useGetCommentDetail(commentId, { initialData });

  const { postcommentId } = useParams();

  const uploadComment = () => {};

  return (
    <S.Container>
      <Header />
      {data && (
        <S.PostContainer>
          <SubFunctionHeader
            prevPath={PREV_PATH + postcommentId}
            title='댓글'
          />
          <S.CommentContainer>
            <CommentCard comment={data} />
          </S.CommentContainer>
        </S.PostContainer>
      )}
      <S.TextAreaWrapper>
        <TextArea
          disabled={false}
          onClick={uploadComment}
          textAreaType='comment'
        />
      </S.TextAreaWrapper>
    </S.Container>
  );
};

export default AddComment;
