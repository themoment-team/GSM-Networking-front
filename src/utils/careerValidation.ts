import type { Dispatch, SetStateAction } from 'react';

import type { CareerFormType } from '@/types';

import { deepCopy } from '.';

type SetCareerArrayType = Dispatch<SetStateAction<CareerFormType[]>>;

const careerValidation = (setCareerArray: SetCareerArrayType) => {
  setCareerArray((prev) =>
    [...prev].map((career) => {
      const newCareer = deepCopy(career);

      const {
        companyName,
        companyUrl,
        position,
        startYear,
        startMonth,
        endYear,
        endMonth,
        isWorking,
      } = newCareer;

      // companyName
      if (companyName.value.length < 1) {
        companyName.errorMessage = '회사 명을 입력해주세요.';
      } else if (companyName.value.length > 20) {
        companyName.errorMessage = '20글자 이내로 입력 부탁드립니다.';
      } else {
        companyName.errorMessage = null;
      }

      // companyURL
      if (companyUrl.value.length > 1 && !companyUrl.value.startsWith('http')) {
        companyUrl.errorMessage = 'URL 형식으로 입력해주세요.';
      } else {
        companyUrl.errorMessage = null;
      }

      // position
      if (position.value === '포지션 선택') {
        position.errorMessage = '포지션을 선택해주세요.';
      } else {
        position.errorMessage = null;
      }

      // startYear
      if (startYear.value === '년') {
        startYear.errorMessage = '재직 시작 연도를 선택해주세요.';
      } else {
        startYear.errorMessage = null;
      }

      // startMonth
      if (startMonth.value === '월') {
        startMonth.errorMessage = '재직 시작 월을 선택해주세요.';
      } else {
        startMonth.errorMessage = null;
      }

      // endYear
      if (isWorking.value === true) {
        endYear.errorMessage = null;
      } else if (endYear.value === '년') {
        endYear.errorMessage = '재직 종료 연도를 선택해주세요.';
      } else {
        endYear.errorMessage = null;
      }

      // endMonth
      if (isWorking.value === true) {
        endMonth.errorMessage = null;
      } else if (endMonth.value === '월') {
        endMonth.errorMessage = '재직 종료 월을 선택해주세요.';
      } else {
        endMonth.errorMessage = null;
      }

      return newCareer;
    })
  );

  return false;
};

export default careerValidation;
