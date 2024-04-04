'use client';

import type { Dispatch, SetStateAction } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import { Header, SubFunctionHeader, CommentCard, TextArea } from '@/components';
import { useGetCommentDetail, usePostComment } from '@/hooks';
import type { CommentType, CommentRequestType } from '@/types';
import { isAllowedContent, scrollToBottom } from '@/utils';

interface Props {
  initialData: CommentType | null;
  commentId: string;
}

const PREV_PATH = '/community/board/' as const;

const AddComment: React.FC<Props> = ({ initialData, commentId }) => {
  const { data, refetch } = useGetCommentDetail(commentId, { initialData });

  const { boardId, commentId: parentCommentId } = useParams();

  const replyId = useSearchParams().get('reply');

  const handleUploadSuccess = () => {
    refetch();
    scrollToBottom();
  };

  const { mutate: postMutate } = usePostComment({
    onSuccess: handleUploadSuccess,
  });

  const uploadComment = (
    comment: string,
    setInputValue: Dispatch<SetStateAction<string>>
  ) => {
    if (!isAllowedContent(comment)) {
      toast.error('게시물 내용을 입력해주세요.');
      return;
    }

    const commentObject: CommentRequestType = {
      boardId: boardId as string,
      parentCommentId: parentCommentId as string,
      comment,
    };

    if (replyId) commentObject['replyCommentId'] = replyId;

    postMutate(commentObject);
    setInputValue('');
  };

  return (
    <S.Container>
      <Header />
      {data && (
        <S.PostContainer>
          <SubFunctionHeader prevPath={PREV_PATH + boardId} title='댓글' />
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
