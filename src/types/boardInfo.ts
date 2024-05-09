import type { ReverseCategoryType } from '@/types';
import type { ProfileType } from '@/types';

export interface BoardInfoType {
  id: number;
  title: string;
  boardCategory: keyof typeof ReverseCategoryType;
  authorName: string;
  createdAt: string;
  author: ProfileType;
  likeCount: number;
  commentCount: number;
  isLike: boolean;
}
