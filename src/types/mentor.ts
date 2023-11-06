import type { CareerType } from '@/types';

export interface MentorType {
  name: string;
  email: string;
  generation: number;
  phoneNumber: string;
  snsUrl?: string | null;
  profileUrl?: string | null;
  career: CareerType[];
}
