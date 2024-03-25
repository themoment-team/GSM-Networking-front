import { useInfiniteQuery } from '@tanstack/react-query';

import { cookies } from 'next/headers';

import { get, boardQueryKeys, boardUrl } from '@/libs';
import type { CardInfo } from '@/types';
import { minutesToMs } from '@/utils';

const accessToken = cookies().get('accessToken')?.value;

// TODO: useInfiniteQuery로 전환
export const useGetBoardList = (initialData?: CardInfo[]) =>
  useInfiniteQuery({
    queryKey: boardQueryKeys.getBoardList(),
    queryFn: () =>
      get<CardInfo[]>(`/api/v1${boardUrl.getBoardList()}`, {
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        headers: {
          accessToken: accessToken,
        },
        withCredentials: false,
      }),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage[0]?.id,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    initialData: initialData && { pages: [initialData], pageParams: [0] },
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
  });
