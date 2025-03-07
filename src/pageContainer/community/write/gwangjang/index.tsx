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
import { BOARD_PATH } from '@/constants';
import { usePatchBoard, usePostBoardContent } from '@/hooks';
import { gwangjangWriteForm } from '@/schemas';
import type { BoardResponseType } from '@/types';
import {
  CategoryType,
  type BoardContentWriteType,
  type GwangjangWriteFormType,
} from '@/types';

interface Props {
  prevBoard?: BoardResponseType;
}

const GwangjangWrite: React.FC<Props> = ({ prevBoard }) => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GwangjangWriteFormType>({
    resolver: zodResolver(gwangjangWriteForm),
    defaultValues: {
      category: 'GWANGJANG',
      title: prevBoard?.title ?? '',
      content: prevBoard?.content ?? '',
    },
  });

  const { mutate: mutatePostBoardContent, isPending: isPostPending } =
    usePostBoardContent({
      onSuccess: () => {
        toast.success('글 작성에 성공했습니다.');
        push(BOARD_PATH);
      },
      onError: () => {
        toast.error('글 작성에 실패했습니다.');
      },
    });

  const { mutate: mutatePatchBoard, isPending: isPatchPending } = usePatchBoard(
    prevBoard?.id.toString(),
    {
      onSuccess: () => onMutateSuccess('수정'),
      onError: () => toast.error('글 수정에 실패했습니다.'),
    }
  );

  const onMutateSuccess = (type: string) => {
    toast.success(`글 ${type}에 성공했습니다.`);
    push(BOARD_PATH);
  };

  const onSubmit: SubmitHandler<GwangjangWriteFormType> = (data) => {
    const formData = new FormData();

    const body: BoardContentWriteType = {
      title: data.title,
      content: data.content,
      boardCategory: CategoryType[data.category as keyof typeof CategoryType],
    };

    formData.append(
      'content',
      new Blob([JSON.stringify(body)], {
        type: 'application/json',
      })
    );
    if (prevBoard) {
      mutatePatchBoard(formData);
      return;
    }
    mutatePostBoardContent(formData);
  };

  const onError: SubmitErrorHandler<GwangjangWriteFormType> = () => {
    toast.error('입력값을 확인해주세요.');
  };

  return (
    <>
      <Header />
      <S.Container>
        <SubFunctionHeader
          prevPath={BOARD_PATH}
          title={prevBoard ? '글 수정' : '글 작성'}
        />
        <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
          <S.FormFieldsWrapper>
            <InputFormItem
              {...register('title')}
              inputTitle='제목'
              placeholder='50자 이내'
              errorMessage={errors.title?.message}
              maxLength={50}
            />
            <SelectFormItem
              {...register('memberCount')}
              value={watch('memberCount')}
              options={[
                '2명이하',
                '4명이하',
                '8명이하',
                '16명이하',
                '상관없음',
              ]}
              selectTitle='모집 인원'
              errorMessage={errors.memberCount?.message}
            />
            <FormItemWrapper
              title='내용'
              errorMessage={errors.content?.message}
            >
              <S.Textarea
                {...register('content')}
                placeholder='1000자 이내'
                isError={!!errors.content?.message}
                maxLength={1000}
              />
            </FormItemWrapper>
          </S.FormFieldsWrapper>
          <S.NextButton
            type='submit'
            disabled={prevBoard ? isPatchPending : isPostPending}
          >
            다음
          </S.NextButton>
        </S.Form>
      </S.Container>
    </>
  );
};

export default GwangjangWrite;
