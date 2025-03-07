'use client';

import React, { useRef } from 'react';

import * as S from './style';

import { CheckBoxIcon, DeleteIcon, PlusIcon } from '@/assets';
import {
  FormItemWrapper,
  InputFormItem,
  Select,
  SelectFormItem,
} from '@/components';
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
  index: number;
  setCareerArray: React.Dispatch<React.SetStateAction<CareerFormType[]>>;
}

type MonthArray = Array<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
type DateType = number | '년';

const CareerRegistrationBox: React.FC<Props> = ({
  career: {
    id,
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
    setCareerArray((prev) => prev.filter((career) => career.id !== id));

  const handleAddClick = () =>
    setCareerArray((prev) => [
      ...prev,
      { ...defaultCareer, id: prev[prev.length - 1].id + 1 },
    ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Pick<CareerFormType, 'companyName' | 'companyUrl'>
  ) => {
    setCareerArray((prev) =>
      prev.map((career) => {
        if (career.id === id) {
          const value = e.target.value;
          return { ...career, [key]: { ...career[key], value } };
        }
        return career;
      })
    );
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCareerArray((prev) =>
      prev.map((career) => {
        if (career.id === id) {
          return {
            ...career,
            position: {
              ...career.position,
              value: e.target.value as PositionType,
            },
          };
        }
        return career;
      })
    );

  const handlePeriodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    periodType: keyof Pick<
      CareerFormType,
      'startYear' | 'startMonth' | 'endYear' | 'endMonth'
    >
  ) =>
    setCareerArray((prev) =>
      prev.map((career) => {
        if (career.id === id) {
          return {
            ...career,
            [periodType]: {
              ...career[periodType],
              value: Number(e.target.value),
            },
          };
        }

        return career;
      })
    );

  const handleTenureCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCareerArray((prev) =>
      prev.map((career) => {
        if (career.id === id) {
          const newCareer = deepCopy<CareerFormType>(career);

          const isChecked = e.target.checked;

          newCareer.isWorking.value = isChecked;

          if (isChecked) {
            newCareer.endYear.value = '년';
            newCareer.endYear.errorMessage = null;
            newCareer.endMonth.value = '월';
            newCareer.endMonth.errorMessage = null;
          }

          return newCareer;
        }

        return career;
      })
    );

  // 현재 연도와 월을 비교해서 선택 가능한 월 배열을 리턴합니다.
  const getMonthArray = (
    selectedEndYear: DateType,
    selectedStartYear?: DateType
  ): MonthArray => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;

    const newMonthArray = [...MONTH_ARRAY];

    if (selectedEndYear === currentYear) {
      newMonthArray.splice(
        newMonthArray.findIndex((month) => month === currentMonth) + 1,
        newMonthArray.length
      );
    }

    if (selectedEndYear === selectedStartYear) {
      newMonthArray.splice(0, Number(startMonth.value) - 1);
    }

    return newMonthArray;
  };

  // 시작 연도보다 과거의 연도를 선택할 수 없도록 리턴합니다.
  const getYearArray = (
    selectedStartYear: DateType,
    selectedEndYear: DateType
  ) => {
    const date = new Date();
    const currentYear = date.getFullYear();

    const availableYearArray = YEAR_ARRAY.filter(
      (year) => year >= Number(selectedStartYear) && year <= currentYear
    );

    if (
      availableYearArray.length === 1 ||
      availableYearArray[0] > Number(selectedEndYear)
    ) {
      endYear.value = availableYearArray[0];
    }
    return availableYearArray;
  };

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
        <InputFormItem
          value={companyName.value}
          inputTitle='회사명'
          placeholder='회사명을 입력해주세요.'
          required
          onChange={(e) => handleInputChange(e, 'companyName')}
          errorMessage={companyName.errorMessage}
        />
        <InputFormItem
          value={companyUrl.value}
          inputTitle='회사 URL'
          placeholder='회사 URL을 입력해주세요.'
          onChange={(e) => handleInputChange(e, 'companyUrl')}
          errorMessage={companyUrl.errorMessage}
        />
        <SelectFormItem
          value={position.value}
          required
          selectTitle='포지션(직책, 직무)'
          options={[...POSITION_ARRAY]}
          defaultValue='포지션 선택'
          errorMessage={position.errorMessage}
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
                value={startYear.value}
                options={[...YEAR_ARRAY]}
                defaultValue='년'
                onChange={(e) => handlePeriodChange(e, 'startYear')}
                errorMessage={startYear.errorMessage}
              />
              <Select
                value={startMonth.value}
                options={getMonthArray(startYear.value)}
                defaultValue='월'
                onChange={(e) => handlePeriodChange(e, 'startMonth')}
                errorMessage={startMonth.errorMessage}
                disabled={String(startYear.value).length < 2}
              />
              <S.Tilde>~</S.Tilde>
              <Select
                ref={endYearRef}
                value={endYear.value}
                options={getYearArray(startYear.value, endYear.value)}
                disabled={isWorking.value}
                defaultValue='년'
                onChange={(e) => handlePeriodChange(e, 'endYear')}
                errorMessage={endYear.errorMessage}
              />
              <Select
                ref={endMonthRef}
                value={endMonth.value}
                options={getMonthArray(endYear.value, startYear.value)}
                disabled={isWorking.value || String(endYear.value).length < 2}
                defaultValue='월'
                onChange={(e) => handlePeriodChange(e, 'endMonth')}
                errorMessage={endMonth.errorMessage}
              />
            </S.PeriodSelectWrapper>
          </FormItemWrapper>
          <S.TenureCheckInput
            type='checkbox'
            id={`checkbox-${id}`}
            onChange={handleTenureCheck}
            checked={isWorking.value}
          />
          <S.TenureCheckLabel htmlFor={`checkbox-${id}`}>
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
