import { MyInfoPage } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
};

const MyPage = () => {
  <MyInfoPage />;
};

export default MyPage;
