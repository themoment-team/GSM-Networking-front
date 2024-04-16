import { getBoardList } from '@/apis';
import { Board } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '게시판',
  description: '게시판 페이지입니다.',
  openGraph: {
    title: '게시판',
    description: '게시판 페이지입니다.',
  },
};

const BoardPage = async () => {
  const boardList = await getBoardList();

  return <Board initialData={[...boardList]} />;
};

export default BoardPage;
