'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import * as S from './style';

import { Header, InputFormItem, SelectFormItem } from '@/components';
import { MENTEE_GENERATION_ARRAY } from '@/constants';
import { usePostMenteeRegister } from '@/hooks';
import { menteeInfoFormSchema } from '@/schemas';
import type { MenteeInfoFormType } from '@/types';

const Mentee = () => {
  const { push } = useRouter();

  const { mutate: mutateMenteeRegister } = usePostMenteeRegister({
    onError: () => toast.error('멘티 등록에 실패하였습니다.'),
    onSuccess: () => {
      toast.success('멘티 등록에 성공하였습니다.');
      return push('/');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MenteeInfoFormType>({
    resolver: zodResolver(menteeInfoFormSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      generation: '기수를 선택해주세요.',
    },
  });
  const onSubmit: SubmitHandler<MenteeInfoFormType> = async (data) => {
    const body = {
      ...data,
      profileUrl: undefined,
      generation: Number(data.generation),
    };

    mutateMenteeRegister(body);
  };

  const onError: SubmitErrorHandler<MenteeInfoFormType> = () => {
    toast.error('입력 정보를 다시 확인해주세요.');
  };

  useEffect(() => {
    toast.info('멘티 정보 등록 후에 서비스 이용이 가능합니다.');
  }, []);

  return (
    <S.Container>
      <Header />
      <S.InfoBox>
        <S.InfoTitle>개인정보</S.InfoTitle>
      </S.InfoBox>
      <S.MenteeForm onSubmit={handleSubmit(onSubmit, onError)}>
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
        <SelectFormItem
          {...register('generation')}
          selectTitle='기수'
          defaultValue='기수를 선택해주세요.'
          options={[...MENTEE_GENERATION_ARRAY]}
          errorMessage={errors.generation?.message}
          required={true}
        />
        <S.RegisterButton>등록</S.RegisterButton>
      </S.MenteeForm>
    </S.Container>
  );
};

export default Mentee;
