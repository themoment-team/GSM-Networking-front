import type { CategoryType, CommentType, ProfileType } from '@/types';

export interface BoardContentWriteType
  extends Pick<BoardType, 'title' | 'content' | 'boardCategory'> {}

export interface BoardType {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  boardCategory: CategoryType;
  comments: CommentType[];
  author: ProfileType;
  likeCount: number;
}
