'use client';

import { forwardRef } from 'react';

import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
  errorMessage?: string;
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputTitle, errorMessage, isError, ...attributes }, ref) => (
    <S.InputContainer>
      <S.InputTitle>{inputTitle}</S.InputTitle>
      <S.CustomInput ref={ref} isError={isError} {...attributes} />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.InputContainer>
  )
);

Input.displayName = 'Input';

export default Input;
