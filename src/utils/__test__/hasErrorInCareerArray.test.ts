import type { CareerFormType } from '@/types';
import { hasErrorInCareerArray } from '@/utils';

const defaultCareer: CareerFormType = {
  id: 0,
  companyName: { value: '', errorMessage: null },
  companyUrl: { value: '', errorMessage: null },
  position: { value: '포지션 선택', errorMessage: null },
  startYear: { value: '년', errorMessage: null },
  startMonth: { value: '월', errorMessage: null },
  endYear: { value: '년', errorMessage: null },
  endMonth: { value: '월', errorMessage: null },
  isWorking: { value: false, errorMessage: null },
};

describe('hasErrorCareerArray', () => {
  test('errorMessage가 존재하지 않으면, false를 반환합니다.', () => {
    const careerArray = [defaultCareer];

    expect(hasErrorInCareerArray(careerArray)).toBe(false);
  });

  test('errorMessage가 하나라도 존재하면, true를 반환합니다.', () => {
    const careerArray = [defaultCareer];
    careerArray[0].companyName.errorMessage = 'error';

    expect(hasErrorInCareerArray(careerArray)).toBe(true);
  });

  test('여러 career에 errorMessage 하나라도 존재한다면, true를 반환합니다.', () => {
    const careerArray = [defaultCareer, defaultCareer, defaultCareer];
    careerArray[1].companyName.errorMessage = 'error';

    expect(hasErrorInCareerArray(careerArray)).toBe(true);
  });
});
