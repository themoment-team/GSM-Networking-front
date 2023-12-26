import type { CareerType } from '.';

export interface MentorInfoType {
  id: number;
  name: string;
  email: string;
  generation: number;
  SNS?: string;
  phoneNumber: string;
  profileUrl?: string;
  registered: boolean;
  career: CareerType[];
}
