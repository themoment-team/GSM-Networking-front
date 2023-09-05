'use client';

import * as S from './style';

import { FilterIcon } from '@/assets';
import type { GenerationType } from '@/types';

interface Props {
  selectedGeneration: GenerationType;
  onClick: () => void;
}

const FilterButton: React.FC<Props> = ({ selectedGeneration, onClick }) => (
  <S.Button type='button' onClick={onClick}>
    <FilterIcon />
    {selectedGeneration ? `${selectedGeneration}기` : `필터`}
  </S.Button>
);

export default FilterButton;
