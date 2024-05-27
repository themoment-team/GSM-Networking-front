import { useMutation } from '@tanstack/react-query';

import { boardQueryKeys, boardUrl, patch } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

interface RequestType {
  boardId: string;
}

export const usePatchBoardPin = (
  boardId: string,
  options?: UseMutationOptions<unknown, AxiosError, RequestType>
) =>
  useMutation({
    mutationKey: boardQueryKeys.patchBoardPin(boardId),
    mutationFn: () => patch<RequestType>(boardUrl.patchBoardPin(boardId)),
    ...options,
  });
