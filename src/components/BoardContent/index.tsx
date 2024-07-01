'use client';

import { LikeButton } from '..';

import * as S from './style';

import { FileDownloadButton } from '@/components';
import { useGetBoardDetail, useOptimisticLike } from '@/hooks';
import { ReverseCategoryType } from '@/types';
import type { BoardResponseType } from '@/types';

interface Props {
  boardData: BoardResponseType;
}

const BoardContent: React.FC<Props> = ({
  boardData: { id, title, content, boardCategory, likeCount, isLike, fileList },
}) => {
  const { refetch } = useGetBoardDetail(String(id));

  const { optimisticLikeCount, optimisticIsLike, uploadLike } =
    useOptimisticLike(id, likeCount, isLike, refetch);

  return (
    <S.TextWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{content}</S.Description>
      {fileList &&
        fileList.map((file) => (
          <FileDownloadButton file={file} key={file.id} />
        ))}
      <S.CategoryBox>
        <S.CategoryText>{ReverseCategoryType[boardCategory]}</S.CategoryText>
        <LikeButton
          onClick={uploadLike}
          likeCount={optimisticLikeCount}
          isActive={optimisticIsLike}
          isDetail={true}
        />
      </S.CategoryBox>
    </S.TextWrapper>
  );
};

export default BoardContent;
