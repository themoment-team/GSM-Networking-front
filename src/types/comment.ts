import type { ProfileType } from '@/types';

export interface CommentType {
  profile: ProfileType;
  content: string;
  createdAt: Date;
  mention?: string;
  comments?: CommentType[];
}
