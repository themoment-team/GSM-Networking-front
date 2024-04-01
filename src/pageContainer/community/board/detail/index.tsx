'use client';

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
import { useGetBoardDetail } from '@/hooks';
import type { BoardType } from '@/types';

interface Props {
  initialData: BoardType | null;
  boardId: string;
}

const PREV_PATH = '/community/board/' as const;

const BoardDetail: React.FC<Props> = ({ boardId, initialData }) => {
  const uploadComment = () => {};

  useGetBoardDetail(boardId, {
    initialData,
  });

  return (
    <S.Container>
      <Header />
      {initialData && (
        <S.PostContainer>
          <SubFunctionHeader prevPath={PREV_PATH} title='글' />
          <S.WriterProfileWrapper>
            <MiniProfile profile={initialData.author} />
            <ChattingButton onClick={() => {}} />
          </S.WriterProfileWrapper>
          <BoardContent
            title={initialData.title}
            content={initialData.content}
            category={initialData.boardCategory}
          />
          <S.Line />
          <S.CommentContainer>
            {initialData.comments.map((comment) => (
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
