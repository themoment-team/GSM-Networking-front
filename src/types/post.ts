import type { CategoryType, CommentType } from '@/types';

export interface PostType {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  category: CategoryType;
  comments: CommentType[];
  user: {
    id: number;
    generation: number;
    profileImage?: string;
    name: string;
  };
}
