import { useGetMyInfo } from '@/hooks';
import { MyInfoPage } from '@/pageContainer';
import type { MentorInfoType } from '@/types';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
};

const MyPage = () => {
  const { data } = useGetMyInfo();

  if (data) return <MyInfoPage myInfo={data as MentorInfoType} />;
  else <></>;
};

export default MyPage;
