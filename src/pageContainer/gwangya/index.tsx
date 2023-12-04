'use client';

import { useEffect, useRef, useState } from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import { Header, CommunityCard, TextArea } from '@/components';
import { useGetGwangyaPostList } from '@/hooks';
import type { GwangyaPostType } from '@/types';
import { isExistCookie } from '@/utils';

interface Props {
  initialData: GwangyaPostType[];
}

const Gwangya: React.FC<Props> = ({ initialData }) => {
  const postListRef = useRef<HTMLDivElement>(null);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);
  const topCardRef = useRef<HTMLDivElement>(null);

  const [topCardId, setTopCardId] = useState<number | null>(null);

  const { data, fetchPreviousPage, isFetchingPreviousPage, hasPreviousPage } =
    useGetGwangyaPostList(initialData);

  useEffect(() => {
    // 초기 데이터를 가져올 시, 스크롤을 최하단으로 이동
    postListRef.current?.scrollTo(0, 99999);

    const isSuccess = isExistCookie('isSuccess');

    if (isSuccess) toast.success('게시글이 정상적으로 등록되었습니다.');
  }, []);

  // 이전 데이터를 가져올 시, 스크롤이 최상단에 멈무는 현상 해결
  useEffect(() => {
    topCardRef.current?.scrollIntoView();

    setTopCardId(data?.pages[0][0]?.id ?? null);
  }, [data]);

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
          <S.PostList ref={postListRef} isFetching={isFetchingPreviousPage}>
            {!isFetchingPreviousPage && hasPreviousPage && (
              <S.LoadMoreTrigger ref={loadMoreTriggerRef} />
            )}
            {data?.pages.map((page) =>
              page.map((post) => (
                <CommunityCard
                  key={post.id}
                  ref={topCardId === post.id ? topCardRef : null}
                  {...post}
                />
              ))
            )}
          </S.PostList>
          <TextArea />
        </S.PostWrapper>
      </S.Container>
    </>
  );
};

export default Gwangya;
