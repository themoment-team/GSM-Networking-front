'use client';

import { useEffect, useState } from 'react';

import * as S from './style';

import { WorkerListItem } from '@/components';
import type { WorkerType } from '@/types';

interface Props {
  workerList: WorkerType[];
}

const WorkerList: React.FC<Props> = ({ workerList: workerListProp }) => {
  const [workerList, setWorkerList] = useState<WorkerType[]>(workerListProp);

  useEffect(() => {
    setWorkerList(workerListProp.sort(() => Math.random() - 0.5));
  }, [workerListProp]);

  return (
    <S.WorkerList>
      {workerList
        .sort(() => Math.random() - 0.5)
        .map((worker) => (
          <WorkerListItem key={worker.id} worker={worker} />
        ))}
    </S.WorkerList>
  );
};

export default WorkerList;
