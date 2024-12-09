// import { getBoardList } from '@/apis';
import { GwangjangBoard } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '광장 게시판',
  description: '광장 페이지입니다.',
  openGraph: {
    title: '광장',
    description: '광장 페이지입니다.',
  },
};

const GwangjangPage = async () => (
  // const boardList = await getBoardList();

  <GwangjangBoard initialData={[]} />
);
export default GwangjangPage;
