import { useMutation } from '@tanstack/react-query';

import { likeQueryKeys, likeUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostLikeCount = (
  boardId: number,
  options?: UseMutationOptions<unknown, AxiosError>
) =>
  useMutation({
    mutationKey: likeQueryKeys.postLikeCount(),
    mutationFn: () => post(likeUrl.postLikeCount(boardId)),
    ...options,
  });
