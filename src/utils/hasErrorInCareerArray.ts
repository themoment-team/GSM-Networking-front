import type { CareerFormType } from '@/types';

const hasErrorInCareerArray = (careerArray: CareerFormType[]) =>
  careerArray.some(
    (career) =>
      career.companyName.errorMessage ||
      career.companyUrl.errorMessage ||
      career.endMonth.errorMessage ||
      career.endYear.errorMessage ||
      career.position.errorMessage ||
      career.startMonth.errorMessage ||
      career.startYear.errorMessage
  );

export default hasErrorInCareerArray;
