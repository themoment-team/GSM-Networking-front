'use client';

import { useRouter } from 'next/navigation';

import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
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
import { COMMUNITY_CATEGORY_ARRAY } from '@/constants';
import { usePostBoardContent } from '@/hooks';
import { communityWriteFormSchema } from '@/schemas';
import {
  CategoryType,
  type BoardContentWriteType,
  type CommunityWriteFormType,
} from '@/types';

const CommunityWrite = () => {
  const { push } = useRouter();

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

  const { mutate: mutatePostBoardContent, isPending } = usePostBoardContent({
    onSuccess: () => {
      toast.success('글 작성에 성공했습니다.');
      push('/community/board');
    },
    onError: () => {
      toast.error('글 작성에 실패했습니다.');
    },
  });

  const onSubmit: SubmitHandler<CommunityWriteFormType> = (data) => {
    const body: BoardContentWriteType = {
      title: data.title,
      content: data.content,
      boardCategory: CategoryType[data.category as keyof typeof CategoryType],
    };

    mutatePostBoardContent(body);
  };

  const onError: SubmitErrorHandler<CommunityWriteFormType> = () => {
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
              options={[...COMMUNITY_CATEGORY_ARRAY]}
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
          <S.NextButton type='submit' disabled={isPending}>
            다음
          </S.NextButton>
        </S.Form>
      </S.Container>
    </>
  );
};

export default CommunityWrite;
