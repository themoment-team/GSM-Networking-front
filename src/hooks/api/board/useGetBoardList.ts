import { useInfiniteQuery } from '@tanstack/react-query';

import { get, boardQueryKeys, boardUrl } from '@/libs';
import type { BoardInfo } from '@/types';

// TODO: useInfiniteQuery로 전환
export const useGetBoardList = (initialData?: BoardInfo[]) =>
  useInfiniteQuery({
    queryKey: boardQueryKeys.getBoardList(),
    queryFn: async ({ pageParam }) => get<BoardInfo[]>(`${boardUrl.getBoardList(pageParam)}`, {
        baseURL: process.env.BASE_URL,
      }),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage[0]?.id,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    initialData: initialData && { pages: [initialData], pageParams: [0] },
  });
