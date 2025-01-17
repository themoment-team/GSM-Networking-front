/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports-ts */
'use client';

import { useState, type Dispatch, type SetStateAction, useEffect } from 'react';

import { useRouter } from 'next/navigation';

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
import { TEACHER_NOTICE_PAGE_PATH } from '@/constants';
import {
  useGetBoardDetail,
  usePostComment,
  useGetValidatedInfo,
} from '@/hooks';
import {
  CategoryType,
  type MenteeType,
  type MentorInfoType,
  HeaderPosition,
  type BoardResponseType,
} from '@/types';
import { isAllowedContent, scrollToBottom } from '@/utils';

import type { Metadata } from 'next';

interface Props {
  initialData: BoardResponseType | null;
  boardId: string;
}

export const metadata = (boardData: BoardResponseType | null): Metadata => ({
  title: boardData ? boardData.title : '상세 게시판',
  description: boardData ? boardData.content : '상세 게시판 페이지입니다.',
  openGraph: {
    title: boardData ? boardData.title : '게시판',
    description: boardData ? boardData.content : '게시판 페이지입니다.',
  },
});

const PREV_PATH = '/community/board/' as const;

const BoardDetail: React.FC<Props> = ({ boardId, initialData }) => {
  const { push } = useRouter();
  const { data: boardData, refetch } = useGetBoardDetail(boardId, {
    initialData,
  });

  const { userInfo } = useGetValidatedInfo();

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

  metadata(boardData ?? null);

  const handleUpdateButtonClick = () =>
    push(`/community/write?boardid=${boardId}`);

  return (
    <S.Container>
      <Header position={HeaderPosition.STICKY} />
      {boardData && (
        <S.PostContainer>
          <SubFunctionHeader
            prevPath={
              boardData?.boardCategory === CategoryType.선생님
                ? TEACHER_NOTICE_PAGE_PATH
                : PREV_PATH
            }
            title='글'
          />
          <S.WriterProfileWrapper>
            <MiniProfile profile={boardData.author} />

            {userInfo?.id === boardData.author.id ? (
              <S.UpdateButton onClick={handleUpdateButtonClick}>
                수정하기
              </S.UpdateButton>
            ) : (
              // <ChattingButton phoneNumber={boardData.author.phoneNumber} />
              <></>
            )}
          </S.WriterProfileWrapper>
          <BoardContent boardData={boardData} />
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
