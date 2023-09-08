'use client';
import * as S from './style';

import * as I from '@/assets';

const SignIn = () => (
  <S.Container>
    <S.LogoContainer>
      <I.LoginLogoIcon />
    </S.LogoContainer>
    <S.LoginButton>
      <I.LoginButton />
    </S.LoginButton>
    <S.TextContainer>*GSM 계정으로만 접속 가능합니다.</S.TextContainer>
  </S.Container>
);

export default SignIn;
