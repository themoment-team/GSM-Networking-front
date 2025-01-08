import { useQuery } from '@tanstack/react-query';

import { get, boardUrl, boardQueryKeys } from '@/libs';
import type { BoardResponseType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetBoardDetail = (
  boardId: string,
  options?: Omit<UseQueryOptions<BoardResponseType | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: boardQueryKeys.getBoardDetail(boardId),
    queryFn: () => get<BoardResponseType>(boardUrl.getBoardDetail(boardId)),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    ...options,
  });
