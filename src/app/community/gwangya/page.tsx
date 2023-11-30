import { Gwangya } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '광야',
  description: '익명으로 자유롭게 소통할 수 있는 광소마의 넓은 들판입니다.',
};

const GwangyaPage = () => <Gwangya />;

export default GwangyaPage;
