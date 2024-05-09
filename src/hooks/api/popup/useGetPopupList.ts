import { useQuery } from '@tanstack/react-query';

import { get, popupQueryKeys, popupUrl } from '@/libs';
import type { PopupType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetPopupList = (
  options?: Omit<UseQueryOptions<PopupType[] | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: popupQueryKeys.getPopupList(),
    queryFn: () => get<PopupType[]>(popupUrl.getPopupList()),
    staleTime: minutesToMs(3),
    ...options,
  });
