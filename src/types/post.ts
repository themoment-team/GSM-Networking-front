import type { CategoryType, CommentType, GenerationType } from '@/types';

export interface PostType {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  category: CategoryType;
  comments: CommentType[];
  user: {
    id: number;
    generation: GenerationType;
    profileImage?: string;
  };
}
