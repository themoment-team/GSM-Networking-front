'use client';

import type { ChangeEvent } from 'react';
import { forwardRef, useState } from 'react';

import * as S from './style';

import { useForwardRef } from '@/hooks';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string | null;
  options: any[];
}

/**
 * @param errorMessage - error message
 * @param options - options 배열
 */
const Select = forwardRef<HTMLSelectElement, Props>(
  ({ errorMessage, options, defaultValue, onChange, ...attributes }, ref) => {
    const [isDefault, setIsDefault] = useState<boolean>(true);
    const selectRef = useForwardRef<HTMLSelectElement>(ref);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setIsDefault(e.target.value === defaultValue);
      onChange && onChange(e);
    };

    return (
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
    );
  }
);

Select.displayName = 'Select';

export default Select;
