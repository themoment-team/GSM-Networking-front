import type { CareerType } from '.';

export interface MentorInfoType {
  id: number;
  name: string;
  email: string;
  generation: number;
  SNS?: string;
  phoneNumber: string;
  defaultImgNumber: number;
  profileUrl?: string;
  registered: boolean;
  career: CareerType[];
}
