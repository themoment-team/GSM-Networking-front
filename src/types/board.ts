import type { AuthorType, CategoryType, CommentType, FileType } from '@/types';

export interface BoardContentWriteType
  extends Pick<BoardType, 'title' | 'content' | 'boardCategory' | 'fileList'> {
  popupExp?: number;
}

export interface BoardResponseType extends Omit<BoardType, 'fileList'> {
  fileList?: FileType[];
}

export interface BoardType {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  boardCategory: CategoryType;
  comments: CommentType[];
  fileList?: File[];
  author: AuthorType;
  likeCount: number;
  isLike: boolean;
  isPinned: boolean;
}

export interface BoardUpdateType {
  title: string;
  content: string;
  boardCategory: CategoryType;
}
