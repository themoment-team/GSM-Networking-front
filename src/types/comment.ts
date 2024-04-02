import type { ProfileType } from '@/types';

export interface CommentRequestType {
  boardId: string;
  parentCommentId?: string;
  replyCommentId?: string;
  comment: string;
}

export interface CommentType {
  commentId: string;
  author: ProfileType;
  comment: string;
  replies?: CommentType[];
  replyCommentId?: string;
}
