'use client';

import { useSearchParams } from 'next/navigation';

import { toast } from 'react-toastify';

import * as S from './style';

import { GoogleIcon } from '@/assets';

const oauthLink =
  'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=807267617496-dvq6b3b9phu5p8pu2k43iakec6jb1149.apps.googleusercontent.com&redirect_uri=https://www.gsm-networking.com/auth/signin/google&response_type=code&scope=email%20profile%20openid&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow';

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
      <S.LoginLink href={oauthLink}>
        <GoogleIcon />
        구글로 로그인
      </S.LoginLink>
      <S.TextContainer>*GSM 계정으로만 접속 가능합니다.</S.TextContainer>
    </S.Container>
  );
};

export default SignIn;
