export interface CareerType {
  companyName: string;
  companyUrl?: string | null;
  position: string;
  startDate: Date;
  endDate: Date | null;
  isWorking: boolean;
}
