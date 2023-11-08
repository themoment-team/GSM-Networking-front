import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { MainPage } from '@/components';
import { authUrl, mentorUrl } from '@/libs';
import type { WorkerType } from '@/types';

import type { Metadata } from 'next';

export default async function Home() {
  const workerList = await getMentorList();

  const sortedWorkerList = [...workerList].sort((a, b) =>
    a.position.localeCompare(b.position)
  );

  return <MainPage initWorkerList={sortedWorkerList} />;
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

  if (!accessToken) return patchRefresh();

  try {
    const response = await fetch(
      new URL(`/api/v1${mentorUrl.getMentorList()}`, process.env.BASE_URL),
      {
        method: 'GET',
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('accessToken이 만료되었습니다.');
    }

    const mentorList = await response.json();

    return addTemporaryImgNumber(mentorList);
  } catch (error) {
    return patchRefresh();
  }
};

const patchRefresh = async (): Promise<WorkerType[]> => {
  const refreshToken = cookies().get('refreshToken')?.value;

  if (!refreshToken) return redirect('/auth/signin');

  try {
    const response = await fetch(
      new URL(`/api/v1${authUrl.patchRefresh()}`, process.env.BASE_URL),
      {
        method: 'PATCH',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      }
    );

    if (!response.ok) throw new Error('refreshToken이 만료되었습니다.');

    return getMentorList();
  } catch (e) {
    return redirect('/auth/signin');
  }
};

const addTemporaryImgNumber = (mentorList: WorkerType[]) =>
  mentorList.map((worker) => ({
    ...worker,
    temporaryImgNumber: Math.floor(Math.random() * 5),
  }));
