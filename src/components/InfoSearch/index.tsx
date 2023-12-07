'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import * as S from './style';

import { TempMentorCard, SearchNotFound } from '@/components';
import { useGetSearchTempMentor } from '@/hooks';
import { tempMentorSearchFormSchema } from '@/schemas';
import type { TempMentorSearchFormType } from '@/types/form/tempMentorSearchForm';

const InfoSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectMentorId, setSelectMentorId] = useState<string | null>(null);
  const isUserSelect = !!selectMentorId;

  const { push } = useRouter();

  const { data, refetch } = useGetSearchTempMentor(inputValue, {
    enabled: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TempMentorSearchFormType>({
    resolver: zodResolver(tempMentorSearchFormSchema),
    defaultValues: {
      name: '',
    },
  });

  const handleButtonClick = () => push(`/register/mentor?id=${selectMentorId}`);

  const onSubmit: SubmitHandler<TempMentorSearchFormType> = (data) => {
    setInputValue(data.name);
  };

  useEffect(() => {
    if (inputValue) {
      refetch();
    }
  }, [inputValue, refetch]);

  useEffect(() => {
    if (inputValue && !data) {
      toast.error('성함을 다시 확인해주세요.');
    }
  }, [inputValue, data]);

  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>내 정보 연동</S.Title>
        <S.SkipLink href={'/register/mentor'}>건너뛰기</S.SkipLink>
      </S.TitleBox>
      <S.SearchForm onSubmit={handleSubmit(onSubmit)}>
        <S.SearchInput
          {...register('name')}
          placeholder='정확한 성함을 입력해주세요'
        />
        <S.SearchButton type='submit'>검색</S.SearchButton>
      </S.SearchForm>
      <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
      <S.TempMentorCardBox>
        {(data?.length ?? 0) > 0
          ? data?.map((user) => (
              <TempMentorCard
                key={user.id}
                worker={user}
                selectMentorId={selectMentorId}
                setSelectMentorId={setSelectMentorId}
              />
            ))
          : inputValue && (
              <S.NotFoundContainer>
                <SearchNotFound
                  textArr={[
                    '이름을 찾을 수 없어요.',
                    '오타, 띄어쓰기 등을 확인 해주세요.',
                  ]}
                />
              </S.NotFoundContainer>
            )}
      </S.TempMentorCardBox>
      <S.Button onClick={handleButtonClick} disabled={!isUserSelect}>
        다음
      </S.Button>
    </S.Container>
  );
};

export default InfoSearch;
