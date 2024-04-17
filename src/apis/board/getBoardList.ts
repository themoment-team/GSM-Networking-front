import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { boardUrl } from '@/libs';
import type { BoardInfoType } from '@/types';

export const getBoardList = async (): Promise<BoardInfoType[]> => {
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

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const boardList: BoardInfoType[] = await response.json();

  return boardList;
};
