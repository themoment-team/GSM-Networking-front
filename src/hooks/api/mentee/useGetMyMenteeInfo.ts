import { useQuery } from '@tanstack/react-query';

import { get, menteeQueryKeys, menteeUrl } from '@/libs';
import type { MenteeType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetMyMenteeInfo = (
  options?: Omit<UseQueryOptions<MenteeType | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: menteeQueryKeys.getMyMenteeInfo(),
    queryFn: () => get<MenteeType>(menteeUrl.getMyMenteeInfo()),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    ...options,
  });
