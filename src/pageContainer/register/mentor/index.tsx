'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import * as S from './style';

import {
  CareerRegistrationBox,
  Header,
  InputFormItem,
  SelectFormItem,
} from '@/components';
import { GENERATION_ARRAY, defaultCareer } from '@/constants';
import { usePostMentorRegister } from '@/hooks';
import { mentorInfoFormSchema } from '@/schemas';
import type {
  CareerFormType,
  CareerType,
  MentorInfoFormType,
  MentorType,
} from '@/types';
import { careerValidation, hasErrorInCareerArray, UTCDate } from '@/utils';

const MentorRegister = () => {
  const [careerArray, setCareerArray] = useState<CareerFormType[]>([
    defaultCareer,
  ]);

  const { push } = useRouter();

  const { mutate } = usePostMentorRegister({
    onError: () => toast.error('멘토 등록에 실패하였습니다.'),
    onSuccess: () => handleMutateSuccess(),
  });

  const handleMutateSuccess = () => {
    toast.success('멘토 등록에 성공하였습니다.');
    push('/');
  };

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
    },
  });

  const onSubmit: SubmitHandler<MentorInfoFormType> = (data) => {
    const validatedArray = careerValidation(careerArray, setCareerArray);

    if (hasErrorInCareerArray(validatedArray)) {
      return;
    }

    const body: MentorType = {
      name: data.name,
      email: data.email,
      generation: Number(data.generation),
      phoneNumber: data.phoneNumber,
      snsUrl: data.snsUrl || null,
      career: [],
    };

    careerArray.forEach((career) => {
      const startYear =
        career.startYear.value !== '년' ? career.startYear.value : 0;
      /** 0 ~ 11 */
      const startMonth =
        career.startMonth.value !== '월' ? career.startMonth.value - 1 : 0;

      const endYear = career.endYear.value !== '년' ? career.endYear.value : 0;
      /** 0 ~ 11 */
      const endMonth =
        career.endMonth.value !== '월' ? career.endMonth.value - 1 : 0;

      const startDate = UTCDate(startYear, startMonth);
      const endDate = career.isWorking.value
        ? null
        : UTCDate(endYear, endMonth);

      const careerData: CareerType = {
        companyName: career.companyName.value,
        companyUrl: career.companyUrl.value || null,
        position: career.position.value,
        startDate: startDate,
        endDate: endDate,
        isWorking: career.isWorking.value,
      };

      body.career.push(careerData);
    });

    mutate(body);
  };

  const onError: SubmitErrorHandler<MentorInfoFormType> = () => {
    careerValidation(careerArray, setCareerArray);
  };

  return (
    <>
      <Header />
      <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
        <S.PrivacyBox>
          <S.Title>개인정보</S.Title>
          <S.InputWrapper>
            <InputFormItem
              {...register('name')}
              inputTitle='이름'
              errorMessage={errors.name?.message}
              required={true}
            />
            <InputFormItem
              {...register('phoneNumber')}
              inputTitle='전화번호'
              errorMessage={errors.phoneNumber?.message}
              required={true}
            />
            <InputFormItem
              {...register('email')}
              inputTitle='이메일'
              errorMessage={errors.email?.message}
              required={true}
            />
            <InputFormItem
              {...register('snsUrl')}
              inputTitle='SNS'
              errorMessage={errors.snsUrl?.message}
            />
            <SelectFormItem
              {...register('generation')}
              required={true}
              selectTitle='기수'
              options={[...GENERATION_ARRAY]}
              defaultValue='기수를 선택해주세요.'
              errorMessage={errors.generation?.message}
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
