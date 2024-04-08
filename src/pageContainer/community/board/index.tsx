'use client';

import React, { useRef, useEffect, useState } from 'react';

import * as S from './style';

import { FilterNotFoundIcon } from '@/assets';
import {
  Header,
  CommunityButton,
  WriteButton,
  FilterButton,
  BoardCard,
  BoardFilterModal,
} from '@/components';
import { BOARD_PATH } from '@/constants';
import { useIntersectionObserver, useGetBoardList } from '@/hooks';
import { ReverseCategoryType } from '@/types';
import type { BoardInfo } from '@/types';
import type { CategoryFilterType } from '@/types';

interface Props {
  initialData: BoardInfo[];
}

const ALL_CATEGORIES = '전체' as const;
const BUTTON_TITLE = '카테고리' as const;

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

  const filteredBoardCards = () => {
    const filteredData = data?.pages.map((page) =>
      page.filter(
        (board) =>
          !selectedCategory ||
          selectedCategory === ALL_CATEGORIES ||
          ReverseCategoryType[board.boardCategory] === selectedCategory
      )
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
          <CommunityButton segment={BOARD_PATH} />
          <FilterButton
            onClick={() => setIsShowFilterModal((prev) => !prev)}
            isActive={isShowFilterModal}
            title={BUTTON_TITLE}
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

export default Board;
