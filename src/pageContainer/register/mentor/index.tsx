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
import { GENERATION_ARRAY } from '@/constants';
import { useDeleteTempMentor, usePostMentorRegister } from '@/hooks';
import { mentorInfoFormSchema } from '@/schemas';
import type { RequestCareerType } from '@/types';
import type {
  CareerFormType,
  MentorInfoFormType,
  MentorType,
  TempMentorType,
} from '@/types';
import {
  careerValidation,
  extractCareer,
  hasErrorInCareerArray,
  UTCDate,
} from '@/utils';

interface Props {
  tempMentorId: number | null;
  mentorInfo: TempMentorType | null;
}

const MentorRegister: React.FC<Props> = ({ tempMentorId, mentorInfo }) => {
  const [careerArray, setCareerArray] = useState<CareerFormType[]>([
    extractCareer(mentorInfo?.company ?? null),
  ]);

  const { push } = useRouter();

  const { mutate: mutateDeleteTempMentor } = useDeleteTempMentor({
    onSettled: () => push('/'),
  });

  const { mutate: mutateMentorRegister } = usePostMentorRegister({
    onError: () => toast.error('멘토 등록에 실패하였습니다.'),
    onSuccess: () => handleMentorRegisterSuccess(),
  });

  const handleMentorRegisterSuccess = () => {
    toast.success('멘토 등록에 성공하였습니다.');
    if (tempMentorId) {
      mutateDeleteTempMentor(tempMentorId);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MentorInfoFormType>({
    resolver: zodResolver(mentorInfoFormSchema),
    defaultValues: {
      name: mentorInfo?.name ?? '',
      phoneNumber: '',
      email: mentorInfo?.email ?? '',
      generation: mentorInfo?.generation.toString() ?? undefined,
      snsUrl: mentorInfo?.SNS ?? '',
    },
  });

  const onSubmit: SubmitHandler<MentorInfoFormType> = (data) => {
    const validatedArray = careerValidation(careerArray, setCareerArray);

    if (hasErrorInCareerArray(validatedArray)) {
      return toast.error('재직 회사 정보를 다시 확인해주세요.');
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

      const careerData: RequestCareerType = {
        companyName: career.companyName.value,
        companyUrl: career.companyUrl.value || null,
        position: career.position.value,
        startDate: startDate,
        endDate: endDate,
        isWorking: career.isWorking.value,
      };

      body.career.push(careerData);
    });

    mutateMentorRegister(body);
  };

  const onError: SubmitErrorHandler<MentorInfoFormType> = () => {
    careerValidation(careerArray, setCareerArray);
    toast.error('입력 정보를 다시 확인해주세요.');
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
              placeholder='이름을 입력해주세요.'
              errorMessage={errors.name?.message}
              required={true}
            />
            <InputFormItem
              {...register('phoneNumber')}
              inputTitle='전화번호'
              placeholder='전화번호를 입력해주세요.'
              errorMessage={errors.phoneNumber?.message}
              required={true}
            />
            <InputFormItem
              {...register('email')}
              inputTitle='이메일'
              placeholder='이메일을 입력해주세요.'
              errorMessage={errors.email?.message}
              required={true}
            />
            <InputFormItem
              {...register('snsUrl')}
              inputTitle='SNS'
              placeholder='SNS 주소를 입력해주세요.'
              errorMessage={errors.snsUrl?.message}
            />
            <SelectFormItem
              {...register('generation')}
              selectTitle='기수'
              options={[...GENERATION_ARRAY]}
              defaultValue='기수를 선택해주세요.'
              errorMessage={errors.generation?.message}
              required={true}
            />
          </S.InputWrapper>
        </S.PrivacyBox>
        {careerArray.map((career) => (
          <CareerRegistrationBox
            career={career}
            setCareerArray={setCareerArray}
            key={career.id}
          />
        ))}
        <S.SubmitButton type='submit'>등록</S.SubmitButton>
      </S.Form>
    </>
  );
};

export default MentorRegister;
