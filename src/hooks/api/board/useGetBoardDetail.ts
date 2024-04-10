import { useQuery } from '@tanstack/react-query';

import { get, boardUrl, boardQueryKeys } from '@/libs';
import type { BoardType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetBoardDetail = (
  boardId: string,
  options?: Omit<UseQueryOptions<BoardType | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: boardQueryKeys.getBoardDetail(boardId),
    queryFn: () => get<BoardType>(boardUrl.getBoardDetail(boardId)),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    ...options,
  });
