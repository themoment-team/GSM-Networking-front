import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { boardUrl } from '@/libs';
import type { CardInfo } from '@/types';

import type { Metadata } from 'next';
import NoticeCardList from '@/components/NoticeCardList';

export const metadata: Metadata = {
  title: '광야',
  description: '익명으로 자유롭게 소통할 수 있는 광소마의 넓은 들판입니다.',
};

const BoardPage = async () => {
  const postList = await getBoardList();

  return <NoticeCardList initialData={postList} />;
};

const getBoardList = async (): Promise<CardInfo[]> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken)
    return redirect('/auth/refresh/gwangya?redirect=/community/board');

  const response = await fetch(
    new URL(`/api/v1${boardUrl}`, process.env.NEXT_PUBLIC_API_BASE_URL),
    { headers: { accessToken: accessToken } }
  );

  if (response.status === 401) {
    return redirect('/auth/refresh/gwangya?redirect=/community/board');
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const postList: CardInfo[] = await response.json();

  return postList;
};

export default BoardPage;
