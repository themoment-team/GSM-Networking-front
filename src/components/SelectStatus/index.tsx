'use client';

import SelectButton from './SelectButton';
import * as S from './style';

const SelectStatus = () => {
  let a;

  return (
    <S.Container>
      <S.HeaderTitle>
        저희 서비스가 처음이시군요, <br />
        자신의 상태를 골라주세요.
      </S.HeaderTitle>
      <S.SelectButtonBox>
        <SelectButton type='mentee' />
        <SelectButton type='mentor' />
      </S.SelectButtonBox>
      <S.AgreementBox>
        <S.AgreementTitle>약관동의</S.AgreementTitle>
        <S.AgreementButtonBox>
          <S.AgreementButton />
          <S.AgreementButtonContent>개인정보 처리방침</S.AgreementButtonContent>
        </S.AgreementButtonBox>
      </S.AgreementBox>
      <S.SubmitButtonBox>
        <S.SubmitButton>다음</S.SubmitButton>
      </S.SubmitButtonBox>
    </S.Container>
  );
};

export default SelectStatus;
