import { Write } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '게시물 작성 페이지',
};

const WritePage = () => <Write />;

export default WritePage;
