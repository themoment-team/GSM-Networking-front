import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getMarkerList } from '@/apis';
import { mentorUrl } from '@/libs';
import { MapPage } from '@/pageContainer';
import type { WorkerType } from '@/types';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지도',
  description: '지도 페이지입니다.',
  openGraph: {
    title: '지도',
    description: '지도 페이지입니다.',
  },
};

const MyPage = async () => {
  const mentorList = await getMentorList();
  const markerList = await getMarkerList();

  return (
    <MapPage
      initMentorList={[...mentorList]}
      initMarkerList={[...markerList]}
    />
  );
};

export default MyPage;

const getMentorList = async (): Promise<WorkerType[]> => {
  const accessToken = cookies().get('accessToken')?.value;
  const gwangyaToken = cookies().get('gwangyaToken')?.value;

  const redirectPath = cookies().get('redirect')?.value;

  if (!accessToken) return redirect('/auth/refresh');

  if (!gwangyaToken) return redirect('/auth/refresh/gwangya?redirect=/');

  if (redirectPath && redirectPath !== '/') {
    return redirect(redirectPath);
  }

  const response = await fetch(
    new URL(`/api/v1${mentorUrl.getMentorList()}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  if (response.status === 403) {
    return redirect('/auth/signup');
  }

  if (response.status === 401) {
    return redirect('/auth/refresh');
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const mentorList = await response.json();

  return mentorList;
};
