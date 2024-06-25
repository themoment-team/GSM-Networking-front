import { getBoardList } from '@/apis';
import { TeacherBoard } from '@/pageContainer';

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

  return <TeacherBoard initialData={[...boardList]} selectedCategory={null} />;
};

export default TeacherBoardPage;
