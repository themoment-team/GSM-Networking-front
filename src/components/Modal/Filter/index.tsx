'use client';

import * as S from './style';

import { CloseIcon } from '@/assets';
import { SearchBar } from '@/components';
import type { GenerationType } from '@/types';

const GENERATION_LIST = [1, 2, 3, 4, 5] as const;

interface Props {
  filteredWorkerLength: number;
  selectedGeneration: GenerationType;
  setSelectedGeneration: React.Dispatch<React.SetStateAction<GenerationType>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal: React.FC<Props> = ({
  filteredWorkerLength,
  selectedGeneration,
  setSelectedGeneration,
  setIsShowFilterModal,
}) => {
  const handleGenerationClick = (generation: GenerationType) =>
    setSelectedGeneration(() =>
      selectedGeneration === generation ? null : generation
    );

  const closeModal = () => {
    setIsShowFilterModal(false);
  };

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
              selected={selectedGeneration === generation}
              onClick={() => handleGenerationClick(generation)}
            >
              {generation}기
            </S.GenerationButton>
          ))}
        </S.GenerationWrapper>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.SectionTitle>직군</S.SectionTitle>
        <SearchBar />
      </S.SectionWrapper>
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
