export interface CareerFormType {
  companyName: string;
  companyUrl: string;
  position: string;
  startYear: '년' | number;
  startMonth: '월' | number;
  endYear: '년' | number;
  endMonth: '월' | number;
  isWorking: boolean;
}

export interface CareerType {
  companyName: string;
  companyUrl: string;
  position: string;
  startDate: Date;
  endDate: Date;
  isWorking: boolean;
}
