'use client';

import { useEffect, useRef } from 'react';

import * as S from './style';

import { Header, CommunityCard, TextArea } from '@/components';
import { useGetGwangyaPostList, useGetRem } from '@/hooks';
import type { GwangyaPostType } from '@/types';

interface Props {
  initialData: GwangyaPostType[];
}

const Gwangya: React.FC<Props> = ({ initialData }) => {
  const rem = useGetRem();

  const postListRef = useRef<HTMLDivElement>(null);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);

  const { data, fetchPreviousPage, isFetchingPreviousPage, hasPreviousPage } =
    useGetGwangyaPostList(initialData);

  // 이전 데이터를 가져올 시, 스크롤이 최상단에 멈무는 현상 해결
  useEffect(() => {
    const cardHeight = 4.6819 * rem;
    const gap = 2.25 * rem;

    // gap은 카드 개수 - 1 만큼 존재하여 마지막에는 빼줘야함
    const scrollHeight =
      (data && data?.pages[0].length * (cardHeight + gap) - gap) || 0;
    postListRef.current?.scrollTo(0, scrollHeight);
  }, [data, rem]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleObserver = (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);

      fetchPreviousPage();

      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    if (!loadMoreTriggerRef.current) return;

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    observer.observe(loadMoreTriggerRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <>
      <Header />
      <S.Container>
        <S.TitleBox>
          <S.Title>광야</S.Title>
          <S.Description>
            익명으로 자유롭게 소통할 수 있는 광소마의 넓은 들판입니다.
          </S.Description>
        </S.TitleBox>
        <S.PostWrapper>
          <S.PostList ref={postListRef}>
            {!isFetchingPreviousPage && hasPreviousPage && (
              <S.LoadMoreTrigger ref={loadMoreTriggerRef} />
            )}
            {data?.pages.map((page) =>
              page.map((post) => <CommunityCard key={post.id} {...post} />)
            )}
          </S.PostList>
          <TextArea />
        </S.PostWrapper>
      </S.Container>
    </>
  );
};

export default Gwangya;
