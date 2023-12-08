'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import { Profile, Header, ProfileImgRegisterModal } from '@/components';
import { useGetMyInfo } from '@/hooks';

const MyPage: React.FC = () => {
  const [openModalCase, setOpenModalCase] = useState<
    'close' | 'profileImgRegister' | 'signOut' | 'withdraw'
  >('close');

  const { push } = useRouter();

  const { data, isError } = useGetMyInfo();

  useEffect(() => {
    if (isError) {
      toast.info('멘티인 사용자에게는 지원되지 않는 기능입니다.');
      push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

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
          </>
        )}
      </S.Container>
    </>
  );
};

export default MyPage;
