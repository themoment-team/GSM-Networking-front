import type { AuthorType, CategoryType, CommentType } from '@/types';

export interface BoardContentWriteType extends BoardUpdateType {
  popupExp?: number;
}

export interface BoardType {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  boardCategory: CategoryType;
  comments: CommentType[];
  author: AuthorType;
  likeCount: number;
  isLike: boolean;
}

export interface BoardUpdateType {
  title: string;
  content: string;
  boardCategory: CategoryType;
}
