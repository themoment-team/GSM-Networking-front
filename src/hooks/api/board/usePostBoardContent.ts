import { useMutation } from '@tanstack/react-query';

import { boardQueryKeys, boardUrl, post } from '@/libs';
import type { BoardContentWriteType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostBoardContent = (
  options?: UseMutationOptions<unknown, AxiosError, BoardContentWriteType>
) =>
  useMutation({
    mutationKey: boardQueryKeys.postBoardContent(),
    mutationFn: (content: BoardContentWriteType) =>
      post(boardUrl.postBoardContent(), content, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    ...options,
  });
