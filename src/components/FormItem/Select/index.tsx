'use client';

import { forwardRef } from 'react';

import { FormItemWrapper, Select } from '@/components';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  selectTitle: string;
  errorMessage?: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  required?: boolean;
}

/**
 * Select Form Item
 *
 * defaultValue 사용법
 * 1. options 배열에 defaultValue를 포함하지 않고 넘긴다.
 * 2. value에 useForm.watch('fieldName')을 넘긴다.
 * 2-1. react-hook-form 사용 안할 시, value에 상태값을 넘긴다. (제어 컴포넌트)
 *
 * 참고 -  넘겨진 defaultValue는 기본적으로 사용자가 선택할 수 없도록 구현되었다.
 */
const SelectFormItem = forwardRef<HTMLSelectElement, Props>(
  ({ selectTitle, errorMessage, options, required, ...attributes }, ref) => (
    <FormItemWrapper
      title={selectTitle}
      errorMessage={errorMessage}
      required={required}
    >
      <Select
        options={[...options]}
        errorMessage={errorMessage}
        ref={ref}
        {...attributes}
      />
    </FormItemWrapper>
  )
);

SelectFormItem.displayName = 'Input';

export default SelectFormItem;
