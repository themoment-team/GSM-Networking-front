import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { boardUrl } from '@/libs';
import { Board } from '@/pageContainer';
import type { BoardInfoType } from '@/types';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '선생님 게시판',
  description: '게시판 페이지입니다.',
  openGraph: {
    title: '게시판',
    description: '게시판 페이지입니다.',
  },
};

const TeacherBoardPage = async () => {
  const boardList = await getBoardList();

  return <Board initialData={[...boardList]} />;
};

const TEACHER_CATEGORY = 'TEACHER';

const getBoardList = async (): Promise<BoardInfoType[]> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect('/auth/refresh');

  const response = await fetch(
    new URL(
      `/api/v1${boardUrl.getBoardList(0)}&${TEACHER_CATEGORY}`,
      process.env.BASE_URL
    ),
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

export default TeacherBoardPage;
