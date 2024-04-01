import type { ReverseCategoryType, CommentType, ProfileType } from '@/types';

export interface BoardType {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  boardCategory: ReverseCategoryType;
  comments: CommentType[];
  author: ProfileType;
}
