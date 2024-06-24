'use client';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './style';

import { CareerRegistrationBox, Header } from '@/components';
import { mentorInfoFormSchema } from '@/schemas';
import type {
  CareerFormType,
  TempMentorType,
  MentorInfoFormType,
} from '@/types';
import { extractCareer } from '@/utils';

interface Props {
  tempMentorId: number | null;
  mentorInfo: TempMentorType | null;
}

const MentorRegister: React.FC<Props> = ({ tempMentorId, mentorInfo }) => {
  const [careerArray, setCareerArray] = useState<CareerFormType[]>([
    extractCareer(mentorInfo?.company ?? null),
  ]);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<MentorInfoFormType>({
    resolver: zodResolver(mentorInfoFormSchema),
  });

  return (
    <>
      <Header />
      <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
        {careerArray.map((career, index) => (
          <CareerRegistrationBox
            career={career}
            setCareerArray={setCareerArray}
            key={career.id}
            index={index}
          />
        ))}
        <S.SubmitButton type='submit'>등록</S.SubmitButton>
      </S.Form>
    </>
  );
};

export default MentorRegister;
