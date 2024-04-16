'use client';

import { useRef, useEffect } from 'react';

import { FilterNotFoundIcon } from '@/assets';
import { Header, WriteButton, BoardCard } from '@/components';
import { useIntersectionObserver, useGetBoardList } from '@/hooks';
import * as S from '@/pageContainer/community/board/style';
import type { BoardInfoType } from '@/types';

interface Props {
  initialData: BoardInfoType[];
}

const TEACHER_CATEGORY = 'TEACHER';

const TeacherBoard: React.FC<Props> = ({ initialData }) => {
  const boardListRef = useRef<HTMLDivElement>(null);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetBoardList(initialData);

  const handleObserver = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  useIntersectionObserver(loadMoreTriggerRef, handleObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  useEffect(() => {
    boardListRef.current?.scrollTo(0, 0);
  }, []);

  const filteredBoardCards = () => {
    const filteredData = data?.pages.map((page) =>
      page.filter((board) => board.boardCategory === TEACHER_CATEGORY)
    );
    if (!filteredData || filteredData.every((page) => page.length === 0)) {
      return (
        <S.NotFoundIconWrapper>
          <FilterNotFoundIcon />
        </S.NotFoundIconWrapper>
      );
    }
    return filteredData.map((page) =>
      page.map((board) => <BoardCard key={board.id} {...board} />)
    );
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.TitleBox>
          <S.Title>선생님 게시판</S.Title>
        </S.TitleBox>
        <S.BoardCardWrapper>
          <S.BoardCardList ref={boardListRef} isFetching={isFetchingNextPage}>
            {filteredBoardCards()}
            {!isFetchingNextPage && hasNextPage && (
              <S.LoadMoreTrigger ref={loadMoreTriggerRef} />
            )}
          </S.BoardCardList>
        </S.BoardCardWrapper>
        <S.ButtonWrapper>
          <WriteButton />
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export default TeacherBoard;
