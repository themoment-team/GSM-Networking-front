import type { ReverseCategoryType } from '@/types';

export interface BoardInfoType {
  id: number;
  title: string;
  boardCategory: keyof typeof ReverseCategoryType;
  authorName: string;
  createdAt: string;
}
