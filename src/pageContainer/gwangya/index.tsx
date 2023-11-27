'use client';

import * as S from './style';

import { Header } from '@/components';
import { CommunityCard } from '@/components';
import { useGetGwangyaPostList } from '@/hooks';

const Gwangya = () => {
  const { data } = useGetGwangyaPostList(0);

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
        <S.PostList>
          {data?.map((post) => <CommunityCard key={post.id} {...post} />)}
        </S.PostList>
      </S.Container>
    </>
  );
};

export default Gwangya;
