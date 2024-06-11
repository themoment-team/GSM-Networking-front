import { MapComponent } from '@/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
};

const MyPage = async () => <MapComponent />;

export default MyPage;
