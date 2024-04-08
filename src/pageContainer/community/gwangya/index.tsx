'use client';

import { useEffect, useRef, useState } from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import { Header, CommunityCard, TextArea, CommunityButton } from '@/components';
import {
  useGetGwangyaPostList,
  usePostGwangyaContent,
  useIntersectionObserver,
} from '@/hooks';
import type { GwangyaPostType } from '@/types';
import { isExistCookie, isAllowedContent } from '@/utils';

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

  const handleObserver = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      fetchPreviousPage();
    }
  };

  useIntersectionObserver(loadMoreTriggerRef, handleObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  const {
    mutate: mutateUploadContent,
    isPending,
    isSuccess,
  } = usePostGwangyaContent({
    onSuccess: () => {
      document.cookie = 'isSuccess=true; max-age=5';
      window.location.reload();
    },
  });

  const uploadContent = (inputValue: string) => {
    if (!isAllowedContent(inputValue)) {
      toast.error('게시물 내용을 입력해주세요.');
      return;
    }

    mutateUploadContent(inputValue);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.TitleBox>
          <CommunityButton segment='/community/gwangya' />
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
          <TextArea
            disabled={isPending || isSuccess}
            onClick={uploadContent}
            textAreaType='gwangya'
          />
        </S.PostWrapper>
      </S.Container>
    </>
  );
};

export default Gwangya;
