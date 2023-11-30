'use client';

import { useEffect, useRef } from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import { Header, CommunityCard, TextArea } from '@/components';
import { useGetGwangyaPostList } from '@/hooks';
import { getCookie } from '@/utils';

const Gwangya = () => {
  const postListRef = useRef<HTMLDivElement>(null);

  const { data } = useGetGwangyaPostList(0);

  useEffect(() => {
    if ((data?.length ?? 0) <= 20) {
      postListRef.current?.scrollTo(0, 99999);
    }
  }, [data]);

  useEffect(() => {
    const isSuccess = !!getCookie('isSuccess');

    if (isSuccess) toast.success('게시글이 정상적으로 등록되었습니다.');
  }, []);

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
            {data?.map((post) => <CommunityCard key={post.id} {...post} />)}
          </S.PostList>
          <TextArea />
        </S.PostWrapper>
      </S.Container>
    </>
  );
};

export default Gwangya;
