import { useMutation } from '@tanstack/react-query';

import { boardQueryKeys, boardUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostBoardContent = (
  options?: UseMutationOptions<unknown, AxiosError, FormData>
) =>
  useMutation({
    mutationKey: boardQueryKeys.postBoardContent(),
    mutationFn: (content: FormData) =>
      post(boardUrl.postBoardContent(), content, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    ...options,
  });
