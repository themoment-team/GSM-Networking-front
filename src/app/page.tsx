import { MainPage } from '@/components';
import type { WorkerType } from '@/types';
import { minutesToSeconds } from '@/utils';

import type { Metadata } from 'next';

export default async function Home() {
  const workerList: WorkerType[] = await fetch(
    `${process.env.BASE_URL}/api/worker/list`,
    {
      next: {
        revalidate: minutesToSeconds(5),
      },
    }
  ).then((res) => res.json());

  return (
    <>
      <MainPage initWorkerList={workerList.sort(() => Math.random() - 0.5)} />
    </>
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
