'use client';

import { useState } from 'react';

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
  FileUploadButton,
  FileUploadModal,
  SelectFile,
} from '@/components';
import { BOARD_PATH, COMMUNITY_CATEGORY_ARRAY } from '@/constants';
import { useGetIsTeacher, usePatchBoard, usePostBoardContent } from '@/hooks';
import { communityWriteFormSchema } from '@/schemas';
import type { BoardType } from '@/types';
import {
  CategoryType,
  type BoardContentWriteType,
  type CommunityWriteFormType,
  ReverseCategoryType,
} from '@/types';

interface Props {
  prevBoard?: BoardType;
}

const CommunityWrite: React.FC<Props> = ({ prevBoard }) => {
  const { push } = useRouter();

  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CommunityWriteFormType>({
    resolver: zodResolver(communityWriteFormSchema),
    defaultValues: {
      category: prevBoard
        ? ReverseCategoryType[prevBoard!.boardCategory]
        : '글 카테고리',
      title: prevBoard?.title ?? '',
      content: prevBoard?.content ?? '',
    },
  });

  const [openModalCase, setOpenModalCase] = useState<
    'close' | 'fileRegister' | 'signOut' | 'withdraw'
  >('close');

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

  const { data: isTeacherData } = useGetIsTeacher();
  const isTeacher = isTeacherData?.isTeacher;

  let filteredCategories = COMMUNITY_CATEGORY_ARRAY;

  if (!isTeacher) {
    filteredCategories = filteredCategories.filter(
      (category) => category !== '선생님'
    );
  }

  const onMutateSuccess = (type: string) => {
    toast.success(`글 ${type}에 성공했습니다.`);
    push(BOARD_PATH);
  };

  const onSubmit: SubmitHandler<CommunityWriteFormType> = (data) => {
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

    if (files.length > 0) {
      files.forEach((file) => formData.append('files', file));
    }

    if (prevBoard) {
      mutatePatchBoard(formData);
      return;
    }

    mutatePostBoardContent(formData);
  };

  const onError: SubmitErrorHandler<CommunityWriteFormType> = () => {
    toast.error('입력값을 확인해주세요.');
  };

  return (
    <>
      {openModalCase === 'fileRegister' && (
        <FileUploadModal
          setFiles={setFiles}
          closeModal={() => setOpenModalCase('close')}
        />
      )}
      <Header />
      <S.Container>
        <SubFunctionHeader
          prevPath={BOARD_PATH}
          title={prevBoard ? '글 수정' : '글 작성'}
        />
        <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
          <S.FormFieldsWrapper>
            <SelectFormItem
              {...register('category')}
              value={watch('category')}
              options={[...filteredCategories]}
              selectTitle='카테고리'
              defaultValue={'글 카테고리'}
              errorMessage={errors.category?.message}
            />
            <InputFormItem
              {...register('title')}
              inputTitle='제목'
              placeholder='50자 이내'
              errorMessage={errors.title?.message}
              maxLength={50}
            />
            <S.FileContainer>
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
              <S.MapFileBox>
                <FileUploadButton
                  onClick={() => setOpenModalCase('fileRegister')}
                />
                <S.MapFileBox>
                  {files &&
                    files.map((file, index) => (
                      <SelectFile
                        index={index}
                        key={file.name + index}
                        file={file}
                        setFiles={setFiles}
                      />
                    ))}
                </S.MapFileBox>
              </S.MapFileBox>
            </S.FileContainer>
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

export default CommunityWrite;
