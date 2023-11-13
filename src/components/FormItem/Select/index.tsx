'use client';

import { forwardRef } from 'react';

import { FormItemWrapper, Select } from '@/components';
import { useForwardRef } from '@/hooks';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  selectTitle: string;
  errorMessage?: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  required?: boolean;
}

const SelectFormItem = forwardRef<HTMLSelectElement, Props>(
  ({ selectTitle, errorMessage, options, required, ...attributes }, ref) => {
    const selectRef = useForwardRef<HTMLSelectElement>(ref);

    return (
      <FormItemWrapper
        title={selectTitle}
        errorMessage={errorMessage}
        required={required}
      >
        <Select
          options={[...options]}
          errorMessage={errorMessage}
          ref={selectRef}
          {...attributes}
        />
      </FormItemWrapper>
    );
  }
);

SelectFormItem.displayName = 'Input';

export default SelectFormItem;
