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
import {
  useGetBoardDetail,
  useGetMyInfo,
  useGetMyMenteeInfo,
  usePostComment,
} from '@/hooks';
import { CategoryType, MenteeType, MentorInfoType } from '@/types';
import { HeaderPosition, type BoardType } from '@/types';
import { isAllowedContent, scrollToBottom } from '@/utils';

import type { Metadata } from 'next';

interface Props {
  initialData: BoardType | null;
  boardId: string;
}

export const metadata = (boardData: BoardType | null): Metadata => ({
  title: boardData ? boardData.title : '상세 게시판',
  description: boardData ? boardData.content : '상세 게시판 페이지입니다.',
  openGraph: {
    title: boardData ? boardData.title : '게시판',
    description: boardData ? boardData.content : '게시판 페이지입니다.',
  },
});

const PREV_PATH = '/community/board/' as const;
const TEACHER_PATH = '/community/board/teacher' as const;

const BoardDetail: React.FC<Props> = ({ boardId, initialData }) => {
  const { push } = useRouter();
  const { data: boardData, refetch } = useGetBoardDetail(boardId, {
    initialData,
  });
  const [userInfo, setUserInfo] = useState<MenteeType | MentorInfoType | null>(
    null
  );

  const { data: mentorInfo } = useGetMyInfo();
  const { data: menteeInfo } = useGetMyMenteeInfo();

  useEffect(() => {
    if (mentorInfo) setUserInfo(mentorInfo);
    if (menteeInfo) setUserInfo(menteeInfo);
  }, [menteeInfo, mentorInfo]);

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
                ? TEACHER_PATH
                : PREV_PATH
            }
            title='글'
          />
          <S.WriterProfileWrapper>
            <MiniProfile profile={boardData.author} />
            {/* <ChattingButton onClick={() => {}} /> */}
            {userInfo?.id === boardData.author.id && (
              <S.UpdateButton onClick={handleUpdateButtonClick}>
                수정하기
              </S.UpdateButton>
            )}
          </S.WriterProfileWrapper>
          <BoardContent
            title={boardData.title}
            content={boardData.content}
            category={boardData.boardCategory}
            likeCount={boardData.likeCount}
            isLike={boardData.isLike}
            boardId={boardId}
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
