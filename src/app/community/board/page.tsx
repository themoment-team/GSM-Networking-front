import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { boardUrl } from '@/libs';
import { Board } from '@/pageContainer';
import type { BoardInfo } from '@/types';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: '게시판',
  description: '게시판 페이지입니다.',
};

const BoardPage = async () => {
  const postList = await getBoardList();

  return <Board initialData={[...postList]} />;
};

const getBoardList = async (): Promise<BoardInfo[]> => {
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

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const postList: BoardInfo[] = await response.json();

  return postList;
};

export default BoardPage;
