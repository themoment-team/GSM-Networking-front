'use client';

import { useRef, useEffect ,useState} from 'react';

import * as S from './style';

import { Header, CommunityButton, WriteButton, FilterButton } from '@/components';
import { BoardCard } from '@/components';
import { BoardFilterModal } from '@/components';
import { useIntersectionObserver } from '@/hooks';
import { useGetBoardList } from '@/hooks';
import type { BoardInfo } from '@/types';


interface Props {
  initialData: BoardInfo[];
}

const Board: React.FC<Props> = ({ initialData }) => {
  const postListRef = useRef<HTMLDivElement>(null);
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
  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);

  useEffect(() => {
    // 초기 데이터를 가져올 시, 스크롤을 최상단으로 이동
    postListRef.current?.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
      <S.Container>
        <S.TitleBox>
          <CommunityButton segment='/community/board' />
        <FilterButton onClick={() =>
        setIsShowFilterModal((isShowFilterModal) => !isShowFilterModal)} isActive={isShowFilterModal}/>
        </S.TitleBox>
        {isShowFilterModal && (
          <BoardFilterModal setIsShowFilterModal={setIsShowFilterModal}/>
      )}
        <S.BoardCardWrapper>
          <S.BoardCardList ref={postListRef} isFetching={isFetchingNextPage}>
            {data?.pages.map((page) =>
              page.map((card) => (
                <BoardCard
                  key={card.id}
                  {...card}
                />
              ))
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
