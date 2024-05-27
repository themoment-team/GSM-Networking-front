import { useMutation } from '@tanstack/react-query';

import { boardQueryKeys, boardUrl, patch } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePatchBoardPin = (
  boardId: number,
  options?: UseMutationOptions<unknown, AxiosError>
) =>
  useMutation({
    mutationKey: boardQueryKeys.patchBoardPin(boardId),
    mutationFn: () => patch(boardUrl.patchBoardPin(boardId)),
    ...options,
  });
