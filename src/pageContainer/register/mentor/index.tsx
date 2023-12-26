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
import { GENERATION_ARRAY } from '@/constants';
import {
  useDeleteTempMentor,
  useGetMyInfo,
  usePostMentorRegister,
  usePutMentorUpdate,
} from '@/hooks';
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

interface CareerType extends RequestCareerType {
  id?: number;
}

interface RequestType extends MentorType {
  id?: number;
  career: CareerType[];
}

const MentorRegister: React.FC<Props> = ({ tempMentorId, mentorInfo }) => {
  const [careerArray, setCareerArray] = useState<CareerFormType[]>([
    extractCareer(mentorInfo?.company ?? null),
  ]);
  const [careerId, setCareerId] = useState<number[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const { push } = useRouter();

  const { data: myInfo, isError } = useGetMyInfo();

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
    toast.success('멘토 등록에 성공하였습니다.');
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

  useEffect(() => {
    if (!myInfo || isError) setIsUpdate(false);
    else {
      const career = myInfo.career;
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
      setCareerId(newCareerList.map((career) => career.id));

      setValue('name', myInfo.name);
      setValue('phoneNumber', myInfo.phoneNumber);
      setValue('email', myInfo.email);
      setValue('snsUrl', myInfo.SNS);
      setValue('generation', myInfo.generation.toString());

      setIsUpdate(true);
    }
  }, [myInfo, isError, setValue]);

  const onSubmit: SubmitHandler<MentorInfoFormType> = (data) => {
    const validatedArray = careerValidation(careerArray, setCareerArray);

    if (hasErrorInCareerArray(validatedArray)) {
      return toast.error('재직 회사 정보를 다시 확인해주세요.');
    }

    const body: RequestType = {
      name: data.name,
      email: data.email,
      generation: Number(data.generation),
      phoneNumber: data.phoneNumber,
      snsUrl: data.snsUrl || null,
      career: [],
    };

    if (isUpdate && myInfo) {
      body.profileUrl = myInfo.profileUrl;
      body.id = myInfo.id;
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

      const careerData: CareerType = {
        companyName: career.companyName.value,
        companyUrl: career.companyUrl.value || null,
        position: career.position.value,
        startDate: startDate,
        endDate: endDate,
        isWorking: career.isWorking.value,
      };

      if (careerId.includes(career.id)) careerData.id = career.id;

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
        <S.SubmitButton type='submit'>
          {isUpdate ? '수정완료' : '등록'}
        </S.SubmitButton>
      </S.Form>
    </>
  );
};

export default MentorRegister;
