'use client';

import { forwardRef } from 'react';

import * as S from './style';

import { FormItemWrapper } from '@/components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
  errorMessage?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputTitle, errorMessage, required, ...attributes }, ref) => (
    <FormItemWrapper
      title={inputTitle}
      errorMessage={errorMessage}
      required={required}
    >
      <S.CustomInput ref={ref} isError={!!errorMessage} {...attributes} />
    </FormItemWrapper>
  )
);

Input.displayName = 'Input';

export default Input;
