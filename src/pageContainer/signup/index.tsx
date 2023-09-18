'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './style';

import { Header, Input } from '@/components';
import { userInfoFormSchema } from '@/schemas';
import type { UserInfoFormType } from '@/types';

const PERSONAL_INFO = [
  {
    title: '이름',
    errorMessage: '이름을 입력해주세요.',
    placeholder: '이름을 입력해주세요.',
  },
  {
    title: '전화번호',
    errorMessage: '전화번호를 입력해주세요.',
    placeholder: '전화번호를 입력해주세요.',
  },
  {
    title: 'SNS',
    errorMessage: 'SNS URL을 입력해주세요.',
    placeholder: 'SNS URL을 입력해주세요.',
  },
  {
    title: '기수',
    errorMessage: '기수를 입력해주세요.',
    placeholder: '기수를 입력해주세요.',
  },
];

const SignUp = () => {
  const { register, handleSubmit } = useForm<UserInfoFormType>({
    resolver: zodResolver(userInfoFormSchema),
  });

  return (
    <>
      <Header />
      <S.Form onSubmit={() => handleSubmit()}>
        <S.Title>개인정보</S.Title>
        <Input
          inputTitle='이름'
          errorMessage='이름을 입력해주세요.'
          isError={true}
        />
        <Input inputTitle='전화번호' errorMessage='전화번호를 입력해주세요.' />
        <Input inputTitle='SNS' errorMessage='SNS를 입력해주세요.' />
        <Input inputTitle='기수' errorMessage='기수를 입력해주세요.' />
        <S.CompanyBox>
          <S.Title>제직 회사 정보</S.Title>
        </S.CompanyBox>
        <S.SubmitButton>등록</S.SubmitButton>
      </S.Form>
    </>
  );
};

export default SignUp;
