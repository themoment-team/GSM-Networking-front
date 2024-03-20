import type { ProfileType } from '@/types';

export interface CommentType {
  id: number;
  profile: ProfileType;
  content: string;
  createdAt: Date;
  mention?: string;
  comments?: CommentType[];
}
