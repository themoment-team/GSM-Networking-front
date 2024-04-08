'use client';

import React, { useRef, useEffect, useState } from 'react';

import * as S from './style';

import {
  Header,
  CommunityButton,
  WriteButton,
  FilterButton,
  BoardCard,
  BoardFilterModal,
} from '@/components';
import { useIntersectionObserver, useGetBoardList } from '@/hooks';
import { ReverseCategoryType } from '@/types';
import type { BoardInfo } from '@/types';
import type { CategoryFilterType } from '@/types';

interface Props {
  initialData: BoardInfo[];
}

const Board: React.FC<Props> = ({ initialData }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterType | null>(null);
  const boardListRef = useRef<HTMLDivElement>(null);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);
  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);

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

  return (
    <>
      <Header />
      <S.Container>
        <S.TitleBox>
          <CommunityButton segment='/community/board' />
          <FilterButton
            onClick={() => setIsShowFilterModal((prev) => !prev)}
            isActive={isShowFilterModal}
          />
        </S.TitleBox>
        {isShowFilterModal && (
          <BoardFilterModal
            setIsShowFilterModal={setIsShowFilterModal}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        <S.BoardCardWrapper>
          <S.BoardCardList ref={boardListRef} isFetching={isFetchingNextPage}>
            {data?.pages.map((page) =>
              page
                .filter(
                  (board) =>
                    !selectedCategory ||
                    selectedCategory === '전체' ||
                    ReverseCategoryType[board.boardCategory] ===
                      selectedCategory
                )
                .map((board) => <BoardCard key={board.id} {...board} />)
            )}
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

export default Board;
