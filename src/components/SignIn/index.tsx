'use client';
import Link from 'next/link';

import * as S from './style';

import * as I from '@/assets';

const SignIn = () => (
  <S.Container>
    <S.LogoContainer>
      <I.LoginLogoIcon />
      <I.SmallLoginLogo />
    </S.LogoContainer>
    <Link
      href={
        'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=807267617496-dvq6b3b9phu5p8pu2k43iakec6jb1149.apps.googleusercontent.com&redirect_uri=https://gsm.moip.shop/auth/signin/google&response_type=code&scope=email%20profile%20openid&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow'
      }
    >
      <S.LoginButton>
        <I.LoginButton />
      </S.LoginButton>
    </Link>
    <S.TextContainer>*GSM 계정으로만 접속 가능합니다.</S.TextContainer>
  </S.Container>
);

export default SignIn;
