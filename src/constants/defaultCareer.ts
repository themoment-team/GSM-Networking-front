import type { CareerFormType } from '@/types';

const defaultCareer: CareerFormType = {
  companyName: { value: '', errorMessage: null },
  companyUrl: { value: '', errorMessage: null },
  position: { value: '포지션 선택', errorMessage: null },
  startYear: { value: '년', errorMessage: null },
  startMonth: { value: '월', errorMessage: null },
  endYear: { value: '년', errorMessage: null },
  endMonth: { value: '월', errorMessage: null },
  isWorking: { value: false, errorMessage: null },
};

export default defaultCareer;
