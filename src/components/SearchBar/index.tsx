'use client';

import type { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';

import * as S from './style';

import { SearchIcon } from '@/assets';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  setKeyword: Dispatch<SetStateAction<string>>;
  keyword: string;
}

const SearchBar: React.FC<Props> = ({ setKeyword, keyword, ...attributes }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    setKeyword(inputValue);
  };

  return (
    <S.SearchBarContainer>
      <S.SearchInput value={keyword} onChange={handleChange} {...attributes} />
      <S.SearchImg>
        <SearchIcon />
      </S.SearchImg>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
