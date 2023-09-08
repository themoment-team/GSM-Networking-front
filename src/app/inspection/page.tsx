import { Inspection } from '@/components';

import type { Metadata } from 'next';

const InspectionPage = () => <Inspection />;

export default InspectionPage;

export const metadata: Metadata = {
  title: '점검 중',
  description: '점검 중 입니다.',
  openGraph: {
    title: '점검 중',
    description: '점검 중 입니다.',
  },
};
