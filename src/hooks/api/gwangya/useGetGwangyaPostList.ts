import { useQuery } from '@tanstack/react-query';

import { get, gwangyaQueryKeys, gwangyaUrl } from '@/libs';
import type { GwangyaPostType } from '@/types';
import { getGwangyaTokenCookie } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

const gwangyaToken = getGwangyaTokenCookie();

// TODO: useInfiniteQuery로 전환
export const useGetGwangyaPostList = (
  gwangyaId: number,
  options?: UseQueryOptions<GwangyaPostType[], AxiosError>
) =>
  useQuery({
    queryKey: gwangyaQueryKeys.getGwangyaPostList(),
    queryFn: () =>
      get<GwangyaPostType[]>(
        `/api/v1${gwangyaUrl.getGwangyaPostList(gwangyaId)}`,
        {
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
          headers: {
            GwangyaToken: gwangyaToken,
          },
          withCredentials: false,
        }
      ),
    ...options,
  });
