'use client';

import React from 'react';

import * as S from './style';

import type { CareerType } from '@/types';

interface Props {
  career: CareerType;
}

const CareerCard: React.FC<Props> = ({ career }) => {
  const careerStartYear = career.startDate.getFullYear();
  const tempStartMonth = career.startDate.getMonth() + 1;
  const careerStartMonth =
    tempStartMonth < 10 ? `0${tempStartMonth}` : tempStartMonth;

  const careerEndYear = career.endDate?.getFullYear();
  const tempEndMonth = career.endDate?.getMonth() ?? 0 + 1;
  const careerEndMonth =
    tempEndMonth < 10 ? `0${tempStartMonth}` : tempStartMonth;

  const careerPeriod = `${careerStartYear}.${careerStartMonth} ~ ${careerEndYear}.${careerEndMonth}`;

  return (
    <S.CareerCardContainer>
      <S.CareerInfoBox>
        <S.CompanyName>{career.companyName}</S.CompanyName>
        <S.position>{career.position} 🖥️</S.position>
        <S.CareerPeriod isWorking={career.isWorking}>
          {career.isWorking ? '재직중' : careerPeriod}
        </S.CareerPeriod>
      </S.CareerInfoBox>
    </S.CareerCardContainer>
  );
};

export default CareerCard;
