import type { CategoryType, CommentType, ProfileType } from '@/types';

export interface BoardContentWriteType
  extends Pick<BoardType, 'title' | 'content' | 'boardCategory' | 'file'> {}

export interface BoardType {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  boardCategory: CategoryType;
  comments: CommentType[];
  author: ProfileType;
  file?: File[];
}
