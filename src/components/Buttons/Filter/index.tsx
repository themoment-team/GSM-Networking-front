'use client';

import * as S from './style';

import { FilterIcon } from '@/assets';

interface Props {
  onClick: () => void;
  isActive: boolean;
}

const FilterButton: React.FC<Props> = ({ onClick, isActive }) => (
  <S.Button type='button' onClick={onClick} isActive={isActive}>
    <FilterIcon />
    필터
  </S.Button>
);

export default FilterButton;
