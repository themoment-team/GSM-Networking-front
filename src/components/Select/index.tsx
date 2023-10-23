'use client';

import type { ChangeEvent } from 'react';
import { forwardRef, useState } from 'react';

import * as S from './style';

import { FormItemWrapper } from '@/components';
import { useForwardRef } from '@/hooks';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  title: string;
  errorMessage?: string;
  options: string[];
}

/**
 * @param inputTitle - title
 * @param errorMessage - error message
 * @param isError - error
 * @param options - options 배열
 */
const Select = forwardRef<HTMLSelectElement, Props>(
  ({ title, errorMessage, options, defaultValue, ...attributes }, ref) => {
    const [isDefault, setIsDefault] = useState<boolean>(true);
    const selectRef = useForwardRef<HTMLSelectElement>(ref);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setIsDefault(e.target.value === defaultValue);
    };

    return (
      <FormItemWrapper
        title={title}
        errorMessage={errorMessage}
        required={true}
      >
        <S.CustomSelect
          isError={!!errorMessage}
          ref={selectRef}
          isDefault={isDefault}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...attributes}
        >
          <option disabled hidden value={defaultValue}>
            {defaultValue}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </S.CustomSelect>
      </FormItemWrapper>
    );
  }
);

Select.displayName = 'Select';

export default Select;
