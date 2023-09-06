'use client';

import type { Dispatch, SetStateAction } from 'react';

import * as S from './style';

import { SearchIcon } from '@/assets';

interface Props {
  setKeyword: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ setKeyword }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    setKeyword(inputValue);
  };

  return (
    <S.SearchBarContainer>
      <S.SearchInput
        onChange={handleChange}
        placeholder='찾고 싶은 사람, 전공, 회사명 등을 검색해보세요'
      />
      <S.SearchImg>
        <SearchIcon />
      </S.SearchImg>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
