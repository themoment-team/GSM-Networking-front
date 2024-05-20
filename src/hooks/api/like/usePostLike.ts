import { useMutation } from '@tanstack/react-query';

import { likeQueryKeys, likeUrl, post } from '@/libs';
import type { LikeContextType } from '@/types';

import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostLikeCount = (
  boardId: number,
  options?: UseMutationOptions<unknown, AxiosError, void, LikeContextType>
): UseMutationResult<unknown, AxiosError, void, LikeContextType> =>
  useMutation({
    mutationKey: likeQueryKeys.postLikeCount(),
    mutationFn: () => post(likeUrl.postLikeCount(boardId)),
    ...options,
  });
