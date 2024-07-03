import type { CategoryType, CommentType, ProfileType } from '@/types';

interface AuthorType extends ProfileType {
  phoneNumber: string;
}

export interface BoardType {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  boardCategory: CategoryType;
  comments: CommentType[];
  author: AuthorType;
  temporaryImgNumber?: number;
}
