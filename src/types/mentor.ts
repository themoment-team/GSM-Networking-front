import type { RequestCareerType } from '@/types';

export interface MentorType {
  name: string;
  email: string;
  generation: number;
  phoneNumber: string;
  snsUrl?: string | null;
  profileUrl?: string | null;
  career: RequestCareerType[];
}

export interface TempMentorType extends Omit<MentorType, 'career' | 'snsUrl'> {
  company: {
    name: string;
    URL: string;
  };
  SNS: string | null;
}
