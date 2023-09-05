'use client';

import * as S from './style';

import { FilterIcon } from '@/assets';

interface Props {
  selectedGeneration: '4기' | '5기' | '';
}

const FilterButton: React.FC<Props> = ({ selectedGeneration }) => (
  <S.Button type='button'>
    <FilterIcon />
    {selectedGeneration || '필터'}
  </S.Button>
);

export default FilterButton;
