import { useInfiniteQuery } from '@tanstack/react-query';

import { get, gwangyaQueryKeys, gwangyaUrl } from '@/libs';
import type { GwangyaPostType } from '@/types';
import { getGwangyaToken } from '@/utils';

const gwangyaToken = getGwangyaToken();

// TODO: useInfiniteQuery로 전환
export const useGetGwangyaPostList = (initialData?: GwangyaPostType[]) =>
  useInfiniteQuery({
    queryKey: gwangyaQueryKeys.getGwangyaPostList(),
    queryFn: ({ pageParam }) =>
      get<GwangyaPostType[]>(
        `/api/v1${gwangyaUrl.getGwangyaPostList(pageParam)}`,
        {
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
          headers: {
            GwangyaToken: gwangyaToken,
          },
          withCredentials: false,
        }
      ),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage[0]?.id,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    initialData: initialData && { pages: [initialData], pageParams: [0] },
  });
