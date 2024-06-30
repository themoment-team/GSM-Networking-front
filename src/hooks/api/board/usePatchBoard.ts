import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { boardQueryKeys, boardUrl, patch } from '@/libs';

import type { AxiosError } from 'axios';

export const usePatchBoard = (
  boardId?: string,
  options?: UseMutationOptions<unknown, AxiosError, FormData>
) =>
  useMutation({
    mutationKey: boardQueryKeys.patchBoard(boardId!),
    mutationFn: (content: FormData) =>
      patch(boardUrl.patchBoard(boardId!), content, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    ...options,
  });
