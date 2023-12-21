'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import MentorListHeader from './Header';
import * as S from './style';

import { FilterModal, MentorCard, SearchNotFound } from '@/components';
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

const isIncludesKeyword = (worker: WorkerType, keyword: string) => {
  const lowerCaseKeyword = keyword.toLowerCase();

  return (
    worker.name.toLowerCase().includes(lowerCaseKeyword) ||
    worker.company.name.toLowerCase().includes(lowerCaseKeyword) ||
    worker.position.toLowerCase().includes(lowerCaseKeyword)
  );
};

const isSelectedGeneration = (
  worker: WorkerType,
  selectedGeneration: GenerationType
) =>
  selectedGeneration === null ? true : worker.generation === selectedGeneration;

const isSelectedPosition = (
  worker: WorkerType,
  selectedPosition: PositionType | null
) => (selectedPosition === null ? true : worker.position === selectedPosition);

const MentorList: React.FC<Props> = ({
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
      <MentorListHeader
        isShowFilterModal={isShowFilterModal}
        setIsShowFilterModal={setIsShowFilterModal}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {workerList.length ? (
        <S.MentorListWrapper>
          <S.MentorList>
            {workerList.map((worker) => (
              <MentorCard key={worker.id} worker={worker} />
            ))}
          </S.MentorList>
        </S.MentorListWrapper>
      ) : (
        <S.NotFoundContainer>
          <SearchNotFound
            textArr={[
              '해당 정보를 가진 졸업생을 찾을 수 없어요.',
              '오타, 띄어쓰기 등을 확인 해주세요.',
            ]}
          />
        </S.NotFoundContainer>
      )}
    </>
  );
};

export default MentorList;
