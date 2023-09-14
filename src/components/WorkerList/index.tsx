'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import WorkerListHeader from './Header';
import * as S from './style';

import { SearchNotFoundIcon } from '@/assets';
import { FilterModal, WorkerListItem } from '@/components';
import type { GenerationType, WorkerType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
  selectedGeneration: GenerationType;
  setSelectedGeneration: Dispatch<SetStateAction<GenerationType>>;
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
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
  keyword,
  setKeyword,
}) => {
  const [workerList, setWorkerList] = useState<WorkerType[]>(initWorkerList);
  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);

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
        setKeyword={setKeyword}
        keyword={keyword}
        selectedGeneration={selectedGeneration}
        isShowFilterModal={isShowFilterModal}
        setIsShowFilterModal={setIsShowFilterModal}
      />
      {workerList.length ? (
        <S.WorkerList>
          {workerList.map((worker) => (
            <WorkerListItem key={worker.id} worker={worker} />
          ))}
        </S.WorkerList>
      ) : (
        <S.NotFoundContainer>
          <SearchNotFoundIcon />
          <S.NotFoundTextBox>
            해당 정보를 가진 졸업생을 찾을 수 없어요 <br />
            오타, 띄어쓰기 등을 확인 해주세요
          </S.NotFoundTextBox>
        </S.NotFoundContainer>
      )}
    </>
  );
};

export default WorkerList;
