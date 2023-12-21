import { useQuery } from '@tanstack/react-query';

import { get, tempMentorQueryKeys, tempMentorUrl } from '@/libs';
import type { WorkerType } from '@/types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetSearchTempMentor = (
  userName: string,
  options?: Omit<UseQueryOptions<WorkerType[]>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    queryKey: tempMentorQueryKeys.getSearchTempMentor(userName),
    queryFn: () =>
      get<WorkerType[]>(tempMentorUrl.getSearchTempMentor(userName)),
    ...options,
  });
