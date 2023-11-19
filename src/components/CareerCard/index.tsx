'use client';

import React from 'react';

import * as S from './style';

import type { CareerType } from '@/types';

interface Props {
  career: CareerType;
}

const CareerCard: React.FC<Props> = ({ career }) => {
  const convertDate = (date: string | null) => {
    const newDate = new Date(String(date).split('-').join('/'));

    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');

    return `${year}.${month}`;
  };

  const startDate = convertDate(career.startDate);
  const endDate = convertDate(career.endDate);

  const careerPeriod = `${startDate} ~ ${endDate}`;

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
