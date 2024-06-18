import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { boardQueryKeys, boardUrl, patch } from '@/libs';
import type { BoardUpdateType } from '@/types';

import type { AxiosError } from 'axios';

export const usePatchBoard = (
  boardId?: string,
  options?: UseMutationOptions<unknown, AxiosError, BoardUpdateType>
) =>
  useMutation({
    mutationKey: boardQueryKeys.patchBoard(),
    mutationFn: (content: BoardUpdateType) =>
      patch(boardUrl.patchBoard(boardId!), content),
    ...options,
  });
