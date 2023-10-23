'use client';

import type { ChangeEvent } from 'react';
import { useRef } from 'react';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './style';

import { PlusIcon } from '@/assets';
import { Header, Input, Select } from '@/components';
import { POSITION_ARRAY } from '@/constants';
import { mentorInfoFormSchema } from '@/schemas';
import type { MentorInfoFormType } from '@/types';

const onlyAllowNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.target.value;

  e.target.value = inputValue.replace(/[^0-9]/g, '');
};

const SignUp = () => {
  const positionSelectRef = useRef<HTMLSelectElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MentorInfoFormType>({
    resolver: zodResolver(mentorInfoFormSchema),
  });

  const onSubmit: SubmitHandler<MentorInfoFormType> = (data) => {
    console.log(data.name);
  };

  return (
    <>
      <Header />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.PrivacyBox>
          <S.Title>개인정보</S.Title>
          <S.InputWrapper>
            <Input
              {...register('name')}
              inputTitle='이름'
              errorMessage={errors.name?.message}
              required={true}
            />
            <Input
              {...register('phoneNumber')}
              inputTitle='전화번호'
              errorMessage={errors.phoneNumber?.message}
              required={true}
            />
            <Input
              {...register('email')}
              inputTitle='이메일'
              errorMessage={errors.email?.message}
              required={true}
            />
            <Input
              {...register('snsUrl')}
              inputTitle='SNS'
              errorMessage={errors.snsUrl?.message}
            />
            <Input
              {...register('generation')}
              inputTitle='기수'
              errorMessage={errors.generation?.message}
              required={true}
              onChange={onlyAllowNumberInput}
              maxLength={1}
            />
          </S.InputWrapper>
        </S.PrivacyBox>
        <S.CompanyBox>
          <S.TitleBox>
            <S.Title>재직 회사 정보</S.Title>
            <S.AddButton type='button'>
              <PlusIcon />
            </S.AddButton>
          </S.TitleBox>
          <S.InputWrapper>
            <Input
              {...register('name')}
              inputTitle='회사명'
              errorMessage={errors.name?.message}
              required={true}
            />
            <Select
              title='포지션(직책, 직무)선택'
              defaultValue='포지션 선택'
              options={[...POSITION_ARRAY]}
              ref={positionSelectRef}
            />
            <S.PeriodTitle>재직 기간</S.PeriodTitle>
            <S.TenureCheck type='checkbox' id='checkbox' />
            <S.TenureCheckLabel htmlFor='checkbox'>
              <S.CheckBox />
              재직 중
            </S.TenureCheckLabel>
          </S.InputWrapper>
        </S.CompanyBox>
        <S.SubmitButton type='submit'>등록</S.SubmitButton>
      </S.Form>
    </>
  );
};

export default SignUp;
