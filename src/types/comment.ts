import type { ProfileType } from '@/types';

export interface CommentRequestType {
  boardId: string;
  parentCommentId?: string;
  replyCommentId?: string;
  comment: string;
}

interface ReplyType {
  comment: CommentType;
}

export interface CommentType {
  commentId: string;
  author: ProfileType;
  comment: string;
  replies?: ReplyType[];
  replyCommentId?: string;
}
