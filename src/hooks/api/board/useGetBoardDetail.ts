import { useQuery } from '@tanstack/react-query';

import { get, boardUrl, boardQueryKeys } from '@/libs';
import type { MentorInfoType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetBoardDetail = (
  boardId: string,
  options?: Omit<UseQueryOptions<MentorInfoType | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: boardQueryKeys.getBoardDetail(boardId),
    queryFn: () => get<MentorInfoType>(boardUrl.getBoardDetail(boardId)),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    ...options,
  });
