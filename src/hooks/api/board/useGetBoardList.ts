import { useInfiniteQuery } from '@tanstack/react-query';

import { get, boardQueryKeys, boardUrl } from '@/libs';
import type { BoardInfoType, CategoryType } from '@/types';

export const useGetBoardList = (
  category?: CategoryType,
  initialData?: BoardInfoType[]
) =>
  useInfiniteQuery({
    queryKey: boardQueryKeys.getBoardList(),
    queryFn: async ({ pageParam }) =>
      get<BoardInfoType[]>(`${boardUrl.getBoardList(pageParam, category)}`),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage[0]?.id,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    initialData: initialData && { pages: [initialData], pageParams: [0] },
  });
