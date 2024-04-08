import { useInfiniteQuery } from '@tanstack/react-query';

import { get, boardQueryKeys, boardUrl } from '@/libs';
import type { BoardInfoType } from '@/types';

export const useGetBoardList = (initialData?: BoardInfoType[]) =>
  useInfiniteQuery({
    queryKey: boardQueryKeys.getBoardList(),
    queryFn: async ({ pageParam }) =>
      get<BoardInfoType[]>(`${boardUrl.getBoardList(pageParam)}`),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage[0]?.id,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    initialData: initialData && { pages: [initialData], pageParams: [0] },
  });
