import type { GenerationType, PositionType } from '.';

export interface WorkerType {
  id: string;
  name: string;
  email?: string;
  generation: GenerationType;
  position: PositionType;
  company: CompanyType;
  SNS: string;
  temporaryImgNumber: number;
}

interface CompanyType {
  URL?: string;
  name: string;
}
