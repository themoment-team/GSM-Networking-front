export interface WorkerType {
  id: string;
  name: string;
  email?: string;
  generation: number;
  position: string;
  company: CompanyType;
}

interface CompanyType {
  URL?: string;
  name: string;
}
