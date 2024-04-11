'use client';

import * as S from './style';

import { FilterIcon } from '@/assets';

interface Props {
  onClick: () => void;
  isActive: boolean;
  title: string;
}

const FilterButton: React.FC<Props> = ({ onClick, isActive, title }) => (
  <S.Button type='button' onClick={onClick} isActive={isActive}>
    <FilterIcon />
    {title}
  </S.Button>
);

export default FilterButton;
