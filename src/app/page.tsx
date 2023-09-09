import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { MainPage } from '@/components';
import type { WorkerType } from '@/types';

import type { Metadata } from 'next';

const BASE_URL = process.env.BASE_URL;

export default async function Home() {
  const workerList = await getWorkerList();

  return (
    <MainPage initWorkerList={workerList.sort(() => Math.random() - 0.5)} />
  );
}

export const metadata: Metadata = {
  title: '취업자 리스트 조회',
  description:
    '광주소프트웨어마이스터고등학교 학생들의 취업 정보를 확인 할 수 있어요.',
  openGraph: {
    title: '취업자 리스트 조회',
    description:
      '광주소프트웨어마이스터고등학교 학생들의 취업 정보를 확인 할 수 있어요.',
  },
};

const getWorkerList = async (): Promise<WorkerType[]> => {
  const cookieStore = cookies();

  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!accessToken) {
    redirect('/auth/refresh');
  }

  try {
    const response = await fetch(
      new URL('/api/worker/list', process.env.API_BASE_URL),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      return redirect(`${BASE_URL}/auth/signin`);
    }

    const workerList = await response.json();

    return workerList;
  } catch (e) {
    return redirect(`${BASE_URL}/auth/signin`);
  }
};
