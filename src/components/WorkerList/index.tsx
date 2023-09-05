'use client';

import { useState } from 'react';

import * as S from './style';

import { SearchBar, WorkerListItem } from '@/components';
import type { WorkerType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
}

const WorkerList: React.FC<Props> = ({ initWorkerList }) => {
  const [workerList, setWorkerList] = useState<WorkerType[]>(initWorkerList);

  return (
    <>
      <SearchBar
        initWorkerList={initWorkerList}
        setWorkerList={setWorkerList}
      />
      <S.WorkerList>
        {workerList?.map((worker) => (
          <WorkerListItem key={worker.id} worker={worker} />
        ))}
      </S.WorkerList>
    </>
  );
};

export default WorkerList;
