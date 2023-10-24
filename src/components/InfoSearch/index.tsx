'use client';

import React, { useState } from 'react';

import * as S from './style';

const InfoSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>내 정보 연동</S.Title>
        <S.SkipLink>건너뛰기</S.SkipLink>
      </S.TitleBox>
      <S.SearchContainer>
        <S.SearchInput
          placeholder='이름을 입력해주세요.'
          value={inputValue}
          onChange={handleInputChange}
        />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchContainer>
      <S.SkipButton>다음</S.SkipButton>
    </S.Container>
  );
};

export default InfoSearch;
