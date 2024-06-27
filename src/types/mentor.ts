import type { MenteeRequestType } from '@/types';
import type { RequestCareerType } from '@/types';

export interface MentorRequestType extends MenteeRequestType {
  snsUrl?: string | null;
  career: RequestCareerType[];
}

export interface MentorType extends MentorRequestType {
  defaultImgNumber: number;
  id: number;
}

export interface TempMentorType extends Omit<MentorType, 'career' | 'snsUrl'> {
  company: {
    name: string;
    URL: string;
  };
  SNS: string | null;
}
