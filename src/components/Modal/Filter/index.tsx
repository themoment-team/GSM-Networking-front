'use client';

import { useState } from 'react';

import * as S from './style';

import { CloseIcon } from '@/assets';

const GENERATION_LIST = ['4기', '5기'] as const;

interface Props {
  filteredWorkerLength: number;
}

const FilterModal: React.FC<Props> = ({ filteredWorkerLength }) => {
  const [selectedGeneration, setSelectedGeneration] = useState<
    '4기' | '5기' | ''
  >('');

  const handleGenerationClick = (generation: '4기' | '5기') =>
    setSelectedGeneration(() =>
      selectedGeneration === generation ? '' : generation
    );

  return (
    <S.Modal>
      <S.Top>
        <S.Title>필터</S.Title>
        <S.CloseButton type='button'>
          <CloseIcon />
        </S.CloseButton>
      </S.Top>
      <S.GenerationWrapper>
        {GENERATION_LIST.map((generation) => (
          <S.GenerationButton
            key={generation}
            selected={selectedGeneration === generation}
            onClick={() => handleGenerationClick(generation)}
          >
            {generation}
          </S.GenerationButton>
        ))}
      </S.GenerationWrapper>
      <S.Bottom>
        <S.CheckButton>조회</S.CheckButton>
        <S.Result>총 {filteredWorkerLength}명을 찾았어요.</S.Result>
      </S.Bottom>
    </S.Modal>
  );
};

export default FilterModal;
