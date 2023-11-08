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
  const [selectMentorId, setSelectMentorId] = useState<string | null>(null);
  const isUserSelect = !!selectMentorId;
  const { push } = useRouter();

  // console.log(data);

  const handleSearchClick = () =>
    inputRef.current && setInputValue(inputRef.current.value);

  const handleButtonClick = () =>
    isUserSelect && push(`/register/mentor?id=${selectMentorId}`);

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
            selectMentorId={selectMentorId}
            setSelectMentorId={setSelectMentorId}
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
