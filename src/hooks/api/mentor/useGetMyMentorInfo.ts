import { useQuery } from '@tanstack/react-query';

import { get, mentorQueryKeys, mentorUrl } from '@/libs';
import type { MentorInfoType } from '@/types';
import { minutesToMs } from '@/utils';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetMyMentorInfo = (
  options?: Omit<UseQueryOptions<MentorInfoType | null>, 'queryKey'>
) =>
  useQuery({
    queryKey: mentorQueryKeys.getMyInfo(),
    queryFn: () => get<MentorInfoType>(mentorUrl.getMyMentorInfo()),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    ...options,
  });
