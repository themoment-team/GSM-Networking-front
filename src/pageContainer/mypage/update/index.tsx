'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import {
  Profile,
  Header,
  ProfileImgRegisterModal,
  CareerRegistrationBox,
} from '@/components';
import { useGetMyInfo } from '@/hooks';
import type { CareerFormType } from '@/types';

const MyInfoUpdatePage: React.FC = () => {
  const [openModalCase, setOpenModalCase] = useState<
    'close' | 'profileImgRegister' | 'signOut' | 'withdraw'
  >('close');

  const [careerArray, setCareerArray] = useState<CareerFormType[]>([]);

  const { push } = useRouter();

  const { data, isError } = useGetMyInfo();

  useEffect(() => {
    if (isError) {
      toast.info('멘티인 사용자에게는 지원되지 않는 기능입니다.');
      push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    if (data?.career) {
      const career = data.career;
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
    }
  }, [data?.career]);

  return (
    <>
      {openModalCase === 'profileImgRegister' && (
        <ProfileImgRegisterModal closeModal={() => setOpenModalCase('close')} />
      )}
      <Header />
      <S.Container>
        {data && (
          <>
            <S.ProfileContainer>
              <Profile
                name={data.name}
                generation={data.generation}
                profileUrl={data.profileUrl}
                profileRegisterModalOpen={() =>
                  setOpenModalCase('profileImgRegister')
                }
              />
            </S.ProfileContainer>
            <S.Line />
            {careerArray.map((career) => (
              <CareerRegistrationBox
                career={career}
                setCareerArray={setCareerArray}
                key={career.id}
              />
            ))}
          </>
        )}
      </S.Container>
    </>
  );
};

export default MyInfoUpdatePage;
