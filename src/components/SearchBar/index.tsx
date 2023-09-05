'use client';

import type { Dispatch, SetStateAction } from 'react';

import * as S from './style';

import { SearchIcon } from '@/assets';
import type { WorkerType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
  setWorkerList: Dispatch<SetStateAction<WorkerType[]>>;
}

const SearchBar: React.FC<Props> = ({ initWorkerList, setWorkerList }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    const searched = initWorkerList.filter(
      (worker) =>
        worker.name.includes(inputValue) ||
        worker.company.name.includes(inputValue) ||
        worker.position.includes(inputValue)
    );

    setWorkerList(searched);
  };

  return (
    <S.SearchBarContainer>
      <S.SearchInput
        onChange={handleChange}
        placeholder='찾고 싶은 사람, 전공, 회사명, 기수 등을 검색해보세요'
      />
      <S.SearchImg>
        <SearchIcon />
      </S.SearchImg>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
