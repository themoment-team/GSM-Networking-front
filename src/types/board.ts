import type { CategoryType, CommentType, ProfileType } from '@/types';

export interface BoardType {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  boardCategory: CategoryType;
  comments: CommentType[];
  author: ProfileType;
  temporaryImgNumber?: number;
}
