import type { CareerFormType, CompanyType } from '@/types';
import { extractCareer } from '@/utils';

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

describe('extractCareer', () => {
  test('null을 받으면 defaultCareer를 반환합니다.', () => {
    expect(extractCareer(null)).toEqual(defaultCareer);
  });

  test('받아온 회사 정보를 defaultCareer에 주입된 데이터를 반환합니다.', () => {
    const company: CompanyType = {
      name: '더모먼트',
      URL: 'https://gsm-networking.com',
    };

    defaultCareer.companyName.value = company.name;
    defaultCareer.companyUrl.value = company.URL ?? '';

    expect(extractCareer(company)).toEqual(defaultCareer);
  });
});
