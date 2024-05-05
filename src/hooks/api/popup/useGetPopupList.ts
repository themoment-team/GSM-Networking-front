import { useQuery } from '@tanstack/react-query';

import { etcQueryKeys, etcUrl, get } from '@/libs';
import type { PopupType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetPopupList = (
  options?: Omit<UseQueryOptions<PopupType[] | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: etcQueryKeys.getPopupList(),
    queryFn: () => get<PopupType[]>(etcUrl.getPopupList()),
    staleTime: minutesToMs(3),
    ...options,
  });
