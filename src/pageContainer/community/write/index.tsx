'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import * as S from './style';

import {
  FormItemWrapper,
  Header,
  InputFormItem,
  SelectFormItem,
  SubFunctionHeader,
} from '@/components';
import { COMMUNITY_CATEGORIES_ARRAY } from '@/constants';
import { communityWriteFormSchema } from '@/schemas';
import type { CommunityWriteFormType } from '@/types';

const CommunityWrite = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CommunityWriteFormType>({
    resolver: zodResolver(communityWriteFormSchema),
    defaultValues: {
      category: '글 카테고리',
      title: '',
      content: '',
    },
  });

  const onSubmit = () => {
    // for test
    toast.success('글 작성이 완료되었습니다.');
  };

  const onError = () => {
    // for test
    toast.error('입력값을 확인해주세요.');
  };

  return (
    <>
      <Header />
      <S.Container>
        <SubFunctionHeader prevPath='/community' title='글 작성' />
        <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
          <S.FormFieldsWrapper>
            <SelectFormItem
              {...register('category')}
              value={watch('category')}
              options={[...COMMUNITY_CATEGORIES_ARRAY]}
              selectTitle='카테고리'
              defaultValue={'글 카테고리'}
              errorMessage={errors.category?.message}
            />
            <InputFormItem
              {...register('title')}
              inputTitle='제목'
              placeholder='50자 이내'
              errorMessage={errors.title?.message}
            />
            <FormItemWrapper
              title='내용'
              errorMessage={errors.content?.message}
            >
              <S.Textarea
                {...register('content')}
                placeholder='1000자 이내'
                isError={!!errors.content?.message}
              />
            </FormItemWrapper>
          </S.FormFieldsWrapper>
          <S.NextButton type='submit'>다음</S.NextButton>
        </S.Form>
      </S.Container>
    </>
  );
};

export default CommunityWrite;
