import type { MenteeType } from '@/types';
import type { RequestCareerType } from '@/types';

export interface MentorType extends MenteeType {
  snsUrl?: string | null;
  career: RequestCareerType[];
}

export interface TempMentorType extends Omit<MentorType, 'career' | 'snsUrl'> {
  company: {
    name: string;
    URL: string;
  };
  SNS: string | null;
}
