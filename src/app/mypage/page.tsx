import { redirect } from 'next/navigation';

import { getIsTeacher } from '@/apis';
import { MyInfoPage } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
};

const MyPage = async () => {
  const isTeacher = await getIsTeacher('/');
  if (isTeacher) redirect(`/`);
  return <MyInfoPage />;
};

export default MyPage;
