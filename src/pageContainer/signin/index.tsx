'use client';

import { useSearchParams } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import { GoogleIcon } from '@/assets';
import { authUrl } from '@/libs';

const API_URL = '/api/v1';

const signInLink = API_URL + authUrl.loginLink();

const SignIn = () => {
  const searchParams = useSearchParams();

  const status = searchParams.get('status');

  if (status === '400') {
    toast.error('@gsm.hs.kr 계정으로만 접속 가능합니다.');
  }

  if (status === '500') {
    toast.error('알 수 없는 에러입니다. 관리자에게 문의 부탁드립니다.');
  }

  return (
    <S.Container>
      <S.Title>GSM Networking</S.Title>
      <S.LoginLink href={signInLink}>
        <GoogleIcon />
        구글로 로그인
      </S.LoginLink>
      <S.TextContainer>*GSM 계정으로만 접속 가능합니다.</S.TextContainer>
    </S.Container>
  );
};

export default SignIn;
