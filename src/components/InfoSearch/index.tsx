'use client';

import React, { useState } from 'react';

import * as S from './style';

import { SearchIcon } from '@/assets';

const InfoSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>내 정보 연동</S.Title>
        <S.SkipButton>건너뛰기</S.SkipButton>
      </S.TitleBox>
      <S.SearchContainer>
        <S.SearchInput
          placeholder='이름을 입력해주세요.'
          value={inputValue}
          onChange={handleInputChange}
        />
        <S.SearchImg>
          <SearchIcon />
        </S.SearchImg>
      </S.SearchContainer>
      <S.SearchButton>다음</S.SearchButton>
    </S.Container>
  );
};

export default InfoSearch;
