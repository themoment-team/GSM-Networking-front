'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import * as S from './style';

import { SearchIcon } from '@/assets';
import type { WorkerType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
  setWorkerList: Dispatch<SetStateAction<WorkerType[]>>;
}

const SearchBar: React.FC<Props> = ({ initWorkerList, setWorkerList }) => {
  const [searchValue, setSeaechValue] = useState<string>('');

  useEffect(() => {
    const searched = initWorkerList.filter(
      (worker) =>
        worker.name.includes(searchValue) ||
        worker.company.name.includes(searchValue) ||
        worker.position.includes(searchValue)
    );
    setWorkerList(searched);
  }, [initWorkerList, searchValue, setWorkerList]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeaechValue(e.currentTarget.value);
  };

  return (
    <S.SearchBarContainer>
      <S.SearchBar
        onChange={onChange}
        placeholder='찾고 싶은 사람, 전공, 회사명, 기수 등을 검색해보세요'
      />
      <S.SearchImg>
        <SearchIcon />
      </S.SearchImg>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
