'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import MentorListHeader from './Header';
import * as S from './style';

import { SearchNotFoundIcon } from '@/assets';
import { FilterModal, MentorCard } from '@/components';
import type { GenerationType, PositionType, MentorType } from '@/types';

interface Props {
  initWorkerList: MentorType[];
  keyword: string;
  selectedGeneration: GenerationType;
  selectedPosition: PositionType | null;
  setKeyword: Dispatch<SetStateAction<string>>;
  setSelectedGeneration: Dispatch<SetStateAction<GenerationType>>;
  setSelectedPosition: Dispatch<SetStateAction<PositionType | null>>;
}

const isIncludesKeyword = (worker: MentorType, keyword: string) => {
  const lowerCaseKeyword = keyword.toLowerCase();

  return (
    worker.name.toLowerCase().includes(lowerCaseKeyword) ||
    worker.company.name.toLowerCase().includes(lowerCaseKeyword) ||
    worker.position.toLowerCase().includes(lowerCaseKeyword)
  );
};

const isSelectedGeneration = (
  worker: MentorType,
  selectedGeneration: GenerationType
) =>
  selectedGeneration === null ? true : worker.generation === selectedGeneration;

const isSelectedPosition = (
  worker: MentorType,
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
  const [workerList, setWorkerList] = useState<MentorType[]>(initWorkerList);
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
        <S.WorkerList>
          {workerList.map((worker) => (
            <MentorCard key={worker.id} worker={worker} />
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

export default MentorList;
