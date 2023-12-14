'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import { CheckBoxIcon } from '@/assets';
import { UserStatusSelect } from '@/components';
import { PRIVACY_POLICY_URL } from '@/constants';
import { usePostMenteeRole } from '@/hooks';

const SignUp = () => {
  const [role, setRole] = useState<'mentee' | 'mentor' | null>(null);
  const [checkPolicy, setCheckPolicy] = useState<boolean>(false);

  const { push } = useRouter();

  const { mutate: menteeRoleMutate } = usePostMenteeRole({
    onError: () => toast.error('멘티 등록에 실패했습니다.'),
    onSuccess: () => handleMutateSuccess(),
  });

  const handleMutateSuccess = () => {
    toast.success('멘티 등록에 성공했습니다.');
    push('/');
  };

  const handleNextButtonClick = () => {
    if (checkPolicy === false)
      return toast.error('개인정보 처리방침에 동의해주세요.');

    if (role === 'mentee') return menteeRoleMutate();

    if (role === 'mentor') return push('/register/search');
  };

  return (
    <S.Container>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
      <S.HeaderTitle>
        저희 서비스가 처음이시군요,
        <br />
        자신의 상태를 골라주세요.
      </S.HeaderTitle>
      <UserStatusSelect role={role} setRole={setRole} />
      <S.AgreementBox>
        <S.AgreementTitle>약관동의</S.AgreementTitle>
        <S.AgreementButtonBox>
          <S.AgreementButton
            checkPolicy={checkPolicy}
            onClick={() => setCheckPolicy((prev) => !prev)}
          >
            {checkPolicy && <CheckBoxIcon />}
          </S.AgreementButton>
          <S.AgreementTextButton
            onClick={() => setCheckPolicy((prev) => !prev)}
          >
            개인정보 처리방침
          </S.AgreementTextButton>
          <S.AgreementLink
            href={PRIVACY_POLICY_URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            본문 확인
          </S.AgreementLink>
        </S.AgreementButtonBox>
      </S.AgreementBox>
      <S.SubmitButton disabled={role === null} onClick={handleNextButtonClick}>
        다음
      </S.SubmitButton>
    </S.Container>
  );
};

export default SignUp;
