import type { PositionType } from '@/types';

interface CareerFormFieldType<T> {
  value: T;
  errorMessage: string | null;
}

export interface CareerFormType {
  companyName: CareerFormFieldType<string>;
  companyUrl: CareerFormFieldType<string>;
  position: CareerFormFieldType<PositionType | '포지션 선택'>;
  startYear: CareerFormFieldType<'년' | number>;
  startMonth: CareerFormFieldType<'월' | number>;
  endYear: CareerFormFieldType<'년' | number>;
  endMonth: CareerFormFieldType<'월' | number>;
  isWorking: CareerFormFieldType<boolean>;
}

export interface CareerType {
  companyName: string;
  companyUrl?: string | null;
  position: string;
  startDate: Date;
  endDate: Date | null;
  isWorking: boolean;
}