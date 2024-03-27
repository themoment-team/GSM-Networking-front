import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { boardUrl } from '@/libs';
import type { CardInfo } from '@/types';

import type { Metadata } from 'next';
import { NoticeCardList } from '@/components';

export const metadata: Metadata = {
  title: '광야',
  description: '',
};

const BoardPage = async () => {
  const postList = await getBoardList();
  console.log('postList:', postList);

  return <NoticeCardList initialData={[...postList]} />;
};

const getBoardList = async (): Promise<CardInfo[]> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect('/auth/refresh');

  const response = await fetch(
    new URL(`/api/v1${boardUrl.getBoardList(0)}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: { Cookie: `accessToken=${accessToken}` },
    }
  );

  if (response.status === 401) {
    return redirect('/auth/refresh');
  }

  if (response.status === 403) {
    return redirect('/auth/signup');
  }

  // if (!response.ok) {
  //   return redirect('/auth/signin');
  // }

  const postList: CardInfo[] = await response.json();

  return postList;
};

export default BoardPage;
