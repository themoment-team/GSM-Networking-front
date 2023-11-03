'use client';

import React, { useRef } from 'react';

import * as S from './style';

import { CheckBoxIcon, DeleteIcon, PlusIcon } from '@/assets';
import { FormItemWrapper, Input, Select, SelectFormItem } from '@/components';
import {
  MONTH_ARRAY,
  POSITION_ARRAY,
  YEAR_ARRAY,
  defaultCareer,
} from '@/constants';
import type { CareerFormType, PositionType } from '@/types';
import { deepCopy } from '@/utils';

interface Props {
  career: CareerFormType;
  setCareerArray: React.Dispatch<React.SetStateAction<CareerFormType[]>>;
  index: number;
}

const CareerRegistrationBox: React.FC<Props> = ({
  career: {
    companyName,
    companyUrl,
    position,
    startYear,
    startMonth,
    endYear,
    endMonth,
    isWorking,
  },
  setCareerArray,
  index,
}) => {
  const endYearRef = useRef<HTMLSelectElement>(null);
  const endMonthRef = useRef<HTMLSelectElement>(null);

  const handleRemoveClick = () =>
    setCareerArray((prev) => prev.filter((_, i) => i !== index));

  const handleAddClick = () =>
    setCareerArray((prev) => [...prev, defaultCareer]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Pick<CareerFormType, 'companyName' | 'companyUrl'>
  ) => {
    setCareerArray((prev) => {
      const newCareerArray: CareerFormType[] = deepCopy(prev);
      newCareerArray[index][key].value = e.target.value;
      return newCareerArray;
    });
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCareerArray((prev) => {
      const newCareerArray = [...prev];
      newCareerArray[index].position.value = e.target.value as PositionType;
      return newCareerArray;
    });

  const handlePeriodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    periodType: keyof Pick<
      CareerFormType,
      'startYear' | 'startMonth' | 'endYear' | 'endMonth'
    >
  ) =>
    setCareerArray((prev) => {
      const newCareerArray = [...prev];
      newCareerArray[index][periodType].value = Number(e.target.value);
      return newCareerArray;
    });

  const handleTenureCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCareerArray((prev) => {
      const newCareerArray = [...prev];
      const isChecked = e.target.checked;

      newCareerArray[index].isWorking.value = isChecked;

      if (isChecked) {
        if (endYearRef.current) endYearRef.current.value = '';
        if (endMonthRef.current) endMonthRef.current.value = '';
        newCareerArray[index].endYear.value = '년';
        newCareerArray[index].endYear.errorMessage = null;
        newCareerArray[index].endMonth.value = '월';
        newCareerArray[index].endMonth.errorMessage = null;
      }

      return newCareerArray;
    });

  return (
    <S.CompanyBox>
      <S.TitleBox>
        <S.Title>재직 회사 정보</S.Title>
        <S.ButtonWrapper>
          {index !== 0 && (
            <S.IconButton type='button' onClick={handleRemoveClick}>
              <DeleteIcon />
            </S.IconButton>
          )}
          <S.IconButton type='button' onClick={handleAddClick}>
            <PlusIcon />
          </S.IconButton>
        </S.ButtonWrapper>
      </S.TitleBox>
      <S.InputWrapper>
        <Input
          value={companyName.value}
          inputTitle='회사명'
          required
          onChange={(e) => handleInputChange(e, 'companyName')}
          errorMessage={companyName.errorMessage}
        />
        <Input
          value={companyUrl.value}
          inputTitle='회사 URL'
          onChange={(e) => handleInputChange(e, 'companyUrl')}
          errorMessage={companyUrl.errorMessage}
        />
        <SelectFormItem
          required
          selectTitle='포지션(직책, 직무)'
          options={[...POSITION_ARRAY]}
          errorMessage={position.errorMessage}
          defaultValue='포지션 선택'
          onChange={handlePositionChange}
        />
        <S.EmploymentDurationBox>
          <FormItemWrapper
            title='재직 기간'
            required={true}
            errorMessage={
              startYear.errorMessage ||
              startMonth.errorMessage ||
              endYear.errorMessage ||
              endMonth.errorMessage
            }
          >
            <S.PeriodSelectWrapper>
              <Select
                defaultValue={startYear.value}
                options={[...YEAR_ARRAY]}
                onChange={(e) => handlePeriodChange(e, 'startYear')}
                errorMessage={startYear.errorMessage}
              />
              <Select
                defaultValue={startMonth.value}
                options={[...MONTH_ARRAY]}
                onChange={(e) => handlePeriodChange(e, 'startMonth')}
                errorMessage={startMonth.errorMessage}
              />
              <S.Tilde>~</S.Tilde>
              <Select
                ref={endYearRef}
                defaultValue={endYear.value}
                options={[...YEAR_ARRAY]}
                disabled={isWorking.value}
                onChange={(e) => handlePeriodChange(e, 'endYear')}
                errorMessage={endYear.errorMessage}
              />
              <Select
                ref={endMonthRef}
                defaultValue={endMonth.value}
                options={[...MONTH_ARRAY]}
                disabled={isWorking.value}
                onChange={(e) => handlePeriodChange(e, 'endMonth')}
                errorMessage={endMonth.errorMessage}
              />
            </S.PeriodSelectWrapper>
          </FormItemWrapper>
          <S.TenureCheckInput
            type='checkbox'
            id={`checkbox-${index}`}
            onChange={handleTenureCheck}
          />
          <S.TenureCheckLabel htmlFor={`checkbox-${index}`}>
            <S.CheckBox isChecked={isWorking.value}>
              {isWorking && <CheckBoxIcon />}
            </S.CheckBox>
            재직 중
          </S.TenureCheckLabel>
        </S.EmploymentDurationBox>
      </S.InputWrapper>
    </S.CompanyBox>
  );
};

export default CareerRegistrationBox;
