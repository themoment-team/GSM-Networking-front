'use client';

import * as S from './style';

import { GoogleIcon } from '@/assets';

const oauthLink =
  'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=807267617496-dvq6b3b9phu5p8pu2k43iakec6jb1149.apps.googleusercontent.com&redirect_uri=https://gsm.moip.shop/auth/signin/google&response_type=code&scope=email%20profile%20openid&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow';

const SignIn = () => (
  <S.Container>
    <S.Title>GSM Networking</S.Title>
    <S.LoginLink href={oauthLink}>
      <GoogleIcon />
      구글로 로그인
    </S.LoginLink>
    <S.TextContainer>*GSM 계정으로만 접속 가능합니다.</S.TextContainer>
  </S.Container>
);

export default SignIn;
