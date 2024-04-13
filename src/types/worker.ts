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
  defaultImgNumber: number;
  registered: boolean;
  profileUrl: string | null;
}
