import { MyInfoPage } from '@/pageContainer';
import type { CareerType } from '@/types';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
};

const career: CareerType = {
  companyName: '더모먼트',
  companyUrl: '',
  position: '프론트엔드',
  startDate: new Date(),
  endDate: new Date(),
  isWorking: false,
};

const mockupData = {
  id: 1,
  name: '이승제',
  email: 'frorong0727@gmail.com',
  generation: 1,
  SNS: 'https://finda.co.kr/',
  profileUrl: 'https://finda.co.kr/',
  registerd: true,
  career: [career, career, career],
};

const MyPage = () => <MyInfoPage myInfo={mockupData} />;

export default MyPage;
