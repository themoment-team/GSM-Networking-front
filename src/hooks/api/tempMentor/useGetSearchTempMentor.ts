import { useQuery } from '@tanstack/react-query';

import { get, tempMentorQueryKeys, tempMentorUrl } from '@/libs';
import type { WorkerType } from '@/types';

export const useGetSearchTempMentor = (userName: string) =>
  useQuery({
    queryKey: tempMentorQueryKeys.getSearchTempMentor(userName),
    queryFn: () =>
      get<WorkerType[]>(tempMentorUrl.getSearchTempMentor(userName)),
  });
