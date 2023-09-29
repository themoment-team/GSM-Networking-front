'use client';

import { forwardRef } from 'react';

import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
  errorMessage?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputTitle, errorMessage, required, ...attributes }, ref) => (
    <S.InputContainer>
      <S.InputTitle>
        {inputTitle}
        {required && <S.Required>*</S.Required>}
      </S.InputTitle>
      <S.CustomInput ref={ref} isError={!!errorMessage} {...attributes} />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.InputContainer>
  )
);

Input.displayName = 'Input';

export default Input;
