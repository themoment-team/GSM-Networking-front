'use client';

import { useState } from 'react';

import SelectButton from './SelectButton';
import * as S from './style';

import { CheckBoxIcon } from '@/assets';

const SelectStatus = () => {
  const [role, setRole] = useState<'mentee' | 'mentor' | null>(null);
  const [checkPolicy, setCheckPolicy] = useState<boolean>(false);

  return (
    <S.Container>
      <S.HeaderTitle>
        저희 서비스가 처음이시군요, <br />
        자신의 상태를 골라주세요.
      </S.HeaderTitle>
      <S.SelectButtonBox>
        <SelectButton type='mentee' role={role} setRole={setRole} />
        <SelectButton type='mentor' role={role} setRole={setRole} />
      </S.SelectButtonBox>
      <S.AgreementBox>
        <S.AgreementTitle>약관동의</S.AgreementTitle>
        <S.AgreementButtonBox>
          <S.AgreementButton
            checkPolicy={checkPolicy}
            onClick={() => setCheckPolicy((prev) => !prev)}
          >
            {checkPolicy ? <CheckBoxIcon /> : null}
          </S.AgreementButton>
          <S.AgreementButtonContent href='https://themoment-team.notion.site/e25e5e3cac8e4968893733f5cddb0329?pvs=4'>
            개인정보 처리방침
          </S.AgreementButtonContent>
        </S.AgreementButtonBox>
      </S.AgreementBox>
      <S.SubmitButtonBox>
        <S.SubmitButton>다음</S.SubmitButton>
      </S.SubmitButtonBox>
    </S.Container>
  );
};

export default SelectStatus;
