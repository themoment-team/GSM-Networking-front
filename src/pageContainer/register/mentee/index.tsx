'use client';

import * as S from './style';

import { Header, InputFormItem, SelectFormItem } from '@/components';
import { MENTEE_GENERATION_ARRAY } from '@/constants';

const Mentee = () => (
  <S.Container>
    <Header />
    <S.InfoBox>
      <S.InfoTitle>개인정보</S.InfoTitle>
    </S.InfoBox>
    <S.MenteeForm>
      <InputFormItem
        inputTitle='이름'
        placeholder='이름을 입력해주세요.'
        required={true}
      />
      <InputFormItem
        inputTitle='전화번호'
        placeholder='전화번호를 입력해주세요.'
        required={true}
      />
      <InputFormItem
        inputTitle='이메일'
        placeholder='이메일을 입력해주세요.'
        required={true}
      />
      <SelectFormItem
        selectTitle='기수'
        defaultValue='기수를 선택해주세요.'
        options={[...MENTEE_GENERATION_ARRAY]}
        required={true}
      />
      <S.RegisterButton>등록</S.RegisterButton>
    </S.MenteeForm>
  </S.Container>
);

export default Mentee;
