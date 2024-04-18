'use client';

import type { Dispatch, SetStateAction } from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import {
  Header,
  SubFunctionHeader,
  BoardContent,
  CommentCard,
  MiniProfile,
  TextArea,
} from '@/components';
import { BOARD_PATH } from '@/constants';
import { useGetBoardDetail, usePostComment } from '@/hooks';
import type { BoardType } from '@/types';
import { isAllowedContent, scrollToBottom } from '@/utils';

interface Props {
  initialData: BoardType | null;
  boardId: string;
}

const BoardDetail: React.FC<Props> = ({ boardId, initialData }) => {
  const { data: boardData, refetch } = useGetBoardDetail(boardId, {
    initialData,
  });

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

    const commentObject = {
      boardId: boardId,
      comment: comment,
    };

    postMutate(commentObject);
    setInputValue('');
  };

  return (
    <S.Container>
      <Header />
      {boardData && (
        <S.PostContainer>
          <SubFunctionHeader prevPath={BOARD_PATH} title='글' />
          <S.WriterProfileWrapper>
            <MiniProfile profile={boardData.author} />
            {/* <ChattingButton onClick={() => {}} /> */}
          </S.WriterProfileWrapper>
          <BoardContent
            title={boardData.title}
            content={boardData.content}
            category={boardData.boardCategory}
          />
          <S.Line />
          <S.CommentContainer>
            {boardData.comments.map((comment) => (
              <CommentCard key={comment.commentId} comment={comment} />
            ))}
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

export default BoardDetail;
