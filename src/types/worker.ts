import type { GenerationType, PositionType } from '.';

export interface CompanyType {
  URL?: string;
  name: string;
}

export interface WorkerType {
  id: string;
  name: string;
  email?: string;
  generation: GenerationType;
  position: PositionType;
  company: CompanyType;
  SNS: string;
  temporaryImgNumber: number;
  registered: boolean;
  profileUrl: string | null;
  phoneNumber: string;
}
