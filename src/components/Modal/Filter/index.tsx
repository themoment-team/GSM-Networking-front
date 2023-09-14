'use client';

import { useEffect, useState } from 'react';

import * as S from './style';

import { CloseIcon } from '@/assets';
import { SearchBar } from '@/components';
import { POSITION_ARRAY } from '@/constants';
import type { GenerationType, PositionType } from '@/types';

const GENERATION_LIST = [1, 2, 3, 4, 5] as const;

interface Props {
  filteredWorkerLength: number;
  selectedGeneration: GenerationType;
  selectedPosition: PositionType | null;
  setSelectedGeneration: React.Dispatch<React.SetStateAction<GenerationType>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPosition: React.Dispatch<
    React.SetStateAction<PositionType | null>
  >;
}

const sliceArray = (array: PositionType[]) => array.slice(0, 4);

const filterPosition = (array: PositionType[], keyword: string) =>
  array.filter((position) => position.includes(keyword));

const FilterModal: React.FC<Props> = ({
  filteredWorkerLength,
  selectedGeneration,
  selectedPosition,
  setSelectedGeneration,
  setIsShowFilterModal,
  setSelectedPosition,
}) => {
  const [positionKeyword, setPositionKeyword] = useState<string>('');
  const [searchedPosition, setSearchedPosition] = useState<PositionType[]>(
    sliceArray([...POSITION_ARRAY])
  );

  useEffect(() => {
    setSearchedPosition(
      sliceArray(filterPosition([...POSITION_ARRAY], positionKeyword))
    );
  }, [positionKeyword]);

  const closeModal = () => {
    setIsShowFilterModal(false);
  };

  const handleGenerationClick = (generation: GenerationType) =>
    setSelectedGeneration(() =>
      selectedGeneration === generation ? null : generation
    );

  const positionReset = () => {
    setSelectedPosition(null);
  };

  const handlePositionClick = (position: PositionType) =>
    setSelectedPosition(() =>
      selectedPosition === position ? null : position
    );

  return (
    <S.Modal>
      <S.Top>
        <S.Title>필터</S.Title>
        <S.CloseButton type='button' onClick={closeModal}>
          <CloseIcon />
        </S.CloseButton>
      </S.Top>
      <S.SectionWrapper>
        <S.SectionTitle>기수</S.SectionTitle>
        <S.GenerationWrapper>
          {GENERATION_LIST.map((generation) => (
            <S.GenerationButton
              key={generation}
              isSelected={selectedGeneration === generation}
              onClick={() => handleGenerationClick(generation)}
            >
              {generation}기
            </S.GenerationButton>
          ))}
        </S.GenerationWrapper>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.PositionHeader>
          <S.SectionTitle>직군</S.SectionTitle>
          <S.PositionResetButton onClick={positionReset}>
            초기화
          </S.PositionResetButton>
        </S.PositionHeader>
        <SearchBar
          setKeyword={setPositionKeyword}
          keyword={positionKeyword}
          placeholder='찾으시는 직군을 입력해주세요.'
        />
      </S.SectionWrapper>
      <S.PositionWrapper>
        {searchedPosition.map((position) => (
          <S.PositionButton
            key={position}
            isSelected={selectedPosition === position}
            onClick={() => handlePositionClick(position)}
          >
            {position}
          </S.PositionButton>
        ))}
        {searchedPosition.length < 1 && (
          <S.PositionNotExist>검색 결과가 없습니다.</S.PositionNotExist>
        )}
      </S.PositionWrapper>
      <S.Bottom>
        <S.CheckButton onClick={closeModal}>조회</S.CheckButton>
        <S.Result isSelected={!!selectedGeneration}>
          {selectedGeneration
            ? `총 ${filteredWorkerLength}명을 찾았어요.`
            : `등록된 취업자 ${filteredWorkerLength}명`}
        </S.Result>
      </S.Bottom>
    </S.Modal>
  );
};

export default FilterModal;
