'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import * as S from './style';

import { CareerRegistrationBox, Header, Input } from '@/components';
import { defaultCareer } from '@/constants';
import { mentorInfoFormSchema } from '@/schemas';
import type { CareerFormType, MentorInfoFormType } from '@/types';
import { careerValidation } from '@/utils';

const onlyAllowNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.target.value;

  e.target.value = inputValue.replace(/[^0-9]/g, '');
};

const hasErrorInCareerArray = (careerArray: CareerFormType[]) =>
  careerArray.some(
    (career) =>
      career.companyName.errorMessage ||
      career.companyUrl.errorMessage ||
      career.endMonth.errorMessage ||
      career.endYear.errorMessage ||
      career.position.errorMessage ||
      career.startMonth.errorMessage ||
      career.startYear.errorMessage
  );

const MentorRegister = () => {
  const [careerArray, setCareerArray] = useState<CareerFormType[]>([
    defaultCareer,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MentorInfoFormType>({
    resolver: zodResolver(mentorInfoFormSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      generation: '',
      snsUrl: null,
    },
  });

  const onSubmit: SubmitHandler<MentorInfoFormType> = (data) => {
    careerValidation(setCareerArray);

    if (hasErrorInCareerArray(careerArray)) {
      return;
    }

    const body = {
      name: data.name,
      email: data.email,
      generation: data.generation,
    };

    toast.success('등록 성공');
  };

  const onError: SubmitErrorHandler<MentorInfoFormType> = (data) => {
    careerValidation(setCareerArray);
  };

  return (
    <>
      <Header />
      <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
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
        {careerArray.map((career, index) => (
          <CareerRegistrationBox
            career={career}
            setCareerArray={setCareerArray}
            index={index}
            key={index}
          />
        ))}
        <S.SubmitButton type='submit'>등록</S.SubmitButton>
      </S.Form>
    </>
  );
};

export default MentorRegister;
