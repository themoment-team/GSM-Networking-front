'use client';

import { toast } from 'react-toastify';

import * as S from './style';

import {
  Header,
  SubFunctionHeader,
  BoardContent,
  CommentCard,
  MiniProfile,
  ChattingButton,
  TextArea,
} from '@/components';
import { useGetBoardDetail, usePostComment } from '@/hooks';
import type { BoardType } from '@/types';

interface Props {
  initialData: BoardType | null;
  boardId: string;
}

const PREV_PATH = '/community/board/' as const;

const BoardDetail: React.FC<Props> = ({ boardId, initialData }) => {
  const { mutate: postMutate } = usePostComment();

  const uploadComment = (comment: string) => {
    if (comment.replaceAll('\n', '').replaceAll('\u0020', '').length === 0) {
      toast.error('게시물 내용을 입력해주세요.');
      return;
    }

    const commentObject = {
      boardId: boardId,
      comment: comment,
    };

    postMutate(commentObject);
  };

  const { data: boardData } = useGetBoardDetail(boardId, {
    initialData,
  });

  return (
    <S.Container>
      <Header />
      {boardData && (
        <S.PostContainer>
          <SubFunctionHeader prevPath={PREV_PATH} title='글' />
          <S.WriterProfileWrapper>
            <MiniProfile profile={boardData.author} />
            <ChattingButton onClick={() => {}} />
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
