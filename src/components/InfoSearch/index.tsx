'use client';

import React, { useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import * as S from './style';

import { TempMentorCard } from '@/components';
import { useGetTempMentor } from '@/hooks/api/mentor/useGetTempMentor';
// import type { WorkerType } from '@/types';

const InfoSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { data } = useGetTempMentor(inputValue);
  const [selectUser, setSelectUser] = useState<string | null>(null);
  const isUserSelect = !!selectUser;
  const { push } = useRouter();

  // console.log(data);

  const handleSearchClick = () =>
    inputRef.current && setInputValue(inputRef.current.value);

  const handleButtonClick = () =>
    isUserSelect && push(`/register/mentor?id=${selectUser}`);

  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>내 정보 연동</S.Title>
        <S.SkipLink>건너뛰기</S.SkipLink>
      </S.TitleBox>
      <S.SearchContainer>
        <S.SearchInput placeholder='이름을 입력해주세요.' ref={inputRef} />
        <S.SearchButton onClick={handleSearchClick}>검색</S.SearchButton>
      </S.SearchContainer>
      <S.TempMentorCardBox>
        {data?.map((user) => (
          <TempMentorCard
            key={user.id}
            worker={user}
            selectUser={selectUser}
            setSelectUser={setSelectUser}
          />
        ))}
      </S.TempMentorCardBox>
      <S.Button onClick={handleButtonClick} isSelect={isUserSelect}>
        다음
      </S.Button>
    </S.Container>
  );
};

export default InfoSearch;
