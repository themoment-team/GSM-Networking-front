import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { MainPage } from '@/components';
import { mentorUrl } from '@/libs';
import type { WorkerType } from '@/types';

import type { Metadata } from 'next';

export default async function Home() {
  const workerList = await getMentorList();

  return <MainPage initWorkerList={[...workerList]} />;
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gsm-networking.com'),
  title: '취업자 리스트 조회',
  description:
    '광주소프트웨어마이스터고등학교 학생들의 취업 정보를 확인 할 수 있어요.',
  openGraph: {
    title: '취업자 리스트 조회',
    description:
      '광주소프트웨어마이스터고등학교 학생들의 취업 정보를 확인 할 수 있어요.',
  },
};

const getMentorList = async (): Promise<WorkerType[]> => {
  const accessToken = cookies().get('accessToken')?.value;

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

  return addTemporaryImgNumber(mentorList);
};

const addTemporaryImgNumber = (mentorList: WorkerType[]) =>
  mentorList.map((worker) => ({
    ...worker,
    temporaryImgNumber: Math.floor(Math.random() * 5),
  }));
