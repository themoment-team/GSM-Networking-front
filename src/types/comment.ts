import type { ProfileType } from '@/types';

export interface CommentType {
  commentId: string;
  author: ProfileType;
  comment: string;
  replies?: CommentType[];
  replyCommentId?: string;
}
