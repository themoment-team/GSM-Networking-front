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

interface Props {
  career: CareerFormType;
  setCareerArray: React.Dispatch<React.SetStateAction<CareerFormType[]>>;
}

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
          const newCareer = { ...career };

          const isChecked = e.target.checked;

          newCareer.isWorking.value = isChecked;

          if (isChecked) {
            if (endYearRef.current) endYearRef.current.value = '';
            if (endMonthRef.current) endMonthRef.current.value = '';
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

  return (
    <S.CompanyBox>
      <S.TitleBox>
        <S.Title>재직 회사 정보</S.Title>
        <S.ButtonWrapper>
          {id !== 0 && (
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
            id={`checkbox-${id}`}
            onChange={handleTenureCheck}
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
