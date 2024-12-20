import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getMarkerList } from '@/apis';
import { mentorUrl } from '@/libs';
import { Map } from '@/pageContainer';
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

const MapPage = async () => {
  const mentorList = await getMentorList();
  const markerList = await getMarkerList();

  return (
    <Map initMentorList={[...mentorList]} initMarkerList={[...markerList]} />
  );
};

export default MapPage;

const getMentorList = async (): Promise<WorkerType[]> => {
  const accessToken = (await cookies()).get('accessToken')?.value;

  if (!accessToken) return redirect('/auth/refresh');

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
