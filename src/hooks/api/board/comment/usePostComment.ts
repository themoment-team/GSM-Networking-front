import { useMutation } from '@tanstack/react-query';

import { commentQueryKeys, commentUrl, post } from '@/libs';
import type { CommentRequestType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostComment = (
  options?: UseMutationOptions<unknown, AxiosError, CommentRequestType>
) =>
  useMutation({
    mutationKey: commentQueryKeys.postComment(),
    mutationFn: (body: CommentRequestType) =>
      post(commentUrl.postComment(), body),
    ...options,
  });
