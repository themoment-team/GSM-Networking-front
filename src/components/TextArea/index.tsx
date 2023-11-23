'use client';

import { useState } from 'react';

import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import * as S from './style';

import { Header } from '@/components';
import type { PostContentFormType } from '@/types/form/postContentForm';

const Write = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const { register, handleSubmit } = useForm<PostContentFormType>({
    defaultValues: {
      content: '',
    },
  });

  const onSubmit: SubmitHandler<PostContentFormType> = (data) => {
    setInputValue(data.content);
  };

  return (
    <>
      <Header />
      <S.WriteForm onSubmit={handleSubmit(onSubmit)}>
        <S.PageTitle>게시물 작성</S.PageTitle>
        <S.TextAreaContainer>
          <S.SmallNoticeText>200자 이내 내용 작성*</S.SmallNoticeText>
          <S.TextField
            placeholder='누군가를 비방하거나 성적인 발언, 과도한 욕설,  스팸 등의 내용을 담은 글을 삭제 및  커뮤니티 이용 금지 조치를 받을 수 있습니다.'
            maxLength={200}
            {...register('content')}
          />
        </S.TextAreaContainer>
        <S.ButtonContainer>
          <S.Button type='submit'>등록</S.Button>
        </S.ButtonContainer>
        {inputValue} {/*test*/}
      </S.WriteForm>
    </>
  );
};

export default Write;
