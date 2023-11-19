import type { CareerType } from '.';

export interface MentorInfoType {
  id: number;
  name: string;
  email: string;
  generation: number;
  SNS?: string;
  profileUrl?: string;
  registered: boolean;
  career: CareerType[];
}
