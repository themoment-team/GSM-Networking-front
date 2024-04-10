import { useQuery } from '@tanstack/react-query';

import { get, commentUrl, commentQueryKeys } from '@/libs';
import type { CommentType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetCommentDetail = (
  commentId: string,
  options?: Omit<UseQueryOptions<CommentType | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: commentQueryKeys.getCommentDetail(commentId),
    queryFn: () => get<CommentType>(commentUrl.getCommentDetail(commentId)),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    ...options,
  });
