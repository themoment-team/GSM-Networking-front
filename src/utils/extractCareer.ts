import { defaultCareer } from '@/constants';
import type { CareerFormType, CompanyType } from '@/types';

const extractCareer = (company: CompanyType | null): CareerFormType => {
  if (!company) {
    return defaultCareer;
  }

  return {
    ...defaultCareer,
    companyName: { ...defaultCareer.companyName, value: company.name },
    companyUrl: { ...defaultCareer.companyUrl, value: company.URL ?? '' },
  };
};

export default extractCareer;
