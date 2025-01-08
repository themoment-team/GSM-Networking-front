import { redirect } from 'next/navigation';

import { getIsTeacher, getMyInfo, getMyMenteeInfo } from '@/apis';
import { MyInfoPage } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
};

const MyPage = async () => {
  const isTeacher = await getIsTeacher('/');
  const myMentorInfo = await getMyInfo('/', isTeacher);
  const myMenteeInfo = await getMyMenteeInfo('/');

  if (isTeacher || (!myMenteeInfo?.name && !myMentorInfo?.name)) redirect(`/`);

  return <MyInfoPage />;
};

export default MyPage;
