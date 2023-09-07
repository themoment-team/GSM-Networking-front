'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import WorkerListHeader from './Header';
import * as S from './style';

import { FilterModal, SearchBar, WorkerListItem } from '@/components';
import type { GenerationType, WorkerType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
  selectedGeneration: GenerationType;
  setSelectedGeneration: Dispatch<SetStateAction<GenerationType>>;
}

const isIncludesKeyword = (worker: WorkerType, keyword: string) =>
  worker.name.includes(keyword) ||
  worker.company.name.includes(keyword) ||
  worker.position.includes(keyword);

const isSelectedGeneration = (
  worker: WorkerType,
  selectedGeneration: GenerationType
) =>
  selectedGeneration === null ? true : worker.generation === selectedGeneration;

const WorkerList: React.FC<Props> = ({
  initWorkerList,
  selectedGeneration,
  setSelectedGeneration,
}) => {
  const [workerList, setWorkerList] = useState<WorkerType[]>(initWorkerList);
  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    setWorkerList(
      initWorkerList.filter(
        (worker) =>
          isSelectedGeneration(worker, selectedGeneration) &&
          isIncludesKeyword(worker, keyword)
      )
    );
  }, [keyword, selectedGeneration, initWorkerList]);

  return (
    <>
      {isShowFilterModal && (
        <FilterModal
          filteredWorkerLength={workerList.length}
          selectedGeneration={selectedGeneration}
          setSelectedGeneration={setSelectedGeneration}
          setIsShowFilterModal={setIsShowFilterModal}
        />
      )}
      <WorkerListHeader
        selectedGeneration={selectedGeneration}
        isShowFilterModal={isShowFilterModal}
        setIsShowFilterModal={setIsShowFilterModal}
      />
      <SearchBar setKeyword={setKeyword} />
      <S.WorkerList>
        {workerList.map((worker) => (
          <WorkerListItem key={worker.id} worker={worker} />
        ))}
      </S.WorkerList>
    </>
  );
};

export default WorkerList;
