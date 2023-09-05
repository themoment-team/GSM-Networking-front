import type { GenerationType } from '.';

export interface WorkerType {
  id: string;
  name: string;
  email?: string;
  generation: GenerationType;
  position: string;
  company: CompanyType;
  SNS: string;
}

interface CompanyType {
  URL?: string;
  name: string;
}
