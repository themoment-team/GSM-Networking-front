'use client';

import { useEffect, useRef } from 'react';

import * as S from './style';

import { FilterNotFoundIcon } from '@/assets';
import { BoardCard } from '@/components';
import { useGetBoardList, useIntersectionObserver } from '@/hooks';
import type { BoardInfoType, CategoryType } from '@/types';

interface Props {
  initialData: BoardInfoType[];
  selectedCategory: CategoryType | null;
}

const BoardList: React.FC<Props> = ({ initialData, selectedCategory }) => {
  const boardListRef = useRef<HTMLDivElement>(null);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, refetch } =
    useGetBoardList(selectedCategory, initialData);

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
    refetch();
  }, [selectedCategory, refetch]);

  return (
    <S.BoardCardWrapper>
      <S.BoardCardList ref={boardListRef} isFetching={isFetchingNextPage}>
        {data?.pages && data.pages.length > 0 ? (
          data.pages.map((page) =>
            page.map((board) => <BoardCard key={board.id} {...board} />)
          )
        ) : (
          <S.NotFoundIconWrapper>
            <FilterNotFoundIcon />
          </S.NotFoundIconWrapper>
        )}
        {!isFetchingNextPage && hasNextPage && (
          <S.LoadMoreTrigger ref={loadMoreTriggerRef} />
        )}
      </S.BoardCardList>
    </S.BoardCardWrapper>
  );
};

export default BoardList;
