'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import WorkerListHeader from './Header';
import * as S from './style';

import { SearchNotFoundIcon } from '@/assets';
import { FilterModal, SearchBar, WorkerListItem } from '@/components';
import type { GenerationType, PositionType, WorkerType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
  keyword: string;
  selectedGeneration: GenerationType;
  selectedPosition: PositionType | null;
  setKeyword: Dispatch<SetStateAction<string>>;
  setSelectedGeneration: Dispatch<SetStateAction<GenerationType>>;
  setSelectedPosition: Dispatch<SetStateAction<PositionType | null>>;
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

const isSelectedPosition = (
  worker: WorkerType,
  selectedPosition: PositionType | null
) => (selectedPosition === null ? true : worker.position === selectedPosition);

const WorkerList: React.FC<Props> = ({
  initWorkerList,
  keyword,
  selectedGeneration,
  selectedPosition,
  setKeyword,
  setSelectedGeneration,
  setSelectedPosition,
}) => {
  const [workerList, setWorkerList] = useState<WorkerType[]>(initWorkerList);
  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);

  useEffect(() => {
    setWorkerList(
      initWorkerList.filter(
        (worker) =>
          isSelectedGeneration(worker, selectedGeneration) &&
          isSelectedPosition(worker, selectedPosition) &&
          isIncludesKeyword(worker, keyword)
      )
    );
  }, [keyword, selectedGeneration, initWorkerList, selectedPosition]);

  return (
    <>
      {isShowFilterModal && (
        <FilterModal
          setIsShowFilterModal={setIsShowFilterModal}
          filteredWorkerLength={workerList.length}
          keyword={keyword}
          selectedGeneration={selectedGeneration}
          selectedPosition={selectedPosition}
          setSelectedGeneration={setSelectedGeneration}
          setSelectedPosition={setSelectedPosition}
        />
      )}
      <WorkerListHeader
        isShowFilterModal={isShowFilterModal}
        setIsShowFilterModal={setIsShowFilterModal}
      />
      <SearchBar
        setKeyword={setKeyword}
        keyword={keyword}
        placeholder='찾고 싶은 사람, 전공, 회사명 등을 검색해보세요'
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
