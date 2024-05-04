import { useQuery } from '@tanstack/react-query';

import { etcQueryKeys, etcUrl, get } from '@/libs';
import type { PopupType } from '@/types';
import { minutesToMs } from '@/utils';

export const useGetPopupList = () =>
  useQuery<PopupType[]>({
    queryKey: etcQueryKeys.getPopupList(),
    queryFn: () => get<PopupType[]>(etcUrl.getPopupList()),
    staleTime: minutesToMs(3),
  });
