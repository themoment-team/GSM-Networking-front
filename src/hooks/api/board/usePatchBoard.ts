import { boardQueryKeys, boardUrl, patch } from '@/libs';
import { BoardUpdateType } from '@/types';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
