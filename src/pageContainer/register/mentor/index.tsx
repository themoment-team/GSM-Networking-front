'use client';

import { useEffect, useState } from 'react';

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
import { MENTOR_GENERATION_ARRAY } from '@/constants';
import {
  useDeleteTempMentor,
  useGetMyInfo,
  usePostMentorRegister,
  usePutMentorUpdate,
} from '@/hooks';
import { mentorInfoFormSchema } from '@/schemas';
import type {
  CareerFormType,
  MentorInfoFormType,
  MentorType,
  TempMentorType,
  RequestCareerType,
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
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const { push } = useRouter();

  const { data: myInfoData, isError } = useGetMyInfo();

  const { mutate: mutateDeleteTempMentor } = useDeleteTempMentor({
    onSettled: () => push('/'),
  });

  const { mutate: mutateMentorRegister } = usePostMentorRegister({
    onError: () => toast.error('멘토 등록에 실패하였습니다.'),
    onSuccess: () => handleMentorRegisterSuccess(),
  });

  const { mutate: mutateMentorUpdate } = usePutMentorUpdate({
    onError: () => toast.error('멘토 수정에 실패하였습니다.'),
    onSuccess: () => handleMentorUpdateSuccess(),
  });

  const handleMentorRegisterSuccess = () => {
    toast.success('멘토 등록에 성공하였습니다.');
    if (tempMentorId) {
      return mutateDeleteTempMentor(tempMentorId);
    }
    return push('/');
  };

  const handleMentorUpdateSuccess = () => {
    toast.success('멘토 수정에 성공하였습니다.');
    if (tempMentorId) {
      return mutateDeleteTempMentor(tempMentorId);
    }
    return push('/mypage');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<MentorInfoFormType>({
    resolver: zodResolver(mentorInfoFormSchema),
    defaultValues: {
      name: mentorInfo?.name ?? '',
      phoneNumber: '',
      email: mentorInfo?.email ?? '',
      generation: mentorInfo?.generation.toString() ?? '기수를 선택해주세요.',
      snsUrl: mentorInfo?.SNS ?? '',
    },
  });

  useEffect(() => {
    if (!myInfoData || isError) setIsUpdate(false);
    else {
      const career = myInfoData.career;
      const newCareerList: CareerFormType[] = career.map((career) => {
        const startDate = new Date(career.startDate);
        const endDate = career.endDate ? new Date(career.endDate) : null;

        const newCareer: CareerFormType = {
          id: career.id,
          companyName: { value: career.companyName, errorMessage: null },
          companyUrl: { value: career.companyUrl ?? '', errorMessage: null },
          position: { value: career.position, errorMessage: null },
          startYear: { value: startDate.getFullYear(), errorMessage: null },
          startMonth: { value: startDate.getMonth(), errorMessage: null },
          endYear: {
            value: endDate ? endDate.getFullYear() : '년',
            errorMessage: null,
          },
          endMonth: {
            value: endDate ? endDate.getMonth() : '월',
            errorMessage: null,
          },
          isWorking: { value: career.isWorking, errorMessage: null },
        };

        return newCareer;
      });

      setCareerArray(newCareerList);

      setValue('name', myInfoData.name);
      setValue('phoneNumber', myInfoData.phoneNumber);
      setValue('email', myInfoData.email);
      setValue('snsUrl', myInfoData.SNS ?? '');
      setValue('generation', myInfoData.generation.toString());

      setIsUpdate(true);
    }
  }, [myInfoData, isError, setValue]);

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

    if (isUpdate && myInfoData) {
      body.profileUrl = myInfoData.profileUrl;
    }

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

    if (!isUpdate) mutateMentorRegister(body);
    else mutateMentorUpdate(body);
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
              options={[...MENTOR_GENERATION_ARRAY]}
              value={watch('generation')}
              defaultValue='기수를 선택해주세요.'
              errorMessage={errors.generation?.message}
              required={true}
            />
          </S.InputWrapper>
        </S.PrivacyBox>
        {careerArray.map((career, index) => (
          <CareerRegistrationBox
            career={career}
            setCareerArray={setCareerArray}
            key={career.id}
            index={index}
          />
        ))}
        <S.SubmitButton type='submit'>
          {isUpdate ? '수정완료' : '등록'}
        </S.SubmitButton>
      </S.Form>
    </>
  );
};

export default MentorRegister;
