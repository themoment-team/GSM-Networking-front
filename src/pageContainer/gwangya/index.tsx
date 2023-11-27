'use client';

import * as S from './style';

import { Header, TextArea } from '@/components';

const Gwangya = () => (
  <>
    <Header />
    <S.Container>
      <S.TitleBox>
        <S.Title>광야</S.Title>
        <S.Description>
          익명으로 자유롭게 소통할 수 있는 광소마의 넓은 들판입니다.
        </S.Description>
      </S.TitleBox>
    </S.Container>
    <S.TextAreaWrapper>
      <TextArea textAreaType={'gwangya'} />
    </S.TextAreaWrapper>
  </>
);

export default Gwangya;
